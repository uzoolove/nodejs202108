var url = require('url');

// 채팅 화면으로 이동
function chat(req, res){
  res.writeHead(303, {Location: '/chat.html'});
  res.end();
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
    case '/logout':
    default:
      next();
  }
}

module.exports = router;