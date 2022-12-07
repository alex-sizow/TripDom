import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Elements/Search/Search';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.container__header}>
			<div className={styles.header}>
				<Link to={'/'} className={styles.header__logo}>
					<svg
						width='35'
						height='36'
						viewBox='0 0 35 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<rect
							y='0.5'
							width='35'
							height='35'
							rx='10'
							fill='#6C27AB'
						/>
					</svg>
					<div>TripHouse</div>
				</Link>
				<Search />
				<div className={styles.header__language}>
					<button>Ru</button>
					<button>En</button>
					<button>Lv</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
