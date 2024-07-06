const http = require('http');

const app = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
