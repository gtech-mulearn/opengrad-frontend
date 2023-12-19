
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { Volunteer } from './Pages/Volunteer/Volunteer';

function App() {
  const router = createBrowserRouter([
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
  ]);
  return <RouterProvider router={router} />;
}

export default App
