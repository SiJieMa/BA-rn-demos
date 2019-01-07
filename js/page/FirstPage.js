
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,FlatList} from 'react-native';
import {connect} from 'react-redux';
// import actions from "../action/index"
import {createAppContainer, createMaterialTopTabNavigator} from "react-navigation"
import NavigationUtils from "../navigator/NavigationUtils";
// import FetchDemoPage from "./FetchDemoPage";
export default class FirstPage extends Component {
    constructor(props){
        super(props);
        this.tabNames = [ 'aaa','bbbb','ccc','ddd','eee']
    }
    _gentabs(){
         const tabs={};
        // NavigationUtils.navigation = this.props.navigation;
        this.tabNames.forEach((item,index)=>{
             tabs[`tab${index}`] = {
                 screen:props => <PopularTab {...props} tabLabel={item}/>,
                 navigationOptions:{
                     title:item
                 }
             }
         });
        return tabs;
    }
    render() {
        //设置二级页面内的TopTabNavigato的路由
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._gentabs(),{
                tabBarOptions:{
                    tabStyle:styles.tabStyle,
                    upperCaseLabel:false,
                    scrollEnabled:true,
                    style:{
                        marginTop:15,
                        backgroundColor: '#678',
                    },
                    indicatorStyle:styles.indicatorStyle,
                    labelStyle:styles.labelStyle
                }
            }
        ));
        return <View style={{flex:1,marginTop:25 }}>
            <TabNavigator/>
        </View>
    }
}

// tab
class PopularTab extends Component {
    constructor(props){
        super(props);
        const {tabLabel}=this.props;
        this.storeName = tabLabel;
    }
    componentDidMount(){
        this.loadData();
    }
    loadData(){
        // const {onLoadPopularData} = this.props;
        // const url = this.genFetchUrl(this.storeName);
        // onLoadPopularData(this.storeName,url);
    }

    genFetchUrl(key){
        // return URL + key +QUERY_STR;
    }

    render() {
        const {tabLabel} = this.props;
        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>{tabLabel}</Text>

            </View>
        );
    }
}
// const mapStateToProps = state =>({
//      popular:state.popular
// });
// const mapDispatchToProps = dispatch =>({
//     onLoadPopularData:(storeName,url)=>dispatch(actions.onLoadPopularData(storeName,url))
// })

// const PopularTabPage = connect(,)(PopularTab)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabStyle: {
        minWidth:30
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'white'
    },
    labelStyle:{
        fontSize:13,
        marginTop: 10,
        marginBottom:6
    }
});
