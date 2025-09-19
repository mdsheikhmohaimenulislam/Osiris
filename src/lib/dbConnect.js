import { MongoClient, ServerApiVersion } from "mongodb";

export const collectionNameObj = {
userCollection:"users"
  
  // Create collection Name example userCollection:"user"
};

export default function dbConnect(collectionName) {
  
  const uri = process.env.MONGODB_URL;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
}
