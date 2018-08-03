const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request recieved... now what?', request);

  response.writeHead(200, 'Content-type/html');
  response.end('howdy, world!>\n');
  // response.end('<h1>howdy, world!</h1>\n');
});

server.listen(3000, () => {
  console.log('listening');
});

/*















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
