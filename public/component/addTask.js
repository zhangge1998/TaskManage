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
                    <h4>添加任务</h4>
                    <p><span>任务名：</span><input type="text" name="task"/></p>
                    <p> <span>简介：</span><textarea rows={2} cols={20} name="taskIntro"/></p>
                    <p>任务进度：</p>
                    <ol>
                        <li>step 1 <input type="text" name="first"/></li>
                        <li>step 2 <input type="text" name="second"/></li>
                        <li>step 3 <input type="text" name="third"/></li>
                        <li>step 4 <input type="text" name="four"/></li>
                        <li>step 5 <input type="text" name="five"/></li>
                    </ol>
                    <p><button type="submit">提交</button></p>
                </form>
            </div>
        )
    }
}