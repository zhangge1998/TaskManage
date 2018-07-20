/**
 * Created by ubuntu on 3/11/18.
 */
const express =require('express');
const router=express.Router();
const taskSQL=require('../databases/taskSQL');
const processSQL=require('../databases/processSQL');
const db=require('../databases/connect');
router.get('/taskList',(req,res)=>{
    const name=req.session.onlineUsr.name;
    db.query(taskSQL.getMyTasks,name,(err,myTasks)=>{
        if(err){
            console.log(err);
        }
        let t=[];
        myTasks.map((task)=>{
            db.query(processSQL.getPerson,task.task_id,(err,person)=>{
                if(err){
                    console.log(err);
                }
                else{
                    task.count=person.length;
                    t.push(task);
                    if(t.length===myTasks.length){
                        res.json(t);
                    }
                }
            });
        });
    });
});
router.post('/delete',(req, res)=>{
    console.log(req.body);
    const id = req.body.info;
    db.query(taskSQL.deleteTask,id,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('success');
            res.json({status: 1});
        }
    });
});
module.exports=router;