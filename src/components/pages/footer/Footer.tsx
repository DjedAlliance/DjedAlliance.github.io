import Logo from '../../../assets/djed-logo-sm.png';
import Discord from '../../../assets/discordLogo.png';
import GitHub from '../../../assets/githubLogo.png';
import Twitter from '../../../assets/Twitter.png';

const Footer = () => {
	return (
		<footer>
			<div className='flex flex-row justify-evenly align-middle'>
				<p className='footerText text-md mt-3 mx-3'>© Djed Alliance. All rights reserved.</p>
				<div className='flex flex-row'>
					<img src={Logo} />
					<p className='footerText text-xl mt-3 mx-3'>Djed Alliance</p>
				</div>
				<div className='flex flex-row mt-3'>
					<a href="https://discord.com/invite/5TWZwGXXym" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Discord} /></a>
					<a href="https://github.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={GitHub} /></a>
					<a href="https://twitter.com/DjedAlliance" target="_blank" rel="noreferrer"><img className="socialImage mx-2 cursor-pointer" src={Twitter} /></a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;