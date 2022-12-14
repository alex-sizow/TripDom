import React from 'react';
import styles from './NewEvent.module.scss';

const NewEvent = () => {
	const [toggle, setToggle] = React.useState(false);
	const handleToggleChange = () => {
		setToggle(!toggle);
	};
	return (
		<div className={styles.container}>
			<div className={styles.toggles}>
				<div className={styles.toggles__title}>Создание</div>
				<div
					className={styles.toggle}
					onClick={handleToggleChange}>
					<div className={styles.toggle_text}>Ивенты</div>
					<div className={styles.toggle_text}>Услуги</div>
					<div
						className={
							toggle
								? styles.toggle_trigger
								: styles.toggle_button
						}></div>
				</div>
			</div>
			<div className={styles.form}>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Название ивента
					</div>
					<input
						type='text'
						placeholder='Введите название ивента'
					/>
				</div>
				<button className={styles.form__cover}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M21.3848 12.1924H3'
							stroke='#6C27AB'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M12.1924 2.99999V21.3848'
							stroke='#6C27AB'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
					<div>Добавить обложку</div>
				</button>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Описание ивента
					</div>
					<input type='text' />
				</div>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Категория
					</div>
					<input type='text' />
					<svg
						width='24'
						height='25'
						viewBox='0 0 24 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M6 9.5L12 15.5L18 9.5'
							stroke='#6C27AB'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</div>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Количество людей
					</div>
					<input
						type='text'
						placeholder='Например, 13 человек'
					/>
				</div>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Дата и время ивента
					</div>
					<input
						type='text'
						placeholder='Например, 14 сентября 19:00'
					/>
				</div>
				<div className={styles.form__input}>
					<div className={styles.form__input_title}>
						Место проведения
					</div>
					<input
						type='text'
						placeholder='Например, Тверская улица, дом 15, кв 43'
					/>
				</div>
				<label className={styles.form__check}>
					<input
						type='checkbox'
						className={styles.form__check_box}
					/>
					<span className={styles.form__check_fake}>
						<svg
							width='12'
							height='9'
							viewBox='0 0 12 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M11.3337 1L4.00033 8.33333L0.666992 5'
								stroke='white'
								stroke-linecap='round'
								stroke-linejoin='round'
							/>
						</svg>
					</span>
					<span className={styles.form__check_text}>
						Опубликовать мои контакты
					</span>
				</label>
				<button className={styles.form__button}>Создать</button>
			</div>
		</div>
	);
};

export default NewEvent;
