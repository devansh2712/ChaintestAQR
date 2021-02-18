import React from "react";
import Language from "../common/Language";
import Search from "../common/Search";
import Notification from "../common/Notification";
import Settings from "../common/Settings";
import Toggle from "../common/Toggle";
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Toggle />
          <div
            className="collapse navbar-collapse pt-2"
            id="navbarSupportedContent"
          >
            <h5 className="mr-auto text-dark pl-4 "> Hi, Admin</h5>

            <ul className="nav navbar-nav ml-auto pt-2">
              <li className="nav-item active">
                <Search />
              </li>
              <li className="nav-item mx-3">
                <Language />
              </li>
              <li className="nav-item">
                <Notification />
              </li>
              <li className="nav-item">
                <Settings />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div className="sec_sec"> </div>
      </section>
    </header>
  );
};
export default Header;
