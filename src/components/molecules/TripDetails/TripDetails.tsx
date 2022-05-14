import { FC, useRef } from "react";
import "./style.scss";
import { Collapse } from "antd";

import icon from "../../icon";
import React from "react";
import { IitemRoutes } from "../../organisms/Routes/interfaces";
import { secToDateTime, timeUtil } from "../../../utils/timeUtil";
import { capitalize } from "../../../utils/capitalize";

const { Panel } = Collapse;
interface ITripDetails {
  title: string;
  data: IitemRoutes;
  direction: string;
}
const TripDetails: FC<ITripDetails> = ({ title, data, direction }) => {
  const { Forward } = icon.sidebarPasenger;
  const { MinusIcon, PlusIcon, ArrowTo, ArrowBack } = icon.tripDetails;

  const forwardRef = useRef(null);

  const trainId = data.departure?.train?._id;
  const trainName = data.departure?.train?.name;
  const timeA = secToDateTime(data.departure?.from?.datetime);
  const timeB = secToDateTime(data.departure?.to?.datetime);
  const duration = timeUtil(data.departure.duration);
  const pointA = capitalize(data.departure.from.city.name);
  const pointB = capitalize(data.departure.to.city.name);
  const stationA = capitalize(data.departure.from.railway_station_name);
  const stationB = capitalize(data.departure.to.railway_station_name);

  return (
    <div className="tripDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <MinusIcon /> : <PlusIcon />)}
      >
        <Panel
          header={
            <div className="tripDetails__header">
              <div className="tripDetails__icon">{<Forward />}</div>
              <div className="tripDetails__title">{title}</div>
              <div className="tripDetails__date"></div>
            </div>
          }
          key={1}
        >
          <div className="tripDetails__panel" ref={forwardRef}>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">№ Поезда</div>
              <div className="tripDetails__trainValue number">{trainId}</div>
            </div>
            <div className="tripDetails__row">
              <div className="tripDetails__rowTitle">Название</div>
              <div className="tripDetails__rowValue">{trainName}</div>
            </div>
            <div className="tripDetails__timing">
              <div className="tripDetails__timingFrom">
                <div className="timing__time">{timeA}</div>
                <div className="timing__date"></div>
              </div>
              <div className="tripDetails__direction">
                <div className="tripDetails__directionTime">
                  {duration.hh}:{duration.mm}
                </div>
                <div className="direction__arrow">
                  {direction && <ArrowTo />}
                  {!direction && <ArrowBack />}
                </div>
              </div>
              <div className="tripDetails__timingTo">
                <div className="timing__time">{timeB}</div>
                <div className="timing__date"></div>
              </div>
            </div>
            <div className="tripDetails__stations">
              <div className="tripDetails__stationsFrom">
                <div className="stations__city">{pointA}</div>
                <div className="stations__station">{stationA}</div>
              </div>
              <div className="tripDetails__stationsTo">
                <div className="stations__city">{pointB}</div>
                <div className="stations__station">{stationB}</div>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default React.memo(TripDetails);
