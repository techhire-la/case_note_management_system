import {
  GET_DASHBOARD,
  GET_CLIENTS,
  DASHBOARD_LOADING,
  // CLEAR_CURRENT_PROFILE
} from '../actions/types';

const initialState = {
  clients: [],
  allClients: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DASHBOARD_LOADING:
    // case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DASHBOARD:
      return {
        ...state,
        clients: action.payload,
        loading: false
      };
    case GET_CLIENTS:
      return {
        ...state,
        allClients: action.payload
      }
    // case GET_CLIENT_LIST:
    //   return {
    //     ...state,
    //     clients: action.payload,
    //     loading: false
    //   };
    // case CLEAR_CURRENT_PROFILE:
    //   return {
    //     ...state,
    //     profile: null
    //   };
    default:
      return state;
  }
}
