const express   =   require('express');
const router    =   express.Router();

router.get('/',(req,res)=>{
    res.render('ahome/index');
    //res.send('Hello admin');
});

module.exports =router;