import Logo from '../../../assets/djed-logo.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';
import { useState } from 'react';

interface HeaderProps {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
	const { activeSection, setActiveSection } = props;

	const handleActive = (section: string, id: string) => {
		setActiveSection(section);

		if (id === '#') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
			const scroll = document.getElementById(id);
			scroll?.scrollIntoView({ behavior: 'smooth' });
		}

		setIsOpen(false);
	};

	const [isOpen, setIsOpen] = useState(false);

	function toggleMenu() {
		setIsOpen(!isOpen);
	}

	const navItems = [
		{ section: 'home', id: '#', label: 'HOME' },
		{ section: 'djed_apps', id: 'djed_apps', label: 'DJED' },
		{ section: 'contributors', id: 'contributors', label: 'CONTRIBUTORS' },
	];

	return (
		<nav className="navbar-glass" aria-label="Main navigation">
			<div className="navbar-container">
				<a href="#home" onClick={(e) => { e.preventDefault(); handleActive('home', '#'); }} className="navbar-logo" aria-label="Djed Alliance - Go to home">
					<img src={Logo} alt="Djed Alliance logo" />
				</a>
				<button 
					type="button" 
					className="navbar-toggle" 
					aria-controls="navbar-default" 
					aria-expanded={isOpen} 
					onClick={toggleMenu}
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
					</svg>
				</button>
				<div className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`} id="navbar-default">
					<ul className="navbar-links">
						{navItems.map((item) => (
							<li key={item.section}>
								<a
									href={item.id === '#' ? '#home' : `#${item.id}`}
									className={`navbar-link${activeSection === item.section ? ' active' : ''}`}
									onClick={(e) => { e.preventDefault(); handleActive(item.section, item.id); }}
								>
									{item.label}
								</a>
							</li>
						))}
						<li><a href="https://docs.stability.nexus/about-us/the-djed-alliance" target="_blank" rel="noreferrer" className="navbar-link">DOCS</a></li>
						<li><a href="https://medium.com/djed-alliance" target="_blank" rel="noreferrer" className="navbar-link">BLOG</a></li>
					</ul>
					<div className="navbar-social">
						<a href="https://discord.gg/YzDKeEfWtS" target="_blank" rel="noreferrer" aria-label="Join Djed Alliance on Discord">
							<img src={Discord} alt="Discord" />
						</a>
						<a href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Djed Alliance GitHub">
							<img src={GitHub} alt="GitHub" />
						</a>
						<a href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Follow Djed Alliance on X (Twitter)">
							<img src={Twitter} alt="X (Twitter)" />
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
