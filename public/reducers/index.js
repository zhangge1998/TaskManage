/**
 * Created by ubuntu on 3/7/18.
 */
import {combineReducers} from 'redux'
import userInfoEdit from './userInfoEdit'
import userInfo from './userInfo'
import task from './task'
import taskInfo from './taskInfo'
import taskMember from './taskMember'
export default combineReducers({
    userInfoEdit,
    userInfo,
    task,
    taskInfo,
    taskMember
})