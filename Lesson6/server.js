const http = require("http");
const fs = require("fs");
const port = 3000;
const HosaName = "localhost";

const myServer = http.createServer((req, res) => {
  const handleReadFile = (statusCode, fileName) => {
    fs.readFile(fileName, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handleReadFile(200, "index.html");
  } else if (req.url === "/about") {
    handleReadFile(200, "about.html");
  } else if (req.url === "/contact") {
    handleReadFile(200, "contact.html");
  } else {
    handleReadFile(404, "Error.html");
  }
});
myServer.listen(port, HosaName, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server is running at http://${HosaName}:${port}`);
  }
});
