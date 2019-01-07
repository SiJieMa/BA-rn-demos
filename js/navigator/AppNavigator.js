import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from "../page/DetailPage";
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware, reduxifyNavigator} from 'react-navigation-redux-helpers';
import FetchDemoPage from "../page/FetchDemoPage";
import AsyncStorageDemo from "../page/AsyncStorageDemo";
import DataStoreDemoPage from "../page/DataStoreDemoPage";
import LocationDemo from "../page/ThirdPartyComponent/LocationDemo";
import GenCanvasDemo from "../page/ThirdPartyComponent/GenCanvasDemo";
import GenCanvasDemo2 from '../page/ThirdPartyComponent/GenCanvasDemo2';
import PopTips from "../page/ThirdPartyComponent/PopTips";
import PicCake2 from "../page/ThirdPartyComponent/GenCanvasPlug2/PicCake2";
export const rootCom = 'Init';//设置根路由
const InitNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
});


const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    },
    DetailPage: {
        screen: DetailPage,
    },
    FetchDemoPage: {
        screen: FetchDemoPage,
    },
    AsyncStorage: {
        screen: AsyncStorageDemo,
    },
    DataStoreDemoPage: {
        screen: DataStoreDemoPage,
    },
    LocationDemo:{
        screen:LocationDemo,
    },
    GenCanvasDemo:{
        screen:GenCanvasDemo,
    },
    GenCanvasDemo2:{
      screen:GenCanvasDemo2,
    },
    PicCake2:{
        screen:PicCake2,
    },
    PopTips:{
        screen:PopTips,
    },
},
    {
        // initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#2c2d2d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }

);
export const RootNavigator = createAppContainer(
    createSwitchNavigator({
        Init: InitNavigator,
        Main: MainNavigator,
    }, {
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    })
);

/**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

/**
 * 2.将根导航器组件传递给 reduxifyNavigator 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);