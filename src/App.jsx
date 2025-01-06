import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <section className="bg-slate-100">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div className="bg-gray-800 *:text-white">
        <Footer></Footer>
      </div>
      </section>
    </>
  );
}

export default App;
