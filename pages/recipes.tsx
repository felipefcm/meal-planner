
import { GetStaticProps } from 'next';
import React from 'react';

import MealPlannerTop from '../components/MealPlannerTop';
import RecipesList from '../components/Recipes/RecipesList';
import DB from '../lib/db';

type Props = {
	recipes: any
};

const RecipesPage: React.FC<Props> = (props) => {
	return (
		<>
			<MealPlannerTop selected="recipes" />
			<RecipesList recipes={props.recipes} />
		</>
	);
};

export default RecipesPage;

export const getStaticProps: GetStaticProps = async (context) => {

	const { db } = await DB.connect();
	const recipes = db.collection('recipes');

	const recipeItems = await recipes.find({}).toArray();
	
	return {
		props: {
			recipes: recipeItems.map(i => ({ name: i.name, ingredients: i.ingredients, imageURL: i.imageURL || '' })),
		},
		revalidate: 1
	};
};
