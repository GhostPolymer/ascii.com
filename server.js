//listen for a specific host from HOST var
const host = '0.0.0.0';

//listen for a specific port from PORT var
const port = 8000;

const corsServer = require('cors-anywhere');

corsServer.createServer({
  originWhiteList: [], //allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log('Running CORS Anywhere on ${host}:${port}');
});