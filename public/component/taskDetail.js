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

    render() {
        const {name, maker, time, count, intro, p1, p2, p3, p4, p5}=this.props;
        let items = [];
        // console.log(items.length);
        items.push(p1);
        items.push(p2);
        items.push(p3);
        items.push(p4);
        items.push(p5);
        console.log(items);
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
                            <a>创建人：{maker}</a>
                        </div>
                    </div>
                    <div>
                        <a style={{'fontSize': '20px'}} href="#">任务名称：{name}</a>
                        <br/>
                        <span>创建时间：{time}</span>
                        <span>参与人数：{count}</span>
                        <p>简介：{intro}</p>
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