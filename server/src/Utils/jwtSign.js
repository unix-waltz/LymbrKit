import jwt from "jsonwebtoken"
const jwtSign =  (payload) =>{

const accessToken = jwt.sign(payload,process.env.JSON_ACCESS_TOKEN,{ expiresIn:'1m' })
const refreshToken = jwt.sign(payload,process.env.JSON_REFRESH_TOKEN,{ expiresIn:'1d' })
return {accessToken,refreshToken}
}
export default jwtSign