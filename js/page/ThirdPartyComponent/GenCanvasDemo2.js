import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,ScrollView,
    WebView,
} from 'react-native';
import PicCake2 from './GenCanvasPlug2/PicCake2';
//图片选择器
var ImagePicker = require('react-native-image-picker');
//图片选择器参数设置
var options = {
    title: '请选择图片来源',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '相册图片',
    quality: 0.9,
    maxWidth: 395,
    minWidth: 395,
    minHeight: 650,
    maxHeight: 657,
    // noData:'false',
    // customButtons: [
    //       {name: 'hangge', title: 'hangge.com图片'},
    //   ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
//默认应用的容器组件
export default class CameraTest2 extends Component {

    ImgData;
    //构造函数
    constructor(props) {
        super(props);


        this.state = {
            avatarSource: null,
            hasImgLoad: false,
            hasImgGened: false,
            dataImg: null,
            location: null,
            timePoint: null,
            rotate: null,
            finalData: "dede",
            showImg: false,
        };
    }
    handleImgData(datas) {
        datas.then((result)=>{
            console.log("chenggong"+result);
            this.setState({
                finalData:result,
                showImg:true,
            })
            // canvas.props.handle(data);
        },(err)=>{
            console.log('失败'+err) //失败失败1
        })
    }


    componentDidUpdate(){
        console.log(this.state.finalData.slice(1,-1))
    }




    //选择照片按钮点击
    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.data) {
                console.log(response.fileSize);
            }
            if (response.didCancel) {

            }
            else if (response.error) {
                alert("ImagePicker发生错误：" + response.error);
            }
            else if (response.customButton) {
                alert("自定义按钮点击：" + response.customButton);
            }
            else {
                let source = {uri: response.uri};
                // let bool =!this.state.hasImgLoad;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    dataImg: response.data,
                    avatarSource: source,
                    location: "经度" + response.latitude + "纬度" + response.longitude,
                    timePoint: response.timestamp,
                    hasImgLoad: true,
                    rotate: response.isVertical,
                    hasImgGened: true,
                    uri: source

                });


            }
        });


    }

    render() {
        const finalImg = this.state.hasImgLoad ?
            <PicCake2  url={this.state.avatarSource} data={this.state.dataImg} handle={this.handleImgData.bind(this)}
                       time={this.state.timePoint}
                       local={this.state.location} rotate={this.state.rotate}/>
            : <Text>图片合成demo2请拍照</Text>;

        // const showImg = this.state.finalData?
        // :null;
        return (
            <View style={styles.container}>
                <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                <View style={{
                    justifyContent:'center',
                    alignItems:'center',}}>
                    <Image
                        style={{
                            width: 176,
                            height: 328,
                            flexDirection:'row',
                            resize:'contain',


                        }}
                        source={{
                            uri: this.state.finalData.slice(1,-1)
                        }}
                    />
                </View>


                {finalImg}


            </View>
        );
    }

}

//样式定义
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    },
    item: {
        margin: 10,
        height: 40,
        borderWidth: 1,
        padding: 6,
        borderColor: '#ddd',
        borderRadius: 20,
        textAlign: 'center'
    },
    image: {
        height: 228,
        width: 300,
        alignSelf: 'center',
    },
});

