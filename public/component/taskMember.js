/**
 * Created by ubuntu on 3/8/18.
 */
import React from 'react'
import Star from './star'
export default class TaskMember extends React.Component{
    render(){
        const {taskMember}=this.props;
        let count=3;
        let stars=[];
        for(var i=count;i>=1;i--){
            stars.push(<Star key={i}/>)
            }
        return(
            <div id="member">
                <p>参与人</p>
                <img id="image" src="../images/photo.jpg"/><a>哈哈</a>
                {stars}
            </div>
        )
    }
}