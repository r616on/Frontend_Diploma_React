import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";

import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastTicketWidget from "../../organisms/LastTicketWidget/LastTicketWidget";

function SelectTrain() {
  return (
    <PageTemplate selectTrain>
      <StatusSteps step={1} />
      <div className="main SelectTrain">
        <div className="row container">
          <div className="col">
            <RideSettingsWidget />
            <div className="SelectTrain__LastTicketWidget">
              <LastTicketWidget />
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default SelectTrain;
