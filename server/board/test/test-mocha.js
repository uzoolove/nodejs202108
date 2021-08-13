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
    it.skip('sync(hello, 5)', function(){
      assert.strictEqual(upper.sync('hello', 5), null);
    });
    it('sync(hello, 0)', function(){
      assert.strictEqual(upper.sync('hello', 0), 'H');
    });
  });
  describe('# 비동기 테스트', function(){
    // this.timeout(3000);
    // unit test
    it('async(hello, 2)', function(done){
      this.timeout(1000);
      upper.async('hello', 2, function(result){
        assert(result === 'L');
        done();
      });
    });
    it.skip('async(hello, 5)', function(done){
      upper.async('hello', 5, function(result){
        assert.strictEqual(result, null);
        done();
      });
    });
    it('async(hello, 0)', function(done){
      // this.timeout(1500);
      upper.async('hello', 0, function(result){
        assert.strictEqual(result, 'H');
        done();
      }); 
    });
  });
});
