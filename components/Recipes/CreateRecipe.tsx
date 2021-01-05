
import React, { useEffect, useRef, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';

import styles from './CreateRecipe.module.css';
import Link from 'next/link';
import IngredientsTable, { Ingredient } from './IngredientsTable';

const CreateRecipe: React.FC = () => {

	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	const [recipeName, setRecipeName] = useState<string>('');
	const [ingredientName, setIngredientName] = useState<string>('');
	const [ingredientQuantity, setIngredientQuantity] = useState<string>('');

	const [userMessage, setUserMessage] = useState('');

	const ingredientNameChanged = (event) => {
		const name = event.target.value;
		setIngredientName(name);
	};

	const ingredientQuantityChanged = (event) => {
		const quantity = event.target.value;
		setIngredientQuantity(quantity);
	};

	const recipeNameChanged = (event) => {
		const name = event.target.value;
		setRecipeName(name);
	};

	const addIngredient = () => {

		if(!ingredientName) return;

		const inputQuantity = ingredientQuantity ? ingredientQuantity : '1';
		const quantityMatch = inputQuantity.match(/\d+/);
		const quantity = parseInt(quantityMatch[0]);

		const inputUnit = inputQuantity.replaceAll(quantity.toString(), '');
		
		const ingredient: Ingredient = {
			name: ingredientName,
			quantity,
			unit: inputUnit,
		};

		validateIngredient(ingredient);

		const existing = ingredients.find(i => i.name === ingredient.name);
		if(existing) {
			existing.quantity += ingredient.quantity;
			setIngredients(ingredients.slice());
		}
		else {
			setIngredients([ ...ingredients, ingredient ]);
		}

		setIngredientName('');
		setIngredientQuantity('');
	};

	const validateIngredient = (ingredient: Ingredient) => {
		ingredient.name = ingredient.name[0].toUpperCase() + ingredient.name.slice(1);
	}

	const incrementIngredient = (name: string) => {
		const ingredient = ingredients.find(i => i.name === name);
		++ingredient.quantity;
		setIngredients(ingredients.slice());
	};
	
	const decrementIngredient = (name: string) => {
		
		const ingredient = ingredients.find(i => i.name === name);
		--ingredient.quantity;

		if(ingredient.quantity <= 0) {
			removeIngredient(name);
			return;
		}

		setIngredients(ingredients.slice());
	};
	
	const removeIngredient = (name: string) => {
		const newIngredients = ingredients.filter(i => i.name !== name);
		setIngredients(newIngredients);
	};

	const createRecipe = async () => {

		const name = recipeName.trim();

		if(!name) {
			setUserMessage('Please insert recipe name');
			return;
		}

		if(ingredients.length <= 0) {
			setUserMessage('There must be at least one ingredient');
			return;
		}

		const resp = await axios.post('/api/recipes/create', {
			name,
			ingredients,
		}).catch(err => {
			if(err.response.data.msg === 'EXISTING')
				setUserMessage('Recipe already exists');
		});

		if(resp && resp.data.msg === 'OK') {
			setUserMessage('Recipe created');
			setRecipeName('');
			setIngredientName('');
			setIngredientQuantity('');
			setIngredients([]);
		}
	};

	return (
		<div className={styles.mainContainer}>
			
			<Typography variant="h5">New Recipe</Typography>

			<div className={styles.formContainer}>
				
				<TextField
					value={recipeName}
					onChange={recipeNameChanged}
					className={styles.recipeName}
					id="recipe-name"
					label="Name"
					variant="outlined"
				/>
				
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
					/>

					<Button onClick={() => addIngredient()} variant="contained" color="primary">Add</Button>
					
				</div>

			</div>

			<IngredientsTable 
				ingredients={ingredients}
				incremented={incrementIngredient}
				decremented={decrementIngredient}
				removed={removeIngredient}
			/>

			<Typography color="error" variant="h6" hidden={userMessage.length === 0}>{userMessage}</Typography>

			<div className={styles.navButtons}>
				
				<Link href="/recipes">
					<Button variant="contained" color="secondary">Back</Button>
				</Link>
				
				<Button onClick={() => createRecipe()} variant="contained" color="primary">Create</Button>

			</div>

		</div>
	);
};

export default CreateRecipe;
