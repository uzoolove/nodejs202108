/**
 * 웹 어플리케이션 개발시 일반적으로 처리해야 할 작업
 * 1. 로깅(logger)
 * 2. url 텍스트 인코딩
 * 3. POST 방식의 요청 바디 파싱
 * 4. JSON 방식의 데이터 파싱
 * 5. 쿠키 파싱
 * 6. 정적인 자원 응답(static)
 * 7. 세션 관리
 * 8. 동적인 자원 응답
 * 9. 파일 업로드
 * 10. 보안(인증, 권한)
 * 11. 에러 처리
 * ......
 * 
 * 각각의 기능을 독립적인 모듈(함수)로 작성(미들웨어)
 * connect 확장모듈 사용
 *  - 미들웨어를 관리하는 컨테이너
 *  - connect@2: 미들웨어 관리 + 미들웨어 직접 제공
 *  - connect@3: 미들웨어 관리
 */

const connect = require('connect');
const path = require('path');
const static = require('./middleware/static');
const logger = require('./middleware/logger');

var app = connect();

app.use(static(path.join(__dirname, 'public')));
app.use(logger());

// 404 에러 처리 미들웨어
app.use(function(req, res, next){
  // connect 미들웨어
  // 1. req, res, next를 인자값으로 받는다.
  // 2. res 응답을 끝내거나 next를 호출한다.
  res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
  res.end(`<h1>${req.url} 파일을 찾을 수 없습니다.</h1>`);
});

module.exports = app;


