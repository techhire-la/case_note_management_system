import axios from "axios";

import {
  GET_DASHBOARD,
  GET_CLIENTS,
  DASHBOARD_LOADING,
  // CLEAR_CURRENT_PROFILE,
  GET_ERRORS
} from "./types";

// Get current profile
// export const getCurrentProfile = () => dispatch => {
export const getDashboard = () => dispatch => {
  dispatch(setDashboardLoading());
  axios
    .get("/api/users")
    .then(res =>
      dispatch({
        type: GET_DASHBOARD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DASHBOARD,
        payload: {}
      })
    );
};

export const getClients = () => dispatch => {
  axios
    .get("api/clients/all")
    .then(res => {
      dispatch({
        type: GET_CLIENTS,
        payload: res.data
      })
    })
    .catch(e =>
      dispatch({
        type: GET_CLIENTS,
        payload: {}
      })
    );
};

// // Create Profile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Profile loading
export const setDashboardLoading = () => {
  return {
    type: DASHBOARD_LOADING
  };
};

// Clear profile
// export const clearCurrentProfile = () => {
//   return {
//     type: CLEAR_CURRENT_PROFILE
//   };
// };
