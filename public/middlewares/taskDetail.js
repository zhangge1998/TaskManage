import request from 'superagent'
export default store=>next=>action=>{
    if(action.type=='getTaskInfo'){
        request.get('/taskInfo')
            .end((err, res) => {
                if (err){
                    console.log(err);
                }
                else{
                    next({type:'SHOW_TASKINFO',info:res.body})
                }
            });
    }
    else
        next(action);

}