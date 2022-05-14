import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastList from "../../organisms/LastList/LastList";
import PassengersList from "../../organisms/PassengersList/PassengersList";

function FillingDocuments() {
  return (
    <PageTemplate>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <RideSettingsWidget />
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <PassengersList className={"TrainSelect-main__PassengersList"} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default React.memo(FillingDocuments);
