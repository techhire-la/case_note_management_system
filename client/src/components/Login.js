import React, { Component } from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };


      this.handleSubmit = (e) => {
          console.log("In handle submit")
          // var url = 'http://localhost:5000/'
            let formFields = {email: this.state.email , password: this.state.password};
            this.setState = ({formFields});

            // axios.post(url + '../../routes/api/users/login', formFields).then( res => {
            //     console.log('work');
            // }).catch(e => console.log(e));
          axios.post('/api/users/login', formFields)
              .then( res => {
              console.log(res.data);
          }).catch(e => console.log(e));
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

export default Login;
