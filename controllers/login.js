const express   =   require('express');
const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('login/index');
    //res.send('Hello admin');
});
router.post('/',(req,res)=>{
    //res.render('login/index');
    res.send('posted');
});

module.exports =router;