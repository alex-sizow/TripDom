import React from 'react';
import Styles from './EventItem.module.scss';

const EventItem = () => {
	return (
		<div className={Styles.item}>
			<img src='/EventImage.png' alt='' />

			<div className={Styles.item__info}>
				<div className={Styles.item__info_title}>
					Набираем людей для игры в пляжный волейбол
				</div>
				<div className={Styles.item__info_tags}>
					<button>Активный отдых</button>
					<button>На открытом воздухе</button>
				</div>
				<div className={Styles.item__info_description}>
					Приглашаем поиграть в пляжный волейбол! Мы все не
					профессионалы, поэтому не переживайте за свои навыки.
					Научимся всему вместе!
				</div>
				<div className={Styles.item__info_status}>
					<div>
						<img src='CalendarItem.svg' alt='' />
						<div>2 июня / 15:00</div>
					</div>
					<div>
						<img src='MapItem.svg' alt='' />
						<div>Парк Митино, пляж</div>
					</div>
					<div>
						<img src='SmileItem.svg' alt='' />
						<div>
							<a>7 из 14</a> участников уже присоединидись
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventItem;
