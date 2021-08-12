const fs = require('fs');
const path = require('path');
var url = require('url');

var views = path.join(__dirname, '..', 'views');

// 채팅 화면으로 이동
function chat(req, res){
  // res.writeHead(303, {Location: '/chat.html'});
  // res.end();

  var nickname = url.parse(req.url, true).query.username;
  var filename = path.join(views, 'chat.html');
  fs.readFile(filename, function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    data = data.toString().replace('<%=username%>', nickname);
    res.end(data);
  });
}

// 로그인
function login(req, res){

}

// 로그아웃
function logout(req, res){

}

function router(req, res, next){
  var pathname = url.parse(req.url).pathname;
  switch(pathname){
    case '/chat':
      chat(req, res);
      break;
    case '/login':
      login(req, res);
      break;
    case '/logout':
      logout(req, res);
      break;
    default:
      next();
  }
}

module.exports = router;