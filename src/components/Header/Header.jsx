import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
// bg-slate-100
const Header = () => {
  return (
    <nav className="bg-gray-200 ps">
      <div className="md:mx-20 lg:mx-36">
        <div style={{ height: "80px" }} className="navbar ">
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
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/status"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/job"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Applied Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-blue-600" : "default"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="text-2xl font-extrabold animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black"
            >
              DreaM
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/status"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/job"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end mb-2">
            <Link className=" mt-6 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Star Applying
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
