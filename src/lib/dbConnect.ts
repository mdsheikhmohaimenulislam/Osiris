import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
  userCollection: "users",
};

let client: MongoClient | null = null;

export default async function dbConnect(collectionName: string) {
  const uri = process.env.MONGODB_URL as string | undefined;
  const dbName = process.env.DB_NAME as string | undefined;

  if (!uri) {
    throw new Error(" Missing MONGODB_URL in .env.local");
  }

  if (!dbName) {
    throw new Error(" Missing DB_NAME in .env.local");
  }

  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect();
    console.log(" MongoDB connected");
  }

  return client.db(dbName).collection(collectionName);
}
