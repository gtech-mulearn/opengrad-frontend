
import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Home } from './Pages/Home/Home';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import { Volunteer } from './Pages/Volunteer/Volunteer';
import NotFound from './Pages/NotFound/NotFound';
import { ComingSoon } from './Pages/ComingSoon/ComingSoon';

import { AdminLogin } from './Pages/Admin/AdminLogin/AdminLogin';
import { AdminDashboard } from './Pages/Admin/AdminDashboard/AdminDashboard';
import { createClient } from '@supabase/supabase-js';
import { OurBlog } from './Pages/OurBlog/OurBlog';
import { DetailedBlog } from './Pages/OurBlog/DetailedBlog/DetailedBlog';



export const supabase = createClient(
  "https://qdcedrwncwklrdqhzbda.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkY2VkcnduY3drbHJkcWh6YmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyMTA5NjMsImV4cCI6MjAxOTc4Njk2M30.nxDc8SosMwlwDFP_sILt90aeeJpiGsHsX-8thEZTnp8"
);


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
      element: <OurBlog />,
    },
    {
      path: "/detailedblog/:id",
      element: <DetailedBlog />,
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
