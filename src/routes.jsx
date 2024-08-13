import {
    createBrowserRouter
  } from "react-router-dom"
import SignPage from "./pages/auth/SignUp/SignUpPage"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignPage />,
    },
  ])

  export default router