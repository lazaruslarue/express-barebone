// stand tall on the shoulders of giants!
const express = require('express');
const bodyParser = require('body-parser');

// bootstrap your app with express object
const app = express();

const apiRouter = express.Router();

app.get('/', (req, res) => {
  // TODO: try sending an index file
  res.send('no index here');
});

/* try some routes!*/
app.get('/success', function(req, res) {
  // TODO: send a success code
  console.log('first request', req.route.path);
});

app.get('/badrequest', function(req, res) {
  res.sendStatus(400);
});

app.use('/api', apiRouter);
apiRouter.use('/all', function(req, res) {
  res.send(200);
});

/* 

















  let's mutate some data! 
  const bookShelf = require('./models/bookShelf')
*/

/* 
  get all books
*/

app.get('/all_books', function(req, res) {
  var response = '<div>';
  response += '<h2>route: ' + req.route.path + '</h2>';
  for (var key in req.params) {
    response += '<p>' + key + '</p> : <pre>' + req.params[key] + '</pre>';
  }
  response += '</div>';
  res.send(response);
  console.log('mixed route request', response);
});

app.get('/test_all_books', function(req, res) {
  var response = '<div>';
  response += '<h2>route: ' + req.route.path + '</h2>';
  for (var key in req.params) {
    response += '<p>' + key + '</p> : <pre>' + req.params[key] + '</pre>';
  }
  response += '</div>';
  res.send(response);
  console.log('mixed route request', response);
});

app.get('/book_by_id/:book_id', function(req, res) {
  // TODO: use the controller pattern
  var msg = [
    '<h1>this is the result of a GET request to /param</h1>',
    '<h2>your paramId is: ',
    '<pre>' + req.params.book_id + '</pre>',
    '</h2>'
  ].join('');
  res.send(msg);
  console.log("param'd request", req.route.path);
});

app.post('/post', (req, res) => {
  console.log(req.body);
  const userBook = new Book(req.body);
  books.push(userBook);
  res.send(books);
});

app.listen(3000, function() {
  console.log('listen on 3000');
});

/* middleware 
let requests = 0;
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
