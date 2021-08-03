import React from "react";
import app from "./App.module.css";
import MainLists from "../MainLists/MainLists";
import Preloader from "../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataList,
  addedNewClient,
  updateClients,
  removeClient,
  getClientsList,
} from "../actions/async-actions";
import { setClientData, companiesLoaded } from "../actions/actions";
import { getCompanies } from "../../utils/api";
import { Switch, Route } from "react-router-dom";
import ApartmentInfo from "../ApartmentInfo/ApartmentInfo";
import ClientForm from "../ClientForm/ClientForm";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, currentApartment, newClientId, currentHouseId } = store;

  React.useEffect(() => {
    dispatch(getDataList(getCompanies, companiesLoaded));
  }, []);

  //Показать/скрыть форму
  const handleClickButton = () => {
    setIsOpen(!isOpen);
  };

  //Добавит ьпользователя
  const handleSubmitClient = ({ name, phone, email }) => {
    dispatch(addedNewClient({ name, phone, email }));
  };

  //Прописать юзера в квартире
  const handleUpdateClients = ({ addressId, clientId }) => {
    dispatch(updateClients({ addressId, clientId }));
  };

  //Удалить жильца
  const handleDelete = (bindId) => {
    dispatch(removeClient(bindId));
  };

  return (
    <div className={app.container}>
      <Switch>
        <Route exact path="/">
          <MainLists />
        </Route>
        <Route path="/apartment">
          <ApartmentInfo
            apartment={currentApartment}
            onClick={handleClickButton}
            newClient={newClientId}
            onUpdateClients={handleUpdateClients}
            onDelete={handleDelete}
          />
          {isOpen && (
            <ClientForm
              onSubmit={handleSubmitClient}
              apartment={currentApartment}
              onClose={handleClickButton}
            />
          )}
        </Route>
      </Switch>
      {loading && <Preloader />}
    </div>
  );
}

export default App;
