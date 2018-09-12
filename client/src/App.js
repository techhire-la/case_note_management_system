import React, { Component } from 'react';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

//import Answers from './Answers'
import Questionnaire from './Questionnaire'

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
        window.location.href = '/login';
    }
}


class App extends Component {
  render() {
    return (

        <Provider store={store}>
            <Router>
                <div className="">
                    <Route exact path="/" component={Login} />
                </div>
            </Router>
        </Provider>

    );
  }
}

export default App;

// <Questionnaire />

<Router>
   <div className="">
       <Route exact path="/login" component={Login} />
   </div>
</Router>