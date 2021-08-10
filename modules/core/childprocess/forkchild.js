const path = require('path');
var filename = path.basename(__filename);
console.log(filename, '실행');

// 2. Chlid <- Parent
process.on('message', function(data){
  // 3. Child -> Parent
  process.send(data);
});

setTimeout(function(){
  // process.exit();// 정상 종료
  a();
}, 1000);