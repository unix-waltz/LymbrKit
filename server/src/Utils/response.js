const response = (
    response,
    message,
    statuscode,
    success,
    data = [],
    type= 'message',
    token = null
    )=>{
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