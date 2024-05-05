import { Route,Routes,BrowserRouter } from "react-router-dom"
import { lazy } from "react"
const Login = lazy(()=> import("@/Page/Auth/Login")) 
const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App