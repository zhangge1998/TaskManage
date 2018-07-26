/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import '../style/taskDetail.css'
import Header from '../container/header';
import {Route} from 'react-router-dom'
import TaskMember from './taskMember'
function TaskStep(props) {
    return (
        <div>
            <li>
                <img className="star" src="../images/star1.png"/>
                {props.name}
            </li>
        </div>
    )
}

class ModifyForm extends React.Component{
    render(){
        const {info} = this.props;
        return(
            <div id="form">
                <form action="/mod" method="POST" id="modify">
                    <p id="close" onClick={function(){
                        document.querySelector('#form').style.display = 'none';
                    }}>X</p>
                    <h3>修改任务</h3>
                    <p style={{'display':'none'}}><span>id：</span><input type="text" name="id" defaultValue={info.task_id}/></p>
                    <p><span>任务名：</span><input type="text" name="task" defaultValue={info.task_name}/></p>
                    <p> <span>简&nbsp;&nbsp;&nbsp;介：</span><textarea  name="taskIntro" defaultValue={info.task_introduction}/></p>
                    <p>任务进度：</p>
                    <ol>
                        <li><span>process1:</span> <input type="text" name="first" defaultValue={info.process_1} ref={(input) => this.input = input}/></li>
                        <li><span>process2:</span><input type="text" name="second" defaultValue={info.process_2} ref={(input) => this.input = input}/></li>
                        <li><span>process3:</span><input type="text" name="third" defaultValue={info.process_3} ref={(input) => this.input = input}/></li>
                        <li><span>process4:</span><input type="text" name="four" defaultValue={info.process_4} ref={(input) => this.input = input}/></li>
                        <li><span>process5:</span><input type="text" name="five" defaultValue={info.process_5} ref={(input) => this.input = input}/></li>
                    </ol>
                    <p><button type="submit">提交</button></p>
                </form>
            </div>
        )
    }
}

export default class TaskDetail extends React.Component {
    render() {
        let data = this.props.location.state;
        console.log(data);
        let {task_id, task_name, task_maker, task_introduction, task_time, count, process_1, process_2,
        process_3, process_4, process_5} = data;
        let items = [];
        items.push(process_1);
        items.push(process_2);
        items.push(process_3);
        items.push(process_4);
        items.push(process_5);
        // console.log(items);
        let newItems = [];
        let i = 0;
        items.forEach(item=> {
            if (item !== "" && item !== null) {
                i++;
                newItems.push(<TaskStep key={i} name={item}/>)
            }
        });
        return (
            <div>
                <Route path="/" component={Header}/>
                <div id="taskDetail">
                    <div className="author">
                        <img id="img" src="../images/photo.jpg"/>
                        <div className="name">
                            <a>创建人：{task_maker}</a>
                        </div>
                    </div>
                    <div>
                        <p style={{'fontSize': '20px'}}>任务名称：{task_name}</p>
                        <br/>
                        <span>创建时间：{task_time}</span>
                        <span>参与人数：{count}</span>
                        <p>简介：{task_introduction}</p>
                        <p>任务列表：</p>
                        <ul>{newItems}</ul>
                        <button onClick={function () {
                            document.querySelector('#form').style.display = 'block';
                        }}>修改</button>
                    </div>
                    <div>
                        <ModifyForm info={data}/>
                    </div>
                    <div>
                        <TaskMember/>
                    </div>
                </div>
            </div>
        )
    }
}