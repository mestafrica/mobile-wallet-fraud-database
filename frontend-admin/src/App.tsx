
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminResetPassword from "./components/AdminResetPassword";
import AdminRecoverPassword from "./components/AdminRecoverPassword";

import "./App.css";

import AdminNav from './components/adminNav'
import './App.css'


const router = createBrowserRouter([
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/admin-reset-password", element: <AdminResetPassword /> },
  { path: "/admin-recover-password", element: <AdminRecoverPassword/> },
]);

 
function App() {
  return <RouterProvider router={router} />;

  return (
    <>
      <AdminNav />

    </>
  )

}

export default App;
