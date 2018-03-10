/**
 * Created by ubuntu on 3/8/18.
 */
const express=require('express');
const router=express.Router();
const db=require('../databases/connect');
const userSQL=require('../databases/usrSQL');
router.get('/userInfo',(req,res)=>{
    res.json(req.session.signInInfo);
});

module.exports = router;