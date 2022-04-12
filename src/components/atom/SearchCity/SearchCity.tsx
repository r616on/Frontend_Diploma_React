import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { actionsCities } from "./effects/slice";
import "./style.scss";

interface ISearchItem {}
const SearchCity: FC<ISearchItem> = () => {
  const items = useSelector((state: AppStoreType) => state.Cities.items);
  console.log(items);
  const dispatch = useDispatch();
  const [search, setSerach] = useState("");
  const handleSearch = (evt: any) => {
    const { value } = evt.target;
    setSerach(value);
  };
  const handleClick = (e: any, id: string) => {};

  useEffect(() => {
    dispatch(actionsCities.getItems(search));
  }, [dispatch, search]);

  return (
    <div className="SearchCity">
      <input className="input" value={search} onChange={handleSearch} />
      <ul className="row-City">
        {items &&
          items.map((item) => {
            return (
              <li
                key={item._id}
                id={item._id}
                className="item-City"
                onClick={(e) => handleClick(e, item._id)}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchCity;
