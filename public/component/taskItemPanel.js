import React from 'react'
import '../style/task.css';
import '../style/add.css';
import Header from '../container/header';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import index from "../reducers";
class TaskItem extends React.Component{

    //delete
    deleteTask() {
        this.props.delete(this.props.id);
    }
    render(){
        return (
            <div className="item">
                <img id="userimage" src="../images/photo.jpg"/>
                <span><a href="#" className="name">{this.props.maker}</a></span>
                <button id="delete"  onClick={this.deleteTask.bind(this)}>删除</button>
                <div>
                    <a style={{'fontSize': '20px'}} href="#">{this.props.name}</a>
                    <p>简介：{this.props.intro}</p>
                </div>
                <ul className="item-footer">
                    <li>
                        <a>创建时间：{this.props.makerTime}</a>
                    </li>
                    <li>
                        <a>参与人数：{this.props.count}人</a>
                    </li>
                </ul>
            </div>
        )
    }
}

class AddTask extends React.Component{
    render(){
        return(
            <div id="addTask">
                <img id="add" src="../images/add1.jpeg"/>
                <h3 id="word">添加任务</h3>
            </div>
        )
    }
}

export default class TaskItemPanel extends React.Component {
    componentDidMount(){
        this.props.getTasks();
    }
    render() {
        const {myTasks}=this.props;
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
                items.push(<TaskItem key={task.task_id} id={task.task_id} maker={task.task_maker} name={task.task_name} intro={task.task_introduction}
                                     makerTime={task.task_time} count={task.count} delete={this.props.deleteTask}/>);
            })
        }
        return (
            <div>
                <Route path="/" component={Header}/>
                <AddTask/>
                <div className="itemPanel">
                    {items}
                </div>
            </div>
        )
    }
}

TaskItemPanel.prototypes={

};
