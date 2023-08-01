import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from './App.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import Register from './pages/Register/Register.jsx'
import Error from "./pages/Error/Error.jsx"
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path:"/sign-in",
    element: <SignIn />,
  },
  {
    path:"/create-account",
    element: <Register />,
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
