
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

import styles from './IngredientsTable.module.css';

export type Ingredient = {
	name: string,
	quantity: number,
	unit: string,
};

type Props = {
	ingredients: Ingredient[],
	incremented: (name) => void,
	decremented: (name) => void,
	removed: (name) => void,
};

const IngredientsTable: React.FC<Props> = (props) => {

	return (
		<TableContainer className={styles.tableContainer} component={Paper}>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Ingredient</TableCell>
						<TableCell>Qty</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						props.ingredients.map((ingredient) => (
							<TableRow key={ingredient.name}>
								
								<TableCell>{ingredient.name}</TableCell>
								<TableCell>{ingredient.quantity}{ingredient.unit}</TableCell>
								
								<TableCell>
									<IconButton 
										onClick={() => props.incremented(ingredient.name)}
									>
										<AddCircleIcon htmlColor="green" />
									</IconButton>
								</TableCell>
								
								<TableCell>
									<IconButton 
										onClick={() => props.decremented(ingredient.name)}
									>
										<RemoveCircleIcon htmlColor="red" />
									</IconButton>
								</TableCell>
								
								<TableCell>
									<IconButton 
										onClick={() => props.removed(ingredient.name)}
									>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))
					}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default IngredientsTable;
