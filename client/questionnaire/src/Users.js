import React, { Component } from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';

class Users extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Log In</Header>
        <Form>
          <Form.Input label='Email' />
          <Form.Input label='Password' type='password' />
          <Button primary type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Users;
