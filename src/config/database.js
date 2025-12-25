import mongoose from "mongoose";

let URI = process.env.MongoUri + process.env.DATABASE;
console.log("URI: ", URI);
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
  } catch (err) {
    console.log("DB error:", err);
  }
};
export { connectDB };
