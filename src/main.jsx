import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Errorpage from "./pages/Errorpage.jsx";
import AddProducts from "./pages/AddProducts.jsx";
import AuthContext from "./context/AuthContext.jsx";
import Profile from "./pages/Profile.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-equipment",
        element: <AddProducts></AddProducts>,
      },
      {
        path : "/profile",
        element: <Profile></Profile>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={routes}></RouterProvider>
    </AuthContext>
  </StrictMode>
);
