import Logo from '../../../assets/djed-logo-sm.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Footer = () => {
	return (
		<footer className='my-5'>
			<div className='flex md:flex-row flex-col gap-6  md:justify-between md:px-10 lg:px-28 items-center justify-center'>
				<p className='footerText lg:text-md sm:text-sm'>© Djed Alliance. All rights reserved.</p>
				<div className='flex flex-row justify-center align-middle'>
					<img src={Logo} className="mx-2 mb-1" alt="Djed Alliance logo" />
					<p className='footerText lg:text-xl sm:text-sm mt-3 whitespace-pre'>Djed Alliance</p>
				</div>
				<div className='flex flex-row justify-center'>
					<a href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer" aria-label="Join Djed Alliance on Discord"><img className="socialImage mx-2 cursor-pointer" src={Discord} alt="Discord" /></a>
					<a href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Djed Alliance GitHub"><img className="socialImage mx-2 cursor-pointer" src={GitHub} alt="GitHub" /></a>
					<a href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Follow Djed Alliance on X (Twitter)"><img className="socialImage mx-2 cursor-pointer" src={Twitter} alt="X (Twitter)" /></a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;