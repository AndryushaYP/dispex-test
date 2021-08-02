import React from "react";
import app from "./App.module.css";
import MainLists from "../MainLists/MainLists";
import Preloader from "../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getCompaniesList } from "../actions/async-actions";
import { Switch, Route } from "react-router-dom";
import Popup from "../Popup/Popup";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const client = useSelector((state) => state.currentClient);
  console.log(client);
  React.useEffect(() => {
    dispatch(getCompaniesList());
  }, []);
  return (
    <div className={app.container}>
      <Switch>
        <Route exact path="/">
          <MainLists />
          {loading && <Preloader />}
        </Route>
        <Route path="/apartment">
          <Popup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
