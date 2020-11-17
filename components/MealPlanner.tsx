
import React, { useState } from 'react';

import Header from './Header/Header';
import Menu from './Menu/Menu';
import Recipes from './Recipes/Recipes';

import styles from './MealPlanner.module.css';

const MealPlanner: React.FC = () => {

	const [menuSelection, setMenuSelection] = useState('recipes');

	const menuSelected = (select: string) => {
		setMenuSelection(select);
	};

	const getContent = (select: string) => {
		switch(select) {
			case 'recipes': return <Recipes />;
			case 'plans': return <p>Plans</p>;
			case 'ingredients': return <p>Ingredients</p>;
		}
	};

	return (
		<>
			<Header />
			<Menu selected={menuSelection} selector={menuSelected} />
			
			<div className={styles.contentContainer}>
				{ getContent(menuSelection) }
			</div>
		</>
	);
};

export default MealPlanner;
