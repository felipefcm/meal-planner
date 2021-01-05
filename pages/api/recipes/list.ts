
import { NowRequest, NowResponse } from '@vercel/node';

import DB from '../../../lib/db';

export default async (req: NowRequest, res: NowResponse) => {

	if(req.method !== 'GET') {
		res.status(400).send({ msg: 'WHAAAT' });
		return;
	}
	
	const { db } = await DB.connect();
	const recipes = db.collection('recipes');

	const recipeItems = await recipes.find({});

	console.log(`GOT ITEMS`, recipeItems);
};
