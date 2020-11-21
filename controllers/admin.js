const express       =   require('express');
const adminModel    =   require.main.require('./models/adminModel');
const router        =   express.Router();

router.get('/',(req,res)=>{

    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                name:results.name,
                email:results.email,
                gender:results.gender,
                dob:results.dob,
                address:results.address,
                contact:results.contact,
                blood:results.blood,
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/home',admin);
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
  
    //res.send('Hello admin');
});

router.get('/adduser',(req,res)=>{

    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/adduser');
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }

   
});

router.post('/adduser',(req,res)=>{
    //var id=req.session.sid;
    //console.log(id);
     /* adminModel.getLastId(function(results){
            var id=results.id+1;
            console.log("Last ID:"+id);
           
        });*/
        if(req.body.name!="" && req.body.email!="" && req.body.address!="" && req.body.gender!="" && req.body.contact!="" && req.body.blood!="" && req.body.status!="" && req.body.type!=""){
            console.log('Success');
            if(req.body.type ==='Admin'){
            
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'2020-'+lastID,
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user);
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }

                    });
                });
               
            }
            else if(req.body.type ==='Teacher'){
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'2020-'+lastID+'-3',
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user);
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }
                    });
                });
                res.send('Teacher');
            }
            else{
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'20-'+lastID+'-3',
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user)
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }
                    });
                });
                res.send('Student');
            }
        }
        else{
            res.render('admin/adduser');
            console.log('Failed');
        }
        
        
    
  
});
router.get('/addcourse',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                adminModel.getAllTeacher(function(results){
                    /*var teacher={
                        courseTeacher:results.name
                    };*/
                    res.render('admin/addcourse',{users:results});
                });
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
    //res.render('admin/addcourse');
});

router.post('/addcourse',(req,res)=>{

    var course={
        courseName:req.body.courseName,
        courseId:'100',
        courseTime:req.body.courseTime,
        courseDay:req.body.courseDay,
        courseTeacher:req.body.courseTeacher
    };
    adminModel.insertCourse(course,function(results){
        if(results){
            console.log('Success');
            console.log(course);
        }
        else{
            console.log('Failed');
        }
    });

});

router.get('/edituser',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                name:results.name,
                email:results.email,
                gender:results.gender,
                dob:results.dob,
                address:results.address,
                contact:results.contact,
                blood:results.blood,
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/edituser',admin);
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
});
router.post('/edituser',(req,res)=>{
    

});

router.get('/password',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/password');
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
    
});

router.post('/password',(req,res)=>{
    var id=req.session.sid;
    adminModel.getById(id,function(results){
        var admin={
            password:results.password
        };
        if(admin.password===req.body.oldpass){
            if(req.body.newpass===req.body.newpass2){
                var user={
                    password:req.body.newpass,
                    id:req.session.sid
                }
                console.log(user);
                adminModel.update(user,function(results){
                    if(results){
                        console.log('Password Reset Successfully');
                    }
                    else{
                        console.log('Query erorr');
                    }
                });
            }
            else{
                console.log('Failed');
            }
        }
        else{
            console.log('Failed');
        }
    });

});


module.exports =router;