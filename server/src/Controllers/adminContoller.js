import response from "../Utils/response.js"
const Controller = {
test : (req,res)=>{
return response({ 
    response:res,
    data:{id:'1',name:'rio putra'},
    statuscode:200,
    success:true,
    })
}
}
export default Controller