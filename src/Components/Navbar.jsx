import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Tooltip } from "react-tooltip";
import "react-toastify/dist/ReactToastify.css";
import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const links = (
    <>
      <div className="flex flex-col lg:flex-row gap-5">
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/all-equipment">All Sports Equipment</NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/add-equipment">Add Equipment</NavLink>
            </li>
            <li>
              <NavLink to={`/myEquipments/${user?.email}`}>
                My Equipment
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/contacts">contact Us</NavLink>
        </li>
      </div>
    </>
  );

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("logout successfull");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="w-full fixed z-10 bg-white border-b-2 top-0">
        <div className="navbar md:w-10/12 mx-auto px-5">
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
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
              <Link to="/">
                <img className="w-40" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end md:gap-5">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:h-8 h-5 md:w-8 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {user ? (
              <>
                <div className="avatar mr-2">
                  <div className="md:w-12 w-8 rounded-full">
                    <Link to="/profile" id="not-clickable">
                      <img src={user.photoURL} />
                    </Link>
                    <Tooltip anchorSelect="#not-clickable">
                      <p>{user.displayName}</p>
                    </Tooltip>
                  </div>
                </div>
                <Link
                  onClick={handleSignOut}
                  to="/login"
                  className="flex items-center gap-1 font-Roboto md:text-xl"
                >
                  <BiLogOut /> Logout
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1 font-Roboto md:text-xl"
              >
                <BiLogIn /> Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
