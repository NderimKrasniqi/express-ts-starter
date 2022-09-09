import * as mongoDB from "mongodb";

export async function connectToDatabase() {
  if (!process.env.MONGO_URI)
    throw new Error("MongoDb connectiong string is missing!");

  const client = new mongoDB.MongoClient(process.env.MONGO_URI);
  await client.connect();

  const db = client.db("ExpressTS");

  console.log(
    `Successfully connected to database:${db.databaseName}`.blue.underline
  );
}
