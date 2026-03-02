import ContributorCard from '../../elements/cards/ContributorCard';
import SigmaUSDImage from '../../../assets/sigmaUSD.jpg';
import DjedCOTI from '../../../assets/djed-coti.png';
import ZSDImage from '../../../assets/zsd1.png';
import ECSDImage from '../../../assets/ecsd.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';

const dapps = [
	{ contributor: 'SigmaUSD', imageSrc: SigmaUSDImage, contributorWeb: 'https://sigmausd.io/#/' },
	{ contributor: 'Ethereum Classic Stable Dollar', imageSrc: ECSDImage, contributorWeb: 'https://etc.djed.one/' },
	{ contributor: 'Zephyr Stable Dollar', imageSrc: ZSDImage, contributorWeb: 'https://zephyrprotocol.com' },
	{ contributor: 'Djed powered by COTI', imageSrc: DjedCOTI, contributorWeb: 'https://djed.xyz' },
];

export default function Dapps(): JSX.Element {
	return (
		<div className="py-20 px-4 sm:px-8 md:px-16 my-20" id="djed_apps">
			<h4 className='dappsSubtitle my-3'>Stablecoins based on the</h4>
			<h2 className='dappsTitle mb-12 md:mb-20'>Djed Protocol</h2>

			<style>{`
				#djed_apps .swiper-pagination-bullet {
					background: #b8973a;
					opacity: 0.4;
				}
				#djed_apps .swiper-pagination-bullet-active {
					background: #d4a843;
					opacity: 1;
				}
			`}</style>

			{/* Desktop: 2x2 grid */}
			<div className="hidden md:grid grid-cols-2 gap-6">
				{dapps.map((dapp) => (
					<ContributorCard
						key={dapp.contributor}
						contributor={dapp.contributor}
						imageSrc={dapp.imageSrc}
						contributorWeb={dapp.contributorWeb}
					/>
				))}
			</div>

			{/* Mobile: swiper carousel */}
			<div className="md:hidden">
				<Swiper
					loop
					loopedSlides={4}
					autoplay={{ delay: 2500, disableOnInteraction: true }}
					slidesPerView={1}
					spaceBetween={16}
					pagination={{ clickable: true }}
					modules={[Autoplay, Pagination]}
					className="pb-10"
				>
					{dapps.map((dapp) => (
						<SwiperSlide key={dapp.contributor} style={{ height: 'auto' }}>
							<ContributorCard
								contributor={dapp.contributor}
								imageSrc={dapp.imageSrc}
								contributorWeb={dapp.contributorWeb}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
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
