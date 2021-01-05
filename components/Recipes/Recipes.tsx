
import React from 'react';
import { Button, IconButton, List, ListItem, TextField, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';

import styles from './Recipes.module.css';
import { Ingredient } from './IngredientsTable';

export type Recipe = {
	name: string,
	ingredients: Ingredient[],
};

type Props = {
	recipes?: Recipe[],
};

const Recipes: React.FC<Props> = (props) => {

	return (
		<div className={styles.mainContainer}>
			<div className={styles.buttonContainer}>
				
				<Link href="/recipes/create">
					<a>
						<Button 
							className={styles.button} 
							variant="contained" 
							size="large" 
							color="primary"
							startIcon={<AddIcon />}
						>
							Create
						</Button>
					</a>
				</Link>

				<TextField variant="outlined" label="Search" />
			</div>

			{
				props.recipes && 
				<List>
					{
						props.recipes && props.recipes.map(recipe => (
							<ListItem className={styles.item} key={recipe.name}>
								<img className={styles.media} src=""/>
								<Typography variant="h5">{recipe.name}</Typography>
								<IconButton color="primary">
									<NavigateNextIcon />
								</IconButton>
							</ListItem>
						))
					}
				</List>
			}

		</div>
	);
};

export default Recipes;
