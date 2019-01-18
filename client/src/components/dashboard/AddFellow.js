import React from "react";
import { Form } from "semantic-ui-react";

const AddFellow = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-first-name"
        label="First name"
        placeholder="First name"
      />
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-last-name"
        label="Last name"
        placeholder="Last name"
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-first-name"
        label="Phone Number"
        placeholder="Phone Number"
      />

      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-first-name"
        label="Email"
        placeholder="Email"
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Input
        fluid
        id="form-subcomponent-shorthand-input-first-name"
        label="Address"
        placeholder="Address"
      />
    </Form.Group>
  </Form>
);

export default AddFellow;
