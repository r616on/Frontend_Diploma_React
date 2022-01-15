import React from "react";
import "./style.scss";
import { Select } from "antd";

function TrainSelectTop() {
  const { Option } = Select;
  return (
    <div className="TrainSelect-main__top TrainSelect-top ">
      <div className="TrainSelect-top__found "> Найденно 20</div>
      <div className="TrainSelect-top__sort-by sort-by">
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
      <div className="TrainSelect-top__show-by show-by ">
        <div className="show-by__text">Показывать по : </div>
        <div className="show-by__item active">5</div>
        <div className="show-by__item">10</div>
        <div className="show-by__item">20</div>
      </div>
    </div>
  );
}

export default TrainSelectTop;
