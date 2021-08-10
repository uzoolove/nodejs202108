const childProcess = require('child_process');

// node.exe spawnchild.js
var child = childProcess.spawn('node.exe', ['spawnchild.js'], {
  // stdio: 자식 프로세스의 표준 입출력 장치를 지정[stdin, stdout, stderr]
  // 'pipe'(기본값): 자식 프로세스의 표준 입출력 장치를
  // 생성된 ChildProcess 객체의 stdin, stdout, stderr 속성으로 pipe 연결
  // stdio: 'pipe' -> ['pipe', 'pipe', 'pipe']
  stdio: 'pipe'
});

// 4. Parent <- Child
child.stdout.on('data', function(data){
  console.log('from child: ' + data);
});

// 1. Parent - > Child
child.stdin.write('hello');
