import { Routes,BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import PublicRoutes from "./Routes/PublicRoutes"
import AuthRoutes from "./Routes/AuthRoutes"
import Store from "./Config/Redux/Store"
const App = () => {
  return (
   <BrowserRouter>
   <Provider store={Store}>
   <Routes>
<AuthRoutes />
<PublicRoutes />
   </Routes>
   </Provider>
   </BrowserRouter>
  )
}

export default App