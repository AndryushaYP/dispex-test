import React from "react";
import mainLists from "./MainLists.module.css";
import ListContainer from "../ListContainer/ListContainer";
import ListItem from "../ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { getStreetsList, getHousesList, getClientsList } from "../actions/async-actions";

const MainLists = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const { companies, streets, houses, clients, currentCompanyId, currentStreetId } = store;
  console.log(houses);

  const handleClickCompany = (id) => {
    dispatch(getStreetsList(id));
  };

  const handleClickStreet = (id) => {
    dispatch(getHousesList(id));
  };

  return (
    <section className={mainLists.lists}>
      <ListContainer>
        {companies.map((company, id) => (
          <>
            <ListItem
              className="company"
              key={company.id}
              item={company.name}
              id={company.id}
              onClick={handleClickCompany}
            />
            {currentCompanyId === company.id && (
              <ListContainer>
                {streets.map((street, id) => (
                  <>
                    <ListItem
                      className="street"
                      key={street.id}
                      item={street.name}
                      id={street.id}
                      onClick={handleClickStreet}
                    />
                    {currentStreetId === street.id && (
                      <ListContainer>
                        {houses.map((house, id) => (
                          <ListItem key={id} item={house.name} id={house.id} className="house" />
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
