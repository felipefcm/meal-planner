
import React, { useEffect, useRef, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';

import styles from './CreateRecipe.module.css';
import Link from 'next/link';
import IngredientsTable, { Ingredient } from './IngredientsTable';

const CreateRecipe: React.FC = () => {

	const [ingredients, setIngredients] = useState([]);

	const [ingredientName, setIngredientName] = useState();
	const [ingredientQuantity, setIngredientQuantity] = useState();

	const ingredientNameChanged = (event) => {
		const name = event.target.value;
		setIngredientName(name);
	};

	const ingredientQuantityChanged = (event) => {
		const quantity = event.target.value;
		setIngredientQuantity(quantity);
	};

	const addIngredient = () => {

		if(!ingredientName) return;
		
		const ingredient: Ingredient = {
			name: ingredientName,
			quantity: ingredientQuantity ? ingredientQuantity : '1',
		};

		setIngredients([ ...ingredients, ingredient ]);
	};

	return (
		<div className={styles.mainContainer}>
			
			<Typography variant="h5">New Recipe</Typography>

			<div className={styles.formContainer}>
				<TextField className={styles.recipeName} id="recipe-name" label="Name" variant="outlined" />
				
				<div className={styles.addIngredientsContainer}>
					
					<TextField
						value={ingredientName}
						onChange={ingredientNameChanged} 
						className={styles.ingredientName} 
						label="Ingredient name" 
						variant="outlined" 
					/>

					<TextField 
						value={ingredientQuantity}
						onChange={ingredientQuantityChanged} 
						className={styles.ingredientQuantity} 
						label="Quantity"
						variant="outlined" 
						type=""
					/>

					<Button onClick={() => addIngredient()} variant="contained" color="primary">Add</Button>
				</div>
			</div>

			<IngredientsTable ingredients={ingredients} />

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
