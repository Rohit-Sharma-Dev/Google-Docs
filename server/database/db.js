// Rohit@123

import mongoose from "mongoose";

const Connection = async () => {
  // const URL = `mongodb+srv://Rohit:Rohit_123@google-docs-clone.x0fo1mz.mongodb.net/?retryWrites=true&w=majority`;
  const url =
    "mongodb+srv://username:pass@cluster0.cn1wheq.mongodb.net/?retryWrites=true&w=majority";
  try {
    await mongoose.set('strictQuery', false);
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
