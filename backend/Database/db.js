import mongoose from "mongoose";

export const Connection = async (username, password) => {
  const URL =
    "mongodb://danish:danish@blogweb-shard-00-00.k7oos.mongodb.net:27017,blogweb-shard-00-01.k7oos.mongodb.net:27017,blogweb-shard-00-02.k7oos.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-10btlt-shard-0&authSource=admin&retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database ", error);
  }
};
