// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Main2 from "./components/Main2";
import G1 from "./components/tg/G1";
import G2 from "./components/tg/G2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ fontFamily: "Andale Mono, monospace" }}>
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="main2" element={<Main2 />} />
          <Route path="/" element={<Main />} />
          <Route path="/G1" element={<G1 />} />
          <Route path="/G2" element={<G2 />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
