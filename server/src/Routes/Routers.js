import { Router } from "express";
import Auth from "./AuthRoutes.js";
const Routers = Router()
// Routers.use('/api/admin')
// Routers.use('/api/user')
// Routers.use('/api/officer')
Routers.use('/api/auth',Auth)
export default Routers