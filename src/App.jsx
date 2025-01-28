import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Loginpage';
import Registration from './pages/Registerpage';

import LoanRegisterPage from './pages/LoanRegisterpage';
import LoanApplication from './pages/LoanApplication';

export default function App() {

    const router = createBrowserRouter([
        { path: "/", element: <Landingpage/>},
        { path: "/admin", element: <AdminDashboard/>},
        { path: "/LoanApplication", element: <LoanApplication/>},
        { path: "/LoanRegisterpage", element: <LoanRegisterPage/>},
        { path: "/Login", element: <Login/>},
        { path: "/register", element: <Registration/>},
      ]);
      
 return  <RouterProvider router={router}/>
}