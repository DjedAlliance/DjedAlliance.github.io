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
		const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					switch (entry.target.id) {
					case 'home':
						document.getElementsByClassName('active')[0].classList.remove('active');
						document.getElementById('homeLink')?.classList.add('active');
						break;
					case 'djed_apps':
						document.getElementsByClassName('active')[0].classList.remove('active');
						document.getElementById('appsLink')?.classList.add('active');
						break;
					case 'contributors':
						document.getElementsByClassName('active')[0].classList.remove('active');
						document.getElementById('contributorsLink')?.classList.add('active');
					}
				}
			});
		}, { threshold: 0.8 });
		const homeElementToObserve = document.querySelector('#home');
		const appsElementToObserve = document.querySelector('#djed_apps');
		const contributorElementToObserve = document.querySelector('#contributors');
		if (homeElementToObserve && appsElementToObserve && contributorElementToObserve) {
			observer.observe(homeElementToObserve);
			observer.observe(appsElementToObserve);
			observer.observe(contributorElementToObserve);
		}
	}, []);
	
	return (
		<div className='app-wrapper'>
			<Header />
			<Home heroText={heroText} heroSubtitle={heroSubtitle}/>
			<Dapps slidesPerView={slidesPerView}/>
			<Contributors slidesPerView={slidesPerView}/>
			<Footer />
		</div>
	);
};

export default App;
