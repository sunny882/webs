import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  var datee = date.toDateString();
  let nav = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow mb-1 w-100 text-start p-0 pb-2 ">
        <div className="container-fluid">
          <a
            className="navbar-brand ps-3 border-end pe-3 border-dark"
            onClick={() => {
              nav("/");
            }}
            href="/"
          >
            SHP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    nav("/");
                  }}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-current="page" onClick={() => {
                  nav("/Main2");
                }}>
                  Main2
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Panj Takht
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      1. Akal Takht Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      2. Takht Sri Keshgarh Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      3. Takht Sri Damdama Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      4. Takht Sri Patna Sahib
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      5. Takht Sri Hazur Sahib
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ten Gurus
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to={"/G1"}>
                      1. Guru Nanak Dev Ji
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/G2"}>
                      2. Guru Angad Dev ji
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      3. Guru Amardas Sahib Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      4. Guru Ram Das Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      5. Guru Arjan Dev Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      6. Guru Har Gobind Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      7. Guru Har Rai Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      8. Guru Har Krishan Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      9. Guru Tegh Bahadur Ji
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      10. Guru Gobind Singh ji
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Sri Guru Granth Sahib Ji
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {strTime + " - " + datee}
          </div>
        </div>
      </nav >
    </>
  );
}
