import { PrismaClient } from '@prisma/client'
import response from '../Utils/response.js'
import jwtSign from '../Utils/jwtSign.js'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import checkPassword from '../Utils/checkPassword.js'
import setCookie from '../Utils/setCookie.js'
const Controller = {
Register : async (req,res)=>{
try {
    if (!req.body || !req.body.email || !req.body.username || req.body.email.length === 0 || req.body.username.length === 0) {
        return response({
            response:res,
            message:`email & username must be filled!`,
            statuscode:403,
            success:false
        })
    }
    
const useremail = await prisma.user.findUnique({
    where :{
        email:req.body.email
    }
})
if(useremail) return response({
    response:res,
    message:`email already exist!`,
    statuscode:403,
    success:false
})
const userUname = await prisma.user.findUnique({
    where :{
        username:req.body.username
    }
})
if(userUname) return response({
    response:res,
    message:`username already exist !`,
    statuscode:403,
    success:false
})
const newuser = await prisma.user.create({
data :{
username:req.body.username,
email:req.body.email,
password: await bcrypt.hash(req.body.password,12),
fullname:req.body.fullname,
address:req.body.address
}
})
if(newuser) return response({
    response:res,
    message:`user created !`,
    statuscode:200,
    success:true
})
} catch (error) {
    return response({
        response:res,
        message:`internal server error : ${error}`,
        statuscode:500,
        success:false
    })
}
},
Login : async (req,res)=>{
try {
    if (!req.body || !req.body.email || req.body.email.length === 0 ) {
        return response({
            response:res,
            message:`email & username must be filled!`,
            statuscode:403,
            success:false
        })
    }
    const user = await prisma.user.findUnique({
        where:{
            email:req.body.email
        }
    })
if(!user) return response({
    response:res,
    message:`user not found!`,
    statuscode:403,
    success:false
})
const validpasssword = await checkPassword(req.body.password,user.password)
// console.log(validpasssword)
if(!validpasssword) return response({
    response:res,
    message:`wrong password !`,
    statuscode:403,
    success:false
})
const refreshToken = jwtSign({
           id: user.id,
           username : user.username,
           email: user.email,
           fullname:user.fullname,
           role:user.role
        },'refresh')
        await prisma.user.update({
            where: {id:user.id},
            data:{DB_REFRESH_TOKEN:refreshToken}
        })
       setCookie(res,refreshToken)
const token = jwtSign({
        id: user.id,
        username : user.username,
        email: user.email,
        fullname:user.fullname,
        role:user.role
     },'access')
return response({
    response:res,
    message:`Login Success!`,
    statuscode:200,
    success:true,
    token :token,
})

} catch (error) {
  return response({
        response:res,
        message:`internal server error : ${error}`,
        statuscode:500,
        success:false
    })
}
}
}
export default Controller