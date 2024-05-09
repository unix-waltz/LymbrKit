import { Route,Routes,BrowserRouter } from "react-router-dom"
import { lazy } from "react"
import Home from "./Page/Home"
const Login = lazy(()=> import("@/Page/Auth/Login")) 
const Register = lazy(()=> import("@/Page/Auth/Register")) 
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App