import React from "react";
import app from "./App.module.css";
import MainLists from "../MainLists/MainLists";
import Preloader from "../Preloader/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getCompaniesList } from "../actions/async-actions";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { loading, companies } = store;
  console.log(store);
  React.useEffect(() => {
    dispatch(getCompaniesList());
  }, []);
  return (
    <div className={app.container}>
      <MainLists />
      {loading && <Preloader />}
    </div>
  );
}

export default App;
