
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

import styles from './IngredientsTable.module.css';

export type Ingredient = {
	name: string,
	quantity: number,
	unit: string,
};

type Props = {
	ingredients: Ingredient[],
};

const IngredientsTable: React.FC<Props> = (props) => {

	return (
		<TableContainer className={styles.tableContainer} component={Paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Ingredient</TableCell>
						<TableCell>Qty</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.ingredients.map((ingredient) => (
							<TableRow key={ingredient.name}>
								<TableCell>{ingredient.name}</TableCell>
								<TableCell>{ingredient.quantity}</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IngredientsTable;
