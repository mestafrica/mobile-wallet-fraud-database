import mongoose from "mongoose";
import "dotenv/config";

const mongoUri = process.env.MONGO_URL;

export const dbConnection = async () => {
  await mongoose.connect(mongoUri);
  console.log("Database is connected");
};
