/*

  let's use express to make 
  an api to handle your books
  

*/
const express = require('express');
const app = express();

// get a route... or don't
app.get('/', (req, res) => {
  // TODO: handle an error like this
  res.send('no index here');
});

/* 


  how about we use a router?

*/

const api = require('./routes/api-router');
app.use('/api', api);

app.listen(3000, function () {
  console.log('listen on 3000');
});
