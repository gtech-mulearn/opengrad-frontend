
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { Volunteer } from './Pages/Volunteer/Volunteer';
import NotFound from './Pages/NotFound/NotFound';
import { ComingSoon } from './Pages/ComingSoon/ComingSoon';

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
  ]);
  return <RouterProvider router={router} />;
}

export default App
