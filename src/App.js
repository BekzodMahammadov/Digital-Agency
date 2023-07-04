import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Project from "./pages/Project";
// import Pages from "./pages/Page";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import OurTeam from "./pages/Our Team/index";
import Testi from "./pages/Testi";
// import Page404 from "./pages/404page/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/testimonial" element={<Testi />} />
        {/* <Route path="/page404" element={<Page404 />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
