import { Routes, Route, Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" end className={({ isActive }) => (isActive ? "nav-active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" end className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<h1>about</h1>} />
          <Route path="/users" element={<h1>users</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default Navigation;
