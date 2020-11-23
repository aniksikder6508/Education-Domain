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
	getNews: function(id,callback){
		var sql = "select * from news where id='"+id+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAllTeacher:function(callback){
		var sql ="select * from userinfo where (type ='Teacher' AND status='Active')" ;
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllNews:function(callback){
		var sql ="select * from news where type='News'";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	getAllNotices:function(callback){
		var sql ="select * from news where type='Notices'";
		db.getResults(sql, function(results2){
			callback(results2);
		});
	},
	insert: function(user, callback){
		//console.log('excute');
		//console.log(user);
		var sql ="insert into userinfo (id,name,username,email,password,gender,address,dob,contact,blood,status,type) values('"+user.id+"','"+user.name+"','"+user.username+"','"+user.email+"','"+user.password+"','"+user.gender+"','"+user.address+"','"+user.dob+"','"+user.contact+"','"+user.blood+"','"+user.status+"','"+user.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});

	},
	insertCourse:function(course,callback){
		console.log('Course Insert');
		var sql="insert into course (courseName,courseId,courseTime,courseDay,courseTeacher) values ('"+course.courseName+"','"+course.courseId+"','"+course.courseTime+"','"+course.courseDay+"','"+course.courseTeacher+"')";
		db.execute(sql,function(results){
			callback(results);
		});
	
	},
	insertBook:function(book,callback){
		var sql="insert into library (bookName,author,category) values ('"+book.bookName+"','"+book.author+"','"+book.category+"')";
		db.execute(sql,function(results){
			callback(results);
		});
	
	},
	insertNews:function(news,callback){
		var sql="insert into news (title,description,type) values ('"+news.title+"','"+news.description+"','"+news.type+"')";
		db.execute(sql,function(results){
			callback(results);
		});
	
	},
	insertNotices:function(news,callback){
		var sql="insert into notices (title,description) values ('"+news.title+"','"+news.description+"')";
		db.execute(sql,function(results){
			callback(results);
		});
	
	},
	updateAdminInfo:function(admin,callback){
		var sql="update userinfo set name='"+admin.name+"',email='"+admin.email+"',gender='"+admin.gender+"',address='"+admin.address+"',dob='"+admin.dob+"',blood='"+admin.blood+"' where id='"+admin.id+"'";
		db.execute(sql,function(results){
			callback(results);
		});
	},
	userUpdate:function(user,callback){
		var sql="update userinfo set name='"+user.name+"',email='"+user.email+"',gender='"+user.gender+"',address='"+user.address+"',dob='"+user.dob+"',blood='"+user.blood+"',status='"+user.status+"' where id='"+user.id+"'";
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
	updateNews:function(updateNews, callback){
		var sql= "update news set title='"+updateNews.title+"',description='"+updateNews.description+"',type='"+updateNews.type+"' where id='"+updateNews.id+"'";
		db.execute(sql,function(results){
				callback(true);
		});

	},
	search: function(search, callback){
		var sql = "select * from userinfo WHERE (id = '"+search+"' AND type !='Admin' )OR name = '"+search+"' OR email = '"+search+"' OR contact = '"+search+"'  OR type = '"+search+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	deleteNews:function(deleteNews, callback){
		var sql="delete from news where id='"+deleteNews.id+"'";
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