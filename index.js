const http = require('http');
const pathApi = require('./path');
const fsApi = require('./fileSystem');
const osApi = require('./operatingSystem');
const eventsApi = require('./events');

const PORT = 4000;

const endpoints = {
  root: '/',
  path: '/api/path',
  events: '/api/events',
  os: '/api/os',
  fs: '/api/fs'
};

const server = http.createServer((request, result) => {
  switch (request.url) {
    case endpoints.root:
      result.write(JSON.stringify(Object.values(endpoints)));
      result.end();
      break;

    case endpoints.path:
      result.write(JSON.stringify(pathApi()));
      result.end();
      break;

    case endpoints.fs:
      result.write(JSON.stringify(fsApi()));
      result.end();
      break;

    case endpoints.os:
      result.write(JSON.stringify(osApi()));
      result.end();
      break;

    case endpoints.events:
      result.write(JSON.stringify(eventsApi()));
      result.end();
      break;

    default:
      result.write('NOT FOUND');
      result.end();
      break;
  }
});

server.listen(PORT);

console.log(`Listening on port ${PORT}...`);
