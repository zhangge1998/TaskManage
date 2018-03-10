const  taskActorSQL ={
    getMyTasksId:'select task_id from process where user_no=?',
    addActor:'insert into process (task_id,user_no) values (?,?)'
};
module.exports=taskActorSQL;