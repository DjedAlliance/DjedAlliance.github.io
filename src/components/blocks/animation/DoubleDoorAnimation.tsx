import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import { handleAnimationHeight, handleAnimationMargin, handleAnimationWidth } from './animationHelpers';

interface Props {
  mainImage: string
  leftCoverImage: string
  rightCoverImage: string
}

const ANIMATION_DURATION = 7;

const ANIMATION_WIDTH = handleAnimationWidth();
const ANIMATION_HEIGHT = handleAnimationHeight();
const ANIMATION_MARGIN = handleAnimationMargin();

const DoubleDoorAnimation: React.FC<Props> = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const controlsLeft = useAnimation();
	const controlsRight = useAnimation();

	const handleOpen = async (): Promise<void> => {
		if (!isOpen) await openDoors();
	};

	const handleClose = async (): Promise<void> => {
		if (isOpen) await closeDoors();
	};

	useEffect(() => {
		void handleOpen();
	}, []);

	const openDoors = async (): Promise<void> => {
		setIsOpen(true);

		await Promise.all([controlsLeft.start({
			clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
			transition: { duration: ANIMATION_DURATION }
		}),
		controlsRight.start({
			clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
			transition: { duration: ANIMATION_DURATION }
		})]);
	};

	const closeDoors = async (): Promise<void> => {
		setIsOpen(false);
		await Promise.all([
			controlsLeft.start({
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				transition: { duration: ANIMATION_DURATION }
			}),
			controlsRight.start({
				clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
				transition: { duration: ANIMATION_DURATION }
			})
		]);
	};

	return (
		<div className="relative flex flex-row justify-center w-full" onMouseDown={async () => { isOpen ? await handleClose() : await handleOpen(); } }>
			<img className='rounded-3xl items-center flex justify-center align-middle' src={props.mainImage} style={{ width: ANIMATION_WIDTH, margin: ANIMATION_MARGIN, height: ANIMATION_HEIGHT }} alt="main image" />
			<motion.img
				src={props.leftCoverImage}
				alt="left cover image"
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					height: '100%',
					width: '50%',
					zIndex: 1,
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
				}}
				animate={controlsLeft}
			/>
			<motion.img
				src={props.rightCoverImage}
				alt="right cover image"
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					height: '100%',
					width: '50%',
					zIndex: 1,
					clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
				}}
				animate={controlsRight}
			/>
		</div>
	);
};

export default DoubleDoorAnimation;
