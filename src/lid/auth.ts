import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const mongoID = process.env.MONGODB_CLIENT_ID!;

const client = new MongoClient(mongoID);
const db = client.db("vuha_news_24");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});

