import express from 'express';
const router = express.Router();
// import { userController } from "./controllers/login/user.controller.js";
import { userRoutes } from './controllers/Users/user.routes.js';

const userRoute = new userRoutes();

// const authController = new userController();
router.use('/user', userRoute.getRouter());


// router.post("/login", (req, res) => authController.signIn(req, res));
// router.post("/signup", (req, res) => authController.signUp(req, res));

// Export the router
router.get("/",(req,res)=>{
    res.status(401).send({data:"you dont have access"})
})
export default router;