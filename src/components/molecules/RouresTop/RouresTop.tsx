import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";
import { Select, Pagination } from "antd";
interface IrouresTop {
  className?: any;
  total?: number;
}
const RouresTop: FC<IrouresTop> = ({ className, total }) => {
  const { Option } = Select;
  return (
    <div
      className={classNames("Roures-top ", {
        [className]: className,
      })}
    >
      <div className="Roures-top__found "> Найденно {total}</div>
      <div className="Roures-top__sort-by sort-by">
        <div className="sort-by__text"> сортировать по :</div>
        <Select
          defaultValue="Времени"
          dropdownClassName="sort-by__dropdown"
          className="sort-by__select"
          // getPopupContainer={() => document.querySelector(".sort-by__select")}
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
      <Pagination defaultCurrent={1} total={total} defaultPageSize={5} />
      {/* <div className="Roures-top__show-by show-by ">
        <div className="show-by__text">Показывать по : </div>
        <div className="show-by__item active">5</div>
        <div className="show-by__item">10</div>
        <div className="show-by__item">20</div>
      </div> */}
    </div>
  );
};

export default React.memo(RouresTop);
