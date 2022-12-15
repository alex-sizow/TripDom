import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Styles from './RegForm.module.scss';
const RegForm = () => {
	return (
		<form className={Styles.form}>
			<div
				className={Styles.form__title}
				style={{ marginBottom: '7px' }}>
				Проверочный код
			</div>
			<div className={Styles.form__input}>
				<div className={Styles.form__input_form}>
					<IntlTelInput
						placeholder='+'
						preferredCountries={['Ee']}
						className={Styles.form__input_form_input}
						allowDropdown={false}
					/>
				</div>

				<div className={Styles.form__input_description}>
					Код можно отправить повторно через 0 сек.
				</div>
				<button className={Styles.form__input_repeat}>
					Отправить код повторно
				</button>
			</div>
			<div className={Styles.form__buttons}>
				<button className={Styles.form__buttons_login}>
					Подтвердить
				</button>
				<button className={Styles.form__buttons_reg}>
					Зарегестрировать фирму
				</button>
				<div className={Styles.form__buttons_description}>
					Регистируясь или авторизуясь, вы приимаете
					<a>Условия пользовательского соглашения</a>,
					<a>Политики</a> и даете <a>Согласие</a> на обработку
					персональных данных
				</div>
			</div>
		</form>
	);
};

export default RegForm;
