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
import AllEquipment from "./pages/AllEquipment.jsx";
import Details from "./pages/Details.jsx";
import MyEquipments from "./pages/MyEquipments.jsx";
import UpdateEquipment from "./pages/UpdateEquipment.jsx";
import ForgetPass from "./pages/ForgetPass.jsx";
import PrivetRoutes from "./Components/privet routes/PrivetRoutes.jsx";
import ShopNow from "./pages/ShopNow.jsx";
import Contacts from "./pages/about us/Contacts.jsx";
import CardProvider from "./context/CartProvider.jsx";

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
        element: (
          <PrivetRoutes>
            <AddProducts></AddProducts>
          </PrivetRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRoutes>
            <Profile></Profile>
          </PrivetRoutes>
        ),
      },
      {
        path: "/all-equipment",
        element: <AllEquipment></AllEquipment>,
        loader: () =>
          fetch("https://a-sports-equipment-store-server.vercel.app/allSports"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,

        loader: ({ params }) =>
          fetch(
            `https://a-sports-equipment-store-server.vercel.app/sports/${params.id}`
          ),
      },
      {
        path: "/myEquipments/:user",
        element: (
          <PrivetRoutes>
            <MyEquipments></MyEquipments>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a-sports-equipment-store-server.vercel.app/myEquipments/${params.user}`
          ),
      },
      {
        path: "/updateEquipment/:id",
        element: (
          <PrivetRoutes>
            <UpdateEquipment></UpdateEquipment>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://a-sports-equipment-store-server.vercel.app/sports/${params.id}`
          ),
      },
      {
        path: "/forgetPass",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "/shopnow/:id",
        element: <ShopNow></ShopNow>,
        loader: ({ params }) =>
          fetch(
            `https://a-sports-equipment-store-server.vercel.app/shopNow/${params.id}`
          ),
      },
      {
        path: "/contacts",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <CardProvider>
        <RouterProvider router={routes}></RouterProvider>
      </CardProvider>
    </AuthContext>
  </StrictMode>
);
