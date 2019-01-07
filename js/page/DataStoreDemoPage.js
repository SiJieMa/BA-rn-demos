
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,AsyncStorage} from 'react-native';
import DataStore from '../expand/dao/DataStore';
const KEY = "save_key";
export default class DataStoreDemoPage extends Component {
    constructor(props){
        super(props);
        this.state={
            showText:' '
        },
        this.dataStore = new DataStore();
    }

    loadData() {
        let url = `https://api.github.com/search/repositories?q=${this.value}`;
        this.dataStore.fetchData(url)
            .then(data => {
                let showData = `初次数据加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
                this.setState({
                    showText: showData
                })
            })
            .catch(error => {
                error && console.log(error.toString());
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.input_container}>离线缓存</Text>
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>{
                            this.value = text
                        }}
                    />
                </View>
                <View style={styles.input_container}>

                    <Text
                        onPress={() =>{
                            this.loadData()
                        } }>获取
                    </Text>
                </View>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    input:{
        height:30,
        flex:1,
        borderColor:'black',
        borderWidth:1,
        marginRight:10
    },
    input_container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
