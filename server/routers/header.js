/**
 * Created by ubuntu on 3/8/18.
 */
const express=require('express');
const router=express.Router();
const db=require('../databases/connect');
const userSQL=require('../databases/usrSQL');
router.get('/userInfo',(req,res)=>{
    console.log('sdfghjrty');
    db.query(userSQL.getUsr,req.session.onlineUsr.name,(err,info)=>{
       if(err){
           console.log(err);
       }
       res.json(info);
    });
    // res.json(req.session.onlineUsr);
});

module.exports = router;