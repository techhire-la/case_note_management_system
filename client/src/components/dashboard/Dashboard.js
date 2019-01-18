import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
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
import { Navbar, NavLink } from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      clients: [],
      loading: false,
      errors: {}
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

  render() {
    var clients = this.state.clients;

    return (
      <div>
        <Navbar>
          <NavLink href="#">Add Fellow</NavLink>
        </Navbar>
        <h1>Client List</h1>
        <div>
          <a href="/login" onClick={this.onLogoutClick.bind(this)}>
            LogOut
          </a>
        </div>
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
