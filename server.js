/* please don't actually try to use this as your server */
const express = require('express')
const app = express();

app.get('/', function (req, res) {

  res.sendFile('index.html', {root: './'})
  console.log('index request')
})

/* try some routes!*/
app.get('/first', function (req, res) {
  res.send('<h1>this is the result of a GET request to /first</h1>')
  console.log('first request', req.route.path);
})

app.get('/param/:paramId', function (req, res) {
  var msg = [
    '<h1>this is the result of a GET request to /param</h1>',
    '<h2>your paramId is: ',
        '<b>'+req.params.paramId+'</b>',
    '</h2>'
  ].join('')
  res.send(msg)
  console.log('param\'d request', req.route.path);
})

app.get('/mixed/:paramId.:routeInfo', function (req, res) {
  var response = '<div>'
  response += '<h2>route: ' + req.route.path  + '</h2>'
  for (var key in req.params) {
    response += '<p>' +key + ' : ' + req.params[key] + '</p>'
  }
  response += '</div>'
  res.send(response)
  console.log('mixed route request', response);
})

app.listen(3000, function () {
  console.log('listen on 3000')
})
