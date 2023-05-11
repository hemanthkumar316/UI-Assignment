import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            {/* logo */}
            <h2 className="text-primary ml-4">EDYODA</h2>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Dropdown 1 */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Courses 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Courses 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Courses 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Courses 4
                    </a>
                  </li>
                </ul>
              </li>
              {/*  Dropdown 2*/}
              <li className="nav-item dropdown ml-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Programs
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Programs 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Programs 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Programs 3
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Programs 4
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* second ul */}
            <ul className="navbar-nav  px-5">
              <li clasName="list-item">
                <i className="fa-solid fa-magnifying-glass fa-1x mt-2"></i>
              </li>
              <li className="list-item ml-4">
                <h6 className="text-dark ml-1 mt-2">Log in</h6>
              </li>
              <li className="list-item ml-3">
                <button className="btn  btn-primary btn-block rounded-pill px-3">
                  JOIN NOW
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
