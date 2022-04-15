import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";
import { actionsCities } from "./effects/slice";
import "./style.scss";

interface ISearchItem {
  cityFrom?: boolean;
  cityTo?: boolean;
}
const SearchCity: FC<ISearchItem> = ({ cityFrom, cityTo }) => {
  const [search, setSerach] = useState("");
  const { items, searchTime, to, from } = useSelector(
    (state: AppStoreType) => state.Cities
  );
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSerach(value);
    if (cityFrom) {
      dispatch(actionsCities.setFrom(value));
      dispatch(actionsCities.changeSearchField(value));
    } else if (cityTo) {
      dispatch(actionsCities.setTo(value));
      dispatch(actionsCities.changeSearchField(value));
    }
  };

  // useEffect(() => {
  //   if (items.length === 1) {
  //     dispatch(actionsCities.changeSearchField(items[0].name));
  //     dispatch(actionsFilterRoutes.setFrom_city_id(items[0]._id));
  //     dispatch(actionsCities.setItems([]));
  //   }
  // }, [dispatch, items]);

  const handleClick = (e: any, value: string, id: string) => {
    if (cityFrom) {
      dispatch(actionsCities.setFrom(value));
      dispatch(actionsFilterRoutes.setFrom_city_id(id));
      dispatch(actionsCities.setItems([]));
    } else if (cityTo) {
      dispatch(actionsCities.setTo(value));
      dispatch(actionsFilterRoutes.setTo_city_id(id));
      dispatch(actionsCities.setItems([]));
    }
  };

  return (
    <div className="SearchCity">
      <input
        className="input"
        value={cityFrom ? from : to}
        onChange={handleSearch}
      />
      {search === searchTime && items && items.length > 1 && (
        <ul className="row-City">
          {items.map((item: any) => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="item-City"
                onClick={(e) => handleClick(e, item.name, item._id)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchCity;
