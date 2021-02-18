import React from "react";
const Toggle = () => {
  return (
    <>
      <button type="button" id="sidebarCollapse" className="btn btn-warning">
        <i className="fas fa-align-left "></i>
      </button>
      <button
        className="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-align-justify"></i>
      </button>
    </>
  );
};
export default Toggle;
