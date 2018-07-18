'use strict';
const express = require('express');
const router = express.Router();
const database = require('../databases/connect');
const usrData = require('../databases/usrSQL');

router.post('/signin', (req, res) => {
    const name = req.body.usrInfor.name;
    const psw = req.body.usrInfor.psw;
    let data = {};
    database.query(usrData.getUsr,name,function (err, result) {
       // console.log(result);
        if (err) {
            console.log(err);
        }
        else if (result.length === 0) {
            console.log('用户不存在');
            res.json({state: 'FAIL', type: '1'});
        }
        else if (result[0].user_pass === psw) {
            data.name = name;
            data.psw=psw;
            req.session.onlineUsr=data;
            console.log(req.session);
            console.log('密码匹配成功！');
            res.json({state: 'SUCESS', type: '0'});
        }
        else {
            console.log('密码错误！');
            res.json({state: 'FAIL', type: '2'});
        }

    });
});

router.get('/destroySession',(req,res)=>{
   if(req.session.onlineUsr!==undefined){
       console.log("清除session");
       req.session.destroy();
   }
   else{
       console.log("不存在session");
   }
});

module.exports = router;