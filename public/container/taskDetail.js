/**
 * Created by ubuntu on 3/8/18.
 */
import TaskDetail from '../component/taskDetail'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
            task: state.taskInfo.taskDetail
    };
};
const mapDispatchToProps=(dispatch)=>({
        jump:()=>{
            dispatch({
                type:'JUMPHOME'
            })
        }
    })


;
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail)