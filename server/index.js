const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const _ = require("underscore");
const app = express();
const server = http.createServer(app);
const io = new WebSocket.Server({ server });
var dataDB = [
  {
    id: 0,
    firstName: "Боб",
    lastName: "Бобовсккий",
    country: "Russian",
    age: 30,
    language: "RU",
    color: "green",
  },
  {
    id: 1,
    firstName: "Майкл",
    lastName: "Антонов",
    country: "Russian",
    age: 10,
    language: "RU",
    color: "red",
  },
  {
    id: 2,
    firstName: "Ivan",
    lastName: "Ivanov",
    country: "USA",
    age: 22,
    language: "EN",
    color: "green",
  },
  {
    id: 3,
    firstName: "Jorge",
    lastName: "Nicolson",
    country: "Japan",
    age: 67,
    language: "JP",
    color: "",
  },
  {
    id: 4,
    firstName: "Marak",
    lastName: "Ibursoflodorw",
    country: "Uganda",
    age: 32,
    language: "UG",
    color: "black",
  },
];
io.on("connection", (socket) => {
  console.log("успешно подключилься");
  // Join Room
  socket.on("message", (message) => {
    /*{
            action:"test",
            data:{ }
        } */

    try {
      const { action, data } = JSON.parse(message.toString());

      switch (action) {
        case "ping":
          socket.send("pong", "pong");
          break;
        case "getData":
          socket.send(JSON.stringify({ key: "addDataCallback", data: dataDB }));
          console.log(dataDB);
          break;
        case "addData":
          console.log(data);
          dataDB.push(JSON.parse(data));
          socket.send(JSON.stringify({ key: "addData", data: dataDB }));
          break;
        case "delData":
          dataDB = _.without(
            dataDB,
            _.findWhere(dataDB, {
              id: data,
            })
          );
          console.log(data);
          socket.send(JSON.stringify({ key: "delData", data: dataDB }));
          break;
        default:
          console.log(action);
          break;
      }
    } catch (error) {
      console.log(error, "Скорее всего это не Json  ");
    }
  });
});
server.listen(8090, () => {
  console.log("Стартанул на порту", server.address().port);
});
