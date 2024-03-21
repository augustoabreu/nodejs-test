const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("New request", JSON.stringify(req));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
