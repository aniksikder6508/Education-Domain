const express = require('express');
const adminModel    =   require.main.require('./models/adminModel');
const router = express.Router();


router.get('/',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var teacher={
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
            console.log(teacher);
            if(teacher.type==='Teacher' && teacher.status==='Active'){
                res.render('teacher/home',teacher);
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


router.get('/notice',(req,res)=>{
    res.render('teacher/notice');
});


router.post('/notice',(req,res)=>{
    //res.render('teacher/notice');
    res.send(req.body.text);
});

router.get('/profile',(req,res)=>{
    res.render('teacher/profile');
});




module.exports =router;