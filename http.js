const http = require('http');

const PORT = 4000;

const endpoints = {
  root: '/',
  developer: '/api/developer'
};

const server = http.createServer((request, result) => {
  console.log(request);
  switch (request.url) {
    case endpoints.root:
      result.write('Testing');
      break;
    case endpoints.developer:
      result.write(JSON.stringify({ name: 'Maridin San Miguel', age: 23 }));
      break;
    default:
  }
});

server.listen(PORT);

console.log(`Listening on port ${PORT}...`);
