import express from 'express';
const router = express.Router();

router.get("/user",(req,res,next)=>{
    res.send({firstName:"Akshay",lastName:"Saini"});
    // next()
});

// Export the router
router.get("/",(req,res)=>{
    res.status(401).send({data:"you dont have access"})
})
export default router;