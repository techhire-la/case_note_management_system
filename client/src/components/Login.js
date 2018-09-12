import React, { Component } from 'react';
import { Container, Form, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../actions/authActions';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


      handleSubmit = (e) => {
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
