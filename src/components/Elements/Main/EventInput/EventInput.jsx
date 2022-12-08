import Styles from './EventInput.module.scss';

const EventInput = ({ toggle, handleToggleChange }) => {
	return (
		<form className={Styles.eventinput}>
			<div
				className={Styles.eventinput__toggle}
				onClick={handleToggleChange}>
				<div className={Styles.eventinput__toggle_text}>
					Ивенты
				</div>
				<div className={Styles.eventinput__toggle_text}>
					Услуги
				</div>
				<div
					className={
						toggle
							? Styles.eventinput__toggle_trigger
							: Styles.eventinput__toggle_button
					}></div>
			</div>
			<div className={Styles.eventinput__input}>
				<div className={Styles.eventinput__input_title}>
					Место проведения
				</div>
				<input type='text' placeholder='Нарва' />
			</div>
			<div className={Styles.eventinput__input}>
				<div className={Styles.eventinput__input_title}>
					Дата проведения
				</div>
				<input type='text' placeholder='10-13 июня' />
			</div>
			<div className={Styles.eventinput__input}>
				<div className={Styles.eventinput__input_title}>
					Категория
				</div>
				<input type='text' placeholder='Активные игры...' />
			</div>
			<button className={Styles.eventinput__button}>
				Сбросить
			</button>
		</form>
	);
};

export default EventInput;
