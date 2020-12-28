
import React, { useState } from 'react';
import { Button, Tab, Tabs } from '@material-ui/core';

import { useRouter } from 'next/router';

import AddIcon from '@material-ui/icons/Add';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SpaIcon from '@material-ui/icons/Spa';

import styles from './Menu.module.css';

type Props = {
	selected: string, 
};

const Menu: React.FC<Props> = ({ selected }) => {

	const router = useRouter();

	const menuChange = (ev, value) => {
		router.push(`/${value}`);
	};	

	return (
		<div className={styles.container}>
			<Tabs value={selected} onChange={menuChange} variant="fullWidth" className={styles.tabs}>
				<Tab label="Recipes" value="recipes" icon={<LocalDiningIcon/>}></Tab>
				<Tab label="Plans" value="plans" icon={<EventNoteIcon/>}></Tab>
				<Tab label="Ingredients" value="ingredients" icon={<SpaIcon/>}></Tab>
			</Tabs>
			
		</div>
	);
};

export default Menu;
