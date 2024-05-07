import { Route,Routes,BrowserRouter } from "react-router-dom"
import { lazy } from "react"
const Login = lazy(()=> import("@/Page/Auth/Login")) 
const Register = lazy(()=> import("@/Page/Auth/Register")) 
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App