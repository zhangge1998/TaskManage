/**
 * Created by ubuntu on 3/8/18.
 */
import TaskItemPanel from '../component/taskItemPanel'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
        myTasks:state.task.myTasks
    };
};
const mapDispatchToProps=(dispatch)=>({
    getTasks:()=>{
        dispatch({
            type:'SHOW_TASKS'
        });
    },
    deleteTask:(key)=>{
        dispatch({
            type:'DELETE_TASK',
            info:key
        })
    },
    addForm:()=>{
        dispatch({
            type:'ADD_FORM',
        })
    },
    // showTask:(key)=>{
    //     dispatch({
    //         type:'SHOW_TASK',
    //         id:key
    //     })
    // }
    })
;
export default connect(mapStateToProps,mapDispatchToProps)(TaskItemPanel)