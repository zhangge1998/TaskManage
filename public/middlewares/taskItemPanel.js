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
                    const data=JSON.parse(res.text);
                    console.log(data);
                    next({type:'MY_TASKS',info:data.all})
                }
            });
    }
    else
        next(action);

}