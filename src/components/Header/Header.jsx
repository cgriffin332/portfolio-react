import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div>
      <header>
        {/* <!-- navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <!-- name on navbar --> */}
          <a className="navbar-brand nav-name text-white">Calvin Griffin</a>
          {/* <!-- collapse toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- About, Portfolio, Contact links on right of navbar --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-auto">
                {/* <!-- link to contact page --> */}
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item ml-auto">
                {/* <!-- link to portfolio page --> */}
                <Link className="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              {/* <!-- active page --> */}
              <li className="nav-item ml-auto">
                {/* <!-- link to about page --> */}
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
