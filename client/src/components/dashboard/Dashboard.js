import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer
} from "react-notifications";
// import { getCurrentProfile } from '../../actions/dashboardActions';
// import { getClientList } from '../../actions/dashboardActions';
import { getDashboard } from "../../actions/dashboardActions";
import Spinner from "../common/Spinner";
import {
  Image,
  Item,
  Responsive,
  Segment,
  Form,
  Button
} from "semantic-ui-react";
import Client from "./Client";
import AddFellow from "./AddFellow";

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      clients: [],
      loading: false,
      errors: {},
      homeActive: true,
      addFellowActive: false
    };

    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");

    axios
      .get("api/clients/all")
      .then(res => {
        console.log(res.data);

        this.setState({ clients: res.data });
      })
      .catch(e => console.log(e));

    // this.props.getDashboard();
    // axios
    //     .get('/api/users/register', userData)
    //     .then(res => history.push('/login'))
    //     .catch(err =>
    //         dispatch({
    //             type: GET_ERRORS,
    //             payload: err.response.data
    //         })
    //     );

    // axios
    //     .get('/api/dashboard/all')
    //     .then(response => {this.setState({clients: response.data})
    // })
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  homeFunc() {
    this.setState({ homeActive: true, addFellowActive: false });
  }

  redirectToHome() {
    this.setState({ homeActive: true, addFellowActive: false });
    this.props.history.push("/dashboard");
    NotificationManager.success(
      "You have successfully added a fellow to the system.",
      "Success"
    );
  }

  addFellow() {
    this.setState({ homeActive: false, addFellowActive: true });
    this.props.history.push("/addfellow");
  }

  render() {
    var clients = this.state.clients;

    return (
      <div>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a
              className={this.state.homeActive ? "item active" : "item"}
              onClick={() => this.homeFunc()}
            >
              Home
            </a>
            <a
              className={this.state.addFellowActive ? "item active" : "item"}
              onClick={() => this.addFellow()}
            >
              Add Fellow
            </a>
            <a
              href="/login"
              className="right menu item"
              onClick={this.onLogoutClick.bind(this)}
            >
              <div className="ui primary button">Log Out</div>
            </a>
          </div>
        </div>

        {this.state.homeActive ? (
          <div>
            <h1>Client List</h1>
            <div />
            <div className="ui filterContainer catalogue_items">
              <Item.Group>
                {clients.map((client, index) => (
                  <Client
                    key={index}
                    first_name={client.first_name}
                    last_name={client.last_name}
                    email={client.email}
                    phone={client.phone}
                    count={index + 1}
                  />
                ))}
              </Item.Group>
            </div>
          </div>
        ) : null}
        {this.state.addFellowActive ? (
          <AddFellow homeFunc={this.redirectToHome.bind(this)} />
        ) : null}
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
