import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Message from "./components/Message";
import Contact from "./components/Contact";
import MyJobs from "./components/MyJobs";
import RequestPage from "./components/RequestPage";
import CreateRequest from "./components/CreateRequest";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/message" element={<Message />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/requests" element={<RequestPage />} />
          <Route path="/create" element={<CreateRequest />} />
          <Route path="/myjobs" element={<MyJobs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
