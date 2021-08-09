const http = require('http');
const server = http.createServer(function(req, res){
  res.writeHead(200);
  res.write('<h1>Hello HTTP Server~<h1>');
  res.end();
});

var port = 8000;
server.listen(port, function(){
  console.log('Start HTTP Server.', port);
});