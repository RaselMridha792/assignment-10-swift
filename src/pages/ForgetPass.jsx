import React, { useContext, useState } from "react";
import { UserContext } from "../context/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { Helmet } from "react-helmet";
const ForgetPass = () => {
  const { resetmail } = useContext(UserContext);
  const [email, setEmail] = useState(resetmail || "");

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (email) {
      sendPasswordResetEmail(auth, email).then(() => {
        window.open("https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox");
        alert("sent an email, please check your email");
      });
    }
  };
  return (
    <>
        <Helmet>
      <title>Password reset | Swift</title>
    </Helmet>
      <div className="card font-Roboto bg-base-100 max-w-md mx-auto my-20 shrink-0 shadow-2xl">
        <form onSubmit={handleSendEmail} className="card-body">
          <h1 className="text-2xl font-bold text-center">
            Enter Email to Reset Password
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              value={email}
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-warning">SendEmail</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPass;
