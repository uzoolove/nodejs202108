console.log('console.log');
console.info('console.info');
console.warn('console.warn');
console.error('console.error');
console.debug('console.debug');

const tracer = require('tracer').dailyfile({
  level: 0,
  root: require('path').join(__dirname, 'logs')
});
tracer.log('tracer.log');// <= 0
tracer.trace('tracer.trace');// <= 1
tracer.debug('tracer.debug');// <= 2
tracer.info('tracer.info');// <= 3
tracer.warn('tracer.warn');// <= 4
tracer.error('tracer.error');// <= 5
