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
                <Link to="/CrickApi">CrickApi</Link>
            </li>
            <li className="nav-item">
              <Link to="/PointTable">PointTable</Link>
            </li>
          </ul>
        </div>
      </nav>
        <div><Outlet/></div>
    </>
  );
}
export default NavBar;
