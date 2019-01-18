import React from "react";
import { Form } from "semantic-ui-react";

class AddFellow extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFellow() {
    console.log("hello");
  }
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
        <button type="button btn btn-primary" onClick={this.handleAddFellow}>
          Add New Fellow
        </button>
      </Form>
    );
  }
}

export default AddFellow;
