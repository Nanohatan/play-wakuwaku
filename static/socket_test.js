const socket = io("http://localhost:3000/practice/socket");
socket.on("connection", () => { console.log("connect")});
socket.emit("message", "messag");