import React from 'react';
import Styles from './RegForm.module.scss';

const RegForm = () => {
	return (
		<form className={Styles.form}>
			<div className={Styles.form__title}>Вход в аккаунт</div>
			<div className={Styles.form__input}>
				<div className={Styles.form__input_title}>
					Введите номер телефона
				</div>
				<div className={Styles.form__input_form}>
					<input type='number' />
					<svg
						width='44'
						height='16'
						viewBox='0 0 44 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clip-path='url(#clip0_303_8125)'>
							<rect
								width='21'
								height='15'
								transform='translate(0 0.5)'
								fill='black'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M0 10.5H21V15.5H0V10.5Z'
								fill='white'
							/>
							<path
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M0 0.5H21V5.5H0V0.5Z'
								fill='#0072CE'
							/>
						</g>
						<path
							d='M35.9997 3.33301V12.6663M31.333 7.99967H40.6663'
							stroke='#BCBCBC'
							stroke-width='1.33333'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<defs>
							<clipPath id='clip0_303_8125'>
								<rect
									width='21'
									height='15'
									fill='white'
									transform='translate(0 0.5)'
								/>
							</clipPath>
						</defs>
					</svg>
				</div>
				<div className={Styles.form__input_description}>
					Отправим вам СМС с кодом подтверждения.
				</div>
			</div>
			<div className={Styles.form__buttons}>
				<button className={Styles.form__buttons_login}>
					Войти
				</button>
				<button className={Styles.form__buttons_reg}>
					Зарегистрировать фирму
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
