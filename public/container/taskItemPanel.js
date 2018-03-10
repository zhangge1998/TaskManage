/**
 * Created by ubuntu on 3/8/18.
 */
import TaskItemPanel from '../component/taskItemPanel'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
        taskInfo:state.task.list
    };
};
const mapDispatchToProps=(dispatch)=>{
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskItemPanel)