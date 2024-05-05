import 'dotenv/config'
import express from 'express'
import cookie from 'cookie-parser'
import Routers from './Routes/Routers.js'
import cors from 'cors'
const app = express()
app.use(cookie())
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );
app.use(express.json())
app.use(Routers)

app.listen(process.env.APP_PORT || 3000,()=>{
    console.log(`Listen :: ${process.env.APP_PORT || 3000}`)
})