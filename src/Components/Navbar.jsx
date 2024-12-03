import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center py-5">
        <div className="hidden md:flex">
          <p>Push Your Limits, Play with Passion!</p>
        </div>
        <div className="flex space-x-2">
          <h1>Change Theme </h1>
          <input
            type="checkbox"
            value="dark"
            className="toggle theme-controller"
          />
        </div>
      </div>
      <div className="navbar bg-gray-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/">home</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <img className="w-40" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 *:text-xl">
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
