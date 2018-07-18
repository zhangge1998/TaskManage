import  React,{Component} from 'react';
import '../style/login.css';
import login from "../container/login";

class Login extends Component{
 render(){

     const {clickSignIn,clickSignUp}=this.props;

     return (
         <div className="loginContainer">
             <div className="title">
                <span style={{'fontSize':'20px'}}>干啥儿</span>
             </div>
             <div className="input-group">
                <div className="input">
                    <span>昵称：</span>
                    <input type="text"/>
                </div>
                 <div className="input">
                     <span>密码：</span>
                     <input type="password"/>
                 </div>
                 <div className="more">
                     <a href="#">忘记密码？</a>
                     <input type="checkbox"/>
                     记住密码
                 </div>
                 <div>
                     <button className="login" onClick={clickSignIn}>登录</button>
                     <button className="login" onClick={clickSignUp}>注册</button>
                 </div>
             </div>
         </div>
     )
 }
}
export default Login;