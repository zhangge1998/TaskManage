/**
 * Created by ubuntu on 3/11/18.
 */
import request from 'superagent'
export default store=>next=>action=>{
    if(action.type=='SHOW_TASKS'){
        request.get('/taskList')
            .end((err, res) => {
                if (err){
                    console.log(err);
                }
                else{
                    next({type:'MY_TASKS',info:res.body})
                }
            });
    }
    if(action.type == 'DELETE_TASK'){
        request.post('/delete')
            .send(action)
            .end((err, res) => {
                if(err){
                    console.log(err);
                }else{
                    console.log(JSON.parse(res.text));
                    window.location.href = '/myHome';
                }
            });
    }
    else
        next(action);

}