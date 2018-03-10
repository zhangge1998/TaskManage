/**
 * Created by ubuntu on 3/8/18.
 */
import TaskDetail from '../component/taskDetail'
import {connect} from 'react-redux'
const mapStateToProps=(state)=> {
    return{
            p1:state.taskInfo.taskInfo.p1,
            p2:state.taskInfo.taskInfo.p2,
            p3:state.taskInfo.taskInfo.p3,
            p4:state.taskInfo.taskInfo.p4,
            p5:state.taskInfo.taskInfo.p5,
            name:state.taskInfo.taskInfo.taskName,
            time:state.taskInfo.taskInfo.taskTime,
            maker:state.taskInfo.taskInfo.taskMaker,
            count:state.taskInfo.taskInfo.count,
            intro:state.taskInfo.taskInfo.intro,
    };
};
const mapDispatchToProps=(dispatch)=>{
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskDetail)