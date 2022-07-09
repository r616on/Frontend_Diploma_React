import React, { FC } from "react";
import "./style.scss";
import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import StatusSteps from "../../molecules/StatusSteps/StatusSteps";
import SideBarPasengerPage from "../../molecules/SideBarPasengerPage/SideBarPasengerPage";
import Button from "../../atom/Button/Button";
import { useNavigate } from "react-router-dom";
import RoutesItem from "../../molecules/RoutesItem/RoutesItem";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../../../store/interfaces";
import PassangerInfoList from "../../molecules/PassangerInfoList/PassangerInfoList";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";

const ConfirmPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { route, personalData } = useSelector(
    (state: AppStoreType) => state.CurrentUserInfo
  );
  const handlerPayEdit = () => {
    navigate("/PayPage");
  };
  const hendlerConfirm = () => {
    dispatch(actCurrentUserInfo.postOrder());
    navigate("/FinishPage");
  };
  const routeEdit = () => {
    navigate("/first");
  };
  return (
    <PageTemplate>
      <StatusSteps />
      <div className="main TrainSelect">
        <div className="row container">
          <div className="col TrainSelect__Left">
            <SideBarPasengerPage />
          </div>
          <div className="ConfirmPage">
            <div className="ConfirmPage-Routes">
              <div className="ConfirmPage-Routes__Title">Поезд</div>
              <RoutesItem route={route} handler={routeEdit} edit />
            </div>
            <div className="ConfirmPage-PassangerInfo">
              <PassangerInfoList />
            </div>
            <div className="ConfirmPage-Pay">
              <div className="ConfirmPage-Pay__Title">Способ оплаты</div>
              <div className="ConfirmPage-Pay__Body">
                <div className="ConfirmPage-Pay__text">
                  {personalData.payType === "payOnline"
                    ? "Онлайн"
                    : "Наличными"}
                </div>
                <div className="ConfirmPage-Pay__controll">
                  <Button
                    type={"change"}
                    // @ts-ignore
                    handler={handlerPayEdit}
                  />
                </div>
              </div>
            </div>
            <div className="ConfirmPage-controls">
              <Button
                type="confirm"
                handler={hendlerConfirm}
                className="ConfirmPage-Next"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default React.memo(ConfirmPage);
