import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal, Dropdown, Button, Form, Col, Row } from "react-bootstrap";
import { AddItemRequest } from "../store/action-creators/states";
import { States } from "../types";
import { useTypeSelector } from "../hooks/useTypeSelector";
type сreateListProps = {
  show: boolean;
  onHide: () => void;
};

const CreateItem: React.FC<сreateListProps> = ({ show, onHide }) => {
  const { data } = useTypeSelector((state) => state.states);
  let lastId: number =
    data.length > 1 ? Number(data[data.length - 1].id) + 1 : 0;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();

  const remuveAll = () => {
    setFirstName("");
    setLastName("");
    setCountry("");
    setColor("");
    setLanguage("");
    lastId++;
  };
  const addItem = () => {
    const formData = new FormData();
    formData.append("id", `${lastId}`);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("country", country);
    formData.append("age", `${age}`);
    formData.append("language", language);
    formData.append("color", color);
    const item = Object.fromEntries(formData);
    dispatch(AddItemRequest(item));
    onHide();
    remuveAll();
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-3"
            placeholder="Введите firstName"
          ></Form.Control>{" "}
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-3"
            placeholder="Введите lastName"
          ></Form.Control>{" "}
          <Form.Control
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="mt-3"
            type="number"
            placeholder="Введите age"
          ></Form.Control>{" "}
          <Form.Control
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-3"
            placeholder="Введите country"
          ></Form.Control>{" "}
          <Form.Control
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-3"
            placeholder="Введите language"
          ></Form.Control>
          <Form.Control
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="mt-3"
            placeholder="Введите color"
          ></Form.Control>
          <hr />
          <Button variant="outline-dark" onClick={addItem}>
            Добавить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateItem;
