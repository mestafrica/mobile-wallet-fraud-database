import SignUp from "./pages/auth/signup/index.jsx"
import LogIn from "./pages/auth/login/index.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RecoverPassword from "./pages/auth/recover-password"



function App() {
  const router = createBrowserRouter ([
{
  path: "/SignUp",
  element: < SignUp/>
},
{
  path: "/LogIn",
  element: <LogIn/>
},
{
  path: "/RecoverPassword",
  element: <RecoverPassword/>
}
  ])


  return (
<>
<RouterProvider router={router} />
</>
  )
}

export default App
