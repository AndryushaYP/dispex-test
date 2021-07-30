import { getCompanies, getStreets, getHouses, getClients } from "../../utils/api";
import {
  dataRequest,
  dataError,
  companiesLoaded,
  streetsLoaded,
  housesLoaded,
  clientsLoaded,
} from "./actions";

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
        dispatch(streetsLoaded(res));
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
        dispatch(housesLoaded(res));
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
        dispatch(clientsLoaded(res));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};
