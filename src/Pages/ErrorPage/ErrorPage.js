import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../../assets/images/error.webp";

const ErrorPage = () => {
  return (
    <div className="">
      <img
        className="w-screen h-screen opacity-50"
        src={errorPage}
        alt=""
        srcset=""
      />
      <h2 className="text-4xl md:text-7xl text-red-700 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        404 Not Found <br />
        <Link className="underline text-green-800" to="/">
          Go to home
        </Link>
      </h2>
    </div>
  );
};

export default ErrorPage;
