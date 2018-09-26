import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentProfile } from '../../actions/dashboardActions';
// import { getClientList } from '../../actions/dashboardActions';
import { getDashboard } from '../../actions/dashboardActions';
import Spinner from '../common/Spinner';

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
        console.log("component did mount")

        axios.get('api/clients/all')
            .then( res => {
                console.log(res.data);

                this.setState({clients: res.data})
            }).catch(e => console.log(e));



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

  render(){

    return (
        <div>
          <h1>Client list</h1>
        </div>
    )
  }
}

export default Dashboard;
