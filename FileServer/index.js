const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>You are in Home Directory</h1>");
    let data = fs.readFileSync("index.html", { encoding: "utf-8" });
    return res.end(data);
  }
  if (req.url === "/public") {
    res.write("<h1>You are in public Directory</h1>");
    let data = fs.readFileSync("public.html", { encoding: "utf-8" });
    return res.end(data);
  }

  if (req.url === "/src") {
    return res.end("<h1>You are in src Directory</h1>");
  }
  if (req.url === "/data") {
    return res.end("<h1>You are in data Directory</h1>");
  }
  if (req.url === "/public/others") {
    return res.end("<h1>You are in public/others Directory</h1>");
  }
});
server.listen(8080);
