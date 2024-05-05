const response = ({
    response,
    message,
    statuscode,
    success,
    data = [],
    token = null,
    type= 'message'
})=>{
return response.status(statuscode).json({
succes:success,
type: type,
massage:message,
statuscode:statuscode,
Token:token,
datas:data
})
}
export default response