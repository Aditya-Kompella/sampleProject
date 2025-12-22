// console.log("om maha ganapathiye namaha");
import express from "express";
import router from './routes.js';  // Import your routes
import 'dotenv/config';
import cors from "cors"
import { validateRequestBody, validateFields } from "./middleware/validation.js";
import {connectDB} from "./config/database.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
        return validateRequestBody(req, res, next);
    }
    next();
});
app.use('/api', router);
app.use("/",(req,res)=>{
    res.status(401).send({data:"you dont have access"})
})

await connectDB().then(()=>{
    console.log("Database connection established")
    app.listen(process.env.PORT,()=>{
        console.log(`server is successfully running on port ${process.env.PORT}....`)
    });
    }).catch(()=>{
        console.log("error connecting database");
    });
