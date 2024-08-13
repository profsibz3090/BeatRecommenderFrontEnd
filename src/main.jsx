import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider, 
  createBrowserRouter
} from "react-router-dom"
import './index.css'
import router from "./routes"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
)
