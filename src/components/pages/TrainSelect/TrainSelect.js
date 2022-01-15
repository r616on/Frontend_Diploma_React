import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import { Select } from "antd";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import LastTicketWidget from "../../organisms/LastTicketWidget/LastTicketWidget";
import TrainSelectTop from "../../organisms/TrainSelectTop/TrainSelectTop";
import TrainSelectList from "../../organisms/TrainSelectList/TrainSelectList";

function TrainSelect() {
  const { Option } = Select;
  return (
    <PageTemplate selectTrain>
      <StatusSteps step={1} />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <RideSettingsWidget />
            <div className="TrainSelect__LastTicketWidget">
              <LastTicketWidget />
            </div>
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <div className="TrainSelect-main__top ">
              <TrainSelectTop />
            </div>
            <div className="TrainSelect-main__list">
              <TrainSelectList />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default TrainSelect;
