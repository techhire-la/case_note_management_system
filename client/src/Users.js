import React, { Component } from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = (e) => {
            console.log("you've hit the click")
            // axios
        }
    }

  render() {
    return (
      <Container className='login-style'>
        <Header as='h1'>Log In</Header>
        <Form>
          <Form.Input label='Email' id="email"/>
          <Form.Input label='Password' type='password' id="password" />
          <Button primary onClick={this.handleSubmit}type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default Users;
