import React, {Component} from 'react';
import {
    AppRegistry, Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    WebView
} from 'react-native';
import CanvasWebview from './CanvasWebview'
// const CircularJSON = require('circular-json');
export default class PicCake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            base64: this.props.data,
            url: this.props.url,
            time: this.props.time,
            local: this.props.local,
            rotate: !this.props.rotate,
            finalData: "dede",
            show:true,
        };
    }
// 将图片数据发送到合成器
    _addImageBase64() {
        // console.log("after自动");
            this.refs.canvas._addImageBase64(this.state.base64, this.state.time, this.state.local, this.state.rotate);
        // this._getBase64();
    }
    // 得到图片的base64形式
    _getBase64(data) {
        if (data) {
            this.setState({
                finalData: data,
                show: false,
            });
            // this._handleBase64(data);
        }
    }
    render() {
        const canvas = this.state.show?
            <View style={styles.dismiss} >
                <CanvasWebview
                    handleBase64={this._getBase64.bind(this)}
                    base64={this.state.base64}
                    time={this.state.time}
                    local={this.state.local}
                    rotate={this.state.rotate}
                    ref='canvas'
                    height={300}
                    width={300}/>
            </View>
            :
            <View style={{
                justifyContent:'center',
                alignItems:'center',

            }}><Image
                    style={{
                        width: 260,
                        height: 350,
                        flexDirection:'row',
                        resize:'contain',
                        // justifyContent:'center',
                        // alignItems:'center',

                    }}
                    source={{
                        uri: this.state.finalData
                    }}
                />
                <Text>
                    门店名称：屈臣氏一店测试
                    人员名称:业务主管

                </Text>
                <Text>
                    照片区域：离店签到
                    时间：2019.1.1 19:20
                </Text>
                <Text>
                    照片类型:进店签到
                </Text>
            </View>;

        return (
            <View>
                {/*<TouchableOpacity onPress = {this._addImageBase64.bind(this)}><Text>点击base64</Text></TouchableOpacity>*/}
                <View style={styles.container}  >
                    {canvas}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    dismiss: {
        // display: 'none',
        position: 'absolute',
        left:1000,
    }
});

AppRegistry.registerComponent('PicCake', () => PicCake);
