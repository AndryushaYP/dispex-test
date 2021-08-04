import {
  SET_CLIENT_DATA,
  CLIENT_ADDED_TO_APARTMENT,
  CLIENT_BIND_TO_APARTMENT,
  CLIENT_DELETE_FROM_APARTMENT,
} from "../actions/action-types";

const updateClients = (obj, id) => {
  return obj.clients.filter((item) => item.bindId !== id);
};

const apartmentReducer = (state, action) => {
  if (state === undefined) {
    return {
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
  }
  switch (action.type) {
    case SET_CLIENT_DATA:
      return {
        ...state,
        loading: false,
        currentApartment: action.payload,
      };

    case CLIENT_ADDED_TO_APARTMENT:
      return {
        ...state,
        newClientId: action.payload.id,
        loading: false,
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

export default apartmentReducer;
