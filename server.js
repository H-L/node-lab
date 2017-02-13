let http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer();

server.on('request', (request, response) => {

  response.writeHead(200);

  let query = url.parse(request.url, true).query;

  if (query === undefined) {
    response.write('Bonjour Anonyme');
  }
  else{
    response.write('Bonjour ' + query.name);
  }

  response.end();


  // fs.readFile('index.html', (err, data) => {
  //   if (err) {
  //     response.writeHead(404)
  //     response.end('Ce fichier n\'existe pas')
  //   }
  //   else {
  //     response.writeHead(200, {
  //       'Content-type': 'text/html; charset=UTF-8'
  //     })
  //     response.end(data)
  //   }
  // })
});

server.listen(8080);
