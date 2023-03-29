import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/pages/header/Header';
import Home from './components/pages/home/Home';
import Dapps from './components/pages/dapps/Dapps';
import Contributors from './components/pages/contributors/Contributors';

const App: React.FC = () => {
	const heroText = 'Djed is\nmore stable';
	const heroSubtitle = 'Djed Alliance is a formally verified crypto-backed\nautonomous stablecoin protocol.';

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

	return (
		<>
			<Header />
			<Home heroText={heroText} heroSubtitle={heroSubtitle}/>
			<Dapps />
			<Contributors slidesPerView={slidesPerView}/>
		</>
	);
};

export default App;
