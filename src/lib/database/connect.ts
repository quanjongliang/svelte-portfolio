import mongoose from "mongoose";
// import { MONGO_URL } from "$env/static/private";
const MONGO_URL =
  "mongodb+srv://mymongodb:Gunny2.0@cluster0.h2rrt.mongodb.net/test";
/* 
  0 - disconnected
  1 - connected
  2 - connecting
  3 - disconnecting
  4 - uninitialized
*/
const mongoConnection = {
  isConnected: 0,
};

export const dbConnect = async () => {
  console.log("MONGO_URL", MONGO_URL);
  if (mongoConnection.isConnected === 1) {
    console.log("connected");
    return;
  }

  if (mongoose.connections.length > 0) {
    mongoConnection.isConnected = mongoose.connections[0].readyState;
    if (mongoConnection.isConnected === 1) {
      console.log("connected mongo");
      return;
    }

    await mongoose.disconnect();
  }
  await mongoose.connect(MONGO_URL ?? "");
  mongoConnection.isConnected = 1;
  console.log("connect to mongodb", MONGO_URL ?? "");
};

export const dbDisconnect = async () => {
  if (process.env.NODE_ENV === "development") return;
  if (mongoConnection.isConnected === 0) return;

  await mongoose.disconnect();
  mongoConnection.isConnected = 0;
  console.log("disconnect mongodb");
};
