import { Router } from "express";
import Auth from "./AuthRoutes.js";
import adminRoutes from './AdminRoutes.js'
import authMiddleware from "../Middleware/authMiddleware.js";
const Routers = Router()
Routers.use('/api/admin',authMiddleware.isAuth('ADMIN'),adminRoutes)
// Routers.use('/api/user')
// Routers.use('/api/officer')
Routers.use('/api/auth',Auth)
export default Routers