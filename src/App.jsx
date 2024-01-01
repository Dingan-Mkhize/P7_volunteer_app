import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
//import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
// import AboutPage from "./components/AboutPage";
// import SignUpPage from "./components/SignUpPage";
// import MapPage from "./components/MapPage";
// import HelpRequestPage from "./components/HelpRequestPage";
// import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/help-request" element={<HelpRequestPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
