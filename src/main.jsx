import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import Home from './Pages/Home';
import SignUpSection from './Pages/SignUp';
import LoginSection from './Pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/signUp',
        element: <SignUpSection />
      },
      {
        path: '/logIn',
        element: <LoginSection />
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router} />
  </StrictMode>,
)
