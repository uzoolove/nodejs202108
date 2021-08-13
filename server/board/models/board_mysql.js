var mysql = require('mysql');
const moment = require('moment');

var pool = mysql.createPool({
  connectionLimit: 10,
  host: '106.246.114.67',
  port: 3506,
	user: 'node',
	password: 'Node1234',
	database: 'board'
});

var sql = {
		list: 'SELECT _id, title, writer, view, regdate FROM board ORDER BY _id DESC',
		show: 'SELECT * FROM board WHERE _id=?',
		incView: 'UPDATE board SET view=view+1 WHERE _id=?',
		create: 'INSERT INTO board SET ?',
		remove: 'DELETE FROM board WHERE _id=?'
};

module.exports = {
	// 게시물 목록 조회
	list: function(cb){
		pool.query(sql.list, function(err, data){
      if(err){
        console.error(err);
        cb([]);
      }else{
        cb(data);
      }
    });
	},
	// 게시물 상세 조회
	show: function(no, cb){
		pool.query(sql.show, [no], function(err, data){
      pool.query(sql.incView, [no]);
      cb(data[0]);
    });
	},
	// 게시물 등록
	create: function(article, cb){
		article.regdate = moment().format('YYYY-MM-DD HH:mm:ss');
		pool.query(sql.create, article, function(err, data){
      cb(data.insertId);
    });
	},
	// 게시물 삭제
	remove: function(no, cb){
		pool.query(sql.remove, [no], cb);
	}
};














