/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import '../style/task.css'
import Header from '../container/header';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
function TaskItem(props) {
    // console.log(props);
    return (
        <div className="item">
            <img id="userimage" src="../images/photo.jpg"/>
            <span><a href="#" className="name">{props.maker}</a></span>
            <button id="delete">删除</button>
            <div>
                <a style={{'fontSize': '20px'}} href="#">{props.name}</a>
                <p>简介：{props.intro}</p>
            </div>
            <ul className="item-footer">
                <li>
                    <a>创建时间：{props.makerTime}</a>
                </li>
                <li>
                    <a>参与人数：{props.count}人</a>
                </li>
            </ul>
        </div>
    )
}

export default class TaskItemPanel extends React.Component {
    componentDidMount(){
        this.props.getTasks();
    }
    render() {
        const {name,myTasks}=this.props;
        console.log(this.props);
        // console.log(taskInfo.myTasks);
        // let Tasks=taskInfo.myTasks;
        let items = [];
        if (myTasks.length === 0) {
            items.push(
                <div>
                    <span>暂无任务</span>
                </div>
            )
        }
        else {
            myTasks.forEach(task => {
                items.push(<TaskItem key={task.task_id} maker={name} name={task.task_name} intro={task.task_introduction}
                                     makerTime={task.task_time}/>);
            })
        }
        return (
            <div>
                <Route path="/" component={Header}/>
                <div className="itemPanel">
                    {items}
                </div>
            </div>
        )
    }
}

TaskItemPanel.prototypes={

};
