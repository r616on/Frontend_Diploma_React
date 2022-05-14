import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import PassengersList from "../../organisms/PassengersList/PassengersList";
import SideBarPasengerPage from "../../molecules/SideBarPasengerPage/SideBarPasengerPage";

function FillingDocuments() {
  return (
    <PageTemplate>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <SideBarPasengerPage />
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
