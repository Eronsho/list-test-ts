import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import TestsList from "../components/TestsList";
import "./Main.scss";
import { States } from "../types";
import Header from "../components/Header";
import Content from "../components/Content";
import {
  AddItemRequest,
  fetchStatesRequest,
} from "../store/action-creators/states";
import CreateItem from "../components/CreateItem";
import { io } from "socket.io-client";
import { wsConnection } from "../https";

const Main: React.FC = memo(() => {
  const [itemVisible, setItemVisible] = useState(false);
  const { data } = useTypeSelector((state) => state.states);

  const dispatch = useDispatch();
  wsConnection.onmessage = (event) => {
    let msg = JSON.parse(event.data);
    debugger;
    switch (msg.key) {
      case "addDataCallback":
        console.log("получил", msg);
        dispatch(fetchStatesRequest(msg.data));
        break;
      case "addData":
        dispatch(fetchStatesRequest(msg.data));
        break;
      case "delData":
        dispatch(fetchStatesRequest(msg.data));
        break;
    }
  };
  useEffect(() => {
    // Соединение открыто
    wsConnection.onopen = () => {
      console.log("запрос на массив");
      wsConnection.send(
        JSON.stringify({
          action: "getData",
          data: {},
        })
      );
    };
    wsConnection.onmessage = (event) => {
      let msg = JSON.parse(event.data);
      debugger;
      switch (msg.key) {
        case "addDataCallback":
          console.log("получил", msg);
          dispatch(fetchStatesRequest(msg.data));
          break;
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="container__main">
        <Header />
        <Content onVisibli={() => setItemVisible(true)} data={data} />
        <CreateItem show={itemVisible} onHide={() => setItemVisible(false)} />
      </div>
    </div>
  );
});
export default Main;
