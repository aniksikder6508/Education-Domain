const express   =   require('express');
const adminModel=require.main.require('./models/adminModel');
const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
    //res.send('Hello admin');
});
router.post('/',(req,res)=>{
    //res.render('login/index');
    var user={
        id:req.body.id,
        password:req.body.password
    };
    adminModel.validate(user, function(results){
		if(results){
            //res.cookie('uname', req.body.username);   
            console.log(req.body.id);
            req.session.sid= req.body.id;
			res.redirect('/admin');
        }
        else{
            console.log('error');
            res.redirect('/login');
        }
    });

    
});

module.exports =router;