/**
 * Created by ubuntu on 3/8/18.
 */
import request from 'superagent'
export default store=>next=>action=>{
    // if(action.type==='USER_INFO'){
    //     request.get('./userInfo')
    //         .end((err,res)=>{
    //             if(err){
    //                 console.log(err);
    //             }
    //             next({type:"ALL_USER_INFO",data:res.body})
    //         })
    // }
    if(action.type==='MY_HOME'){
        console.log('222');
        window.location.href='/myHome';
    }
    if(action.type==='CHANGE_USER_INFO'){
        console.log('333');
        window.location.href='/userInfoEdit';
    }
    if(action.type==='LOGOUT'){
        window.location.href='/login';
    }
    if(action.type==='BACK_INDEX'){
        window.location.href='/home';
    }
    else{
        next(action);
    }
}