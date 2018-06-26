'use strict';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const Store = require('express-mysql-session');

const app = new express();

const login = require('./server/routers/login');
const header= require('./server/routers/header')
const  taskItemPanel= require('./server/routers/taskItemPanel');
const  taskDetail= require('./server/routers/taskDetail');
// const home = require('./server/routers/home');
// const searchTasks = require('./server/routers/searchTasks');
// const takePartInTasks =  require('./server/routers/takePartInTasks');

const db={
    host:'localhost',
    user:'root',
    password:'123456',
    database:'taskManage',
};

app.use(cookieParser());
app.use(session(
    {
        resave: false,
        saveUninitialized: true,
        secret:'react',
        store:new Store(db)
    }
));
app.use(function (req,res,next) {
    const usr = req.session.usrInfor;
    if(usr){
        app.locals.usrInfor = usrInfor;
    }
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.use('/',login);
app.use('/',taskItemPanel);
app.use('/',header);
app.use('/',taskDetail);
// app.use('/',logup);
// app.use('/',home);
// app.use('/',searchTasks);
// app.use('/',takePartInTasks);

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'public','root.html'));
});


app.listen(8080,()=>{
    console.log("sever start in 8080");
});