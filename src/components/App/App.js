import React from "react";
import app from "./App.module.css";
import MainLists from "../MainLists/MainLists";
import Preloader from "../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getCompaniesList } from "../actions/async-actions";
import { Switch, Route } from "react-router-dom";
import ApartmentInfo from "../ApartmentInfo/ApartmentInfo";
import ClientForm from "../ClientForm/ClientForm";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const apartment = useSelector((state) => state.currentApartment);

  //Показать/скрыть форму
  const handleClickButton = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    dispatch(getCompaniesList());
  }, []);

  return (
    <div className={app.container}>
      <Switch>
        <Route exact path="/">
          <MainLists />
        </Route>
        <Route path="/apartment">
          <ApartmentInfo apartment={apartment} onClick={handleClickButton} />
          {isOpen && <ClientForm apartment={apartment} onClose={handleClickButton} />}
        </Route>
      </Switch>
      {loading && <Preloader />}
    </div>
  );
}

export default App;
