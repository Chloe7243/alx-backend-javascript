const http = require('http');
const app = http.createServer((_, res) => {
  res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
