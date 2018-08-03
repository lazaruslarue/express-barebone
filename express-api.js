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

/* 

















  let's mutate some data! 
  const bookShelf = require('./models/bookShelf')
*/

app.listen(3000, function() {
  console.log('listen on 3000');
});

/* middleware 
let requests = 0;










const bodyParser = require('body-parser')
app.use(bodyParser.json());









app.use((req, res, next) => {
  requests++;
  next();
});

app.use((req, res, next) => {
  console.log(requests);
  next();
});

*/
