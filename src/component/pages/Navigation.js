import React from "react";
import logo from '../../images/t-logo.png';


export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
    <div className="container">
      <a className="navbar-brand">
        <img id="logo" src={logo} alt="logo" width="110" height="110"/>
      </a>
      <h5 id="naviname" className="fs-2">Trishane Wijeyawickrema</h5>
    <ul className="nav justify-content-end fs-5">
      <li className="nav-item" id="navi">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Profile
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a
          href="#project"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" id="navi">
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  </nav>
  );
}
