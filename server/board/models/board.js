var b1 = {
		_id: 0,
		title: '첫번째 게시물',
		writer: '김철수',
		content: '첫번째 게시물 입니다.',
		view: 0,
		regdate: '2099-06-20 12:34:12'
};
var b2 = {
		_id: 1,
		title: '두번째 게시물',
		writer: '이영희',
		content: '두번째 게시물 입니다.',
		view: 0,
		regdate: '2099-06-21 12:54:34'
};

var boardList = [b1, b2];

const { MongoClient } = require('mongodb')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);

// Database Name
const dbName = 'boardDB2';
var db;

// Use connect method to connect to the server
client.connect(function(err){
  if(err){
    console.error(err);
  }else{
    console.log('Connected successfully to server');
    db = client.db(dbName);
    db.board = db.collection('board');
    db.seq = db.collection('seq');
  }
});

module.exports = {
  // DB 연결 종료
  dbClose: function(){
    client.close();
  },
	// 게시물 목록 조회
	list: function(callback){
		// TODO: DB에서 목록 조회한 후 결과를 콜백으로 전달
    db.board.find({}, {content: 0}).toArray(function(err, data){
      callback(data);
    });
	},
	// 게시물 상세 조회
	show: function(no, callback){
		// TODO: DB에서 no 게시물을 조회한 후 결과를 콜백으로 전달
    db.board.findOneAndUpdate({_id: no}, {$inc: {view: 1}}, function(err, data){
      console.log('제목', data.value.title);
      callback(data.value);
    });
	},
	// 게시물 등록
	create: function(article, callback){
		// TODO: DB에 article을 등록한 후 게시물 번호를 콜백으로 전달
    db.seq.findOneAndUpdate({}, {$inc: {index: 1}}, function(err, data){
      
    });
	},
	// 게시물 삭제
	remove: function(no, callback){
		// TODO: DB에서 no 게시물을 삭제한 후 콜백 호출
    callback();
	}
};
