import React from 'react';
import Styles from './Payment.module.scss';

const Payment = () => {
	const [ticket, setTicket] = React.useState(0);
	const [money, setMoney] = React.useState(0);

	React.useEffect(() => {
		setMoney(ticket * 10);
	}, [ticket]);

	return (
		<div className={Styles.container}>
			<div className={Styles.payment}>
				<div className={Styles.payment__title}>
					<div className={Styles.payment__title_description}>
						<img src='/exhibition.png' alt='' />
						<div className={Styles.payment__title_description}>
							<div
								className={
									Styles.payment__title_description_container
								}>
								<div
									className={
										Styles.payment__title_description_about
									}>
									<div>Выставка патилы</div>
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
								</div>
								<div
									className={
										Styles.payment__title_description_tags
									}>
									<button>Активный отдых</button>
									<button>На открытом воздухе</button>
								</div>
							</div>
						</div>
					</div>
					<div className={Styles.payment__title_counter}>
						<div className={Styles.payment__title_counter_count}>
							<button
								onClick={() => {
									setTicket(ticket - 1);
								}}>
								<svg
									width='45'
									height='45'
									viewBox='0 0 45 45'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_1_11353)'>
										<circle
											cx='22.5'
											cy='22.5'
											r='22.5'
											fill='#F5F5F5'
										/>
										<path
											d='M30 23H14'
											stroke='black'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_11353'>
											<rect
												width='45'
												height='45'
												fill='white'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
							<div
								className={
									Styles.payment__title_counter_count_quantity
								}>
								Билеты <div>{ticket}</div>
							</div>
							<button
								onClick={() => {
									setTicket(ticket + 1);
								}}>
								<svg
									width='45'
									height='45'
									viewBox='0 0 45 45'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<g clip-path='url(#clip0_1_11357)'>
										<circle
											cx='22.5'
											cy='22.5'
											r='22.5'
											fill='#F5F5F5'
										/>
										<path
											d='M30 23H14'
											stroke='black'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
										<path
											d='M22 15V31'
											stroke='black'
											stroke-width='1.5'
											stroke-linecap='round'
										/>
									</g>
									<defs>
										<clipPath id='clip0_1_11357'>
											<rect
												width='45'
												height='45'
												fill='white'
											/>
										</clipPath>
									</defs>
								</svg>
							</button>
						</div>
						<div className={Styles.payment__title_counter_price}>
							<div
								className={
									Styles.payment__title_counter_price_title
								}>
								К оплате
							</div>
							<div>{money}$</div>
						</div>
					</div>
				</div>
				<div className={Styles.payment__status}>
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
				<div className={Styles.payment__input}>
					<div className={Styles.payment__input_title}>
						Хотите подарить эту услугу кому-то?
					</div>
					<input
						type='text'
						placeholder='Введите номер пользователя'
					/>
				</div>
				<div className={Styles.payment__input}>
					<div className={Styles.payment__input_title}>
						Есть промокод?
					</div>
					<input type='text' placeholder='' />
				</div>
				<div className={Styles.payment__input}>
					<div className={Styles.payment__input_mail}>
						Email для получения билета
					</div>
					<input
						type='text'
						placeholder='Введите номер пользователя'
					/>
				</div>
				<div className={Styles.payment__input}>
					<div className={Styles.payment__input_mail}>
						Банковская карта
					</div>
					<div className={Styles.payment__input_input}>
						<input type='text' placeholder='Введите карту' />
						<svg
							width='25'
							height='16'
							viewBox='0 0 25 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<rect
								x='0.25'
								y='0.25'
								width='24.5'
								height='15.5'
								rx='4.75'
								fill='white'
							/>
							<path
								d='M13.9173 5.4879H11.0824V10.5414H13.9173V5.4879Z'
								fill='#FF5F00'
							/>
							<path
								d='M11.2624 8.01464C11.2619 7.52795 11.3731 7.04754 11.5875 6.60978C11.8019 6.17202 12.1139 5.78838 12.4998 5.48791C12.0219 5.11524 11.4479 4.88349 10.8434 4.81914C10.239 4.75478 9.62848 4.86042 9.08169 5.12398C8.53491 5.38754 8.0739 5.79838 7.75138 6.30955C7.42885 6.82073 7.25781 7.4116 7.25781 8.01464C7.25781 8.61768 7.42885 9.20855 7.75138 9.71972C8.0739 10.2309 8.53491 10.6417 9.08169 10.9053C9.62848 11.1689 10.239 11.2745 10.8434 11.2101C11.4479 11.1458 12.0219 10.914 12.4998 10.5414C12.1139 10.2409 11.8019 9.85725 11.5875 9.41949C11.3731 8.98173 11.2619 8.50132 11.2624 8.01464Z'
								fill='#EB001B'
							/>
							<path
								d='M17.7417 8.01464C17.7417 8.61767 17.5707 9.20854 17.2482 9.71971C16.9257 10.2309 16.4647 10.6417 15.9179 10.9053C15.3711 11.1688 14.7606 11.2745 14.1562 11.2101C13.5518 11.1458 12.9778 10.914 12.4998 10.5414C12.8854 10.2406 13.1972 9.85689 13.4115 9.41919C13.6259 8.9815 13.7373 8.50124 13.7373 8.01464C13.7373 7.52803 13.6259 7.04777 13.4115 6.61008C13.1972 6.17239 12.8854 5.78869 12.4998 5.48791C12.9778 5.11524 13.5518 4.88349 14.1562 4.81914C14.7606 4.75478 15.3711 4.86042 15.9179 5.12398C16.4647 5.38755 16.9257 5.79839 17.2482 6.30956C17.5707 6.82074 17.7417 7.41161 17.7417 8.01464Z'
								fill='#F79E1B'
							/>
							<path
								d='M17.4326 10.0061V9.90267H17.4746V9.88159H17.3675V9.90267H17.4096V10.0061H17.4326ZM17.6405 10.0061V9.88139H17.6077L17.5699 9.96719L17.5322 9.88139H17.4993V10.0061H17.5225V9.91203L17.5579 9.99316H17.5819L17.6174 9.91183V10.0061H17.6405Z'
								fill='#F79E1B'
							/>
							<rect
								x='0.25'
								y='0.25'
								width='24.5'
								height='15.5'
								rx='4.75'
								stroke='#EAEAEA'
								stroke-width='0.5'
							/>
						</svg>
					</div>
				</div>
				<button className={Styles.payment__button}>
					Оплатить
				</button>
			</div>
		</div>
	);
};

export default Payment;
