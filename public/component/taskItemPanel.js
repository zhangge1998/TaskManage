/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import '../style/task.css'
import Header from '../container/header';
function TaskItem(props){
    console.log(props);
    return(
        <div className="item">
            <img id="userimage" src="../images/photo.jpg"/>
            <a href="#" className="name">{props.maker}</a>
            <button id="delete">删除</button>
            <div>
                <a style={{'fontSize':'20px'}} href="#">{props.name}</a>
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

export default class TaskItemPanel extends React.Component{
    render() {
        const {taskInfo}=this.props;
        // console.log(this.props);
        console.log(taskInfo);
        let items = [];
        if (taskInfo.length === 0) {
            items.push(
                <div>
                    <span>暂无任务</span>
                </div>
            )
        }
        else {
            taskInfo.forEach(task => {
                console.log(task);
                items.push(<TaskItem key={task.id} maker={task.taskMaker} name={task.taskName} intro={task.intro} makerTime={task.taskTime} count={task.count} />);
            })
        }
        return (
            <div className="itemPanel">
                {items}
            </div>
        )
    }
}