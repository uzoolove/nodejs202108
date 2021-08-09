function hello(msg){
  return 'Hello ' + msg;
}
console.log(hello('Node'));

var a = 100;
// require()의 리턴값으로 사용됨
module.exports = {
  hi: hello,
  a: a
};