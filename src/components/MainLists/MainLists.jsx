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
  const store = useSelector((state) => state.homePageReducer);
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
    dispatch(setClientData(client));
  };

  return (
    <section className={mainLists.lists}>
      <ListContainer>
        {companies.map((company) => (
          <React.Fragment key={company.id}>
            <ListItem
              currentId={currentCompanyId}
              path="/"
              className="company"
              text={company.name}
              id={company.id}
              onClick={handleClickCompany}
            />
            {isVisibleStreets && currentCompanyId === company.id && (
              <ListContainer>
                {streets.map((street) => (
                  <React.Fragment key={street.id}>
                    <ListItem
                      currentId={currentStreetId}
                      className="street"
                      path="/"
                      text={street.name}
                      id={street.id}
                      onClick={handleClickStreet}
                    />
                    {isVisibleHouses && currentStreetId === street.id && (
                      <ListContainer>
                        {houses.map((house) => (
                          <React.Fragment key={house.id}>
                            <ListItem
                              currentId={currentHouseId}
                              path="/"
                              text={house.name}
                              id={house.id}
                              className="house"
                              onClick={handleClickHouse}
                            />
                            {isVisibleClients && currentHouseId === house.id && (
                              <ListContainer className="clients">
                                {clients.map((client) => (
                                  <ListItem
                                    key={client.addressId}
                                    path="/apartment"
                                    className="client"
                                    text={client.addressId}
                                    id={client.addressId}
                                    item={client}
                                    onClick={handleClickClient}
                                  />
                                ))}
                              </ListContainer>
                            )}
                          </React.Fragment>
                        ))}
                      </ListContainer>
                    )}
                  </React.Fragment>
                ))}
              </ListContainer>
            )}
          </React.Fragment>
        ))}
      </ListContainer>
    </section>
  );
};

export default MainLists;
