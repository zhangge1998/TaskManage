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
        sendId:(id)=>{
            dispatch({
                type:'SENDID',
                id:id
            })
        }
    })


;
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail)