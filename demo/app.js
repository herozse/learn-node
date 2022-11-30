var http = require("http");
const fs = require("fs");
const path = require('path')
const url = require('url')
const ejs = require('ejs')

http
  .createServer(function (request, response) {
    let pathName = url.parse(request.url).pathname;

    console.log(url.parse(request.url, true).query);

    // console.log(path.extname(pathName));
    pathName = pathName === "/" ? "/login.html" : pathName;

    if (pathName !== "/favicon.ico") {
      fs.readFile("./dist/" + pathName, (err, data) => {
        if (err) {
          console.log(err);
          fs.readFile("./dist/404.html", (err, data) => {
            response.writeHead(404, { "Content-Type": 'text/html;charset="utf-8"' });
            response.end(data.toString());
          });
          return;
        } else {
          response.writeHead(200, { "Content-Type": 'text/html;charset="utf-8"' });
          // console.log(data.toString());
          response.end(data.toString());
        }
      });
    }
  })
  .listen(3000);

console.log("Server running at http://127.0.0.1:3000/");
