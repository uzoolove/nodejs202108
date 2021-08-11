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
    console.log(socket.remoteAddress + ': ' + data);
    socket.write(data);
  });
});
// 2. 포트 오픈 서버 구동
tcpServer.listen(8100, function(){
  console.log('TCP 서버 구동. 8100');
});
