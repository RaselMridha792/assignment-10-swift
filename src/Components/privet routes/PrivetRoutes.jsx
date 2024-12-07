import React, { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation()
  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivetRoutes;
