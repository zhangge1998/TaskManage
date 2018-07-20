import React from 'react'
import Header from '../container/header';
import {Route} from 'react-router-dom';
import '../style/addForm.css'
export default class AddTask extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" component={Header}/>
                <form action="/add" method="POST" id="taskForm">
                    <h3>添加任务</h3>
                    <p><span>任务名：</span><input type="text" name="task"/></p>
                    <p> <span>简&nbsp;&nbsp;&nbsp;介：</span><textarea  name="taskIntro"/></p>
                    <p>任务进度：</p>
                    <ol>
                        <li><span>process1:</span> <input type="text" name="first"/></li>
                        <li><span>process2:</span><input type="text" name="second"/></li>
                        <li><span>process3:</span><input type="text" name="third"/></li>
                        <li><span>process4:</span><input type="text" name="four"/></li>
                        <li><span>process5:</span><input type="text" name="five"/></li>
                    </ol>
                    <p><button type="submit">提交</button></p>
                </form>
            </div>
        )
    }
}