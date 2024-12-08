import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <section className="bg-gray-800 *:text-white">
        <Footer></Footer>
      </section>
      </section>
    </>
  );
}

export default App;
