import React from "react";
import apartmentInfo from "./ApartmentInfo.module.css";
import { Link } from "react-router-dom";

const ApartmentInfo = ({ apartment, onClick }) => {
  return (
    <section className={apartmentInfo.section}>
      <h2>Список жильцов:</h2>
      <ul className={apartmentInfo.list}>
        {apartment.clients.map((item) => (
          <div className={apartmentInfo.client}>
            <li onClick={() => console.log(apartment)}>{item.name}</li>
            <button>Адьёс!</button>
          </div>
        ))}
      </ul>
      <p>Хотите жить с этими людьми?</p>
      <div className={apartmentInfo.button_container}>
        <Link className={apartmentInfo.button} to="/apartment" onClick={onClick}>
          Да
        </Link>
        <Link className={apartmentInfo.button} to="/">
          Нет
        </Link>
      </div>
    </section>
  );
};

export default ApartmentInfo;
