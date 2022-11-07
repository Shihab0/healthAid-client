import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const homeMenu = (
    <Link to="/home" className="btn btn-ghost">
      Home
    </Link>
  );
  const servicesMenu = (
    <Link to="/services" className="btn btn-ghost">
      Services
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
            {servicesMenu}
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost font-extrabold font-mono normal-case text-xl"
        >
          Health Aid
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {homeMenu}
          {servicesMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/" className="btn">
          Get started
        </a>
      </div>
    </div>
  );
};

export default Header;