import React, { Component } from "react";
import { Input } from "semantic-ui-react";

const SearchBar = ({ handleClick }) => {
  return (
    <div>
      <Input
        action={{ icon: "search", onClick: handleClick }}
        placeholder="Search..."
        value="test"
      />
    </div>
  );
};

export default SearchBar;
