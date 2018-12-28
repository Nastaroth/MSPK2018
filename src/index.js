const express = require('express');
const app = express();
const path = require ('path');
var port = process.env.PORT || 3000;

//setting
//app.set('port',3000)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleewares

//routers

app.use(require('./routes/index'));



//static files

app.use(express.static(path.join(__dirname, 'public')));

//listening the server
/*app.listen(app.get('port'), () =>{
    console.log('server works', app.get('port'))
});*/



app.listen(port, "0.0.0.0", function() {
console.log("Listening on Port 3000");
});
