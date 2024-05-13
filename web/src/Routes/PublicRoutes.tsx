import { Route } from "react-router-dom"
import { lazy } from "react"
const PublicRoutes = () => {
    const Home = lazy(()=>import('@/Page/Home'))
  return (
    <>
    <Route path='/' element={<Home/>}/>

   </>
  )
}

export default PublicRoutes