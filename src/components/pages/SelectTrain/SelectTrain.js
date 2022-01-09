import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";

import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";

function SelectTrain() {
  return (
    <PageTemplate selectTrain>
      <StatusSteps step={1} />
      <div className="main SelectTrain">
        <div className="row">
          <div className="col">
            <RideSettingsWidget />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default SelectTrain;
