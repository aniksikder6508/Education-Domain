const express   =   require('express');
const {body,validationResult}      = require('express-validator');
const adminModel=require.main.require('./models/adminModel');
//const {check,validationResult}      = require('express-validator');
const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
    req.session.errors="";
    //res.send('Hello admin');
});
router.post('/',(req,res)=>{
    //[body('id').isLength({min:4}),body('password').isLength({min:1})]
    //res.render('login/index');
    /*req.check('id','Invalid ID!').isLength({min:3});
    req.check('id','Invalid Password!').isLength({min:1});
    var error = req.validationResult();
    if(error){
        req.session.error=error;
        console.log("Error");
    }
    else{
        console.log('success');
        req.session.success="Login Successfully";
    }
*/
    var user={
        id:req.body.id,
        password:req.body.password
    };
    adminModel.validate(user, function(results){
		if(results.type==='Admin'){
            //res.cookie('uname', req.body.username);   
            console.log(req.body.id);
            req.session.sid= req.body.id;
			res.redirect('/admin');
        }
        else if(results.type ==='Teacher'){
            req.session.sid= req.body.id;
            res.redirect('/teacher');
        }
        else if(results.type==='Student'){
            req.session.sid= req.body.id;
            res.redirect('/student');
        }
        else{
            console.log('error');
            req.session.errors="Invalid ID or Password.";
            //res.redirect('/login',req.session.errors);
            // res.redirect('/login',req.session.errors);
             res.redirect('/login');
        }
    });

    
});

module.exports =router;