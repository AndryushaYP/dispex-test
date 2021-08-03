import React from "react";
import mainLists from "./MainLists.module.css";
import ListContainer from "../ListContainer/ListContainer";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getDataList } from "../actions/async-actions";
import { setClientData, streetsLoaded, housesLoaded, clientsLoaded } from "../actions/actions";
import { getData } from "../../utils/api";

const MainLists = () => {
  const [isVisibleStreets, setIsVisibleStreets] = React.useState(false);
  const [isVisibleHouses, setIsVisibleHouses] = React.useState(false);
  const [isVisibleClients, setIsVisibleClients] = React.useState(false);

  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { companies, streets, houses, clients, currentCompanyId, currentStreetId, currentHouseId } =
    store;

  const handleClickCompany = (id) => {
    if (currentCompanyId !== id) {
      dispatch(getDataList(getData, streetsLoaded, "/HousingStock?companyId=", id));
      setIsVisibleStreets(true);
    }
    if (currentCompanyId === id) {
      setIsVisibleStreets(!isVisibleStreets);
    }
  };

  const handleClickStreet = (id) => {
    if (currentStreetId !== id) {
      dispatch(getDataList(getData, housesLoaded, "/HousingStock?streetId=", id));
      setIsVisibleHouses(true);
    }
    if (currentStreetId === id) {
      setIsVisibleHouses(!isVisibleHouses);
    }
  };

  const handleClickHouse = (id) => {
    if (currentHouseId !== id) {
      dispatch(getDataList(getData, clientsLoaded, "/HousingStock?houseId=", id));
      setIsVisibleClients(true);
    } else {
      setIsVisibleClients(!isVisibleClients);
    }
  };

  const handleClickClient = (client) => {
    console.log(client);
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
            {isVisibleStreets && currentCompanyId === company.id && (
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
                    {isVisibleHouses && currentStreetId === street.id && (
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
                            {isVisibleClients && currentHouseId === house.id && (
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
