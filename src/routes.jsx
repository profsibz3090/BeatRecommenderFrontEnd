import {
    createBrowserRouter
  } from "react-router-dom"
import SignPage from "./pages/auth/SignUp/SignUpPage"
import LoginPage from "./pages/auth/Login/LoginPage"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
        path: '/signup',
        element: <SignPage />
    }
  ])

  export default router