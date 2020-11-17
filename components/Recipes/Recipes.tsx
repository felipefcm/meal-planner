
import React from 'react';
import { Button, IconButton, List, ListItem, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './Recipes.module.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Recipes: React.FC = () => {

	return (
		<>
			<div className={styles.buttonContainer}>
				
				<Button 
					className={styles.button} 
					variant="contained" 
					size="large" 
					color="primary"
					startIcon={<AddIcon />}
				>
					Create
				</Button>

				<TextField variant="outlined" label="Search" />
			</div>

			<List>
				<ListItem className={styles.item}>
					<img className={styles.media} src="http://lorempixel.com/400/200/food"/>
					<Typography variant="h5">Cool dish</Typography>
					<IconButton color="primary">
						<NavigateNextIcon />
					</IconButton>
				</ListItem>
				<ListItem className={styles.item}>
					<img className={styles.media} src="http://lorempixel.com/400/200/food"/>
					<Typography variant="h5">Cool dish</Typography>
					<IconButton color="primary">
						<NavigateNextIcon />
					</IconButton>
				</ListItem>
			</List>
		</>
	);
};

export default Recipes;
