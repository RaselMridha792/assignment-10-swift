import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Login = () => {
  const { handleSignInUser, handleSignInGoogle, handleReset, setUser } =
    useContext(UserContext);
  const emailRef = useRef();
  const navigate = useNavigate();
  const [eye, setEye] = useState(true);
  const location = useLocation();
  const handleEye = () => {
    setEye(!eye);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("successfully logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const signInwithGoogle = () => {
    handleSignInGoogle()
      .then((result) => {
        navigate("/");
        toast.success("successfully logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (emailRef) {
      handleReset(emailRef);
      navigate("/forgetPass");
    } else {
      toast.error("please enter email to reset password");
    }
  };
  return (
    <>
      <Helmet>
        <title>Login | Swift</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <ToastContainer></ToastContainer>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body font-Roboto">
            <h1 className="text-center text-5xl font-Bebas">Login Now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
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
                type={eye ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div onClick={handleEye} className="absolute right-4 bottom-12">
                {eye ? <FaEye /> : <FaEyeSlash />}
              </div>
              <label className="label">
                <Link
                  onClick={handleResetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6 space-y-4">
              <button className="btn btn-primary">Login</button>
              <button
                onClick={signInwithGoogle}
                className="btn bg-gray-800 hover:bg-gray-500 text-white"
              >
                {" "}
                <FaGoogle /> Sign in With Google
              </button>
            </div>
            <p className="text-center">
              don't have any account?{" "}
              <Link className="text-red-500" to="/register">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
