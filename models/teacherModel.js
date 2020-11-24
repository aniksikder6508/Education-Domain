const db = require('./db');

module.exports= {

	

	insert: function(user, callback){
		console.log('excute');
		console.log(user);
		var sql ="insert into notice (teacherid,notice) values('"+user.id+"','"+user.notice+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},


	getAll: function(callback){
		var sql ="select * from notice";
		db.getResults(sql, function(results){
			callback(results);
		});
	},

	getById: function(id, callback){
		var sql ="select * from notice where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},


	update:function(editnotice,callback){
		var sql= "update notice set notice='"+editnotice.notice+"'  where id='"+editnotice.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},

	

	delete: function(deletenotice, callback){
		var sql="delete from notice" //where id='"+deletenotice.id+"'";
		db.execute(sql,function(results){
			callback(true);
		});

	},




	studentlist: function(callback){
		var sql ="select * from userinfo where type='Student'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


	classroutine: function(callback){
		var sql ="select * from classroutine";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	
	getPassword: function(id, callback){
		var sql ="select * from userinfo where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},

	updatePassword: function(user, callback){
		var sql= "update userinfo set password='"+user.password+"'  where id='"+user.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});
	},

	tsf: function(callback){
		var sql ="select * from tsf";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getByTsfId: function(id, callback){
		var sql ="select * from tsf where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},

	tsfupdate:function(editslot,callback){

	//	var sql= "update tsf set slot1='"+editslot.slot1+"',slot2='"+editslot.slot2+"',slot3='"+editslot.slot3+"',slot4='"+editslot.slot4+"',  where id='"+editslot.id+"'";
		//var sql= "update tsf set slot1='"+editslot.slot1+"',slot2='"+editslot.slot2+"' where id='"+editslot.id+"'";
		var sql= "update tsf set slot1='"+editslot.slot1+"',slot2='"+editslot.slot2+"',slot3='"+editslot.slot3+"',slot4='"+editslot.slot4+"' where id='"+editslot.id+"'";



		
		db.execute(sql,function(results){
				callback(true);
		});

	},


	grade: function(callback){
		var sql ="select * from gradeshit";
		db.getResults(sql, function(results){
			callback(results);
		});
	},


	getByGradeId: function(id, callback){
		var sql ="select * from gradeshit where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},


	
	gradeupdate:function(editgrade,callback){

		
         var sql= "update gradeshit set Midterm='"+editgrade.Midterm+"',Finalterm='"+editgrade.Finalterm+"',Total='"+editgrade.Total+"' where id='"+editgrade.id+"'";
			db.execute(sql,function(results){
					callback(true);
			});
	
		}

	}
