const express = require('express');
const adminModel = require.main.require('./models/adminModel');
const studentModel = require.main.require('./models/studentModel');
const router = express.Router();


// router.get('/',(req,res)=>{
//     if(req.session.sid != null){
//         var id=req.session.sid;
//         //console.log("session:"+id);

//         adminModel.getById(id,function(results){
//             var student={
//                 name:results.name,
//                 email:results.email,
//                 gender:results.gender,
//                 dob:results.dob,
//                 address:results.address,
//                 contact:results.contact,
//                 blood:results.blood,
//                 status:results.status,
//                 type:results.type
//             };
//             console.log(student);
//             if(student.type==='Student' && student.status==='Active'){
//                 // res.send(student);
//                 res.render('student/portal',student);
//             }
//             else{
//                 res.redirect('/login');
//             }

//         });
//     }
//     else{
//         res.redirect('/login');
//     }
// });

//student info 


router.get('/',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);

        adminModel.getById(id,function(results){
            studentModel.getbysubject(id,function(results2){
                if(results.type==='Student' && results.status==='Active'){
                    res.render('student/portal',{studentinfo:results,courseinfo:results2});
                }else{
                    res.redirect('/login')
                }
            

            });
        });
    }
    else{
        res.redirect('/login');
    }
});

router.get('/GradeReport',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);

        adminModel.getById(id,function(results){
            studentModel.getbysubject(id,function(results2){
                if(results.type==='Student' && results.status==='Active'){
                    res.render('student/GradeReport',{studentinfo:results,courseinfo:results2});
                }else{
                    res.redirect('/login')
                }
            

            });
        });
    }
    else{
        res.redirect('/login');
    }
});

/////////////////////////

router.get('/CoursesResult',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);

        adminModel.getById(id,function(results){
            studentModel.getbysubject(id,function(results2){
                if(results.type==='Student' && results.status==='Active'){
                    res.render('student/CoursesResult',{studentinfo:results,courseinfo:results2});
                }else{
                    res.redirect('/login')
                }
            

            });
        });
    }
    else{
        res.redirect('/login');
    }
});



/////////////////////
router.get('/Profile',(req,res)=>{
    //res.render('student/Profile',student);
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var student={
                name:results.name,
                username:results.username,
                email:results.email,
                gender:results.gender,
                dob:results.dob,
                address:results.address,
                contact:results.contact,
                blood:results.blood,
                status:results.status,
                type:results.type
            };
            console.log(student);
            if(student.type==='Student' && student.status==='Active'){
                res.render('student/Profile',student);
            }
            else{
                res.redirect('/portal');
            }

        });
    }
    else{
        res.redirect('/login');
    }
});
router.post('/Profile',(req,res)=>{
    res.send(req.body.text);
});
router.get('/Library',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
       studentModel.getbylibrary(function(results){
            var book={
                bookName:results.bookName,
                author:results.author,
                category:results.category
            };
            console.log(book);
            res.render('student/Library',book)
       });
    }
    else{
        res.redirect('/login');
    }
});
router.post('/Library',(req,res)=>{
    res.send(req.body.text);
});
////////////////////////////////////

router.get('/Profile/password',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //res.render('student/password');
        console.log("session:"+id);
        studentModel.getById(id,function(results){
            var student={
                status:results.status,
                type:results.type
            };
            console.log(student);
            if(student.type==='Student' && student.status==='Active'){
                res.render('student/password');
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

router.post('/Profile/password',(req,res)=>{
    var id=req.session.sid;
 studentModel.getById(id,function(results){
        var student={
            password:results.password
        };
        if(student.password===req.body.oldpass){
            if(req.body.newpass===req.body.newpass2){
                var user={
                    password:req.body.newpass,
                    id:req.session.sid
                }
                console.log(user);
                studentModel.update(user,function(results){
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


////////////////////////////////////////////


////////////////////////////////////////////

router.get('/Notice',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        studentModel.getAll1(function(results){
           res.render('student/Notice',{users: results});    
        });
    }
    else{
        res.redirect('/login');
    }
});


//////////////////////////////////////

router.get('/Email',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        studentModel.getAll1(function(results){
           res.render('student/Email',{users: results});    
        });
    }
    else{
        res.redirect('/login');
    }
});

// /////////////////////////////


router.get('/delete/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       studentModel.getById2(id,function(results){
           var deleteEmail={
               id:results.id,
               notice:results.notice
           };
           res.render('student/Emaildelete',deleteEmail);
       })
    }
	
});




router.post('/delete/:id', (req, res)=>{
    var deleteEmail={
        id:req.params.id
    }
    if(req.session.sid != null){
        studentModel.delete1(deleteEmail,function(results){
            
            res.redirect('/Email');
        })
     }

});

///////////////////////////////////

router.get('/delete/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       studentModel.getById2(id,function(results){
           var deletenotice={
               id:results.id,
               notice:results.notice
           };
           res.render('student/Noticedelete',deletenotice);
       })
    }
	
});




router.post('/delete/:id', (req, res)=>{
    var deletenotice={
        id:req.params.id
    }
    if(req.session.sid != null){
        studentModel.delete2(deletenotice,function(results){
            
            res.redirect('/Notice');
        })
     }

});

module.exports =router;