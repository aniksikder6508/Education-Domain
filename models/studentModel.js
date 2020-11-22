const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql ="select * from course where id='"+user.courseName+"' and password='"+user.grade+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getbysubject:function(id, callback){
		var sql ="select * from course ";
		db.getResults(sql, function(results){
				callback(results)
		});
	},
	getbylibrary: function(callback){
		var sql ="select * from library ";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){
		var sql ="select * from userinfo where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getLastId: function(callback){
		var sql ="select * from course ORDER BY id DESC LIMIT 1 "; //"select * from userinfo where username='"+id.id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(callback){
		var sql ="" ;// "select * from userinfo where type = 1";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
	 	console.log('excute');
	console.log(user);
	 	var sql ="insert into course (id,courseName,teacherName,grade,timing,status) values('"+user.id+"','"+user.courseName+"','"+user.teacherName+"','"+user.grade+",'"+user.timing+"','"+user.status+"";
	 	db.execute(sql,function(results){
	 		callback(results);
	 	});

	 },
	 update:function(user, callback){
		var sql= "update userinfo set password='"+user.password+"'  where id='"+user.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		var sql="" ;//"delete from userinfo where username='"+id.username+"'";
		db.execute(sql,function(results){
			callback(true);
		});
	},

	////
	
	getAll1: function(callback){
		var sql ="select * from notice";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	getById2: function(id, callback){
		var sql ="select * from notice where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},

	delete1: function(deleteEmail, callback){
		var sql="delete from notice where id='"+deleteEmail.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	},
	delete2: function(deletenotice, callback){
		var sql="delete from notice where id='"+deletenotice.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}


}