const express       =   require('express');
const adminModel    =   require.main.require('./models/adminModel');
const router        =   express.Router();

router.get('/',(req,res)=>{

    adminModel.getAllNews(function(results){
        adminModel.getAllNotices(function(results2){
            console.log(results);
            res.render('home/index',{users:{results,results2}});
        });
    });
});
module.exports =router;