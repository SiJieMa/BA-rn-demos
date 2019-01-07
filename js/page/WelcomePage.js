
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtils from '../navigator/NavigationUtils';

type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount(){
        this.timer  = setTimeout(()=>{
            NavigationUtils.resetToHomePage({
                   navigation:this.props.navigation
            })
        },1000);
    }
    componentWillUnmount(){
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>欢迎页面</Text>
                <Text  style={styles.welcome}>两秒后跳过</Text>
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
