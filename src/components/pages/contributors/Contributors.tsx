import ContributorCard from '../../elements/cards/ContributorCard';
import ErgoImage from '../../../assets/ergo.png';
import MilkomedaImage from '../../../assets/milkomeda.png';
import DcSparkImage from '../../../assets/dcSpark.png';
import ThespianImage from '../../../assets/thespian.png';
import VacuumLabsImage from '../../../assets/vacuumlabs.svg';
import BloxicoImage from '../../../assets/bloxico.svg';
import AossieImage from '../../../assets/aossie.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';

export default function Contributors (): JSX.Element {
	return (
		<div className="py-20 my-20 items-center" id="contributors">
			<h4 className='dappsSubtitle my-3'>Valuable Team</h4>
			<h2 className='dappsTitle mb-20'>Our Contributors</h2>
			<div className='item-center align-middle justify-center'>
				<p className='contactParagraph my-10'>We are glad that we have partners who have recognized our values.</p>
			</div>
			<Swiper watchSlidesProgress={true} slidesPerView={4}        pagination={{
				type: 'progressbar',
			}}
			navigation={false}
			modules={[Pagination, Navigation]}
			className="mySwiper">
				<SwiperSlide>
					<ContributorCard contributor="dcSpark" imageSrc={DcSparkImage}/>
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Milkomeda" imageSrc={MilkomedaImage} />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Thespian" imageSrc={ThespianImage} />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Ergo" imageSrc={ErgoImage} />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="VacuumLabs" imageSrc={VacuumLabsImage} />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Bloxico" imageSrc={BloxicoImage} />
				</SwiperSlide>
				<SwiperSlide>
					<ContributorCard contributor="Aossie" imageSrc={AossieImage} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
