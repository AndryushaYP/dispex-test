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
  currentCompanyId: null,
  currentStreetId: null,
};

const getStreets = (arr, name, id) => {
  const result = [];
  arr.reduce((acc, item) => {
    if (!acc[item[name]]) {
      acc[item[name]] = item[id];
      result.push({ id: item[id], name: item[name] });
    }
    return acc;
  }, {});
  return result;
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
        currentCompanyId: action.payload.id,
        streets: getStreets(action.payload.streets, "streetName", "streetId"),
      };

    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        currentStreetId: action.payload.id,
        houses: getStreets(action.payload.houses, "building", "houseId"),
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
