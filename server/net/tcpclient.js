const net = require('net');
var target = {
  // host: 'localhost',
  host: '106.246.114.67',
  port: 8100
};

// 1. new.Socket 생성
// var socket = new net.Socket();
// 2. 서버 접속
// socket.connect();
var socket = net.createConnection(target.port, target.host, function(){
  console.log(`서버 접속. ${target.host}:${target.port}`);
  // 3. 서버와 메세지 송수신
  // socket.write('hello');
});
socket.on('data', function(data){
  console.log('서버로부터 수신한 메세지. ' + data);
});

// 표준 입력장치로부터 메세지를 읽어서 서버에 전송
process.stdin.on('data', function(data){
  socket.write(data);
});

