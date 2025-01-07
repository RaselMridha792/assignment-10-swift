import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { Helmet } from "react-helmet";
import logo from "../assets/signup/Login-bro.svg";

const Register = () => {
  const { handleRegisterUser, handleSignInGoogle, handleUpdateUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const location = useLocation();
  const [eye, setEye] = useState(true);
  const handleEye = () => {
    setEye(!eye);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "password should be at least one Uppercase One LowerCase and Must be 6 caracter or longer"
      );
      return;
    }
    handleRegisterUser(email, password)
      .then((result) => {
        toast.success("register successfull");
        handleUpdateUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            toast.success("register successfull");
          })
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleSinUpGoogle = () => {
    handleSignInGoogle()
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        toast.success("register successfull");
      })
      .catch((error) => {
        console.log(error);
        toast.success(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>register | Swift</title>
      </Helmet>
      {/* <div className="flex">
        <div className="">
          <ToastContainer></ToastContainer>
          <form onSubmit={handleRegister} className="card-body font-Roboto">
            <h1 className="text-center text-5xl font-Bebas">Register Now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                // type="password"
                type={eye?'password':'text'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div onClick={handleEye} className="absolute right-4 bottom-4">
                {eye?<FaEye />:<FaEyeSlash />}
              </div>
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn btn-primary">Register</button>
              <button
                onClick={handleSinUpGoogle}
                className="btn bg-gray-800 hover:bg-gray-500 text-white"
              >
                {" "}
                <FaGoogle /> Sign up With Google
              </button>
            </div>
            <p className="text-center">
              have an account?{" "}
              <Link className="text-red-500" to="/login">
                Login
              </Link>
            </p>
            <p className="text-red-500">{errorMessage}</p>
          </form>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
      </div> */}

      <div className="flex flex-col-reverse my-16 lg:flex-row items-center justify-center gap-8 p-4">
        <div className="w-full lg:w-1/3">
          <ToastContainer />
          <form onSubmit={handleRegister} className="card-body font-Roboto">
            <h1 className="text-center text-5xl font-Bebas mb-6">
              Register Now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={eye ? "password" : "text"}
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <div
                onClick={handleEye}
                className="absolute right-4 bottom-4 cursor-pointer"
              >
                {eye ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn btn-primary">Register</button>
              <button
                type="button"
                onClick={handleSinUpGoogle}
                className="btn bg-gray-800 hover:bg-gray-500 text-white flex items-center justify-center gap-2"
              >
                <FaGoogle /> Sign up With Google
              </button>
            </div>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link className="text-red-500" to="/login">
                Login
              </Link>
            </p>
            <p className="text-red-500 text-center">{errorMessage}</p>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3">
          <img
            src={logo}
            alt="Signup Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
