/**
 * Created by ubuntu on 3/8/18.
 */
import request from 'superagent';

export default store => next => action => {

    /* 1.获取当前用户的的登录信息
     2.获取数据库内当前用户自己创建的任务信息
     3.获取当前用户参加的任务信息
     */
    if (action.type === 'homeRequest') {
        console.log("请求登录用户信息及其参加的任务以及所有任务");
        request.get('/homePage')
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    if (data.state === 'SUCESS') {
                        sessionStorage.setItem("name", data.all.usr);
                        next({type: 'showHome', infor: data.all});
                    }
                    else if (data.state === 'FAIL') {
                        alert("请先登录账号！");
                        window.location.href = '/signin';
                    }

                }
            })
    }
    if (action.type === 'searchTasks') {
        console.log("根据关键词搜索任务信息");
        request.get('/searchResult')
            .query(action)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    /*跳转组件至搜索页*/
                    next({type: 'showResult', result: data.result});

                }
            })
    }
    if (action.type === 'takePartIn') {
        console.log(action);
        console.log("加入任务");
        request.post('/takePartInTask')
            .send(action)
            .end((err, res) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const data = JSON.parse(res.text);
                    if (data.state === 'SUCESS') {
                        alert("加入任务成功");
                    }
                    if (data.state === 'FAIL'&&data.type===1) {
                        alert("加入任务失败");
                    }
                    if(data.state ==='FAIL'&&data.type === 2){
                        alert("您已加入任务")
                    }

                }
            })
    }
    else next(action);
}