'use strict';
const express = require('express');
const router = express.Router();
const db = require('../databases/connect');
const taskSQL=require('../databases/taskSQL');

router.post('/add', (req, res) => {
    const taskInfo = req.body;
    const name = taskInfo.task;
    const intro = taskInfo.taskIntro;
    const maker = req.session.onlineUsr.name;
    let date = new Date();
    const time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const step1 = taskInfo.first;
    const step2 = taskInfo.second;
    const step3 = taskInfo.third;
    const step4 = taskInfo.four;
    const step5 = taskInfo.five;
    // database.query(taskSQL.addTask, name, maker, '2018', intro, step1, step2, step3, step4, step5, function (err, result) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log('success');
    // });
    db.query(taskSQL.addTask,[name,maker,time,intro,step1,step2,step3,step4,step5],(err)=>{
        if(err){
            console.log(err);
        }
        res.json({status:'success'});
    });
});
module.exports = router;