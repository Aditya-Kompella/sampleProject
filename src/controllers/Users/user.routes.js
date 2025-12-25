import express from 'express';
import { userController } from './user.controller.js';
export class userRoutes{
constructor() {
    this.router = express.Router();
    this.userController = new userController();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(['/:email','/'], this.userController.getUser);
    // GET methods
    this.router.get('/login', this.userController.signIn);
    
    
    // POST methods
    this.router.post('/signup', this.userController.signUp);
    // this.router.post('/updateUser', this.userController.updateUser);
    
    // DELETE method
    // this.router.delete('/deleteUser', this.userController.deleteUser);
  }

  getRouter() {
    return this.router;
  }
}