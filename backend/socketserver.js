const io = require("socket.io")(8000, {
   cors: {
      origin: ["http://localhost:8181"],
   },

})

io.on("connection", socket => {
   console.log(socket.id);
})