import MainImage from '../../../assets/pexels-cottonbro-6140202.png';
import DoorImageLeft from '../../../assets/door-closed-left.png';
import DoorImageRight from '../../../assets/door-closed-right.png';
import DoubleDoorAnimation from '../../blocks/animation/DoubleDoorAnimation';
import Blur from '../../elements/blur/Blur';

interface HomeProps {
  heroText: string
  heroSubtitle: string
}
const Home: React.FC<HomeProps> = (props: HomeProps) => {
	const { heroText, heroSubtitle } = props;

	return (
		<section className="flex items-center lg:justify-evenly bg-transparent ml-20" id="home" style={{ height: '90vh' }}>
			<div className="flex z-40 items-center">
				<div className="z-10 lg:mx-20 mx-10">
					<h1 className="title text-left flex items-start mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl whitespace-pre">{heroText}</h1>
					<p className="subtitle text-left flex items-start mb-6 font-light text-gray-500 sm:whitespace-normal lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 lg:whitespace-pre">{heroSubtitle}</p>
					<a onClick={() => document.getElementById('djed_apps')?.scrollIntoView({behavior: 'smooth'})} className="link-text w-64 flex items-center justify-center py-3 text-base font-medium text-center text-white bg-black rounded-full cursor-pointer">
                Get started
						<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</a>
				</div>
				<div className="hidden lg:flex justify-end cursor-pointer">
					<DoubleDoorAnimation mainImage={MainImage} leftCoverImage={DoorImageLeft} rightCoverImage={DoorImageRight} />
				</div>
			</div>
			<Blur />
		</section>
	);
};

export default Home;
