/**
 * Created by ubuntu on 3/7/18.
 */
export default (state={list:[{id:'1',taskName:'111',taskMaker:'lala',intro:'1',count:'1',taskTime:'1'},{id:'2',taskName:'222',taskMaker:'haha',intro:'1',count:'1',taskTime:'1'}]},action)=>{
    if(action.type=='my_Task_List'){
        return {list:action.data}
    }
    return state;
}