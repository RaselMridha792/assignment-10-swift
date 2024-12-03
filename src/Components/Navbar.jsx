import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-5">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/all-equipment">All Sports Equipment</NavLink>
        </li>
        <li>
          <NavLink to="/add-equipment">Add Equipment</NavLink>
        </li>
        <li>
          <NavLink to="/my-equipment">My Equipment</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div>
      <div className="md:flex justify-between items-center py-5 w-10/12 mx-auto">
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
      <div className="bg-gray-800">
        <div className="navbar w-10/12 mx-auto text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <img className="w-40" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
