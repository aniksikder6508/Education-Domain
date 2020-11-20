const express = require('express');
const adminModel = require.main.require('./models/adminModel');
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
                res.render('student/Profile',student);
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
    //res.render('teacher/home');
});


router.get('/Course&Result',(req,res)=>{
    res.render('student/Course&Result');
});


router.post('/Course&Result',(req,res)=>{
    //res.render('teacher/notice');
    res.send(req.body.text);
});
router.get('/GradeReport',(req,res)=>{
    res.render('student/GradeReport');
});

router.post('/GradeReport',(req,res)=>{
    //res.render('teacher/notice');
    res.send(req.body.text);
});
module.exports =router;