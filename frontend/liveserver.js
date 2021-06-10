var liveServer = require("live-server");

const io = require('socket.io')(3000, {
   cors: {
       origin: ["http://localhost:8181"],
   },
})
const { fileURLToPath } = require("url");

io.on('connection', socket => {
    console.log(socket.id)
})

var params = {
           port: 8181, // Set the server port. Defaults to 8080.
           host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0.
           root: ".", // Set root directory that's being server. Defaults to cwd.
           open: false, // When false, it won't load your browser by default.
           ignore: 'scss,my/templates', // comma-separated string for paths to ignore
           wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
           file: "./MVC/Views/index.html"
       };
liveServer.start(params);
