const http = require('http');
const fs = require('fs');
const path = require('path');
var hello = require('./hellonode');

// request(event) listener
function myListener(req, res){
  var filename = req.url.substring(1);
  filename = path.join(__dirname, filename);

  // 스트림 방식
  var filestream = fs.createReadStream(filename);
  filestream.on('error', function(){
    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
    res.end('<h1>' + req.url + ' file을 찾을 수 없음!!!!!</h1>');
  });
  filestream.on('open', function(){
    res.writeHead(200);
  });
  filestream.pipe(res);
  // filestream.on('data', function(data){
  //   console.log(data.length/1024 + 'KB');
  //   res.write(data);
  // });
  filestream.on('close', function(){
    res.end();
  });


  // fs.readFile(filename, function(err, data){
  //   if(err){
  //     res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
  //     res.end('<h1>' + hello.a + hello.hi(req.url) + ' file을 찾을 수 없음!!!!!</h1>');
  //   }else{
  //     res.writeHead(200);
  //     console.log(data.length/1024 + 'KB');
  //     res.end(data);
  //   }
  // });
}
// const server = http.createServer(myListener);
const server = new http.Server();
server.on('request', myListener);

var port = process.argv[2] || 8000;
// server.listen(port, function(){
//   console.log('Start HTTP Server.', port);
// });
server.on('listening', function(){
  console.log('Start HTTP Server.', port);
});
server.on('error', function(err){
  console.error('서버 구동 실패.', err.message);
  server.listen(++port);
});
server.listen(port);
