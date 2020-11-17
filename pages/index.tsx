
import React from 'react';
import { CssBaseline } from '@material-ui/core'

import MealPlanner from '../components/MealPlanner';

const App: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<MealPlanner />
		</>
	);
};

export default App;
