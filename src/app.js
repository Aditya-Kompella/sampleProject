// console.log("om maha ganapathiye namaha");
import express from "express";
import router from './routes.js';  // Import your routes
import 'dotenv/config';
import {connectDB} from "./config/database.js";

const app = express();

await connectDB().then(()=>{
    console.log("Database connection established")
    app.listen(process.env.PORT,()=>{
        console.log(`server is successfully running on port ${process.env.PORT}....`)
    });
    }).catch(()=>{
        console.log("error connecting database");
    });

app.use('/', router);