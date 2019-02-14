import React, { Component } from "react";
import axios from "axios";

export default class Upload extends Component {
  state = {
    description: "",
    selectedFile: ""
  };

  onChange = e => {
    e.target.name === "selectedFile"
      ? this.setState({
          selectedFile: e.target.files[0]
        })
      : this.setState({
          [e.target.name]: e.target.value
        });
  };

  onSubmit = e => {
    e.preventDefault();
    const { description, selectedFile } = this.state;
    const formData = new FormData();

    formData.append("description", description);
    formData.append("selectedFile", selectedFile);

    axios.post("/", formData);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="file" name="selectedFile" onChange={this.onChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
