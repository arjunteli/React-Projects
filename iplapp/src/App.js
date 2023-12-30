import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mi from "./pages/Mi";
import Csk from "./pages/Csk";
import Rcb from "./pages/Rcb";
import Navbar from "./components/Navbar";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Csk" element={<Csk />} />
        <Route path="/Mi" element={<Mi />} />
        <Route path="/Rcb" element={<Rcb />} />
      </Routes>
    
  );
}

export default App;
