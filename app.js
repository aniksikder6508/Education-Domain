const express               = require('express');
const bodyParser 			= require('body-parser');	
const exSession 			= require('express-session');
const admin                 = require('./controllers/admin');
const login                 = require('./controllers/login');
const teacher   			= require('./controllers/teacher');
const student  			    = require('./controllers/student');
const logout				= require('./controllers/logout');
const home                 = require('./controllers/home');
const app	                = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(exSession({secret: 'secret value', saveUninitialized: true, resave: false}));
//app.use(expressValidator());

app.use('/assets',express.static('assets'));
app.use('/admin',admin);
app.use('/login',login);
app.use('/teacher',teacher);
app.use('/student',student);
app.use('/logout', logout);
app.use('/home', home);


app.get('/',(req, res)=>{
    res.send('Welcome to our site');
    //res.render();
});

app.listen(3000,(error)=>{
console.log('server started');
});