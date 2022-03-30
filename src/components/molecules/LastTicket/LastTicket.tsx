import React, { FC } from "react";
import numberWithSpaces from "../../../utils/numberWithSpaces";
import AdditionalServices from "../../atom/AdditionalServices/AdditionalServices";
import { itemLastType } from "../../organisms/LastList/interfaces";
import "./style.scss";
interface ILastTicket {
  item: itemLastType;
}
const LastTicket: FC<ILastTicket> = ({ item }) => {
  return (
    <section className="LastTicket">
      <div className="LastTicket__top">
        <div className="LastTicket__from">
          <div className="LastTicket__title">
            {item?.departure?.from?.city?.name}
          </div>
          <div className="LastTicket__body">
            {item?.departure?.from?.railway_station_name}
          </div>
        </div>
        <div className="LastTicket__where">
          <div className="LastTicket__title">
            {item?.departure?.to?.city?.name}
          </div>
          <div className="LastTicket__body">
            {item?.departure?.to?.railway_station_name}
          </div>
        </div>
      </div>
      <div className="LastTicket__bottom">
        <AdditionalServices
          className="LastTicket__options"
          wiFi={item?.departure?.have_wifi}
          express={item?.is_express}
        />
        <div className="LastTicket__price">
          от
          <span>
            {numberWithSpaces(+item?.departure?.min_price)}
            <span className="icon-rub"></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default React.memo(LastTicket);
