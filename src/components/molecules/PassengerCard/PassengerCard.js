import React, { useState } from "react";
// import { Link } from "react-router-dom";
import classNames from "classnames";
import IconBtn from "../../atom/IconBtn/IconBtn";
import "./style.scss";
import {
  Select,
  Row,
  Col,
  Form,
  Input,
  Radio,
  DatePicker,
  Checkbox,
} from "antd";

function PassengerCard({ className }) {
  const { Option } = Select;

  return (
    <div className={classNames("PassengerCard", { [classNames]: classNames })}>
      <div className="PassengerCard__top">
        <IconBtn circular active className="PassengerCard__top-iconBtn" />
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
              className="PassengerCard-form__age"
              dropdownClassName="PassengerCard-form__age-dropdown"
            >
              <Option value="jack">Взрослый</Option>
              <Option value="lucy">Детский</Option>
            </Select>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col>
            <Form.Item label="Фамилия" className="label">
              <Input className="input" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Имя" className="label">
              <Input className="input" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item label="Отчество" className="label">
              <Input className="input" mask="99999-9999" />
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
              <input className="input-date" type={"date"} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Checkbox className="checkbox">ограниченная подвижность</Checkbox>
        </Row>
      </Form>
    </div>
  );
}

export default PassengerCard;
