var assert = require('assert');
var upper = require('./upper');
var model = require('../models/board');

var article = {writer: '김철수', title: 'mocha 테스트', content: '김철수 만세'};

// test suite
describe('# upper 함수 테스트', function(){
  describe('# 동기 테스트', function(){
    // unit test
    it('sync(hello, 2)', function(){
      assert(upper.sync('hello', 2) === 'L');
    });
    it('sync(hello, 5)', function(){
      assert.strictEqual(upper.sync('hello', 5), null);
    });
    it('sync(hello, 0)', function(){
      assert.strictEqual(upper.sync('hello', 0), 'H');
    });
  });
});
