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

export default class TaskDetail extends React.Component {
    componentDidMount(){
        this.props.getTaskInfo();
    }
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
            if (item !== "") {
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
                        <a style={{'fontSize': '20px'}} href="#">任务名称：{task_name}</a>
                        <br/>
                        <span>创建时间：{task_time}</span>
                        <span>参与人数：{count}</span>
                        <p>简介：{task_introduction}</p>
                        <p>任务列表：</p>
                        <ul>{newItems}</ul>
                        <button>修改</button>
                    </div>
                    <div>
                        <TaskMember/>
                    </div>
                </div>
            </div>
        )
    }
}