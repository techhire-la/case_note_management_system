import React, { Component } from "react";
//import { Container, Form, Button, Header } from 'semantic-ui-react';
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../actions/authActions";
// import { Button, Card, Form } from "semantic-ui-react";
// import styles from "./Login.css";

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
      <div>
        <div className="page-login">
          <div className="ui centered grid container">
            <div className="nine wide column">
              <div className="ui icon warning message">
                <i className="techhire" />
                <div className="content">
                  <div className="header">Login In!</div>
                  <p>Enter Note Here!</p>
                </div>
              </div>

              <div className="ui fluid card">
                <div className="content">
                  <form className="ui form" method="POST">
                    <div className="field">
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
                    <div className="field">
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
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={this.onSubmit}
                      className="ui primary labeled icon button"
                      type="submit"
                    >
                      <i className="unlock alternate icon" />
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
        </div>

        <div className="login">
          <div className="container col-md-8 ">
            <div className="row">
              <div className="col-md-8 " />
            </div>
          </div>
        </div>
      </div>
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
