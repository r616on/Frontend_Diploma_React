import React, { useEffect } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import RideSettingsWidget from "../../organisms/RideSettingsWidget/RideSettingsWidget";
import TrainSelectTop from "../../organisms/TrainSelectTop/TrainSelectTop";
import TicketList from "../../organisms/TicketList/TicketList";
import Pagination from "../../molecules/Pagination/Pagination";
import LastTicketList from "../../organisms/LastTicketList/LastTicketList";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import { actionsLast } from "../../../store/Last/effects/slice";

function StepFirst() {
  const dispatch = useDispatch();
  const items = useSelector((state: AppStoreType) => state.Last.items);
  console.log(items);
  useEffect(() => {
    dispatch(actionsLast.getItems());
  }, []);

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
