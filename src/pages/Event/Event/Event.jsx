import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Event.module.scss';

const Event = () => {
	const [event, setEvent] = useState([]);

	useEffect(() => {
		fetch(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		).then((res) => res.json().then((data) => setEvent(data)));
	}, []);

	const { id } = useParams();

	return (
		<div className={styles.event}>
			<div className={styles.event__about}>
				<div className={styles.event__about_image}>
					<div className={styles.event__about_image_back} />
				</div>
				<div className={styles.event__about_name}>
					<div className={styles.event__about_name_title}>
						<div>Набираем людей для игры в пляжный волейбол</div>
						<button>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
									fill='black'
								/>
								<path
									d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z'
									fill='black'
								/>
								<path
									d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z'
									fill='black'
								/>
								<path
									d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
									stroke='black'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z'
									stroke='black'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z'
									stroke='black'
									stroke-width='1.5'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
						</button>
					</div>
					<div className={styles.event__about_name_tags}>
						<button>Активный отдых</button>
						<button>На открытом воздухе</button>
					</div>
				</div>
				<div className={styles.event__about_description}>
					Приглашаем поиграть в пляжный волейбол! Мы все не
					профессионалы, поэтому не переживайте за свои навыки.
					Научимся всему вместе!
				</div>
				<div className={styles.event__about_state}>
					<div className={styles.event__about_state_status}>
						<div>
							<img src='/CalendarItem.svg' alt='' />
							<div>2 июня / 15:00</div>
						</div>
						<div>
							<img src='/MapItem.svg' alt='' />
							<div>Парк Митино, пляж</div>
						</div>
						<div>
							<img src='/SmileItem.svg' alt='' />
							<div>
								<a>7 из 14</a> участников уже присоединились
							</div>
						</div>
					</div>
				</div>
				<div className={styles.event__about_contacts}>
					<div>
						<div
							className={styles.event__about_contacts_contact}>
							<img src='/ContactImage.png' alt='' />
							<div
								className={
									styles.event__about_contacts_contact_status
								}>
								<div
									className={
										styles.event__about_contacts_contact_status_name
									}>
									Анастасия
								</div>
								<div
									className={
										styles.event__about_contacts_contact_status_time
									}>
									в сети 20 минут назад
								</div>
							</div>
						</div>
						<div className={styles.event__about_contacts_number}>
							+ 38 (099) 305-14-55
						</div>
					</div>

					<button>
						<svg
							width='20'
							height='21'
							viewBox='0 0 20 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M7.5 5.5L12.5 10.5L7.5 15.5'
								stroke='black'
								stroke-width='1.5'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className={styles.event__buttons}>
				<button className={styles.event__buttons_join}>
					Присоендиниться
				</button>
				<button className={styles.event__buttons_chat}>
					Чат события
				</button>
			</div>
		</div>
	);
};

export default Event;
