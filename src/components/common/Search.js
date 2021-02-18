import React from "react";

const Search = () => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search .."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Go!
        </button>
      </div>
    </div>
  );
};
export default Search;
