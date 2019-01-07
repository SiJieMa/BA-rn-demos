
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,AsyncStorage} from 'react-native';
export default class PopTips extends Component {
    constructor(props){
        super(props);
        this.state={
            showText:' '
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>定位测试</Text>
            </View>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
