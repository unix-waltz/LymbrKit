import jwt from 'jsonwebtoken'
import response from '../Utils/response.js';
const authMiddleware = {
isAuth: (role) => (req, res, next)=>{
    try {
        const authHeader = req.headers.authorization;
    
        if (!authHeader?.startsWith("Bearer ")) {
          return  response({
            response:res,
            message:`Unauthorized!`,
            statuscode:403,
            success:false
        })
        }
    
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JSON_ACCESS_TOKEN);
    
        req.user = decoded;
    
        if (role === "none") next();
    
        if (role !== decoded.role) {
          req.user = undefined;
    
          return response({
            response:res,
            message:`Unauthorized From This Page!`,
            statuscode:403,
            success:false
        })
        }
    
        next();
      } catch (error) {
        return  response({
            response:res,
            message:`Invalid Token!`,
            statuscode:403,
            success:false
        })
      }
},
isNotAuth : (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (authHeader?.startsWith("Bearer ")) {
      return  response({
        response:res,
        message:`This Page Is Only for user without Authorization!`,
        statuscode:403,
        success:false
    })
}
next()
}
}

export default authMiddleware