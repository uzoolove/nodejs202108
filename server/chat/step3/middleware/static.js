const fs = require('fs');
const path = require('path');
const mime = require('mime');
const url = require('url');

// 정적인 컨텐츠를 응답
function staticServer(req, res){
  if(req.url == '/'){
    req.url = '/index.html';
  }

  var parseUrl = url.parse(req.url);
  var pathname = parseUrl.pathname;

  var filename = path.join(base, pathname);
  var mimeType = mime.getType(req.url);

  fs.stat(filename, function(err, status){
    if(err){
      res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
    }else if(status.isDirectory()){
      res.writeHead(403, {'Content-Type': 'text/html;charset=utf-8'});
      res.end(`<h1>디렉토리 접근 권한이 없습니다.</h1>`);
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