import React from 'react'
import ReactDOM from 'react-dom/client'

import "./app.css"
import 'bootstrap/dist/css/bootstrap.css';

import App from './App.jsx'
import Login from "./components/login"
import Signup from "./components/signup"
import BusinessLogin from "./components/businessLogin"
import BusinessSignup from "./components/businessSignup"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/business-login",
    element: <BusinessLogin/>
  },
  {
    path: "/business-signup",
    element: <BusinessSignup/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
