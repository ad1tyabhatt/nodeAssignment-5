var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/") {

    res.writeHead(200, "Content-type:text/plain");
    res.end("Hello go to /welcome or /contact");
    
  } else if (req.url == "/welcome") {

    res.writeHead(200, "Content-type:text/plain");
    res.end("Welcome to Dominos");
  } else if (req.url == "/contact") {
    res.writeHead(200, { "context-type": "text/json" });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.end("Error 404");
  }
}

httpServer.listen(8081, () => {
  console.log("Server is running in port 8081");
});
module.exports = httpServer;
