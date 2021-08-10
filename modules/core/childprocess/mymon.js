var childProcess = require('child_process');
var path = require('path');
var fs = require('fs');

// node mymon.js ../../../hello/helloserver.js 8080
// => node helloserver.js 8080

var args = process.argv.slice(3);
// 상대경로가 포함된 경로를 절대경로로 반환
var file = path.resolve(process.argv[2]);
var filename = path.basename(file);
var child;

function runChild(){
  child = childProcess.fork(file, args);
  console.log('running node.exe', filename, args);
  child.on('close', function(){
    console.log('stop', filename);
  });
}

runChild();

function restart(){
  if(child) child.kill();
  setTimeout(runChild, 1000);
}

fs.watchFile(file, restart);

// 'rs' 명령어를 입력하고 엔터를 치면 수동으로 재시작한다.
process.stdin.on('data', function(data){
  if(data.toString().trim()=='rs') restart();
});