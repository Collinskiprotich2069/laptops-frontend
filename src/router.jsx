import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/HomePage";
import AboutUs from "./Pages/About";
import Login from "./Pages/LoginPage";
import "./App.css";
function AppRouter() {
  return (

      <BrowserRouter>
        <nav className="header-elements">
          <li>
            <ul>
              <Link to="">Logo</Link>
            </ul>
            <ul>
              <Link to="about">About Us</Link>
            </ul>
            <ul>
              <Link to="login">login/Logout</Link>
            </ul>
          </li>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
  
  );
}

export default AppRouter;
