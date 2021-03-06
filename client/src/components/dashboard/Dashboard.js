import React, { Component, Fragment } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import SearchClients from "./SearchClients";
// import { getCurrentProfile } from '../../actions/dashboardActions';
// import { getClientList } from '../../actions/dashboardActions';
import { getDashboard, getClients } from "../../actions/dashboardActions";
import Spinner from "../common/Spinner";
import {
  Image,
  Item,
  Responsive,
  Segment,
  Form,
  Button,
  Search
} from "semantic-ui-react";
import Client from "./Client";
import _ from "lodash";

import ClientPagination from "../common/Pagination";
import paginate from "../../utils/paginate";

class Dashboard extends Component {
  constructor(props) {
    super();
    this.state = {
      clients: [],
      sortDirection: "DESC",
      errors: {},
      homeActive: true,
      addFellowActive: false,
      activePage: 1,
      pageSize: 5,
      searchResults: [],
      searchLookupValue: "",
      searchSelection: ""
    };

      this.handlePageChange = this.handlePageChange.bind(this);


  }

  componentDidMount() {
    if (this.props.clients.length === 0) {
      // if the page is refreshed
      this.props.getClients(); // call axios from redux -> update props
    }
    this.setState({
      clients: this.props.clients,
      searchResults: [],
      searchLookupValue: "",
      searchSelection: "" // reset search component
    });
  }

  componentWillReceiveProps(nextProps) {
    // updated props if page is refreshed
    if (this.props !== nextProps) {
      this.setState({
        clients: nextProps.clients
      });
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  ////////////// ADD FELLOW ////////////////////////////////

  homeFunc() {
    this.setState({ homeActive: true, addFellowActive: false });
  }

  addFellow() {
    this.setState({ homeActive: false, addFellowActive: true });
    this.props.history.push("/addfellow");
  }

  handlePageChange(e, { activePage }) {
    this.setState({ activePage });
    console.log(activePage);
  }

  sort = (field, direction) => {
    this.setState({
      clients: this.state.clients.sort(function (a, b) {
        if (a[field] > b[field]) {
          return direction == "DESC" ? 1 : -1;
        } else if (a[field] < b[field]) {
          return direction == "DESC" ? -1 : 1;
        }
        return 0;
      }),
      sortDirection: direction == "DESC" ? "ASC" : "DESC"
    });
  };

  handleSearchResultSelect = (e, { result }) => {
    console.log("you have selected:", result);
    this.setState({
      searchResults: [], // reset search
      searchLookupValue: "",
      searchSelection: result // set selected item
    });
  };

  // handles filtering of clients for the search bar
  handleSearchChange = (e, {
    value
  }) => {
    this.setState({
      searchResults: this.state.clients.filter(client => {
        if (client.first_name.toLowerCase().includes(value.toLowerCase()) || client.last_name.toLowerCase().includes(value.toLowerCase())) {
          return client
        }
      }).map(person => {
        return {
          ...person,
          title: `${person.first_name} ${person.last_name}`,
          description: `hi my name is ${person.first_name}`,
          // image: 'https://pngimage.net/wp-content/uploads/2018/06/generic-person-png-4.png',
          key: person._id,
        }
      }),
      searchLookupValue: value
    })
  }

  render() {
    const {
      activePage,
      pageSize,
      homeActive,
      addFellowActive,
      sortDirection,
      searchResults,
      searchLookupValue,
    } = this.state;

    var clients = this.state.searchResults.length === 0 ? this.state.clients : this.state.searchResults


    let client = clients.map((client, index) => (
      <Client
        key={index}
        first_name={client.first_name}
        last_name={client.last_name}
        email={client.email}
        phone={client.phone}
        count={index + 1}
      />
    ));

    // console.log("SearchResults(Array) ", searchResults);
    // console.log("Rendered client list ", clients);
    let clientList = paginate(client, activePage, pageSize);


    return (
      <Fragment>
        <div className="ui inverted segment">
          <div className="ui inverted secondary pointing menu">
            <a
              className={homeActive ? "item active" : "item"}
              onClick={() => this.homeFunc()}
            >
              Home
            </a>
            <a
              className={addFellowActive ? "item active" : "item"}
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

        <h1>Client List</h1>

        <Segment style={{ display: "inline-flex" }}>
          <Button
            icon={
              sortDirection == "ASC"
                ? "sort alphabet ascending"
                : "sort alphabet descending"
            }
            onClick={e => this.sort("last_name", sortDirection)}
            content="Sort by Last Name"
          />
          <Search
            // loading='false'
            onResultSelect={this.handleSearchResultSelect}
            onSearchChange={this.handleSearchChange}
            results={searchResults}
            value={searchLookupValue}
          />
        </Segment>
        <div className="ui filterContainer catalogue_items">

          <ClientPagination
            activePage={activePage}
            itemsCount={clients.length}
            clients={client}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
   
          />
          <Item.Group>{clientList}</Item.Group>

        </div>
      </Fragment>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  clients: state.dashboard.allClients
});

export default connect(
  mapStateToProps,
  { logoutUser, getClients }
)(Dashboard);
