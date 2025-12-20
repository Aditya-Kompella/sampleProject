// console.log("om maha ganapathiye namaha");
import express from "express";
const app = express();
app.use((req,res)=>{
    res.send("entering the server")
})
app.listen(3000,()=>{
    console.log("server is successfully running on port 3000....")
});