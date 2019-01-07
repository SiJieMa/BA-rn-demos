
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtils from "../navigator/NavigationUtils";
export default class FourthPage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={() =>{
                          NavigationUtils.goPage({
                              navigation:this.props.navigation
                          },"LocationDemo")
                      }}
                >高德地图demo</Text>
                <Text style={styles.welcome}
                      onPress={() =>{
                          NavigationUtils.goPage({
                              navigation:this.props.navigation
                          },"GenCanvasDemo")
                      }}
                >图片合成demo</Text>
                <Text style={styles.welcome}
                      onPress={() =>{
                          NavigationUtils.goPage({
                              navigation:this.props.navigation
                          },"GenCanvasDemo2")
                      }}
                >图片合成demo2</Text>
                <Text style={styles.welcome}
                      onPress={() =>{
                          NavigationUtils.goPage({
                              navigation:this.props.navigation
                          },"PopTips")
                      }}
                >提示框demo</Text>
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
