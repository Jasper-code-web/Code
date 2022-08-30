const express = require("express");
const fs = require("fs");

const app = express();
const port = "9000";

const mw = function (req, res, next) {
  console.log("这是一个中间键");
  next();
};
app.use(mw);

app.get("/index.html", (request, response) => {
  fs.readFile("./" + request.path.substring(1), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data.toString());
    }
    response.end();
  });
});

app.get("/ajax.js", (req, res) => {
  fs.readFile(`.${req.path}`, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data.toString());
    }
    res.end();
  });
});

app.post("/getUserInfo", (req, res) => {
  fs.readFile("./userInfo.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    //   res.writeHead(200, { "Content-Type": "application/json" });
      res.send(data.toString());
    }
    res.end();
  });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});
