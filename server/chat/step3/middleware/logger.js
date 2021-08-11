var fs = require('fs');
var os = require('os');
function logger(options){
  if(options && options.target == 'file'){
    var logfile = fs.createWriteStream(options.filename || 'chat.log', {flags: 'a'});
  }
  return function(msg){
    if(logfile){
      logfile.write(`[${Date()}] ${res.statusCode} ${req.url}`);
      logfile.write(require('os').EOL);
    }else{
      console.log(`[${Date()}] ${res.statusCode} ${req.url}`);
    }
  };
}
module.exports = logger;