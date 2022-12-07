import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import styles from './Layout.module.scss';

const Layout = () => {
	return (
		<div className={styles.container}>
			<Header />
			<Outlet />
		</div>
	);
};

export default Layout;
