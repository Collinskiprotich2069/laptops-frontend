import Home from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/LoginPage";
import './styles/Header.css';
import AboutUs from "./Pages/About";

function App() {
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
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
