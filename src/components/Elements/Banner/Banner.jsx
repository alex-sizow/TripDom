import { Swiper, SwiperSlide } from 'swiper/react';
import Styles from './Banner.module.scss';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Banner = () => {
	return (
		<div className={Styles.container__banner}>
			<Swiper
				slidesPerView={1}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				className={Styles.banner}>
				<SwiperSlide className={Styles.banner__item}>
					<img src='Banner1.svg' alt='1' />
					<div className={Styles.banner__item_text}>
						<div className={Styles.banner__item_text_title}>
							Создавайте ивенты
						</div>
						<div className={Styles.banner__item_text_main}>
							Опишите мероприятие, место и время проведения.
							Новые люди уже спешат скорее познакомиться!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={Styles.banner__item}>
					<img src='Banner2.svg' alt='1' />
					<div className={Styles.banner__item_text}>
						<div className={Styles.banner__item_text_title}>
							Создавайте ивенты
						</div>
						<div className={Styles.banner__item_text_main}>
							Опишите мероприятие, место и время проведения.
							Новые люди уже спешат скорее познакомиться!
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className={Styles.banner__item}>
					<img src='Banner3.svg' alt='1' />
					<div className={Styles.banner__item_text}>
						<div className={Styles.banner__item_text_title}>
							Создавайте ивенты
						</div>
						<div className={Styles.banner__item_text_main}>
							Опишите мероприятие, место и время проведения.
							Новые люди уже спешат скорее познакомиться!
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;

{
	/* <SwiperSlide className={Styles.banner__item}>
	<img src='Banner1.svg' alt='1' />
	<div className={Styles.banner__item_text}>
		<div className={Styles.banner__item_text_title}>
			Создавайте ивенты
		</div>
		<div className={Styles.banner__item_text_main}>
			Опишите мероприятие, место и время проведения. Новые люди
			уже спешат скорее познакомиться!
		</div>
	</div>
</SwiperSlide>; */
}
