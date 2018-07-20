/**
 * Created by ubuntu on 3/8/18.
 */
export default (state={taskDetail:[]},action)=>{
    if(action.type=='SHOW_TASKINFO'){
        return {taskDetail:action.info}
    }
    return state;
}