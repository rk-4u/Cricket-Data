import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Cricket Data
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to="/CrickApi">
                  <button className="btn me-2 btn-outline-success" type="button">CrickApi</button>
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/PointTable">
              <button className="btn me-2 btn-outline-success" type="button">PointTable</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        <div><Outlet/></div>
    </>
  );
}
export default NavBar;
