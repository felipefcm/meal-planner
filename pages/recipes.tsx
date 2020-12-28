
import React from 'react';

import MealPlannerTop from '../components/MealPlannerTop';
import Recipes from '../components/Recipes/Recipes';

const RecipesPage: React.FC = () => {
	return (
		<>
			<MealPlannerTop selected="recipes" />
			<Recipes />
		</>
	);
};

export default RecipesPage;
