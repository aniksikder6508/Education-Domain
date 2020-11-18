const express   =   require('express');
const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('admin/home');
    //res.send('Hello admin');
});

router.get('/adduser',(req,res)=>{
    res.render('admin/adduser');
});
router.get('/edituser',(req,res)=>{
    res.render('admin/edituser');
});


module.exports =router;