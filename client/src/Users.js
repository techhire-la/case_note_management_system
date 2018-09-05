import React, { Component } from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

    this.handleSubmit = (e) => {
          let formFields = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
          };

          this.setState({formFields});
          let url = `${window.location.protocol}//${window.location.host}/api/users/login`;
          axios.post(url, formFields).then((res) => {
              console.log('work');
          }).catch((e) => console.log(e + " This printed form Users.js"));
      }
    }

    render() {
      return (
        <Container className='login-style'>
          <Header as='h1'>Log In</Header>
          <Form>
            <Form.Input label='Email' id="email"/>
            <Form.Input label='Password' type='password' id="password" />
            <Button primary onClick={this.handleSubmit} type='submit'>Submit</Button>
          </Form>
        </Container>
      );
    }
}

export default Users;
