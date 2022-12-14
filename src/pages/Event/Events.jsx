import React, { useState } from 'react';
import EventInput from '../../components/Elements/Main/EventInput/EventInput';
import EventItem from '../../components/Elements/Main/EventItem/EventItem';
import SearchInput from '../../components/Elements/Main/SearchInput/SearchInput';
import styles from './Main.module.scss';

const Event = () => {
	const [toggle, setToggle] = useState(false);
	const [map, setMap] = useState(false);
	const handleToggleChange = () => {
		setToggle(!toggle);
	};
	const mapToggle = () => {
		setMap(!map);
	};

	return (
		<div className={styles.main}>
			<EventInput
				toggle={toggle}
				handleToggleChange={handleToggleChange}
			/>

			<div className={styles.main__items}>
				<div className={styles.main__items_search}>
					<SearchInput mapToggle={mapToggle} map={map} />
				</div>
				<div className={styles.main__items_list}>
					{map ? <div>НУ</div> : <EventItem />}
				</div>
			</div>
		</div>
	);
};

export default Event;
