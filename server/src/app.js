import 'dotenv/config'
import express from 'express'
import cookie from 'cookie-parser'
import Routers from './Routes/Routers.js'
const app = express()
app.use(cookie())
app.use(express.json())
app.use(Routers)

app.listen(process.env.APP_PORT || 3000,()=>{
    console.log(`Listen :: ${process.env.APP_PORT || 3000}`)
})