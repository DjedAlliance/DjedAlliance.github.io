import ContributorCard from '../../elements/cards/ContributorCard';
import SigmaUSDImage from '../../../assets/sigmaUSD.jpg';
import DjedMilkomeda from '../../../assets/djed-milkomeda.svg';
import DjedCOTI from '../../../assets/djed-coti.png';
import ZSDImage from '../../../assets/zsd1.png';
import ECSDImage from '../../../assets/ecsd.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';

interface Props {
	slidesPerView: number
}

export default function Contributors (props: Props): JSX.Element {
	return (
		<div className="py-20 my-20 items-center" id="contributors">
			<h4 className='dappsSubtitle my-3'>Stablecoins based on the</h4>
			<h2 className='dappsTitle mb-20'>Djed Protocol</h2>
			<Swiper
				loop
				loopedSlides={props.slidesPerView - 1}
				autoplay={{
					delay: 2000,
					disableOnInteraction: true,
				}} 
				slidesPerView={props.slidesPerView} 
				navigation={false}
				modules={[Navigation, Autoplay]}>
				<SwiperSlide>
					<ContributorCard contributor="SigmaUSD" imageSrc={SigmaUSDImage} contributorWeb="https://sigmausd.io/#/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Milkomeda Djed" imageSrc={DjedMilkomeda} contributorWeb="https://milkomeda-c1.djed.one/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Ethereum Classic Stable Dollar" imageSrc={ECSDImage} contributorWeb="https://etc.djed.one/" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Djed powered by COTI" imageSrc={DjedCOTI} contributorWeb="https://djed.xyz" />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Zephyr Stable Dollar" imageSrc={ZSDImage} contributorWeb="https://zephyrprotocol.com" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}



// import DappCard from '../../elements/cards/DappCard';
// import ContributorCard from '../../elements/cards/ContributorCard';
// import ErgoImage from '../../../assets/ergo.png';

// export default function Dapps(): JSX.Element {
// 	const cardTextErgo = 'Interact with SigmaUSD,\nthe first deployment of Djed,\non the Ergo Blockchain.';
// 	const cardTextCOTI = 'Interact with COTI\'s Djed\nimplemented in Plutus\non the Cardano Blockchain.';
// 	const cardTextMilkomeda = 'Interact with Djed on\nthe Milkomeda-C1\nEVM Sidechain of Cardano.';
// 	const cardTextZephyr = 'Interact with Zephyr Protocol, \na privacy focused, native chain \nDjed Implementation';

// 	return (
// 		<div className="py-20 my-20 items-center justify-center" id="djed_apps">
// 			<h4 className="dappsSubtitle my-3">Deployments of</h4>
// 			<h2 className="dappsTitle mb-20">Djed</h2>
// 			<div className="sm:flex-row lg:flex align-middle justify-center md:flex">
// 				<DappCard cardTitle="SigmaUSD" href="https://sigmausd.io/#/" cardText={cardTextErgo} />
// 				<DappCard cardTitle="Djed powered by COTI" href="https://djed.xyz/" cardText={cardTextCOTI} />
// 				<DappCard cardTitle="Milkomeda Djed Osiris" href="https://milkomeda-c1.djed.one/" cardText={cardTextMilkomeda} />
// 				<DappCard cardTitle="Zephyr Protocol" href="https://zephyrprotocol.com/" cardText={cardTextZephyr} />
// 				<ContributorCard contributor="Ergo" imageSrc={ErgoImage} contributorWeb="https://ergoplatform.org/en/" />
// 				<ContributorCard contributor="Ergo" imageSrc={ErgoImage} contributorWeb="https://ergoplatform.org/en/" />
// 			</div>
// 		</div>
// 	);
// }
