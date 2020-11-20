const express = require('express');
const adminModel    =   require.main.require('./models/adminModel');
const teacherModel    =   require.main.require('./models/teacherModel');
const router = express.Router();


router.get('/',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
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
    //res.send(req.body.text);

    if(req.session.sid != null){
            var id=req.session.sid;
            var user={
                id:req.session.sid,
                notice:req.body.text
            };

            teacherModel.insert(user, function(results){
                
                    res.redirect('/teacher');
            });   

        }
});


module.exports =router;