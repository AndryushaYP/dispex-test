import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
  FETCH_COMPANIES_SUCCESS,
  FETCH_STREETS_SUCCESS,
  FETCH_HOUSES_SUCCESS,
  FETCH_CLIENTS_SUCCESS,
} from "./action-types";

export const dataRequest = () => ({ type: FETCH_DATA_REQUEST });
export const dataError = (err) => ({ type: FETCH_DATA_FAILURE, payload: err });

export const companiesLoaded = (companies) => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: companies,
});
export const streetsLoaded = (streets) => ({
  type: FETCH_STREETS_SUCCESS,
  payload: streets,
});
export const housesLoaded = (houses) => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: houses,
});
export const clientsLoaded = (clients) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients,
});
