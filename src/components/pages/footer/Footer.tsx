import Logo from '../../../assets/djed-logo-sm.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Footer = () => {
	return (
		<footer className='my-5'>
			<div className='flex lg:flex-row md:flex-row flex-col lg:justify-evenly align-middle sm:justify-center'>
				<p className='footerText lg:text-md sm:text-sm lg:mt-6 mb-3'>© Djed Alliance. All rights reserved.</p>
				<div className='flex flex-row justify-center align-middle lg:my-0 my-3'>
					<img src={Logo}  className="mx-2 mb-1" />
					<p className='footerText lg:text-xl sm:text-sm mt-3 whitespace-pre'>Djed Alliance</p>
				</div>
				<div className='flex flex-row mt-3 justify-center'>
					<a href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Discord} /></a>
					<a href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={GitHub} /></a>
					<a href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Twitter} /></a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;