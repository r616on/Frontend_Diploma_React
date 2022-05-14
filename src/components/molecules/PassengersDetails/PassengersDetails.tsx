import { useSelector } from "react-redux";
import "./style.scss";
import { Collapse } from "antd";
import React from "react";
import icon from "../../icon";
import { AppStoreType } from "../../../store/interfaces";

const { Panel } = Collapse;

const PassengersDetails = () => {
  const { MinusIcon, PlusIcon, PasengerAv } = icon.passengersDetails;

  const adultPassengers = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.seatsAdult
  );
  const childPassengers = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo.seatsChild
  );

  return (
    <div className="passengDetails__container">
      <Collapse
        ghost
        expandIconPosition="right"
        expandIcon={({ isActive }) => (isActive ? <MinusIcon /> : <PlusIcon />)}
      >
        <Panel
          header={
            <div className="passengDetails__header">
              <div className="passengDetails__icon">
                <PasengerAv />
              </div>
              <div className="passengDetails__title">Пассажиры</div>
            </div>
          }
          key={1}
        >
          <div className="passengDetails__panel">
            {adultPassengers && (
              <div className="passengDetails__row">
                <div className="passengDetails__age">
                  <span>{adultPassengers?.length}</span>{" "}
                  {adultPassengers?.length === 1 ? "Взрослый" : "Взрослых"}
                </div>
              </div>
            )}
            {childPassengers && (
              <div className="passengDetails__row">
                <div className="passengDetails__age">
                  <span>{childPassengers?.length}</span>{" "}
                  {childPassengers?.length === 1 ? "Детский" : "Детских"}
                </div>
              </div>
            )}
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default React.memo(PassengersDetails);
