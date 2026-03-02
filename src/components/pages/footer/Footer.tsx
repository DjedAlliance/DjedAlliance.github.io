import Logo from '../../../assets/djed-logo-sm.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='footer-content'>
				<p className='footer-copyright'>© Djed Alliance. All rights reserved.</p>
				<div className='footer-brand'>
					<img src={Logo} alt="Djed Alliance logo" />
					<p className='footer-title'>Djed Alliance</p>
				</div>
				<div className='footer-social'>
					<a href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer" aria-label="Join Djed Alliance on Discord">
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
		</footer>
	);
};

export default Footer;