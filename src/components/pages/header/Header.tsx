import Logo from '../../../assets/djed-logo.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Header: React.FC = () => {

	const handleActive = (clickedLink: string, id: string) => {
		document.getElementsByClassName('active')[0].classList.remove('active');

		document.getElementById(clickedLink)?.classList.add('active');

		if (id === '#') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}

		const scroll = document.getElementById(id);
		scroll?.scrollIntoView({behavior: 'smooth'});

	};

	// const btn = document.getElementById('navbar-button');
	// const menu = document.getElementById('navbar-default');
	
	// if (menu && btn) {
	// 	btn.addEventListener('click', () => {
	// 		menu.classList.toggle('hidden');
	// 	});
	// }

	return (
		<nav className="sticky top-0 w-full px-2 py-1 hover:bg-stone-300/10 lg:bg-transparent md:bg-transparent bg-stone-300/10 sm:px-4 z-50">
			<div className="flex items-center justify-between mx-auto align-middle">
				<a href="#">
					<span className="text-2xl font-extrabold navColor"><img src={Logo} className="w-12 ml-6" /></span>
				</a>
				<button id="navbar-button" data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
				</button>
				<div className="hidden w-full md:block md:w-auto flex-row" id="navbar-default">
					<ul className="hidden space-x-2 md:inline-flex mr-6 align-middle justify-center items-center">
						<li><a id="homeLink" className="active px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('homeLink', '#')}>HOME</a></li>
						<li><a id="appsLink" className="px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('appsLink', 'djed_apps')}>DJED</a></li>
						<li><a id="contributorsLink" className="px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('contributorsLink', 'contributors')}>CONTRIBUTORS</a></li>
						<li><a href="https://docs.djed.one/alliance/the-djed-alliance" target="_blank" className="px-4 py-2 font-semibold navColor" rel="noreferrer">DOCS</a></li>
						<li><a href="https://djed.medium.com/" target="_blank" className="px-4 py-2 font-semibold navColor" rel="noreferrer">BLOG</a></li>
						<li><a href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Discord} /></a></li>
						<li><a href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={GitHub} /></a></li>
						<li><a href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Twitter} /></a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
