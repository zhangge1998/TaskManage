import request from 'superagent';
export default store=>next=>action=>{
    if(action.type=='ADD_TASK'){
        request.get('/add')
            .end((err, res) => {
                if (err){
                    console.log(err);
                }else{
                    alert('添加成功');
                    window.location.href = '/addTask';
                }
            });
    }
    else
        next(action);
}