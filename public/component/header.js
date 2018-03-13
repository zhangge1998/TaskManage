/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import '../style/header.css'
import PropTypes from 'prop-types';
export default class Header extends React.Component{
    // componentDidMount(){
    //     this.props.UserInfo();
    // }
    render() {
        const {userInfo,myHome,setting,onIndex,logOut} = this.props;
        // console.log(this.props);
        // console.log('1');
        // if(userInfo===undefined||userInfo===null){
        //     return (
        //         <div className="nav">
        //             <div className="header">
        //                 <img id="logo" src="./public/imges/1.jpg"/>
        //                 <input id="search" type="text" autoComplete="off" placeholder="搜索"/>
        //                 <ul>
        //                     <li>注册</li>
        //                     <li>登录</li>
        //                     <li>创建任务</li>
        //                 </ul>
        //             </div>
        //             {this.props.children}
        //         </div>
        //     )
        // }
        // else{
        return (
            <div className="nav">
                <div className="header">
                    <img id="logo" src="../images/1.jpg"/>
                    <a id="home" onClick={onIndex}>首页</a>
                    <input id="search" type="text" autoComplete="off" placeholder="搜索"/>
                    <div id="user">
                        <div className="dropDown">
                            <img id="headImage" src="../images/photo.jpg"/>
                            <img id="down" src="../images/down.jpg"/>
                        </div>
                        <ul className="dropDown-menu">
                            <li onClick={myHome}>我的主页</li>
                            <li onClick={setting}>设置</li>
                            <li onClick={logOut}>退出</li>
                        </ul>
                    </div>
                </div>
                {this.props.children}
            </div>

        )
    }
}
Header.prototypes={
    myHome:PropTypes.func.isRequired,
    setting:PropTypes.func.isRequired,
    logOut:PropTypes.func.isRequired,
    onIndex:PropTypes.func.isRequired
}