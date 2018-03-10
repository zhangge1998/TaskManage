import request from 'superagent';

export default store => next => action => {
    if (action.type === 'login') {
        console.log(action);
        request.post('/signin')
            .send(action)
            .end((err, res) => {
                if (err)
                    console.log(err);
                else {
                    // console.log(res);
                    const data = JSON.parse(res.text);
                    console.log(data);
                    if (data.state === 'SUCESS' && data.type === '0') {
                       window.location.href = '/myHome';//跳转到主页的组件
                        console.log('登录成功');
                    }
                    if (data.state === 'FAIL' && data.type === '1') {
                        alert('用户不存在');
                    }
                    if (data.state === 'FAIL' && data.type === '2') {
                        alert('密码错误');
                    }
                }
            })
        // window.location.href = '/myHome';//跳转到主页的组件
    }

    // if (action.type === 'createNewUsr'){
    //     console.log(action);
    //     window.location.href = '/signup';
    // }
    else
        next(action);
}