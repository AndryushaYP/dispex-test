import React from "react";
import apartmentInfo from "./ApartmentInfo.module.css";
import { Link } from "react-router-dom";

const ApartmentInfo = ({
  apartment,
  onClick,
  newClient,
  onUpdateClients,
  onDelete,
  currentHouseId,
}) => {
  const { addressId, clients } = apartment;
  return (
    <section className={apartmentInfo.section}>
      {clients.length === 0 ? <p>Здесь пока никто не живет...</p> : <h2>Список жильцов:</h2>}

      <ul className={apartmentInfo.list}>
        {clients.map((client) => (
          <div className={apartmentInfo.client}>
            <li>{client.name}</li>
            <button type="button" onClick={() => onDelete(client.bindId)}>
              Адьёс!
            </button>
          </div>
        ))}
      </ul>
      {newClient && (
        <div>
          <p>Прописать {newClient}? Хорошенько подумайте.</p>
          <button
            onClick={() => onUpdateClients({ addressId, clientId: newClient }, currentHouseId)}
          >
            Прописать!
          </button>
        </div>
      )}
      <p>Хотите стать клиентом нашей компании?</p>
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
