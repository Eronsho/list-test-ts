export const wsConnection = new WebSocket("ws://localhost:8090");
wsConnection.onopen = function () {
  alert("Соединение установлено.");
};
