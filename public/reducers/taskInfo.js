/**
 * Created by ubuntu on 3/8/18.
 */
export default (state={},action)=>{
    if(action.type=='SHOW_TASKINFO'){
        return {info:action.data}
    }
    return state;
}