import React, { FC } from "react";
import { Switch } from "antd";
import "./style.scss";
import arrItem from "./data";
import { useDispatch } from "react-redux";

const OptionsWidget: FC = () => {
  const dispatch = useDispatch();
  const onChangeHandel = (checked: boolean, e: Event, reducer: Function) => {
    dispatch(reducer(checked));
  };

  return (
    <div className="OptionsWidget">
      <div className="OptionsWidget__row">
        {arrItem.map((item) => {
          return (
            <div key={item.name} className="OptionsWidget__item item">
              <div className="item-icon">
                <img src={item.icon} alt={item.title} className="item-img" />
              </div>
              <div className="item-text">{item.title} </div>
              <Switch
                onChange={(checked, e) => {
                  onChangeHandel(checked, e, item.reducer);
                }}
                className="btn-Switch"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(OptionsWidget);
