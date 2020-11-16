
import React from 'react';
import { CssBaseline } from '@material-ui/core'

import Header from '../components/Header';
import Menu from '../components/Menu';
import RecipeList from '../components/RecipeList';

const MealPlanner: React.FC = () => {

	return (
		<>
			<CssBaseline />
			<Header />
			<Menu />
			<RecipeList />
		</>
	);
};

export default MealPlanner;
