var file = require('fs').createWriteStream('echo.txt', {flags: 'a'});
require('net').createServer(function(s){
  s.on('error', ()=>{});
  s.pipe(s);
  s.pipe(process.stdout);
  s.pipe(file);
}).listen(8100);