import { Router } from "express";
import adminController from '../Controllers/adminContoller.js'
const Route = Router()
Route.get('/test',adminController.test)
export default Route