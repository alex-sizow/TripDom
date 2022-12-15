import React from 'react';
import Banner from '../../components/Elements/Banner/Banner';
import RegForm from '../../components/Elements/RegForm/RegForm';
import RegFormInit from '../../components/Elements/RegForm/RegFormInit';
import Styles from './Registration.module.scss';

const Registration = () => {
	const [click, setClick] = React.useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	return (
		<div className={Styles.registration}>
			<div className={Styles.left}>
				<div className={Styles.registration__recently}>
					<div className={Styles.registration__recently_title}>
						Недавно заходили на сайт с этого устройства
					</div>
					<div className={Styles.registration__recently_tip}>
						Чтобы войти снова, нажмите на фотографию или имя
					</div>
					<div
						className={Styles.registration__recently_accounts}>
						<div
							className={
								Styles.registration__recently_accounts_item
							}>
							<div>
								<img src='/Nastya.png' alt='' />
								<div>Настя</div>
								<div> Копылова</div>
							</div>
						</div>
						<div
							className={
								Styles.registration__recently_accounts_item
							}>
							<div>
								<img src='/NewAccount.svg' alt='' />
								<div>Настя</div>
								<div> Копылова</div>
							</div>
						</div>
					</div>
				</div>
				<Banner
					className={Styles.registration__banners}></Banner>
			</div>

			{click ? (
				<RegFormInit
					className={Styles.registration__form}
					handleClick={handleClick}></RegFormInit>
			) : (
				<RegForm
					handleClick={handleClick}
					className={Styles.registration__form}></RegForm>
			)}
		</div>
	);
};

export default Registration;
