const http = require('http');

const app = require('./src/app');

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.on('error', (err) => {
  console.log(err.message);
});

server.listen(PORT, () => {
  console.log(`>> Server listening at ${PORT}`);
});
