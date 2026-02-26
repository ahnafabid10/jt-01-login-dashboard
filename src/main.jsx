import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./Login/Login"
import DashBoard from './DashBoard/DashBoard';
import DashBoardLayout from './DashBoard/DashboardLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: '/dashboard',
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        index: true,
        element: <DashBoard></DashBoard>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
