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
} from "./action-types";

//Показать лоадер
export const dataRequest = () => ({ type: FETCH_DATA_REQUEST });
//Показать ошибку
export const dataError = (err) => ({ type: FETCH_DATA_FAILURE, payload: err });
// получить УК
export const companiesLoaded = (companies) => ({
  type: FETCH_COMPANIES_SUCCESS,
  payload: companies,
});
//получить улицы для выбранной компании
export const streetsLoaded = (streets, id) => ({
  type: FETCH_STREETS_SUCCESS,
  payload: { streets: streets, id: id },
});
//получить дома для выбранной улицы
export const housesLoaded = (houses, id) => ({
  type: FETCH_HOUSES_SUCCESS,
  payload: { houses: houses, id: id },
});
//получить клиентов
export const clientsLoaded = (clients, id) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: { clients: clients, id: id },
});
//Записать в хранилище данные о выбранной квартире
export const setClientData = (client) => ({ type: SET_CLIENT_DATA, payload: client });
//Добавит ьжильца
export const addClient = (newClient) => ({ type: CLIENT_ADDED_TO_APARTMENT, payload: newClient });
//прописать добавленнго жильца
export const bindClient = (client) => ({ type: CLIENT_BIND_TO_APARTMENT, payload: client });
//удалить пользователя
export const deleteClient = (bindId) => ({ type: CLIENT_DELETE_FROM_APARTMENT, payload: bindId });
