import React from "react";
import clientForm from "./ClientForm.module.css";
import Popup from "../Popup/Popup";

const ClientForm = ({ apartment, onClose, onSubmit }) => {
  const [data, setData] = React.useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    onClose();
  };
  return (
    <Popup>
      <form method="POST" className={clientForm.form} onSubmit={handleSubmit}>
        <label htmlFor="name">
          <input
            className={clientForm.input}
            type="text"
            name="name"
            placeholder="Введите имя"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phone">
          <input
            className={clientForm.input}
            type="text"
            name="phone"
            placeholder="Введите номер"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          <input
            className={clientForm.input}
            type="text"
            name="email"
            placeholder="Введите email"
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={clientForm.button}>
          Заселиться!
        </button>
        <button className={clientForm.button} onClick={onClose}>
          Зыкрыть
        </button>
      </form>
    </Popup>
  );
};

export default ClientForm;
