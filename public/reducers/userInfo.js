/**
 * Created by ubuntu on 3/7/18.
 */
export default (state={list:{}},action)=>{
    if(action.type==='ALL_USER_INFO'){
        return {list:action.userInfo[0]};
    }
    return state;
}