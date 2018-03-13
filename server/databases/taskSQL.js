const taskSQL = {
    getAllTasks: 'select * from task',
    getTaskName:'select task_name from task where task_id=?',
    getTaskId:'select task_id from task where task_name=?',
    addTask:'insert into task (task_name,task_maker,task_introduction,task_time) values (?,?,?,?)',
    getMyTasks:'select * from task where task_maker=?',
};
module.exports = taskSQL;
