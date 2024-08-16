//src/App.tsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/home';
import AccountPage from './pages/accountpage';
import SearchModal from './components/searchmodal';
import SubmitReport from './components/submitreport';
import UpVote from './components/upvote';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import RecoverPassword from './pages/auth/recoverPassword';
import Verification from './pages/auth/verification';
import SetNewPassword from './pages/auth/newPassword';

const router = createBrowserRouter([    
        { path:"/" ,element:<Home /> },
        { path:"/account", element:<AccountPage /> },
        { path:"/search", element:<SearchModal />} ,
        { path:"/submit", element:<SubmitReport /> },
        { path:"/upvote", element:<UpVote /> },
        { path:"/login", element:<Login />},
        { path:"/signup", element:<Signup />} ,
        { path:"/forgot-password", element:<RecoverPassword />} ,
        { path:"/verification", element:<Verification />},
        { path:"/new-password", element:<SetNewPassword />} ,
]);

  function App() {
    return <RouterProvider router={router} />;
  }
  
  export default App;