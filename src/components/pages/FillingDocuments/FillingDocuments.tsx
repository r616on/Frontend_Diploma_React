import React from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import PassengersList from "../../organisms/PassengersList/PassengersList";
import SideBarPasengerPage from "../../molecules/SideBarPasengerPage/SideBarPasengerPage";
import Button from "../../atom/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";

function FillingDocuments() {
  const navigate = useNavigate();
  const { seatsAdult, seatsChild, passengerFullInfo } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );
  const hendlerNext = () => {
    if (seatsAdult.length + seatsChild.length === passengerFullInfo.length) {
      navigate("/PayPage");
    }
  };
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
            <div className="TrainSelect-controls">
              <Button
                type="next"
                handler={hendlerNext}
                className="TrainSelect-Next"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

export default React.memo(FillingDocuments);
