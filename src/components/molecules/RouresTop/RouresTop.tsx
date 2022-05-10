import React, { FC } from "react";
import classNames from "classnames";
import "./style.scss";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import { actionsFilterRoutes } from "../../organisms/Routes/FilterRoutes/effects/slice";

interface IrouresTop {
  className?: any;
  total?: number;
  pageSize?: number;
}
const RouresTop: FC<IrouresTop> = ({ className, total, pageSize }) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const pageSizeHandler = (e: any) => {
    dispatch(actionsFilterRoutes.setLimit(+e.target.innerText));
  };
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
      {/*  */}
      <div className="Roures-top__show-by show-by ">
        <div className="show-by__text">Показывать по : </div>
        <div
          className={classNames("show-by__item", {
            active: pageSize === 5,
          })}
          onClick={(e) => pageSizeHandler(e)}
        >
          5
        </div>
        <div
          className={classNames("show-by__item", {
            active: pageSize === 10,
          })}
          onClick={(e) => pageSizeHandler(e)}
        >
          10
        </div>
        <div
          className={classNames("show-by__item", {
            active: pageSize === 20,
          })}
          onClick={(e) => pageSizeHandler(e)}
        >
          20
        </div>
      </div>
    </div>
  );
};

export default React.memo(RouresTop);
