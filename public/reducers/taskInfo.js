/**
 * Created by ubuntu on 3/8/18.
 */
export default (state={taskInfo:{id:'1',taskName:'111',taskMaker:'lala',intro:'1',count:'1',taskTime:'1',p1:'',p2:'',p3:'',p4:'',p5:''}},action)=>{
    if(action.type=='SHOW_TASKINFO'){
        return {list:action.data}
    }
    return state;
}