import React from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
import { withRouter } from "react-router-dom";

class AddFellow extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: ""
  };

  notificationSuccess = () => {
    NotificationManager.success(
      "You have successfully added a fellow to the system.",
      "Success"
    );
  };

  notificationError = () => {
    NotificationManager.error("There was an error. Please try again.", "Error");
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddFellow = () => {
    const { firstName, lastName, email, phoneNumber, address } = this.state;
    console.log("hit handleAddFellow");
    axios
      .post("/api/clients/addFellow", {
        firstName,
        lastName,
        email,
        phoneNumber,
        address
      })
      .then(result => {
        this.props.redirectToHome();
      })
      .catch(err => {
        this.notificationError();
        console.error(err);
      });
  };
  render() {
    return (
      <div>
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
        <NotificationContainer />
      </div>
    );
  }
}

export default withRouter(AddFellow);
