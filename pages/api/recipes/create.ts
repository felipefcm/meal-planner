
import { NowRequest, NowResponse } from '@vercel/node';

import DB from '../../../lib/db';

export default async (req: NowRequest, res: NowResponse) => {
	
	const { db } = await DB.connect();
	const recipes = db.collection('recipes');

	const newRecipe = req.body.recipe;

	await recipes.insertOne({
		name: newRecipe.name,
		ingredients: newRecipe.ingredients,
	});

	res.status(201).send({ msg: 'OK' });
};
