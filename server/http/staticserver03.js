const fs = require('fs');
const path = require('path');
const http = require('http');
// const mymime = require('./mymime');
const mime = require('mime');

var tcpServer = http.createServer(function(req, res){
  console.log(req.method, req.url, req.httpVersion);
  console.log(req.headers['user-agent']);
  if(req.url == '/'){
    req.url = '/index.html';
  }
  var filename = path.join(__dirname, req.url);

  var mimeType = mime.getType(req.url);

  fs.stat(filename, function(err, status){
    if(err){

    }else if(status.isDirectory()){

    }else{

    }
  });

  fs.readFile(filename, function(err, data){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    }else{
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      res.end(data);
    }
  });
});
// 2. 포트 오픈 서버 구동
tcpServer.listen(80, function(){
  console.log('HTTP 서버 구동. 80');
});


