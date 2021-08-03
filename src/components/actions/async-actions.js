import { addNewClient, bindClientToApartment, deleteClientFromApartment } from "../../utils/api";
import { dataRequest, dataError, addClient, bindClient, deleteClient } from "./actions";

export const getDataList = (getFn, actionFn, path, id) => {
  return (dispatch) => {
    dispatch(dataRequest());
    getFn(path, id)
      .then((res) => {
        dispatch(actionFn(res, id));
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

export const removeClient = (bindId) => {
  return (dispatch) => {
    dispatch(dataRequest());
    deleteClientFromApartment(bindId)
      .then((res) => {
        dispatch(deleteClient(bindId));
      })
      .catch((err) => {
        dispatch(dataError(err));
      });
  };
};
