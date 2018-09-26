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
        axios
            .get('/api/dashboard/all')
            .then(response => {this.setState({clients: response.data})
        })

    }

  render(){

    return (
        <div>
          <h1>Hit the dash</h1>
        </div>
    )
  }
}
//   componentDidMount() {
//     this.props.getCurrentProfile();
//   }
//
//   render() {
//     const { user } = this.props.auth;
//     const { profile, loading } = this.props.profile;
//
//     let dashboardContent;
//
//     if (profile === null || loading) {
//       dashboardContent = <Spinner />;
//     } else {
//       // Check if logged in user has profile data
//       if (Object.keys(profile).length > 0) {
//         dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>;
//       } else {
//         // User is logged in but has no profile
//         dashboardContent = (
//           <div>
//             <p className="lead text-muted">Welcome {user.name}</p>
//             <p>You have not yet setup a profile, please add some info</p>
//             <Link to="/create-profile" className="btn btn-lg btn-info">
//               Create Profile
//             </Link>
//           </div>
//         );
//       }
//     }
//
//     return (
//       <div className="dashboard">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className="display-4">Dashboard</h1>
//               {dashboardContent}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };
//
// const mapStateToProps = state => ({
//   profile: state.profile,
//   auth: state.auth
// });

// export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);

  export default Dashboard;
