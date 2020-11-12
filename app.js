const express   = require('express');
const app	    = express();



app.get('/',(req, res)=>{
    res.send('Welcome to our site');
});

app.listen(3000,(error)=>{
console.log('server started');
});