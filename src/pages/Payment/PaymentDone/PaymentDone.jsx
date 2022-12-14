import React from 'react';
import styles from './PaymentDone.module.scss';

const PaymentDone = () => {
	return (
		<div className={styles.container}>
			<img src='/PaymentDone.png' alt='' />
			<div className={styles.description}>
				<div className={styles.description__title}>
					Оплата прошла успешно
				</div>
				<div className={styles.description__about}>
					<div>Билет отправлен вам на почту!</div>
					<div>
						Детали мероприятия можно узнать в билете или на
						странице фирмы.
					</div>
				</div>
			</div>
			<a href='/' className={styles.button}>
				Вернуться в приложение
			</a>
		</div>
	);
};

export default PaymentDone;
