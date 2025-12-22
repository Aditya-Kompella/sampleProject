import express from 'express';
const router = express.Router();
import { loginController } from "./controllers/login/login.controller.js";

const authController = new loginController();

router.post("/login", (req, res) => authController.signIn(req, res));
router.post("/signup", (req, res) => authController.signUp(req, res));

// Export the router
router.get("/",(req,res)=>{
    res.status(401).send({data:"you dont have access"})
})
export default router;