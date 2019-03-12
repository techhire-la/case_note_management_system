import React, { Component } from "react";
import { Input } from "semantic-ui-react";

const SearchBar = () => {
  return (
    <div>
      <Input action={{ icon: "search" }} placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
