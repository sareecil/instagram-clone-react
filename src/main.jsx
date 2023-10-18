import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App.jsx'
import Home from './components/Home.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: "/profile",
            element: <Profile/>
        }
      ]
    },
  ]);




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
