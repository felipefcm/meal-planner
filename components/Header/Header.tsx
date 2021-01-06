
import React from 'react';
import { Typography, Divider } from '@material-ui/core';

import styles from './Header.module.css';
import Link from 'next/link';

const Header: React.FC = () => {

	return (
		<div className={styles.container}>
			<Link href="/recipes"><a><Typography variant="h3">Meal Planner</Typography></a></Link>
			<Divider className={styles.divider} />
		</div>
	);
};

export default Header;
