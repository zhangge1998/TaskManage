/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import '../style/userInfo.css'
import Header from '../container/header';
import {Route} from 'react-router-dom'
// import FileInput from 'react-file-input';
export default class UserInfoEdit extends React.Component {
    render() {
        const {onClickFixInfo, onSavePathClick, onChange, username, password, email, id, headPath, sex, intro} = this.props;
        return (
            <div>
                <Route path='/' component={Header}/>
                <div className="overlay">
                    <form>
                        <label htmlFor="name" className="left">用户名：</label>
                        <input onChange={onChange} value={username} type="text" name="name" id="name"/>
                        <br />
                        <label htmlFor="password" className="left">密  码：</label>
                        <input onChange={onChange} value={password} type="password" name="password" id="password"/>
                        <br />
                        <label htmlFor="photo" className="left">头  像：</label>
                        <input type="file" name="myImage" accept=".png,.gif,.jpg" onChange={onSavePathClick}/>
                        <br />
                        <label htmlFor="sex" className="left">性  别：</label>
                        <input onChange={onChange} value={sex} type="text" name="sex" id="sex"/>
                        <br/>
                        <label htmlFor="emailAddress" className="left">邮箱地址：</label>
                        <input onChange={onChange} value={email} type="text" name="emailAddress" id="emailAddress"/>
                        <br />
                        <label htmlFor="intro" className="left">个人简介：</label>
                        <input onChange={onChange} value={intro} type="textArea" name="intro" id="intro"/>
                        <label></label>
                        <input id={id} type="button" value="提交" onClick={onClickFixInfo}/>
                    </form>
                </div>
            </div>
            // return (
            // <div>
            //     <Route path='/' component={Header}/>
            //     <div className="overlay">
            //         <table>
            //             <tbody>
            //             <tr>
            //                 <td className="top-line">
            //                     <div>
            //                         <img src={"../images/photo.jpg"}/>
            //                     </div>
            //                 </td>
            //                 <td className="top-line">
            //                     <a className="btn btn-hollow">
            //                         <input type="file" className="hide"/><span>更改头像</span>
            //                     </a>
            //                 </td>
            //             </tr>
            //             <tr>
            //                 <th>昵称</th>
            //                 <td><input id="userName" type="text" value={1}/></td>
            //             </tr>
            //             <tr>
            //                 <th>年龄</th>
            //                 <td><input id="userAge" type="text" value={1}/></td>
            //             </tr>
            //             <tr>
            //                 <th>性别</th>
            //                 <td><input id="sex" type="text" value={1}/>
            //                 </td>
            //             </tr>
            //             <tr>
            //                 <th>简介</th>
            //                 <td><textarea type="text" id="userIntro" value={1}></textarea></td>
            //             </tr>
            //             <tr>
            //                 <th>邮箱</th>
            //                 <td><input type="email" id="userEmail" value={1}/></td>
            //             </tr>
            //             </tbody>
            //         </table>
            //         <p ref='Dtips' className='tips'>修改成功</p>
            //         <p ref='DtipsUnDone' className='tips'>请录入完整的用户信息</p>
            //         <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
            //         <button className="left">完成</button>
            //         <button>关闭</button>
            //     </div>
            // </div>
        )
    }
}