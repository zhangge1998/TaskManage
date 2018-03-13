/**
 * Created by ubuntu on 3/8/18.
 */
import TaskItemPanel from '../component/taskItemPanel'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
        name:state.task.name,
        myTasks:state.task.myTasks
    };
};
const mapDispatchToProps=(dispatch)=>({
    getTasks:()=>{
        dispatch({
            type:'SHOW_TASKS'
        });
    }
    })


;
export default connect(mapStateToProps,mapDispatchToProps)(TaskItemPanel)