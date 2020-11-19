const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql ="select * from userinfo where id='"+user.id+"' and password='"+user.password+"'";
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
		var sql ="select * from userinfo ORDER BY id DESC LIMIT 1 "; //"select * from userinfo where username='"+id.id+"'";
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
		var sql ="insert into userinfo (id,name,username,email,password,gender,address,dob,contact,blood,status,type) values('"+user.id+"','"+user.name+"','"+user.username+"','"+user.email+"','"+user.password+"','"+user.gender+"','"+user.address+"','"+user.dob+"','"+user.contact+"','"+user.blood+"','"+user.status+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	update:function(user, callback){
		var sql= "" ;//"update userinfo set name='"+user.name+"',password='"+user.password+"',contact='"+user.contact+"' where username='"+user.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	delete: function(id, callback){
		var sql="" ;//"delete from userinfo where username='"+id.username+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	}
}