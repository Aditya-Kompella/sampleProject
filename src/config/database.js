import mongoose from "mongoose";

let URI = process.env.MongoUri+process.env.DATABASE;
console.log("URI: ",URI);
const connectDB = async ()=>{
    await mongoose.connect(URI)
}
export {connectDB};
