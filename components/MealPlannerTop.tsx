
import React from 'react';

import Header from './Header/Header';
import Menu from './Menu/Menu';

type Props = {
	selected: 'recipes' | 'plans' | 'ingredients',
};

const MealPlannerTop: React.FC<Props> = (props) => {
	return (
		<>
			<Header />
			<Menu selected={props.selected} />
		</>
	);
};

export default MealPlannerTop;
