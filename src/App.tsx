import './App.css';
import Header from './components/pages/header/Header';
import Home from './components/pages/home/Home';
import Dapps from './components/pages/dapps/Dapps';
import Contributors from './components/pages/contributors/Contributors';

const App: React.FC = () => {
	const heroText = 'Djed is\nmore stable';
	const heroSubtitle = 'Djed Alliance is a formally verified crypto-backed\nautonomous stablecoin protocol.';

	return (
		<>
			<Header />
			<Home heroText={heroText} heroSubtitle={heroSubtitle}/>
			<Dapps />
			<Contributors />
		</>
	);
};

export default App;
