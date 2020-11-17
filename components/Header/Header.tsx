
import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import styles from './Header.module.css';

const Header: React.FC = () => {

	return (
		<div className={styles.container}>
			<Typography variant="h2">Meal Planner</Typography>
			<Divider className={styles.divider} />
		</div>
	);
};

export default Header;
