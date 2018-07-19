import React from 'react'
import Header from '../container/header';
import {Route} from 'react-router-dom';
export default class AddTask extends React.Component{
    render(){
        return(
            <div>
                <Route path="/" component={Header}/>
                <p>添加任务</p>
                <p>添加任务</p>
                <p>添加任务</p>
                <p>添加任务</p>
                <p>添加任务</p>
                <p>添加任务</p>
            </div>
        )
    }
}