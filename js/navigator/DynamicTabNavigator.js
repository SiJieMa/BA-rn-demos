
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  {connect} from 'react-redux';
import {
    createAppContainer,
    createBottomTabNavigator
} from 'react-navigation'
import  FirstPage from '../page/FirstPage';
import SecondPage from '../page/SecondPage';
import ThirdPage from "../page/ThirdPage";
import FourthPage from '../page/FourthPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationUtils from "../navigator/NavigationUtils";
import {BottomTabBar} from 'react-navigation-tabs';
//设置底部tab二级页面
const TABS = {
    FirstPage:{
        screen:FirstPage,
        navigationOptions:{
            tabBarLabel:"首页",
            tabBarIcon:({tintColor,focused}) =>(
                <MaterialIcons
                    name = {'home'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    SecondPage:{
        screen:SecondPage,
        navigationOptions:{
            tabBarLabel:"排班计划",
            tabBarIcon:({tintColor,focused}) =>(
                <AntDesign
                    name = {'addusergroup'}
                    size={26}
                    style={{color:tintColor}}
                />
            )

        }
    },
    ThirdPage:{
        screen:ThirdPage,
        navigationOptions:{
            tabBarLabel:"ERP",
            tabBarIcon:({tintColor,focused}) =>(
                <MaterialIcons
                    name = {'device-hub'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    FourthPage:{
        screen:FourthPage,
        navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({tintColor,focused}) =>(
                <AntDesign
                    name = {'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
};
class DynamicTabNavigator extends Component {
    constructor(props){
        super(props);
        console.disableYellowBox = true;
    }
    _tabNavigator(){
        if (this.Tabs) {
            return this.Tabs;
        }
        const {FirstPage,SecondPage,ThirdPage,FourthPage} = TABS;
        const tabs = {FirstPage,SecondPage,ThirdPage,FourthPage};//动态配置底部导航个数
        FirstPage.navigationOptions.tabBarLabel= "最新";  //动态配置底部导航名称
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs,{tabBarComponent: props =>{
                    return <TabBarComponent theme={this.props.theme} {...props}/>
                }
            }
        ))
    }
    render() {
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}
class  TabBarComponent extends Component {
    constructor(props){
        super(props);
        this.theme={
            tintColor:props.activeTintColor,
            updateTime:new Date().getTime()
        }
    }
    render(){
        return <BottomTabBar
            {...this.props}
            activeTintColor={this.props.theme}
        />
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);

