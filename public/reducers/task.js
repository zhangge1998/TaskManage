/**
 * Created by ubuntu on 3/7/18.
 */
export default (state={name:'',myTasks:[]},action)=>{
    if(action.type=='MY_TASKS'){
        return {name:action.info.name,myTasks:action.info.myTasks};
    }
    return state;
}