// console.log("om maha ganapathiye namaha");
import express from "express";
import router from './routes.js';  // Import your routes

const app = express();
// app.use((req,res)=>{
//     res.send("entering the server")
// })
app.use('/', router);


app.listen(3000,()=>{
    console.log("server is successfully running on port 3000....")
});