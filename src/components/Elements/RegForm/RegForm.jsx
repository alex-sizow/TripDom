import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Styles from './RegForm.module.scss';
const RegForm = ({ click, handleClick }) => {
	return (
		<form className={Styles.form}>
			<div className={Styles.form__title}>Вход в аккаунт</div>
			<div className={Styles.form__input}>
				<div className={Styles.form__input_title}>
					Введите номер телефона
				</div>
				<div className={Styles.form__input_form}>
					<IntlTelInput
						placeholder='+'
						preferredCountries={['Ee']}
						className={Styles.form__input_form_input}
						allowDropdown={false}
					/>
				</div>

				<div className={Styles.form__input_description}>
					Отправим вам СМС с кодом подтверждения.
				</div>
			</div>
			<div className={Styles.form__buttons}>
				<button
					onClick={handleClick}
					className={Styles.form__buttons_login}>
					Войти
				</button>
				<button
					onClick={handleClick}
					className={Styles.form__buttons_reg}>
					Регистрация
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
