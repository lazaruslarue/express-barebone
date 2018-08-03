const express = require('express');

// create a server
const app = express();

// provide an easy webpage
app.use('/', (request, response) => {
  response.sendFile('index.html', { root: './' });
});

// listen on a port
app.listen(3000);
