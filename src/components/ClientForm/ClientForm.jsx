import React from "react";
import clientForm from "./ClientForm.module.css";
import Popup from "../Popup/Popup";

const ClientForm = ({ apartment, onClose }) => {
  return (
    <Popup>
      <form className={clientForm.form}>
        <label htmlFor="name">
          <input className={clientForm.input} type="text" name="name" placeholder="Введите имя" />
        </label>
        <label htmlFor="phone">
          <input
            className={clientForm.input}
            type="text"
            name="phone"
            placeholder="Введите номер"
          />
        </label>
        <label htmlFor="email">
          <input
            className={clientForm.input}
            type="text"
            name="email"
            placeholder="Введите email"
          />
        </label>
        <button className={clientForm.button}>Заселиться!</button>
        <button className={clientForm.button} onClick={onClose}>
          Зыкрыть
        </button>
      </form>
    </Popup>
  );
};

export default ClientForm;
