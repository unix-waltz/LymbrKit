import { Route } from "react-router-dom"
import { lazy } from "react"
const AuthRoutes = () => {
    const Login = lazy(()=> import("@/Page/Auth/Login")) 
const Register = lazy(()=> import("@/Page/Auth/Register")) 
  return (
   <>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </>
  )
}

export default AuthRoutes