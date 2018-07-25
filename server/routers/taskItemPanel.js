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
            function checkTime(i)
            {
                if (i<10)
                {i="0" + i}
                return i
            }
            let time = task.task_time.toString();
            let date = new Date(time);
            task.task_time = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + checkTime(date.getHours()) + ':' + checkTime(date.getMinutes()) + ':' + checkTime(date.getSeconds());
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
            res.json({status: 1});
        }
    });
});
// router.post('/detail',(req,res)=>{
//     console.log(req.body);
//    const id = req.body.id;
//    db.query(taskSQL.getTaskInfo,id,(err,result)=>{
//        if(err){
//            console.log(err);
//        }
//        else{
//            // console.log(result);
//            res.json(result);
//        }
//    })
// });
module.exports=router;