import React, { FC, useState } from "react";
// import { Link } from "react-router-dom";
import IconBtn from "../../atom/IconBtn/IconBtn";
import InputMask from "react-input-mask";
import "./style.scss";
import { Select, Row, Col, Form, Input, Radio, Checkbox } from "antd";
import Button from "../../atom/Button/Button";
import classNames from "classnames";
interface IPassengerCard {
  className?: any;
}

const PassengerCard: FC<IPassengerCard> = ({ className }) => {
  const { Option } = Select;
  const [typeDoc, setTypeDoc] = useState("passport");
  const handleChange = (value: any) => {
    setTypeDoc(value);
  };
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  return (
    <div className={classNames("PassengerCard", { [className]: className })}>
      <div className="PassengerCard__top">
        <IconBtn
          circular
          active
          className="PassengerCard__top-iconBtn"
          handelClick={() => {}}
        />
        <div className="PassengerCard__top-text">Пасажир 1</div>
        <div className="PassengerCard__top-iconExit icon-pluse"></div>
      </div>
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
            >
              <Option value="jack">Взрослый</Option>
              <Option value="lucy">Детский</Option>
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
                mask="39/11/99"
                placeholder="ДД/ММ/ГГ"
                // @ts-ignore: Unreachable code error
                formatChars={{
                  3: "[1-3]",
                  1: "[0-1]",
                  a: "[A-Za-z]",
                  "*": "[A-Za-z0-9]",
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
          <Checkbox className="checkbox">ограниченная подвижность</Checkbox>
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
            <Form.Item label="Тип документа" style={{ marginBottom: "0px" }}>
              <Select
                bordered={false}
                value={typeDoc}
                className={classNames("PassengerCard-form__select", {
                  passport: typeDoc === "passport",
                  birthCertificate: typeDoc === "birthCertificate",
                })}
                dropdownClassName="PassengerCard-form__select-dropdown type"
                onChange={handleChange}
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
                  <InputMask mask="9 9 9 9" placeholder="_ _ _ _">
                    {(inputProps: any) => (
                      <input className="input passport" {...inputProps} />
                    )}
                  </InputMask>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item label="Номер" style={{ marginBottom: "0px" }}>
                  <InputMask mask="9 9 9 9 9 9" placeholder="_ _ _ _ _ _">
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
                  placeholder="12 символов"
                >
                  {(inputProps: any) => (
                    <input className="input birthCertificate" {...inputProps} />
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
    </div>
  );
};

export default PassengerCard;
