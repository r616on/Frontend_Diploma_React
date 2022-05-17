import Pay from "../../organisms/Pay/Pay";
import React, { FC } from "react";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import SideBarPasengerPage from "../../molecules/SideBarPasengerPage/SideBarPasengerPage";
import "./style.scss";

const PayPage: FC = () => {
  return (
    <PageTemplate>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <SideBarPasengerPage />
          </div>
          <div className="col TrainSelect__main TrainSelect-main">
            <Pay className={"TrainSelect-main__PassengersList"} />
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default React.memo(PayPage);
