import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";

class AddFellow extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFellow = () => {
    const { firstName, lastName, email, phoneNumber, address } = this.state;
    console.log("hit handleAddFellow");
    debugger;
    axios
      .post("/api/clients/addFellow", {
        firstName,
        lastName,
        email,
        phoneNumber,
        address
      })
      .then(result => {
        console.log("success!");
        // this.props.history.push("/login");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <Form style={{ padding: "5rem" }}>
        <h3>Add Fellow</h3>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="First name"
            placeholder="First name"
            name="firstName"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
            name="lastName"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Phone Number"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={this.handleChange}
          />

          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Email"
            placeholder="Email"
            name="email"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Address"
            placeholder="Address"
            name="address"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button type="button" color="green" onClick={this.handleAddFellow}>
          Add New Fellow
        </Button>
      </Form>
    );
  }
}

export default AddFellow;
