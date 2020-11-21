const express = require('express');
const adminModel = require.main.require('./models/adminModel');
const studentModel = require.main.require('./models/studentModel');
const router = express.Router();


router.get('/',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);

        adminModel.getById(id,function(results){
            var student={
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
            console.log(student);
            if(student.type==='Student' && student.status==='Active'){
                res.render('student/portal',student);
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
router.get('/GradeReport',(req,res)=>{ 
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var student={
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
            
            console.log(student);
            if(student.type==='Student' && student.status==='Active'){
                res.render('student/GradeReport',student);
            }
            else{
                res.redirect('/portal');
            }
        })

        
    }
    else{
        res.redirect('/login');
    }
});
router.post('/GradeReport',(req,res)=>{
    res.send(req.body.text);
});

router.get('/CoursesResult',(req,res)=>{
    //res.render('student/CoursesResult');
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        studentModel.getById2(id,function(results){
            var course={
                id:results.id,
                courseName:results.courseName,
                teacherName:results.teacherName,
                grade:results.grade,
                timing:results.timing, 
                status:results.status   
            }
            console.log(course);
            if(course.status==='Pass'){
                res.render('student/CoursesResult',course);
            }
        });
    }
    else{
        res.redirect('/login');
    }
});
router.post('/CoursesResult',(req,res)=>{
    res.send(req.body.text);
});
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
module.exports =router;