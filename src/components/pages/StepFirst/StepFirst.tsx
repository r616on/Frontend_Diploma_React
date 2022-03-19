import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import TrainSelectTop from "../../organisms/TrainSelectTop/TrainSelectTop";
import TicketList from "../../organisms/TicketList/TicketList";
import Pagination from "../../molecules/Pagination/Pagination";
import LastTicketList from "../../organisms/LastTicketList/LastTicketList";

function StepFirst() {
  return (
    <PageTemplate stepOne>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <RideSettingsWidget />
            <LastTicketList className="TrainSelect__LastTicketWidget" />
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <TrainSelectTop className="TrainSelect-main__top" />
            <TicketList className="TrainSelect-main__list" />
            <Pagination className="TrainSelect-main__Pagination" />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default StepFirst;
