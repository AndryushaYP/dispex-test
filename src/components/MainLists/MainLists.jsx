import React from "react";
import mainLists from "./MainLists.module.css";
import ListContainer from "../ListItem/ListItem";
import ListItem from "../ListItem/ListItem";

const MainLists = () => {
  return (
    <section className={mainLists.lists}>
      <ListContainer></ListContainer>
    </section>
  );
};

export default MainLists;
