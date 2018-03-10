/**
 * Created by ubuntu on 3/5/18.
 */
export default (state ={oldInfo:{id: '1',username:'hah',password:'111111',sex: '女',email:'123456@qq.com',intro:'我是一条鱼',headPath:'./public/imges/photo.jpg'}}, action) => {
    switch(action.type){
        case 'GET_OLD_INFO':
        case 'USERNAME_CHANGE':
        case 'PASSWORD_CHANGE':
        case 'SEX_CHANGE':
        case 'EMAIL_CHANGE':
        case 'INTRO_CHANGE':
        case 'HEADPATH_CHANGE':
            return {oldInfo:action.data};
    }
    return state;
}