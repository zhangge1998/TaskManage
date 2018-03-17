/**
 * Created by ubuntu on 3/7/18.
 */
export default (state={myTasks:[]},action)=>{
    if(action.type=='MY_TASKS'){
        return {myTasks:action.info};
    }
    return state;
}