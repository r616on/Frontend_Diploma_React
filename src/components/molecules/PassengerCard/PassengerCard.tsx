import React, { FC, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import IconBtn from "../../atom/IconBtn/IconBtn";
import InputMask from "react-input-mask";
import "./style.scss";
import { Select, Row, Col, Form, Input, Radio, Checkbox, Collapse } from "antd";
import Button from "../../atom/Button/Button";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { actCurrentUserInfo } from "../../../store/CurrentUserInfo";
import Icon from "../../icon";

interface IPassengerCard {
  className?: any;
  age: string;
  isClosed: boolean;
  id: string;
  uidd: string;
  price: number;
  numberSeats: number;
  numberPasenger: number;
  inName?: string;
  inSurname?: string;
  inSex?: string;
  inBirthday?: string;
  inRestriction?: boolean;
  inTypeDoc?: string;
  inPart?: string;
  inPassportSeries?: string;
  inPassportNumber?: string;
  inBirthCertificate?: string;
}

const PassengerCard: FC<IPassengerCard> = ({
  className,
  age,
  isClosed,
  price,
  numberSeats,
  id,
  uidd,
  numberPasenger,
  inName,
  inSurname,
  inSex,
  inBirthday,
  inRestriction,
  inTypeDoc,
  inPart,
  inPassportSeries,
  inPassportNumber,
  inBirthCertificate,
}) => {
  const { TrueIcon, ErrorIcon } = Icon.validate;
  const dispatch = useDispatch();
  const { Option } = Select;
  const { Panel } = Collapse;
  const [typeDoc, setTypeDoc] = useState(inTypeDoc ? inTypeDoc : "passport");
  const [surname, setSurname] = useState(inSurname ? inSurname : "");
  const [name, setName] = useState(inName ? inName : "");
  const [part, setPart] = useState(inPart ? inPart : "");
  const [sex, setSex] = useState(inSex ? inSex : "Mail");
  const [birthday, setBirthday] = useState(inBirthday ? inBirthday : "");
  const [restriction, setRestriction] = useState(
    inRestriction ? inRestriction : false
  );
  const [passportSeries, setPassportSeries] = useState(
    inPassportSeries ? inPassportSeries : ""
  );
  const [passportNumber, setPassportNumber] = useState(
    inPassportNumber ? inPassportNumber : ""
  );
  const [birthCertificate, setBirthCertificate] = useState(
    inBirthCertificate ? inBirthCertificate : ""
  );
  const [collapseActive, setCollapseActive] = useState(["active"]);
  const [validate, setValidate] = useState("");

  useEffect(() => {
    if (
      surname &&
      name &&
      birthday &&
      ((typeDoc === "passport" && passportSeries && passportNumber) ||
        (typeDoc === "birthCertificate" && birthCertificate))
    ) {
      setValidate("true");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const hendlerNextPassenger = () => {
    if (
      surname &&
      name &&
      birthday &&
      ((typeDoc === "passport" && passportSeries && passportNumber) ||
        (typeDoc === "birthCertificate" && birthCertificate))
    ) {
      setValidate("true");
      dispatch(
        actCurrentUserInfo.setPassengerFullInfo({
          id,
          uidd,
          age,
          surname,
          name,
          part,
          sex,
          birthday,
          document: typeDoc,
          passportSeries,
          passportNumber,
          birthCertificate,
          restriction,
          numberSeats,
          price,
        })
      );
    } else {
      setValidate("false");
    }
  };

  return (
    <div className={classNames("PassengerCard", { [className]: className })}>
      <Collapse
        defaultActiveKey={[isClosed ? "" : "active"]}
        onChange={(key: any) => setCollapseActive(key)}
      >
        <Panel
          header={
            <div className="PassengerCard__top">
              <IconBtn
                active={Boolean(collapseActive.length > 0)}
                circular
                className="PassengerCard__top-iconBtn"
                handelClick={() => {}}
              />
              <div className="PassengerCard__top-text">
                ??????????????: {numberPasenger}
              </div>
              <div className="PassengerCard__top-iconExit icon-pluse"></div>
            </div>
          }
          key="active"
        >
          <Form
            className="PassengerCard__form PassengerCard-form"
            layout="vertical"
          >
            <Row justify="start">
              <Col>
                <Select
                  bordered={false}
                  defaultValue="????????????????"
                  className="PassengerCard-form__select age"
                  dropdownClassName="PassengerCard-form__select-dropdown age"
                  value={age}
                  disabled={true}
                >
                  <Option value="adult">????????????????</Option>
                  <Option value="child">??????????????</Option>
                </Select>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Form.Item label="??????????????" className="label">
                  <Input
                    className="input name"
                    name="surname"
                    value={surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                    }}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="??????" className="label">
                  <Input
                    className="input name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="????????????????" className="label">
                  <Input
                    className="input name"
                    name="part"
                    value={part}
                    onChange={(e) => {
                      setPart(e.target.value);
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item label="??????" className="label">
                  <Radio.Group
                    defaultValue="Mail"
                    buttonStyle="solid"
                    className="PassengerCard-form__gender"
                    value={sex}
                    onChange={(e) => {
                      setSex(e.target.value);
                    }}
                  >
                    <Radio.Button
                      className="PassengerCard-form__gender-buttn"
                      value="Mail"
                    >
                      M
                    </Radio.Button>
                    <Radio.Button
                      className="PassengerCard-form__gender-buttn"
                      value="Female"
                    >
                      ??
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="???????? ????????????????" className="label">
                  <InputMask
                    mask="99/99/99"
                    placeholder="????/????/????"
                    // @ts-ignore: Unreachable code error
                    name="birthday"
                    value={birthday}
                    onChange={(e) => {
                      return setBirthday(e.target.value);
                    }}
                  >
                    {(inputProps: any) => (
                      <input className="input-date" {...inputProps} />
                    )}
                  </InputMask>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Checkbox
                className="checkbox"
                name="restriction"
                checked={restriction}
                onChange={(e) => {
                  setRestriction(e.target.checked);
                }}
              >
                ???????????????????????? ??????????????????????
              </Checkbox>
            </Row>
            <Row
              gutter={[34, 0]}
              style={{
                marginTop: "31px",
                paddingTop: "37px",
                borderTop: "1px dashed #928F94",
              }}
            >
              <Col>
                <Form.Item
                  label="?????? ??????????????????"
                  style={{ marginBottom: "0px" }}
                >
                  <Select
                    bordered={false}
                    value={typeDoc}
                    className={classNames("PassengerCard-form__select", {
                      passport: typeDoc === "passport",
                      birthCertificate: typeDoc === "birthCertificate",
                    })}
                    dropdownClassName="PassengerCard-form__select-dropdown type"
                    onChange={(value) => setTypeDoc(value)}
                  >
                    <Option value="passport">?????????????? ????</Option>
                    <Option value="birthCertificate">
                      ?????????????????????????? ?? ????????????????
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              {typeDoc === "passport" ? (
                <>
                  <Col>
                    <Form.Item label="??????????" style={{ marginBottom: "0px" }}>
                      <InputMask
                        mask="9 9 9 9"
                        placeholder="_ _ _ _"
                        name="passportSeries"
                        value={passportSeries}
                        onChange={(e) => setPassportSeries(e.target.value)}
                      >
                        {(inputProps: any) => (
                          <input className="input passport" {...inputProps} />
                        )}
                      </InputMask>
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item label="??????????" style={{ marginBottom: "0px" }}>
                      <InputMask
                        mask="9 9 9 9 9 9"
                        placeholder="_ _ _ _ _ _"
                        name="passportNumber"
                        value={passportNumber}
                        onChange={(e) => setPassportNumber(e.target.value)}
                      >
                        {(inputProps: any) => (
                          <input className="input passport" {...inputProps} />
                        )}
                      </InputMask>
                    </Form.Item>
                  </Col>
                </>
              ) : (
                <Col>
                  <Form.Item label="??????????" style={{ marginBottom: "0px" }}>
                    <InputMask
                      mask="a a a a - a a - 9 9 9 9 9 9"
                      placeholder="VIII-????-123456"
                      name="birthCertificate"
                      value={birthCertificate}
                      onChange={(e) => setBirthCertificate(e.target.value)}
                    >
                      {(inputProps: any) => (
                        <input
                          className="input birthCertificate"
                          {...inputProps}
                        />
                      )}
                    </InputMask>
                  </Form.Item>
                </Col>
              )}
            </Row>
          </Form>
          <Row
            className={classNames("PassengerCard-form__bottom", {
              validTrue: validate === "true",
              validFalse: validate === "false",
            })}
          >
            <div className="PassengerCard-form__valid-status">
              {validate === "true" && <TrueIcon />}
              {validate === "false" && <ErrorIcon />}
              <div className="valid-status__text">
                {validate === "true"
                  ? "????????????"
                  : "????????????. ?????????????????? ???????????????????????? ???????????????????? ??????????"}
              </div>
            </div>
            <Button type={"typeEmpty"} handler={hendlerNextPassenger}>
              ?????????????????? ??????????????
            </Button>
          </Row>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PassengerCard;
