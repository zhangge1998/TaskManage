/**
 * Created by ubuntu on 3/8/18.
 */
export default (state={member:[]},action)=>{
    if(action.type==='SHOW_MEMBER'){
        return {member:action.data}
    }
    return state;
}
