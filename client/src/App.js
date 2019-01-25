import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/dashboard/Dashboard";
import AddFellow from "./components/dashboard/AddFellow";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/common/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

//import Answers from './Answers'
import Questionnaire from "./Questionnaire";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Route exact path="/" component={Questionnaire} />
              <Route exact path="/login" component={Login} />
            </div>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/addfellow" component={AddFellow} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// <Questionnaire />
