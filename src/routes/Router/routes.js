import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import Details from "../../Pages/Details/Details";
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
      {
        path: "/allservices",
        element: <AllService></AllService>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/details/${params.id}`),
      },
    ],
  },
]);
