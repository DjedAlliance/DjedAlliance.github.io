import Logo from '../../../assets/djed-logo.png';

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

	return (
		<header className="sticky top-0 w-full px-2 py-1 hover:bg-stone-300/10 bg-transparent sm:px-4 z-50">
			<div className="flex items-center justify-between mx-auto">
				<a href="#">
					<span className="text-2xl font-extrabold navColor"><img className="ml-6" src={Logo} /></span>
				</a>
				<div className="flex items-center space-x-1">
					<ul className="hidden space-x-2 md:inline-flex">
						<li><a id="homeLink" className="active px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('homeLink', '#')}>HOME</a></li>
						<li><a id="appsLink" className="px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('appsLink', 'djed_apps')}>DJED DAPPS</a></li>
						<li><a id="contributorsLink" className="px-4 py-2 font-semibold navColor cursor-pointer" onClick={() => handleActive('contributorsLink', 'contributors')}>CONTRIBUTORS</a></li>
						<li><a href="https://docs.djed.one/alliance/the-djed-alliance" target="_blank" className="px-4 py-2 font-semibold navColor" rel="noreferrer">DOCS</a></li>
					</ul>
					<div className="inline-flex md:hidden text-white">
						<button className="flex-none px-2">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
								stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
							</svg>
							<span className="sr-only">Open Menu</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
