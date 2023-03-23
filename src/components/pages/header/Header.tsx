import Logo from '../../../assets/djed-logo.png';

const Header: React.FC = () => {
	return (
		<header className="sticky top-0 w-full px-2 py-1 hover:bg-stone-300/10 bg-transparent sm:px-4 z-50">
			<div className="flex items-center justify-between mx-auto">
				<a href="#">
					<span className="text-2xl font-extrabold navColor"><img className="ml-6" src={Logo} /></span>
				</a>
				<div className="flex items-center space-x-1">
					<ul className="hidden space-x-2 md:inline-flex">
						<li><a href="#" className="active px-4 py-2 font-semibold navColor">HOME</a></li>
						<li><a href="#djed_apps" className="px-4 py-2 font-semibold navColor">DJED DAPPS</a></li>
						<li><a href="#contributors" className="px-4 py-2 font-semibold navColor">CONTRIBUTORS</a></li>
						<li><a href="#docs" className="px-4 py-2 font-semibold navColor">DOCS</a></li>
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
