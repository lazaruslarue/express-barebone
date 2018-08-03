const express = require('express');

const apiRouter = express.Router();

/* 











  try some routes!
  
*/
apiRouter.get('/success', function(req, res) {
  console.log('first request', req.route.path);
  // TODO: send a success code
  res.sendStatus(200);
});

apiRouter.get('/badrequest', function(req, res) {
  res.sendStatus(400);
});

/* 











  get some data!
  const bookShelf = require('./models/bookShelf');

  */
apiRouter.get('/all', (req, res) => {
  /*
    get all books
    TODO: implement get all books
  */
  res.sendStatus(501);
});

apiRouter.get('/author/:first.:last', (req, res) => {
  // TODO: implement get book by author in a rudimentary way
  res.sendStatus(501);
});

/* 





  let's add some data (and learn about middleware)

*/
apiRouter.post('/new', (req, res) => {
  // TODO: implement add a new book!
  res.sendStatus(501);
});

/* 



  






  let's remove some data

*/
apiRouter.delete('/remove', (req, res) => {
  // TODO: implement remove a book!
  res.sendStatus(501);
});

module.exports = apiRouter;

/* 



























apiRouter.get('/author/:first.:last', (req, res) => {
  // TODO: implement get book by author in a rudimentary way
  const author = req.params;
  console.log(req.params);
  const book = bookShelf.getAllBooks().find(b => {
    if (
      b.author.indexOf(author.first) > -1 ||
      b.author.indexOf(author.last) > -1
    ) {
      return true;
    } else {
      return false;
    }
  });

  if (book) {
    res.send(book);
  } else {
    res.send(
      new Error('no books by that author... get thyself to the booksmith')
    );
  }
});













*/
