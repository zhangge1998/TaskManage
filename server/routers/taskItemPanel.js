/**
 * Created by ubuntu on 3/11/18.
 */
const express =require('express');
const router=express.Router();
const taskSQL=require('../databases/taskSQL');
const db=require('../databases/connect');
router.get('/taskList',(req,res)=>{
    let all={};
    all.name=req.session.onlineUsr.name;
    db.query(taskSQL.getMyTasks,all.name,(err,myTasks)=>{
        if(err){
            console.log(err);
        }
        // else{
        //     if (myTasks.length === 0) {
        //         all.tasks = [];
        //     }
        //     else {
        //         all.tasks = myTasks;
        //     }
        //
        // }
        all.myTasks=myTasks;
        res.json({all});
    });
});
module.exports=router;