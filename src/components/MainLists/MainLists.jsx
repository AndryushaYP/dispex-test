import React from "react";
import mainLists from "./MainLists.module.css";
import ListContainer from "../ListContainer/ListContainer";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getStreetsList, getHousesList, getClientsList } from "../actions/async-actions";
import { setClientData } from "../actions/actions";

const MainLists = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { companies, streets, houses, clients, currentCompanyId, currentStreetId, currentHouseId } =
    store;

  const handleClickCompany = (id) => {
    dispatch(getStreetsList(id));
  };

  const handleClickStreet = (id) => {
    dispatch(getHousesList(id));
  };

  const handleClickHouse = (id) => {
    dispatch(getClientsList(id));
  };

  const handleClickClient = (client) => {
    dispatch(setClientData(client));
  };

  return (
    <section className={mainLists.lists}>
      <ListContainer>
        {companies.map((company) => (
          <>
            <ListItem
              path="/"
              className="company"
              key={company.id}
              text={company.name}
              id={company.id}
              onClick={handleClickCompany}
            />
            {currentCompanyId === company.id && (
              <ListContainer>
                {streets.map((street) => (
                  <>
                    <ListItem
                      className="street"
                      path="/"
                      key={street.id}
                      text={street.name}
                      id={street.id}
                      onClick={handleClickStreet}
                    />
                    {currentStreetId === street.id && (
                      <ListContainer>
                        {houses.map((house) => (
                          <>
                            <ListItem
                              path="/"
                              key={house.id}
                              text={house.name}
                              id={house.id}
                              className="house"
                              onClick={handleClickHouse}
                            />
                            {currentHouseId === house.id && (
                              <ListContainer className="clients">
                                {clients.map((client) => (
                                  <ListItem
                                    path="/apartment"
                                    className="client"
                                    key={client.addressId}
                                    text={client.addressId}
                                    id={client.addressId}
                                    item={client}
                                    onClick={handleClickClient}
                                  />
                                ))}
                              </ListContainer>
                            )}
                          </>
                        ))}
                      </ListContainer>
                    )}
                  </>
                ))}
              </ListContainer>
            )}
          </>
        ))}
      </ListContainer>
    </section>
  );
};

export default MainLists;
