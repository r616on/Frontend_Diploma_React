import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastTicketList from "../../organisms/LastTicketList/LastTicketList";
import ChairSelect from "../../organisms/ChairSelect/ChairSelect";

function ChairSelectionPage() {
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
            <ChairSelect />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default ChairSelectionPage;
