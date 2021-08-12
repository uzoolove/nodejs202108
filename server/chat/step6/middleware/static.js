const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');

// 정적인 컨텐츠를 응답
function staticServer(req, res, next){
  if(req.url == '/'){
    req.url = '/index.html';
  }

  var parseUrl = url.parse(req.url);
  var pathname = parseUrl.pathname;

  var filename = path.join(base, pathname);
  var mimeType = mime.getType(req.url);

  fs.stat(filename, function(err, status){
    if(err){
      next();
    }else if(status.isDirectory()){
      var error = new Error(`디렉토리 접근 권한이 없습니다.`);
      error.status = 403;
      next(error);
    }else{
      res.writeHead(200, {'Content-Type': mimeType + ';charset=utf-8'});
      fs.createReadStream(filename).pipe(res);
    }
  });
}

var base;
module.exports = function(dir){
  base = dir;
  return staticServer;
};