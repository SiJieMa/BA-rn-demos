
import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtils from "../navigator/NavigationUtils";
export default class ThirdPage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <Button
                        title={'Fetch使用'}
                        onPress={() =>{
                            NavigationUtils.goPage({
                                navigation:this.props.navigation
                            },"FetchDemoPage")
                        }}
                    />
                    <Button
                        title={'AsyncStorage测试'}
                        onPress={() =>{
                            NavigationUtils.goPage({
                                navigation:this.props.navigation
                            },"AsyncStorage")
                        }}
                    />
                    <Button
                        title={'DB框架'}
                        onPress={()=>{
                            NavigationUtils.goPage({
                                navigation:this.props.navigation
                            },"DataStoreDemoPage")
                        }}
                    />
                </View>
            </View>
        );
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
