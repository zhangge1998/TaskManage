/**
 * Created by ubuntu on 3/11/18.
 */
const express =require('express');
const router=express.Router();
const taskSQL=require('../databases/taskSQL');
const processSQL=require('../databases/processSQL');
const db=require('../databases/connect');
router.get('/taskList',(req,res)=>{
    let all={};
    // let my_tasks=[];
    all.name=req.session.onlineUsr.name;
    // all.myTasks=[];
    let t=[];
    db.query(taskSQL.getMyTasks,all.name,(err,myTasks)=>{
        if(err){
            console.log(err);
        }
        // all.myTasks=myTasks;
        myTasks.map((task)=>{
            db.query(processSQL.getPerson,task.task_id,(err,person)=>{
                if(err){
                    console.log(err);
                }
                else{
                    task.count=person.length;
                    // console.log(task.count);
                    console.log(task);
                    console.log("#########");
                    t.push(task);
                    console.log("tttttt");
                    // console.log(t);
                }
            });
        });
    });
    console.log(t);
    res.json({name:all.name,myTasks:t});
});
module.exports=router;