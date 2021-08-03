import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
  FETCH_COMPANIES_SUCCESS,
  FETCH_STREETS_SUCCESS,
  FETCH_HOUSES_SUCCESS,
  FETCH_CLIENTS_SUCCESS,
  SET_CLIENT_DATA,
  CLIENT_ADDED_TO_APARTMENT,
  CLIENT_BIND_TO_APARTMENT,
  CLIENT_DELETE_FROM_APARTMENT,
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
  currentHouseId: null,
  currentApartment: null,
  newClientId: null,
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

const updateClients = (obj, id) => {
  return obj.clients.filter((item) => item.bindId !== id);
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
        currentHouseId: action.payload.id,
        clients: action.payload.clients,
      };

    case SET_CLIENT_DATA:
      return {
        ...state,
        loading: false,
        currentApartment: action.payload,
      };

    case CLIENT_ADDED_TO_APARTMENT:
      return {
        ...state,
        loading: false,
        newClientId: action.payload.id,
      };

    case CLIENT_BIND_TO_APARTMENT:
      return {
        ...state,
        loading: false,
        newClientId: null,
      };
    case CLIENT_DELETE_FROM_APARTMENT:
      const id = action.payload;
      return {
        ...state,
        loading: false,
        currentApartment: {
          ...state.currentApartment,
          clients: updateClients(state.currentApartment, id),
        },
      };
    default:
      return state;
  }
};

export default reducer;
