import jwt from "jsonwebtoken"
const jwtSign =  (payload,type = 'refresh') =>{
let ENV = process.env.JSON_REFRESH_TOKEN
let exp = '1d'
    if(type == 'access'){
    ENV = process.env.JSON_ACCESS_TOKEN
    exp = '1m'
    }
const result = jwt.sign(payload,ENV,{ expiresIn:exp })
return result
}
export default jwtSign