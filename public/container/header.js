/**
 * Created by ubuntu on 3/8/18.
 */
import Header from '../component/header'
import {connect} from 'react-redux'
import {myHome} from '../actions/actions'
const mapStateToProps=(state)=> {
    return{
        // userInfo:state.userInfo.list
    };
};
const mapDispatchToProps=(dispatch)=>({
    // UserInfo: ()=> {
    //     dispatch({type: "USER_INFO"})
    // },
    myHome: ()=> {
        console.log('我的主页');
        dispatch(
            {type: 'MY_HOME'}
            // myHome()
        );
    },
    setting: ()=> {
        console.log('修改个人信息');
        dispatch({type: 'CHANGE_USER_INFO'})
    },
    onIndex: ()=> {
        console.log('回到根目录');
        dispatch({type: 'BACK_INDEX'})
    },
    logOut: ()=> {
        console.log('退出登录');
        dispatch({type: 'LOGOUT'})
    },
});
export default connect(mapStateToProps,mapDispatchToProps)(Header)