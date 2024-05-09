import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import Routers from './Routes/Routers.js'
import cors from 'cors'
const app = express()
app.use(cookieParser());
app.use(
    cors({
      origin: "http://127.0.0.1:5173",
      credentials: true,
    })
  );
app.use(express.json())
app.use(Routers)

app.listen(process.env.APP_PORT || 3000,()=>{
    console.log(`Listen :: ${process.env.APP_PORT || 3000}`)
})