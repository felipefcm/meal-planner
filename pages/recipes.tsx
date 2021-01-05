
import axios from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';

import MealPlannerTop from '../components/MealPlannerTop';
import Recipes from '../components/Recipes/Recipes';
import DB from '../lib/db';

type Props = {
	recipes: any
};

const RecipesPage: React.FC<Props> = (props) => {
	return (
		<>
			<MealPlannerTop selected="recipes" />
			<Recipes recipes={props.recipes} />
		</>
	);
};

export default RecipesPage;

export const getStaticProps: GetStaticProps = async (context) => {

	const { db } = await DB.connect();
	const recipes = db.collection('recipes');

	const recipeItems = await recipes.find({}).toArray();

	console.log(`GOT HH`, recipeItems);
	
	return {
		props: {
			recipes: recipeItems.map(i => ({ name: i.name, ingredients: i.ingredients })),
		},
		revalidate: 2
	};
};
