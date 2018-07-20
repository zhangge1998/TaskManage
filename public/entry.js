import {BrowserRouter, Route} from 'react-router-dom';
// import {IndexRoute,Router,Route} from 'react-router'
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/index';

//引入中间件文件
import middlewareUserInfoEdit from '../public/middlewares/userInfoEdit';
import middlewareHeader from '../public/middlewares/header'
import middlewareSignin from '../public/middlewares/login'
import middlewareTasks from '../public/middlewares/taskItemPanel'
// import middlewareTaskInfo from '../public/middlewares/taskDetail'
// import middlewareAdd from '../public/middlewares/addTask'
// import middlewareHome from '../public/middlewares/homePage';
// import middlewareActorTaskPage from '../public/middlewares/actorTaskPage';

//引入组件
import Header from '../public/container/header';
import TaskDetail from '../public/container/taskDetail';
import TaskItemPanel from '../public/container/taskItemPanel';
import UserInfoEdit from '../public/container/userInfoEdit';
import SignIn from '../public/container/login';
import AddTask from '../public/container/addTask';
//创建store
const createMiddlewareStore = applyMiddleware(middlewareSignin, middlewareHeader,middlewareTasks)(createStore);
let store = createMiddlewareStore(reducers);

// let store;
//
// if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
//     store = createStore(
//         reducers,
//         applyMiddleware(middlewareHeader, middlewareUserInfoEdit)
//     );
// } else {
//     store = createStore(
//         reducers,
//         compose(applyMiddleware(middlewareHeader, middlewareUserInfoEdit), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //插件调试，未安装会报错
//     );
// }

//设置路由
render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path='/' component={SignIn}/>
                {/*<Route path='/myHome' component={Header}/>*/}
                <Route path='/login' component={SignIn}/>
                <Route path='/task' component={TaskDetail}/>
                <Route path='/myHome' component={TaskItemPanel}/>
                <Route path='/addTask' component={AddTask}/>
                <Route path='/userInfoEdit' component={UserInfoEdit}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);