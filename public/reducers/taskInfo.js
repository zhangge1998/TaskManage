/**
 * Created by ubuntu on 3/8/18.
 */
export default (state={},action)=>{
    if(action.type=='SHOW_TASKINFO'){
        return {list:action.data}
    }
    return state;
}