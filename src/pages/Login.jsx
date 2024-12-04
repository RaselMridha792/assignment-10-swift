import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { handleSignInUser, handleSignInGoogle } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    handleSignInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signInwithGoogle = () => {
    handleSignInGoogle()
      .then((result) => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
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
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
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
