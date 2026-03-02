import Logo from '../../../assets/djed-logo-sm.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Footer = () => {
	return (
		<footer className='m-2 p-2 h-80px'>
			<div className='flex lg:flex-col flex-col lg:justify-evenly align-middle sm:justify-center md:justify-center'>
				<div className='flex flex-col md:flex-row md:justify-evenly h-80px p-2'>
					<div className='flex flex-row justify-center align-middle mt-1 mb-1 md:mt-4 md:mb-4 h-40px'>
						<img src={Logo} className="m-1 md:m-3" alt="Djed Alliance logo" />
						<p className='footerText flex justify-center align-middle text-xs md:text-sm m-1 md:m-3 text-center items-center whitespace-pre'>Djed Alliance</p>
					</div>
					<div className='flex flex-row mt-1 mb-1 md:mt-4 md:mt-4 justify-center align-middle h-40px'>
						<a className='h-16px flex flex-col justify-center align-middle' href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer" aria-label="Join Djed Alliance on Discord"><img className="socialImage mx-2 cursor-pointer" src={Discord} alt="Discord" /></a>
						<a className='h-16px flex flex-col justify-center align-middle' href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Djed Alliance GitHub"><img className="socialImage mx-2 cursor-pointer" src={GitHub} alt="GitHub" /></a>
						<a className='h-16px flex flex-col justify-center align-middle' href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer" aria-label="Follow Djed Alliance on X (Twitter)"><img className="socialImage mx-2 cursor-pointer" src={Twitter} alt="X (Twitter)" /></a>
					</div>
				</div>
				<p className='footerText text-xs lg:text-sm mt-1 mb-1 lg:mt-3 mb-3'>© Djed Alliance. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;