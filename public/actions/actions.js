//用户登录
export const signIn = (usrInfor) => ({
    type: 'login',
    usrInfor
});

//用户注册
export const signUp = (newUsr) => ({
    type: 'logup',
    newUsr
});

//关键词搜索相关任务
export const searchTasks = (keyWord)=>({
    type:'searchTasks',
    keyWord
});

//加入任务
export const taskPartIn = (actor) =>({
    type:'takePartIn',
        actor
});

//我的主页
export const myHome = ()=>({
    type:'MY_HOME'
});
// //我的任务
// export const myTasks =(info)=>({
//     type:'MY_TASKS',
//     info
// });

