const express   = require('express');
const adminHome = require('./controllers/ahome');
const admin     = require('./controllers/admin');
const login     = require('./controllers/login');
const app	    = express();


app.set('view engine', 'ejs');


app.use('/assets',express.static('assets'));
app.use('/ahome',adminHome);
app.use('/admin',admin);
app.use('/login',login);

app.get('/',(req, res)=>{
    res.send('Welcome to our site');
});

app.listen(3000,(error)=>{
console.log('server started');
});