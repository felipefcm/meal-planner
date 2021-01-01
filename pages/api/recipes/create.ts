
import { NowRequest, NowResponse } from '@vercel/node';

import DB from '../../../lib/db';

export default async (req: NowRequest, res: NowResponse) => {
	
	const { client, db } = await DB.connect();

	await db.collection('recipes').insertOne({
		name: 'Strogonoff',
		ingredients: [
			{ name: 'Garlic', quantity: '2' },
			{ name: 'Onion', quantity: '1' },
		],
	});

	res.status(200).send({ msg: 'OK' });
};
