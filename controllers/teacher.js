const express = require('express');
const upload = require('express-fileupload');
const adminModel    =   require.main.require('./models/adminModel');
const teacherModel    =   require.main.require('./models/teacherModel');
const { body, validationResult } = require('express-validator');
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






router.post('/notice',[body('text').isLength({min:1})],(req,res)=>{
    //res.render('teacher/notice');
    //res.send(req.body.text);
    if(req.session.sid != null){

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send("<h2>Please fillup the form</h2>");
        }
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




router.get('/checknotice',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        teacherModel.getAll(function(results){
           res.render('teacher/checknotice',{users: results});    
        });
    }
    else{
        res.redirect('/login');
    }
});

router.get('/edit/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       teacherModel.getById(id,function(results){
           var editnotice={
               id:results.id,
               notice:results.notice
           };
           res.render('teacher/noticeedit',editnotice);
       })
    }
	
});




router.post('/edit/:id',[body('update').isLength({min:1})],(req, res)=>{


    var editnotice={
     id:req.params.id,
     notice:req.body.update
    }
    //console.log("edit id:"+id);
    if(req.session.sid != null){

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send('<h2>Please fillup the notice</h2>');
        }

       teacherModel.update(editnotice,function(results){
           
           res.redirect('/teacher/checknotice');
       })
    }
	
});


router.get('/delete/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       teacherModel.getById(id,function(results){
           var deletenotice={
               id:results.id,
               notice:results.notice
           };
           res.render('teacher/noticedelete',deletenotice);
       })
    }
	
});




router.post('/delete/:id', (req, res)=>{
    var deletenotice={
        id:req.params.id
    }
    if(req.session.sid != null){
        teacherModel.delete(deletenotice,function(results){
            
            res.redirect('/teacher/checknotice');
        })
     }

});


router.get('/studentlist',(req,res)=>{

    if(req.session.sid != null){
       // var id=req.session.sid;
        teacherModel.studentlist(function(results){
            res.render('teacher/studentlist',{users: results});
            });
    }
    else{
        res.redirect('/login');
    }

 
    
});


router.get('/class',(req,res)=>{
   
    if(req.session.sid != null){
        // var id=req.session.sid;
         teacherModel.classroutine(function(results){
             res.render('teacher/class',{users: results});
             });
     }
     else{
         res.redirect('/login');
     }
   
    
});


router.get('/password',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
       teacherModel.getPassword(id,function(results){
            var teacher={
                status:results.status,
                type:results.type
            };
            console.log(teacher);
            if(teacher.type==='Teacher' && teacher.status==='Active'){
                res.render('teacher/password');
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

router.post('/password',[body('oldpass').isLength({min:1}),body('newpass').isLength({min:1}),body('newpass2').isLength({min:1})],(req,res)=>{
    var id=req.session.sid;
    teacherModel.getPassword(id,function(results){

        const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send("<h2>Please fillup the field</h2>");
    
  }

        var teacher={
            password:results.password
        };
        if(teacher.password===req.body.oldpass){
            if(req.body.newpass===req.body.newpass2){
                var user={
                    password:req.body.newpass,
                    id:req.session.sid
                }
                console.log(user);
                teacherModel.updatePassword(user,function(results){
                    if(results){
                        res.redirect('/teacher');
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



router.get('/fileupload',(req,res)=>{
    if(req.session.sid != null){
        
        res.render('teacher/fileupload');
    }
    else{
        res.redirect('/login');
    }

   
});

router.post('/fileupload',(req,res)=>{
    if(req.session.sid != null){

        var user={
           upload:req.files,
           sec:req.body.sec
        }
         console.log(user);
         
     }
     else{
         res.redirect('/login');
     }

});



router.get('/tsf',(req,res)=>{
   
    if(req.session.sid != null){
        // var id=req.session.sid;
         teacherModel.tsf(function(results){
             res.render('teacher/tsf',{users: results});
             });
     }
     else{
         res.redirect('/login');
     }

   
});

router.get('/tsfedit/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       teacherModel.getByTsfId(id,function(results){
           var editnotice={
               day:results.day,
               slot1:results.slot1,
               slot2:results.slot2,
               slot3:results.slot3,
               slot4:results.slot4,
           };
           res.render('teacher/tsfedit',editnotice);
       })
    }

    else{
        res.redirect('/login');
    }
	
});



router.post('/tsfedit/:id',(req, res)=>{


    var editslot={
     id:req.params.id,
     slot1:req.body.slot1,
     slot2:req.body.slot2,
     slot3:req.body.slot3,
     slot4:req.body.slot4,

    }
    //console.log("edit id:"+id);
    if(req.session.sid != null){

       teacherModel.tsfupdate(editslot,function(results){
           
           res.redirect('/teacher/tsf');
       })
    }

    else{
        res.redirect('/login');
    }


	
});


router.get('/grade',(req,res)=>{
   
    if(req.session.sid != null){
        // var id=req.session.sid;
         teacherModel.grade(function(results){
             res.render('teacher/grade',{users: results});
             });
     }
     else{
         res.redirect('/login');
     }

   
});


router.get('/gradeedit/:id', (req, res)=>{
    var id=req.params.id;
    console.log(id);
    if(req.session.sid != null){
       teacherModel.getByGradeId(id,function(results){
           var editnotice={
               sid:results.sid,
               Midterm:results.Midterm,
               Finalterm:results.Finalterm
           };
           res.render('teacher/gradeedit',editnotice);
       })
    }

    else{
        res.redirect('/login');
    }
	
});


router.post('/gradeedit/:id',(req, res)=>{

var r=Number(req.body.Midterm+req.body.Finalterm);

console.log(r);

    var editgrade={
     id:req.params.id,
     Midterm:req.body.Midterm,
     Finalterm:req.body.Finalterm,
     Total:r
    }
    //console.log("edit id:"+id);
    if(req.session.sid != null){

       teacherModel.gradeupdate(editgrade,function(results){
           
           res.redirect('/teacher/grade');
       })
    }

    else{
        res.redirect('/login');
    }


	
});




module.exports =router;