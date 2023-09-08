import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Information from "./pages/Information";
import Verification from "./pages/Verification";
import Information2 from "./pages/Information2";
function App() {
  return (
    <Router>
      {/* <div className='w-[100%]'> */}
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/information" element={<Information />} />
          <Route exact path="/information2" element={<Information2 />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        {/* </div> */}
      </>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
export default App;
