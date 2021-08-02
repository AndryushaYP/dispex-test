import React from "react";
import popup from "./Popup.module.css";

const Popup = ({ children }) => {
  return <div className={popup.popup}>{children}</div>;
};

export default Popup;
