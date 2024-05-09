import { Router } from "express";
import authMiddleware from "../Middleware/authMiddleware.js";
import authController from "../Controllers/authContoller.js";
const Auth = Router()
Auth.post('/register',authMiddleware.isNotAuth,authController.Register)
Auth.post('/login',authMiddleware.isNotAuth,authController.Login)
export default Auth