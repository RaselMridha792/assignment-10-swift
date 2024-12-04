import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { handleRegisterUser, handleSignInGoogle, handleUpdateUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    handleRegisterUser(email, password)
      .then((result) => {
        handleUpdateUser({displayName: name, photoURL: photo})
        .then(()=>{
          navigate("/");
        })
        .catch(error=>{
          console.log(error)
        })
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSinUpGoogle = () => {
    handleSignInGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
