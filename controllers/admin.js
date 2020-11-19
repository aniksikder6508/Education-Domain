const express       =   require('express');
const adminModel    =   require.main.require('./models/adminModel');
const router        =   express.Router();

router.get('/',(req,res)=>{

    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
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
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/home',admin);
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
  
    //res.send('Hello admin');
});

router.get('/adduser',(req,res)=>{

    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/adduser');
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

router.post('/adduser',(req,res)=>{
    //var id=req.session.sid;
    //console.log(id);
     /* adminModel.getLastId(function(results){
            var id=results.id+1;
            console.log("Last ID:"+id);
           
        });*/
        if(req.body.name!="" && req.body.email!="" && req.body.address!="" && req.body.gender!="" && req.body.contact!="" && req.body.blood!="" && req.body.status!="" && req.body.type!=""){
            console.log('Success');
            if(req.body.type ==='Admin'){
            
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'2020-'+lastID,
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user);
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }

                    });
                });
               
            }
            else if(req.body.type ==='Teacher'){
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'2020-'+lastID+'-3',
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user);
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }
                    });
                });
                res.send('Teacher');
            }
            else{
                adminModel.getLastId(function(results){
                    var lastID=results.id+1;
                    console.log("Last ID:"+lastID);
                    var user={
                        id:lastID,
                        name:req.body.name,
                        username:'20-'+lastID+'-3',
                        email:req.body.email,
                        password:req.body.contact,
                        gender:req.body.gender,
                        address:req.body.address,
                        dob:req.body.dob,
                        contact:req.body.contact,
                        blood:req.body.blood,
                        status:req.body.status,
                        type:req.body.type
                    };
                    console.log(user)
                    adminModel.insert(user,function(results){
                        if(results){
                            console.log('Insert Successfully');
                        }
                        else{
                            console.log('Opps!!! something wrong');
                        }
                    });
                });
                res.send('Student');
            }
        }
        else{
            res.render('admin/adduser');
            console.log('Failed');
        }
        
        
    
  
});
router.get('/addcourse',(req,res)=>{
    if(req.session.sid != null){
        var id=req.session.sid;
        //console.log("session:"+id);
        adminModel.getById(id,function(results){
            var admin={
                status:results.status,
                type:results.type
            };
            console.log(admin);
            if(admin.type==='Admin' && admin.status==='Active'){
                res.render('admin/addcourse');
            }
            else{
                res.redirect('/login');
            }

        });
    }
    else{
        res.redirect('/login');
    }
    //res.render('admin/addcourse');
});
router.get('/edituser',(req,res)=>{
    res.render('admin/edituser');
});

router.get('/password',(req,res)=>{
    res.render('admin/password');
});


module.exports =router;