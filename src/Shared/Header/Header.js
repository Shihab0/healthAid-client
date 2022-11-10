import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ImAidKit } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const homeMenu = (
    <Link to="/home" className="btn btn-ghost">
      Home
    </Link>
  );
  const servicesMenu = (
    <Link to="/addService" className="btn btn-ghost">
      Add Service
    </Link>
  );
  const doctorMenu = (
    <Link to="/allservices" className="btn btn-ghost">
      Services
    </Link>
  );
  const reviewMenu = (
    <Link to="/myReview" className="btn btn-ghost">
      My Review
    </Link>
  );

  return (
    <div className="navbar bg-blue-200 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {homeMenu}
            {doctorMenu}
            {user?.uid && servicesMenu}
            {user?.uid && reviewMenu}
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost font-extrabold font-mono normal-case text-xl"
        >
          <ImAidKit className="mr-2" /> Health Aid
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {homeMenu}
          {doctorMenu}
          {user?.uid && servicesMenu}
          {user?.uid && reviewMenu}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <Link to="/register" className="btn btn-outline mr-2 hidden">
            Register
          </Link>
        ) : (
          <Link to="/register" className="btn btn-outline mr-2">
            Register
          </Link>
        )}
        {user?.email ? (
          <>
            <p className="text-xl hidden md:inline-block font-bold mr-3">
              Welcome, {user?.displayName}
            </p>
            <Link
              onClick={logOutUser}
              className="btn md:btn-md hidden md:block btn-outline p-3 bg-red-300"
            >
              Logout <FiLogOut className="ml-1" />
            </Link>
          </>
        ) : (
          <Link to="/login" className="btn btn-outline">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
