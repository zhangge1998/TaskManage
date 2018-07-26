/**
 * Created by ubuntu on 3/11/18.
 */
const express =require('express');
const router=express.Router();
const taskSQL=require('../databases/taskSQL');
const processSQL=require('../databases/processSQL');
const db=require('../databases/connect');
router.post('/mod',(req,res)=>{
    const {id, task, taskIntro, first, second, third, four, five} = req.body;
    db.query('update task set task_name="'+ task +'",task_introduction="'+ taskIntro +'", process_1="'+ first +'", process_2="'+ second +'", process_3="'+ third +'", process_4="'+ four +'", process_5="'+ five +'" where task_id='+ id +'',(err,myTasks)=>{
        if(err){
            console.log(err);
        }else{
            res.json({status:'success'});
        }
    });
});
module.exports=router;