
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createAppContainer,
       createBottomTabNavigator
} from 'react-navigation';
import  PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import MyFavouritePage from "./MyFavouritePage";
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationUtils from "../navigator/NavigationUtils";
import  DynamicTabNavigator from '../navigator/DynamicTabNavigator'
export default class HomePage extends Component {
    constructor(props){
        super(props)
    }

    // _tabNavigator(){
    //     return createAppContainer(createBottomTabNavigator({
    //         PopularPage:{
    //             screen:PopularPage,
    //             navigationOptions:{
    //                 tabBarLabel:"首页",
    //                 tabBarIcon:({tintColor,focused}) =>(
    //                     <MaterialIcons
    //                       name = {'home'}
    //                       size={26}
    //                       style={{color:tintColor}}
    //                     />
    //                 )
    //             }
    //         },
    //         TrendingPage:{
    //             screen:TrendingPage,
    //             navigationOptions:{
    //                 tabBarLabel:"排班计划",
    //                 tabBarIcon:({tintColor,focused}) =>(
    //                     <AntDesign
    //                         name = {'addusergroup'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 )
    //
    //             }
    //         },
    //         MyFavouritePage:{
    //             screen:MyFavouritePage,
    //             navigationOptions:{
    //                 tabBarLabel:"ERP",
    //                 tabBarIcon:({tintColor,focused}) =>(
    //                     <MaterialIcons
    //                         name = {'device-hub'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 )
    //             }
    //         },
    //         MyPage:{
    //             screen:MyPage,
    //             navigationOptions:{
    //                 tabBarLabel:"我的",
    //                 tabBarIcon:({tintColor,focused}) =>(
    //                     <AntDesign
    //                         name = {'user'}
    //                         size={26}
    //                         style={{color:tintColor}}
    //                     />
    //                 )
    //             }
    //         }
    //     }))
    // }
    render() {
        NavigationUtils.navigation = this.props.navigation;
         return <DynamicTabNavigator/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
