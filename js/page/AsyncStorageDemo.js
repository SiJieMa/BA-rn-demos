
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,AsyncStorage} from 'react-native';
const KEY = "save_key"
export default class AsyncStorageDemo extends Component {
    constructor(props){
        super(props);
        this.state={
            showText:' '
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.input_container}>AsyncStorageDemo 使用</Text>
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
                            this.doSave()
                        } }>存储
                    </Text>
                    <Text
                        onPress={() =>{
                            this.doRemove()
                        } }>删除
                    </Text>
                    <Text
                        onPress={() =>{
                            this.getData()
                        } }>获取
                    </Text>

                </View>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }

   async  doSave(){
      AsyncStorage.setItem(KEY,this.value,error =>{
          error && console.log(error.toString())
      })
    }

    async getData(){
        AsyncStorage.getItem(KEY,(error,value)=>{
            this.setState({
                showText:value
            });
            console.log(value);
            error && console.log(error.toString)
        })
    }
    async doRemove(){
        AsyncStorage.removeItem(KEY,error =>{
            error&& console.log(error.toString())
        })
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
