import React, { useState } from 'react';
import EventInput from '../../components/Elements/Main/EventInput/EventInput';
import EventItem from '../../components/Elements/Main/EventItem/EventItem';
import SearchInput from '../../components/Elements/Main/SearchInput/SearchInput';
import styles from './Main.module.scss';

const Main = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggleChange = () => {
		setToggle(!toggle)
	}

	return (
		<div className={styles.main}>
			<EventInput toggle={toggle} handleToggleChange={handleToggleChange} />

			<div className={styles.main__items}>
				<div className={styles.main__items_search}>
					<SearchInput />
				</div>
				<EventItem />
				<EventItem />
				<EventItem />
			</div>
		</div>
	);
};

export default Main;
