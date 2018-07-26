import AddTask from '../component/addTask';
import {connect} from 'react-redux';
const mapStateToProps=(state)=> {
    return{

    };
};
const mapDispatchToProps=(dispatch)=>({
        add:()=>{
            dispatch({
                type:'ADD_TASK'
            })
        }
    })
;
export default connect(mapStateToProps,mapDispatchToProps)(AddTask)