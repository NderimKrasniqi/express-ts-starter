import * as mongoDB from "mongodb";

export async function connectToDatabase() {
  if (process.env.MONGO_URI !== undefined) {
    const client = new mongoDB.MongoClient(process.env.MONGO_URI);

    await client.connect();

    const db = client.db("expressTS");

    console.log(
      `Successfully connected to database:${db.databaseName}`.blue.underline
    );
  }
}
