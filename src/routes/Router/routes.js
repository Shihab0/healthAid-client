import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/HomePage/Home/Home";
import Login from "../../Pages/RegisterAndLogin/Login";
import Register from "../../Pages/RegisterAndLogin/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
