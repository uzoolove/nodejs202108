function print(msg){
  // 10초 시간 소요
  console.log(msg);
}
print('1. start');

// setInterval(print, 2000, '6. setInterval');
setImmediate(print, '5. setImmediate');
setTimeout(print, 0, '4. setTimeout');
process.nextTick(print, '3. nextTick');

print('2. finish');