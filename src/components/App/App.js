import React from "react";
import app from "./App.module.css";
import MainLists from "../MainLists/MainLists";
import Preloader from "../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getDataList, addedNewClient, updateClients, removeClient } from "../actions/async-actions";
import { companiesLoaded } from "../actions/actions";
import { getData } from "../../utils/api";
import { Switch, Route } from "react-router-dom";
import ApartmentInfo from "../ApartmentInfo/ApartmentInfo";
import ClientForm from "../ClientForm/ClientForm";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { currentHouseId, loading, currentApartment, newClientId } = store;

  React.useEffect(() => {
    dispatch(getDataList(getData, companiesLoaded, "/Request/companies"));
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
  const handleUpdateClients = ({ addressId, clientId }, houseId) => {
    dispatch(updateClients({ addressId, clientId }, houseId));
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
            currentHouseId={currentHouseId}
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
