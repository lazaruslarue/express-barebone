const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, 'Content-type/html');
  response.write('<html>');
  response.write('<body>');
  response.write('<h1>Hello, World!</h1>');
  response.write('</body>');
  response.write('</html>');
  response.end();
});

server.listen(3000, () => {
  console.log('listening');
});

/*

















response.end('<h1>howdy, world!</h1>\n');











response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();


























*/
/* 


<html>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>;

*/
