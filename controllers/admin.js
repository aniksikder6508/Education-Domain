const express                       =   require('express');
const adminModel                    =   require.main.require('./models/adminModel');
const {body,validationResult}      = require('express-validator');
const router                           =   express.Router();

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
/*[
    body('name').isLength({min:4}),
    body('email').isEmail(),
body('address').isLength({min:5}),
body('contact').isNumeric({min:4}),
body('blood').isLength({min:1}),
body('status').isLength({min:4}),
body('type').isLength({min:4})] */

router.post('/adduser',[
    body('name').isLength({min:4}),
    body('email').isEmail(),
    body('address').isLength({min:5}),
    body('contact').isNumeric({min:4}),
    body('blood').isLength({min:1}),
    body('status').isLength({min:4}),
    body('type').isLength({min:4})],(req,res)=>{
    
        const errors = validationResult(req);
            if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
            }
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
router.post('/edituser',
    [body('name').isLength({min:4}),
    body('email').isEmail(),
    body('gender').isLength({min:4}),
    body('dob').isLength({min:4}),
    body('address').isLength({min:4}),
    body('contact').isLength({min:4}),
    body('blood').isLength({min:4}),
    ]
,(req,res)=>{
    var id=req.session.sid;
    var admininfo={
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        dob:req.body.dob,
        address:req.body.address,
        contact:req.body.contact,
        blood:req.body.blood,
        id:id
    };
    console.log(admininfo);
    adminModel.updateAdminInfo(admininfo,function(results){
        if(results){
            console.log('Updated');
        }
        else{
            console.log('can not updated');
        }

    });
    

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

router.post('/password',
    [body('oldpass').isLength({min:4}),
    body('newpass').isLength({min:4}),
    body('newpass2').isLength({min:4})
    ]
    ,(req,res)=>{
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

router.get('/user',(req,res)=>{
        res.render('admin/user');
});
router.post('/user',(req,res)=>{
    adminModel.search(req.body.search,function(results){
        res.json({
            results: results
        });
        console.log(results);
    });
});
router.get('/book',(req,res)=>{
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
                res.render('admin/book')
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
    //res.render('admin/book');
});
router.post('/book',[body('bookName').isLength({min:5}),body('author').isLength({min: 4}),body('category').isLength({min:4})],(req,res)=>{
    const errors = validationResult(req);
            if (!errors.isEmpty()) {
             return res.status(400).json({ errors: errors.array() });
            }
    var book={
        bookName:req.body.bookName,
        author:req.body.author,
        category:req.body.category
    };
    adminModel.insertBook(book,function(results){
        if(results){
            res.render('admin/book');
        }
        else{
            console.log('Opps!! something Wrong');
        }
    });

});
router.get('/news',(req,res)=>{
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
                adminModel.getAllNews(function(results){
                    adminModel.getAllNotices(function(results2){
                        console.log(results2);
                        res.render('admin/news',{users:{results,results2}});
                    });
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
});

router.post('/news',[body('title').isLength({min:4}),body('description').isLength({min:4}),body('type').isLength({min:4})],(req,res)=>{
        var news={
            title:req.body.title,
            description:req.body.description,
            type:req.body.type
        }
        adminModel.insertNews(news,function(results){
            if(results){
                req.body.type=="";
                req.body.description=="";
                adminModel.getAllNews(function(results){
                    adminModel.getAllNotices(function(results2){
                        console.log(results2);
                        res.render('admin/news',{users:{results,results2}});
                    });
                });
            }
            else{
                console.log('Error on news')
            }
        });
        
});
router.get('/editnews/:id',(req,res)=>{
    //res.render('admin/editnews');
    var id=req.params.id;
   // var id=req.query.nid;
    console.log(id);
    adminModel.getNews(id,function(results){
        console.log('erorr finding');
        console.log(results);
        var news={
            title:results.title,
            description:results.description,
            type:results.type
        }
        res.render('admin/editnews',news);
    });
    
});
router.post('/editnews/:id',(req,res)=>{
    var updateNews={
        id:req.params.id,
        title:req.body.title,
        description:req.body.description,
        type:req.body.type
    }
    adminModel.updateNews(updateNews,function(results){
        adminModel.getAllNews(function(results){
            adminModel.getAllNotices(function(results2){
                console.log(results2);
                res.render('admin/news',{users:{results,results2}});
            });
        });
        
    });

});
router.get('/deletenews/:id',(req,res)=>{
    var id=req.params.id;
   // var id=req.query.nid;
    //console.log(id);
    adminModel.getNews(id,function(results){
       // console.log('erorr finding');
        console.log(results);
        var news={
            title:results.title,
            description:results.description,
            type:results.type
        }
        res.render('admin/deletenews',news);
    });
    
});
router.post('/deletenews/:id',(req,res)=>{
    var deleteNews={
        id:req.params.id,
       
    }
    adminModel.deleteNews(deleteNews,function(results){
        adminModel.getAllNews(function(results){
            adminModel.getAllNotices(function(results2){
                console.log(results2);
                res.render('admin/news',{users:{results,results2}});
            });
        });
        
    });

});

module.exports =router;