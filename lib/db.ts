
import { Db, MongoClient, MongoClientOptions } from 'mongodb';

const { MONGODB_URL, MONGODB_DB } = process.env;

if(!MONGODB_URL)
	throw new Error(`Must define MONGODB_URL environment variable`);

if(!MONGODB_DB)
	throw new Error(`Must define MONGODB_DB environment variable`);

export default class DB {

	static mongo: {
		conn?: {
			client: MongoClient,
			db: Db,
		},
		promise?: Promise<any>,
	};

	static async connect() {

		if(!this.mongo) 
			this.mongo = { conn: null, promise: null };
		
		const cached = this.mongo;
		
		if(cached.conn) return cached.conn;

		if(!cached.promise) {
			
			const opts: MongoClientOptions = {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			};

			cached.promise = MongoClient.connect(MONGODB_URL, opts).then((client) => {
				return {
					client,
					db: client.db(MONGODB_DB),
				};
			});
		}

		cached.conn = await cached.promise;
		return cached.conn;
	}
};
