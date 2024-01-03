
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { Volunteer } from './Pages/Volunteer/Volunteer';
import NotFound from './Pages/NotFound/NotFound';
import { ComingSoon } from './Pages/ComingSoon/ComingSoon';

import { AdminLogin } from './Pages/Admin/AdminLogin/AdminLogin';
import { AdminDashboard } from './Pages/Admin/AdminDashboard/AdminDashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/joinus",
      element: <Volunteer />,
    },
    {
      path: "/ourwork",
      element: <ComingSoon />,
    },
    {
      path: "/ourblog",
      element: <ComingSoon />,
    },
    {
      path: "/admin",
      element: <AdminLogin />,
    },
    {
      path: "/admindashboard",
      element: <AdminDashboard />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
