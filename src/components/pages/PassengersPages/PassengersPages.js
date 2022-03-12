import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastTicketList from "../../organisms/LastTicketList/LastTicketList";
import PassengersList from "../../organisms/PassengersList/PassengersList";

function PassengersPages() {
  return (
    <PageTemplate selectTrain>
      <StatusSteps step={1} />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <RideSettingsWidget />
            <LastTicketList className="TrainSelect__LastTicketWidget" />
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <PassengersList className={"TrainSelect-main__PassengersList"} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default PassengersPages;
