import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/pages/header/Header';
import Home from './components/pages/home/Home';
import Dapps from './components/pages/dapps/Dapps';
import Contributors from './components/pages/contributors/Contributors';
import Footer from './components/pages/footer/Footer';

const App: React.FC = () => {
	const heroText = 'Djed Alliance';
	const heroSubtitle = 'The open union of all stablecoins based on \n the Djed Stablecoin Protocol';

	const [slidesPerView, setSlidesPerView] = useState(4);
	const [activeSection, setActiveSection] = useState<string>('home');

	useEffect(() => {
		function updateSize() {
			if (window.innerWidth <= 640) {
				setSlidesPerView(1);
			} else if (window.innerWidth <= 880) {
				setSlidesPerView(2);
			}
			else {
				setSlidesPerView(4);
			}
		}
		window.addEventListener('resize', updateSize);
		updateSize();

		return () => window.removeEventListener('resize', updateSize);
	}, []);

	useEffect(() => {
		const sectionMap: Record<string, string> = {
			'home': 'home',
			'djed_apps': 'djed_apps',
			'contributors': 'contributors',
		};

		const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const sectionId = sectionMap[entry.target.id];
					if (sectionId) {
						setActiveSection(sectionId);
					}
				}
			});
		}, { threshold: 0.1, rootMargin: '-20% 0px -60% 0px' });

		const sections = Object.keys(sectionMap)
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => el !== null);

		sections.forEach((el) => observer.observe(el));

		return () => {
			sections.forEach((el) => observer.unobserve(el));
		};
	}, []);

	return (
		<div className='app-wrapper'>
			<Header activeSection={activeSection} setActiveSection={setActiveSection} />
			<main>
				<Home heroText={heroText} heroSubtitle={heroSubtitle} />
				<Dapps slidesPerView={slidesPerView} />
				<Contributors slidesPerView={slidesPerView} />
			</main>
			<Footer />
		</div>
	);
};

export default App;
