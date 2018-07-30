const WebSocket = require("ws");

// "web socket server"
const wss = new WebSocket.Server({ port: 4343 });

const users = [];

const broadcast = (data, originatingSocket) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN && client !== originatingSocket) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (socket) => {
  let index;

  socket.on("message", msg => {
    const data = JSON.parse(msg);
    switch (data.type) {
      case 'ADD_USER':
        index = users.length;
        users.push({ name: data.name, id: index + 1 });
        socket.send(
          JSON.stringify({
            type: "USERS_LIST",
            users
          })
        );
        broadcast(JSON.stringify({
          type: "USERS_LIST",
          users
        }), socket);
        break;
      case "ADD_MESSAGE":
        broadcast(
          {
            type: "ADD_MESSAGE",
            msg: data.msg,
            author: data.author
          },
          socket
        );
        break;
      default:
        break;
    }
  });

  socket.on("close", () => {
    users.splice(index, 1);
    broadcast(
      {
        type: "USERS_LIST",
        users
      },
      socket
    );
  });
});