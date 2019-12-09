var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
//express instance creation
var app=express();
//connect app and cors
app.use(cors());
//connect app and body parser
app.use(bodyParser.json());
//rest api routes - create routes
app.get("/",function(request,response)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.header("Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("Ready to work with APIS");

});


