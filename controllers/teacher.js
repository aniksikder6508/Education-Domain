const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('teacher/home');
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