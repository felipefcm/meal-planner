
import React from 'react';
import { Button, Tab, Tabs } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import SpaIcon from '@material-ui/icons/Spa';

import styles from './Menu.module.css';

const Menu: React.FC = () => {

	return (
		<div className={styles.container}>
			<Tabs value="Recipes" variant="fullWidth" className={styles.tabs}>
				<Tab label="Recipes" icon={<LocalDiningIcon/>}></Tab>
				<Tab label="Plans" icon={<EventNoteIcon/>}></Tab>
				<Tab label="Ingredients" icon={<SpaIcon/>}></Tab>
			</Tabs>
			
			{/* <Button 
				variant="contained" 
				color="primary"
				size="large"
				startIcon={<EventNoteIcon/>}
			>
				Create Plan
			</Button>
			
			<Button 
				variant="contained" 
				color="primary"
				size="large"
				startIcon={<AddIcon/>}
			>
				Add Recipe
			</Button> */}
		</div>
	);
};

export default Menu;
