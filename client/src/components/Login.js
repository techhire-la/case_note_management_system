import React, { Component, Fragment } from "react";
//import { Container, Form, Button, Header } from 'semantic-ui-react';
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../actions/authActions";
import { Button, Card, Form, Grid } from "semantic-ui-react";
import styles from "./Login.css";

class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      errorAlert: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      console.log("errors==", nextProps.errors);
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

  handleSubmit = e => {
    console.log("In handle submit");
    // var url = 'http://localhost:5000/'
    let formFields = { email: this.state.email, password: this.state.password };
    this.setState = { formFields };

    // axios.post(url + '../../routes/api/users/login', formFields).then( res => {
    //     console.log('work');
    // }).catch(e => console.log(e));
    axios
      .post("/api/users/login", formFields)
      .then(res => {
        console.log(res.data);
      })
      .catch(e => console.log(e));
  };

  render() {
    const { errors } = this.state;

    return (
      <Fragment>
        <div class="ui centered grid container">
          <div class="nine wide column">
            <div class="ui icon warning message">
              <i class="techhire" />
              <div class="content">
                <div class="header">Login In!</div>
                <p>Enter Note Here!</p>
              </div>
            </div>

            <div class="ui fluid card">
              <div class="content">
                <form class="ui form" method="POST">
                  <div class="field">
                    <label>User</label>
                    <input
                      value={this.state.email}
                      onChange={this.onChange}
                      type="text"
                      name="email"
                      placeholder="Email"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.email
                      })}
                    />
                  </div>
                  <div class="field">
                    <input
                      type="password"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.password
                      })}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  <button
                    onClick={this.onSubmit}
                    class="ui primary labeled icon button"
                    type="submit"
                  >
                    <i class="unlock alternate icon" />
                    Login
                  </button>
                  <p>
                    {" "}
                    <br />
                    Looking for the question form? Click <a href="/">here</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
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

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
