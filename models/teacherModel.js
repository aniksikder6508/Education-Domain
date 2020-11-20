const db = require('./db');

module.exports= {

	

	insert: function(user, callback){
		console.log('excute');
		console.log(user);
		var sql ="insert into notice (teacherid,notice) values('"+user.id+"','"+user.notice+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	}
	

	}
