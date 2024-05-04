import { PrismaClient } from '@prisma/client'
import response from '../Utils/response.js'
const prisma = new PrismaClient()
const Controller = {
Register : async (req,res)=>{
try {
const useremail = await prisma.user.findUnique({
    where :{
        email:req.body.email
    }
})
if(useremail) return response(res,`Email already exist`,403,false)
const userUname = await prisma.user.findUnique({
    where :{
        username:req.body.username
    }
})
if(userUname) return response(res,`username already exist`,403,false)
const newuser = await prisma.user.create({
data :{
username:req.body.username,
email:req.body.email,
password:req.body.password,
fullname:req.body.fullname,
address:req.body.address
}
})
if(newuser) return response(res,`user created`,200,true)

} catch (error) {
    // console.log(error)
    return response(res,`internal server Error : ${error}`,500,false)
}
},
}
export default Controller