var m1 = require('./m1');
console.log(typeof m1, m1.name, m1.type);

var m2 = require('./m2');
console.log(typeof m2, m2());

var m3 = require('./m3');
var kim = m3({kor: 100, eng: 90});
var lee = m3({kor: 80, eng: 70});
console.log(kim.sum(), kim.avg());
console.log(lee.sum(), lee.avg());

var http = require('./m4');
http.createServer(function(req, res){
  // req로 부터 요청정보를 분석
  // res로 응답 전송
});

var fs = require('./m4');
fs.readFile('hello.html', function(err, data){
  if(err){
    console.error(err);
  }else{
    console.log(data);
  }
});

var path = require('./m4');
var filepath = path.join(__dirname, 'public', 'hello.html');
console.log(filepath);