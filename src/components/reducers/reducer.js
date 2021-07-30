import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
  FETCH_COMPANIES_SUCCESS,
  FETCH_STREETS_SUCCESS,
  FETCH_HOUSES_SUCCESS,
  FETCH_CLIENTS_SUCCESS,
} from "../actions/action-types";

const initialState = {
  loading: false,
  error: null,
  companies: [],
  streets: [],
  houses: [],
  clients: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FETCH_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };

    case FETCH_STREETS_SUCCESS:
      return {
        ...state,
        loading: false,
        streets: action.payload,
      };

    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        houses: action.payload,
      };

    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
