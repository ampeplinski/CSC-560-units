var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

//var tourRouter = express.Router();
//tourRoutes(tourRouter);
//app.use('/tourapi',tourRouter);

var tourRouter = require('./keyvaultController');
app.use('/api',tourRouter);

app.listen(8080,(err)=>{
    if(err)console.log(err);
    console.log("Application Started on port 8080");
})