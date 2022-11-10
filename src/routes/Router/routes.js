import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import AllService from "../../Pages/AllService/AllService";
import EditService from "../../Pages/AllService/EditService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details/Details";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/HomePage/Home/Home";
import EditMyReview from "../../Pages/MyReviewPage/EditMyReview";
import MyReview from "../../Pages/MyReviewPage/MyReview";
import Login from "../../Pages/RegisterAndLogin/Login";
import Register from "../../Pages/RegisterAndLogin/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://health-aid-server-shihab0.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/edit/:id",
        element: <EditService></EditService>,
        loader: ({ params }) =>
          fetch(
            `https://health-aid-server-shihab0.vercel.app/edit/${params.id}`
          ),
      },
      {
        path: "/editReview/:id",
        element: <EditMyReview></EditMyReview>,
        loader: ({ params }) =>
          fetch(
            `https://health-aid-server-shihab0.vercel.app/editReview/${params.id}`
          ),
      },
      {
        path: "myReview",
        element: <MyReview></MyReview>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
