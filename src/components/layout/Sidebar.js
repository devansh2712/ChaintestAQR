import React from "react";
import Logo from "../common/Logo";
import Nav from "../common/Nav";

const Sidebar = () => {
  return (
    <nav id="sidebar" className="shadow-lg">
      <Logo />
      <Nav />
    </nav>
  );
};
export default Sidebar;
