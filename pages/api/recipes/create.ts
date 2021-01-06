
import { NowRequest, NowResponse } from '@vercel/node';

import DB from '../../../lib/db';

export default async (req: NowRequest, res: NowResponse) => {

	if(req.method === 'POST') {
		await createRecipe(req.body, res);
		return;
	}
	
	res.status(400).send({ msg: 'WHAAAT' });
};

const createRecipe = async (body: any, res: NowResponse) => {
	
	const { db } = await DB.connect();
	const recipes = db.collection('recipes');

	const newRecipe = body;

	const existing = await recipes.findOne({ name: newRecipe.name });
	if(existing) {
		res.status(400).send({ msg: 'EXISTING' });
		return;
	}

	await recipes.insertOne({
		name: newRecipe.name,
		ingredients: newRecipe.ingredients,
		imageURL: newRecipe.imageURL,
	});

	res.status(201).send({ msg: 'OK' });
};
