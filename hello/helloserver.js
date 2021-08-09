const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function(req, res){
  // res.writeHead(200);
  // res.write('<h1>Hello HTTP Server~<h1>');
  // res.end();

  var filename = req.url.substring(1);
  filename = path.join(__dirname, filename);

  // 동기방식의 함수 호출
  // try{
  //   let data = fs.readFileSync(filename);
  //   res.writeHead(200);
  //   res.write(data);
  //   res.end();
  // }catch(err){
  //   res.writeHead(404);
  //   res.end('<h1>' + req.url + ' file not found!</h1>');
  // }

  // 비동기방식의 함수 호출
  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404);
      res.end('<h1>' + req.url + ' file not found!</h1>');
    }else{
      res.writeHead(200);
      res.end(data);
    }
  });

});

var port = 8000;
server.listen(port, function(){
  console.log('Start HTTP Server.', port);
});