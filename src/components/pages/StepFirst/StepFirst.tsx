import React, { useEffect } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import Routes from "../../organisms/Routes/Routes";

function StepFirst() {
  const dispatch = useDispatch();
  const items = useSelector((state: AppStoreType) => state.Last.items);
  console.log(items);
  useEffect(() => {}, []);

  return (
    <PageTemplate stepOne>
      <StatusSteps />
      <Routes />
    </PageTemplate>
  );
}

export default StepFirst;
