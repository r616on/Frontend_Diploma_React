import React from "react";
import classNames from "classnames";
import "./style.scss";
import { Select } from "antd";

function RouresTop({ className }) {
  const { Option } = Select;
  return (
    <div
      className={classNames("Roures-top ", {
        [className]: className,
      })}
    >
      <div className="Roures-top__found "> Найденно 20</div>
      <div className="Roures-top__sort-by sort-by">
        <div className="sort-by__text"> сортировать по :</div>
        <Select
          defaultValue="Времени"
          dropdownClassName="sort-by__dropdown"
          className="sort-by__select"
          getPopupContainer={() => document.querySelector(".sort-by__select")}
        >
          <Option className="item" value="time">
            Времени
          </Option>
          <Option className="item" value="price">
            Стоимости
          </Option>
          <Option className="item" value="duration">
            Длительности
          </Option>
        </Select>
      </div>
      <div className="Roures-top__show-by show-by ">
        <div className="show-by__text">Показывать по : </div>
        <div className="show-by__item active">5</div>
        <div className="show-by__item">10</div>
        <div className="show-by__item">20</div>
      </div>
    </div>
  );
}

export default RouresTop;
