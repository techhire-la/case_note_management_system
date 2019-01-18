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

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
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
            onChange={this.handleChange("firstName")}
          />
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-last-name"
            label="Last name"
            placeholder="Last name"
            onChange={this.handleChange("lastName")}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Phone Number"
            placeholder="Phone Number"
            onChange={this.handleChange("phoneNumber")}
          />

          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Email"
            placeholder="Email"
            onChange={this.handleChange("email")}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            id="form-subcomponent-shorthand-input-first-name"
            label="Address"
            placeholder="Address"
            onChange={this.handleChange("address")}
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
