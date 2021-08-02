import {
  getCompanies,
  getStreets,
  getHouses,
  getClients,
  addNewClient,
  bindClientToApartment,
  deleteClientFromApartment,
} from "../../utils/api";
import {
  dataRequest,
  dataError,
  companiesLoaded,
  streetsLoaded,
  housesLoaded,
  clientsLoaded,
  addClient,
  bindClient,
  deleteClient,
} from "./actions";

export const removeClient = (bindId) => {
  console.log(bindId, "async");
  return (dispatch) => {
    dispatch(dataRequest());
    deleteClientFromApartment(bindId)
      .then((res) => {
        dispatch(deleteClient(res));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const updateClients = ({ addressId, clientId }) => {
  return (dispatch) => {
    dispatch(dataRequest());
    bindClientToApartment({ addressId, clientId })
      .then((res) => {
        dispatch(bindClient(res));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const addedNewClient = ({ name, phone, email }) => {
  return (dispatch) => {
    dispatch(dataRequest());
    addNewClient({ name, phone, email })
      .then((res) => {
        dispatch(addClient(res));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const getCompaniesList = () => {
  return (dispatch) => {
    dispatch(dataRequest());
    getCompanies()
      .then((res) => {
        dispatch(companiesLoaded(res));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const getStreetsList = (id) => {
  return (dispatch) => {
    dispatch(dataRequest());
    getStreets(id)
      .then((res) => {
        dispatch(streetsLoaded(res, id));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const getHousesList = (id) => {
  return (dispatch) => {
    dispatch(dataRequest());
    getHouses(id)
      .then((res) => {
        dispatch(housesLoaded(res, id));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};

export const getClientsList = (id) => {
  return (dispatch) => {
    dispatch(dataRequest());
    getClients(id)
      .then((res) => {
        dispatch(clientsLoaded(res, id));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};
