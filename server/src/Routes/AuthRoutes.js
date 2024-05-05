import { Router } from "express";
import authController from "../Controllers/authContoller.js";
const Auth = Router()
Auth.post('/register',authController.Register)
Auth.post('/login',authController.Login)
export default Auth