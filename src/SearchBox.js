import React from "react";

const SearchBox = ({ SearchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="Search"
        placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
