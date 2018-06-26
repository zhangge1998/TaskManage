/**
 * Created by ubuntu on 3/8/18.
 */
import TaskDetail from '../component/taskDetail'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
            // p1:state.taskInfo.info.p1,
            // p2:state.taskInfo.info.p2,
            // p3:state.taskInfo.info.p3,
            // p4:state.taskInfo.info.p4,
            // p5:state.taskInfo.info.p5,
            // name:state.taskInfo.info.taskName,
            // time:state.taskInfo.info.taskTime,
            // maker:state.taskInfo.info.taskMaker,
            // count:state.taskInfo.info.count,
            // intro:state.taskInfo.info.intro,
    };
};
const mapDispatchToProps=(dispatch)=>({
        getTaskInfo:()=>{
            dispatch({
                type:'getTaskInfo'
            });
        }
    })


;
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail)