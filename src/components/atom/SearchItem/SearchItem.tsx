import React, { FC, useState } from "react";
import "./style.scss";

interface ISearchItem {}
const SearchItem: FC<ISearchItem> = () => {
  const [search, setSerach] = useState("");
  const handleSearch = (evt: any) => {
    const { value } = evt.target;
    setSerach(value);
  };
  return (
    <div className="Search-item">
      <input className="input" value={search} onChange={handleSearch} />
      <ul className="row-City">
        <li className="item-City">Москва</li>
      </ul>
    </div>
  );
};

export default SearchItem;
