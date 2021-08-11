const net = require('net');
// 1. net.Server 생성
// var tcpServer = new net.Server();
// tcpServer.on('connection', function(){});
var tcpServer = net.createServer(function(socket){
  console.log(socket.remoteAddress, '접속함.');
  // 반드시 error 이벤트를 처리해야 한다.
  socket.on('error', function(){
    console.log(socket.remoteAddress, '접속 종료.');
  });
  // 3. 클라이언트와 메세지 송수신
  socket.on('data', function(data){
    var req = parseRequest(data.toString());
    console.log(req.method, req.url, req.httpVersion);
    console.log(req.headers['user-agent']);
  });
});

// 브라우저의 요청메세지를 파싱한다.
function parseRequest(data){
  var req = {
    headers: {}
  };

  var arr = data.split('\r\n');
  var startLine = arr.shift().split(' ');
  req.method = startLine[0];
  req.url = startLine[1];
  req.httpVersion = startLine[2];

  for(var i=0; i<arr.length; i++){
    if(arr[i].trim() != ''){
      var header = arr[i].split(':');
      var name = header[0].trim().toLowerCase();
      var value = header[1].trim();
      req.headers[name] = value;
    }else{
      break;
    }
  }
  return req;
}

// 2. 포트 오픈 서버 구동
tcpServer.listen(8100, function(){
  console.log('TCP 서버 구동. 8100');
});
