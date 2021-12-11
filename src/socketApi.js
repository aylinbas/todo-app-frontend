// import { io } from "socket.io-client";

// let socket;

// export const connectSocket = () => {
//   socket = io(process.env.REACT_APP_BASE_URL, { transports: ["websocket"] });

//   socket.on("connect", () => {
//     console.log("Connected!");
//   });

//   socket.on("connect_error", () => {
//     console.log("Connection Failed!");
//   });
// };
// export const sendTodo = (topic, data) => {
//   if (!socket) {
//     return false;
//   }

//   socket.emit(topic, data);
// };

// export const subscribeToNewTodo = (cb) => {
//   if (!socket) {
//     return false;
//   }

//   socket.on("new-todo", (todos) => {
//     console.log(todos);
//     cb(todos);
//   });
// };
