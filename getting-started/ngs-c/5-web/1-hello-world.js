const http = require("http");

const requestListener = (req, res) => {
  // req, res are streams

  //console.dir(req, { depth: 0 });
  //console.log(req.url);
  console.dir(res, { depth: 0 });

  // https://nodejs.org/api/http.html#class-httpincomingmessage

  // https://nodejs.org/api/http.html

  res.write("Hello Node\n");
  res.end();
};

const server = http.createServer();

server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});
