import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/quiniela";
const db = mongoose.connection;

const connection = () =>
  new Promise(async (resolve, reject) => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("DB connection");
      resolve();
    } catch (error) {
      reject(error);
    }
  });

export default connection;

