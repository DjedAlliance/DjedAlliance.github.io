//import DoorImageLeft from '../../../assets/door-left.png';
//import DoorImageRight from '../../../assets/door-right.png';
//import DoubleDoorAnimation from '../../blocks/animation/DoubleDoorAnimation';
import Blur from '../../elements/blur/Blur';

interface HomeProps {
	heroText: string
	heroSubtitle: string
}
const Home: React.FC<HomeProps> = (props: HomeProps) => {
	const { heroText, heroSubtitle } = props;

	// const NUMBER_OF_IMAGES = 57;
	// function getRandomImage(): string {
	// 	const randomNumber = Math.floor(Math.random() * NUMBER_OF_IMAGES) + 1;
	// 	const format = 'jpg';
	// 	return `/gallery/djed-${randomNumber}.${format}`;
	// }


	return (
		<section className="relative flex items-center justify-center bg-transparent my-24 overflow-hidden" id="home" style={{ height: '90vh' }}>
			<img
				src="/gallery/Alliance.png"
				alt="Djed Alliance Logo Background"
				className="absolute w-[640px] md:w-[768px] lg:w-[900px] max-w-none opacity-[0.04] pointer-events-none select-none p-6 justify-center items-center"
			/>
			<div className="lg:flex sm:flex-row z-40 items-center">
				<div className="z-10 lg:mx-20 mx-10 flex flex-col items-center justify-center gap-2">
					<h1 className="title text-center flex items-center justify-center mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl whitespace-pre">{heroText}</h1>
					<p className="subtitle text-center inline-flex items-start my-6 font-bold text-gray-500 sm:whitespace-normal lg:mb-8 md:text-lg lg:text-4xl dark:text-gray-400 lg:whitespace-pre">{heroSubtitle}</p>
					<a href="#djed_apps" onClick={(e) => { e.preventDefault(); document.getElementById('djed_apps')?.scrollIntoView({ behavior: 'smooth' }); }} className="link-text w-64 flex items-center justify-center py-3 text-base font-medium text-center text-white bg-black rounded-full cursor-pointer relative overflow-hidden group transition-all duration-300">
						<span className="absolute inset-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" style={{ background: 'linear-gradient(90deg, rgba(243, 193, 129, 0.3) 0%, rgba(243, 193, 129, 0.5) 50%, rgba(243, 193, 129, 0.3) 100%)', backdropFilter: 'blur(12px)' }}></span>
						<span className="relative z-10 ">Get started</span>
						<svg className="w-5 h-5 ml-2 -mr-1 relative z-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
					</a>
				</div>
			</div>
			<Blur />
		</section>
	);
};

export default Home;
