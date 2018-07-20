const taskSQL = {
    getAllTasks: 'select * from task',
    getTaskName:'select task_name from task where task_id=?',
    getTaskId:'select task_id from task where task_name=?',
    addTask:'insert into task (task_name,task_maker,task_time,task_introduction,process_1,process_2,process_3,process_4,process_5) values (?,?,?,?,?,?,?,?,?)',
    getMyTasks:'select * from task where task_maker=?',
    deleteTask:'delete from task where task_id=?',
    getTaskInfo:'select * from task where task_id = ?',
};
module.exports = taskSQL;
