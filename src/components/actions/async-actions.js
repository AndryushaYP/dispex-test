import {
  addNewClient,
  bindClientToApartment,
  deleteClientFromApartment,
  getData,
} from "../../utils/api";
import {
  dataRequest,
  dataError,
  addClient,
  bindClient,
  deleteClient,
  setClientData,
} from "./actions";

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

export const updateClients = ({ addressId, clientId }, houseId) => {
  return (dispatch) => {
    dispatch(dataRequest());
    bindClientToApartment({ addressId, clientId })
      .then((res) => {
        dispatch(bindClient(addressId));
      })
      .then((res) => {
        getData("/HousingStock?houseId=", houseId).then((res) => {
          let newApartment;
          res.filter((item) => {
            if (item.addressId === addressId) {
              newApartment = { ...item };
            }
          });
          dispatch(setClientData(newApartment));
        });
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
