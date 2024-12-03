import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </section>
    </>
  );
}

export default App;
