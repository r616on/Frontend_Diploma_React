import React, { FC, useState } from "react";
// import { Link } from "react-router-dom";
import IconBtn from "../../atom/IconBtn/IconBtn";
import InputMask from "react-input-mask";
import "./style.scss";
import { Select, Row, Col, Form, Input, Radio, Checkbox, Collapse } from "antd";
import Button from "../../atom/Button/Button";
import classNames from "classnames";
interface IPassengerCard {
  className?: any;
}

const PassengerCard: FC<IPassengerCard> = ({ className }) => {
  const { Option } = Select;
  const [typeDoc, setTypeDoc] = useState("passport");

  const [age, setAge] = useState("adult");
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [sex, setSex] = useState("Mail");
  const [birthday, setBirthday] = useState("");
  const [restriction, setRestriction] = useState(false);
  const [passportSeries, setPassportSeries] = useState("");
  const [passportNumber, setPassportNumber] = useState("");
  const [birthCertificate, setBirthCertificate] = useState("");
  const { Panel } = Collapse;
  const [collapseActive, setCollapseActive] = useState(["active"]);

  return (
    <div className={classNames("PassengerCard", { [className]: className })}>
      <Collapse
        defaultActiveKey={["active"]}
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
              <div className="PassengerCard__top-text">Пасажир 1</div>
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
                  defaultValue="Взрослый"
                  className="PassengerCard-form__select age"
                  dropdownClassName="PassengerCard-form__select-dropdown age"
                  value={age}
                  onChange={(e) => {
                    return setAge(e);
                  }}
                >
                  <Option value="adult">Взрослый</Option>
                  <Option value="child">Детский</Option>
                </Select>
              </Col>
            </Row>
            <Row justify="space-between">
              <Col>
                <Form.Item label="Фамилия" className="label">
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
                <Form.Item label="Имя" className="label">
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
                <Form.Item label="Отчество" className="label">
                  <Input className="input name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item label="Пол" className="label">
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
                      Ж
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Дата рождения" className="label">
                  <InputMask
                    mask="99/99/99"
                    placeholder="ДД/ММ/ГГ"
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
                ограниченная подвижность
              </Checkbox>
            </Row>
            <Row
              gutter={[34, 0]}
              style={{
                marginTop: "31px",
                paddingTop: "37px",
                borderTop: "1px dashed #928F94",
                borderBottom: "1px dashed #928F94",
              }}
            >
              <Col>
                <Form.Item
                  label="Тип документа"
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
                    <Option value="passport">Паспорт РФ</Option>
                    <Option value="birthCertificate">
                      Свидетельство о рождении
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
              {typeDoc === "passport" ? (
                <>
                  <Col>
                    <Form.Item label="Серия" style={{ marginBottom: "0px" }}>
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
                    <Form.Item label="Номер" style={{ marginBottom: "0px" }}>
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
                  <Form.Item label="Номер" style={{ marginBottom: "0px" }}>
                    <InputMask
                      mask="a a a a - a a - 9 9 9 9 9 9"
                      placeholder="VIII-ЫП-123456"
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
            <Row justify="end" style={{ paddingTop: "40px" }}>
              <Button type={"typeEmpty"} handler={() => {}}>
                Следующий пасажир
              </Button>
            </Row>
          </Form>
        </Panel>
      </Collapse>
    </div>
  );
};

export default PassengerCard;
