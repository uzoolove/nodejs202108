console.log('주로 코어 모듈이 사용하는 전형적인 exports 패턴');
var someObj = {
  createServer: function(requestListner){
    // ......
    // 클라이언트의 요청 메세지가 도착하면
    // 요청정보를 파싱
    requestListner({}, {});
  },
  readFile: function(filepath, fn){
    // filepath를 읽어서 fn의 인자값으로 전달.
    fn('에러 메세지');
    fn(null, '읽은 파일 내용');
  },
  join: function(...args){
    var result = args.shift();
    for(var arg of args){
      result += require('path').sep + arg;
    }
    return result;
  }
};

module.exports = someObj;