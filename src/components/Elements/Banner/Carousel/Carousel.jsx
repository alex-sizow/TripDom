import React from 'react';
import Styles from './Carousel.module.scss';


const Carousel = ({ children }) => {
	return (
		<div className={Styles.carousel}>
			<div className={Styles.window}>{children}</div>
		</div>
	);
};

export default Carousel;
