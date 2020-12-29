
import React from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@material-ui/core';

import styles from './CreateRecipe.module.css';
import Link from 'next/link';

const CreateRecipe: React.FC = () => {

	return (
		<div className={styles.mainContainer}>
			
			<Typography variant="h5">New Recipe</Typography>

			<div className={styles.formContainer}>
				<TextField className={styles.recipeName} id="recipe-name" label="Name" variant="outlined" />
				
				<div className={styles.addIngredientsContainer}>
					<TextField className={styles.ingredientName} label="Add Ingredient" variant="outlined" />
					<Button variant="contained" color="primary">Add</Button>
				</div>
			</div>

			<TableContainer className={styles.tableContainer} component={Paper}>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell>Ingredient</TableCell>
							<TableCell>Qty</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Banana</TableCell>
							<TableCell>1</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Garlic</TableCell>
							<TableCell>3</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>

			<div className={styles.navButtons}>
				
				<Link href="/recipes">
					<Button variant="contained" color="secondary">Back</Button>
				</Link>
				
				<Button variant="contained" color="primary">Create</Button>

			</div>

		</div>
	);
};

export default CreateRecipe;
