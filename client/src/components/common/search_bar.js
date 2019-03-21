import React, { Component } from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ handleSearchClick }) => {
  return (
    <div>
      <Input
        action={{ icon: "search", onClick: handleSearchClick }}
        placeholder="Search..."
        // value="test"
      />
    </div>
  );
};

export default SearchBar;
