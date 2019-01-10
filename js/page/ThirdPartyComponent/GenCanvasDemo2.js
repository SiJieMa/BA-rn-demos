import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    PermissionsAndroid
} from 'react-native';
import PicCake2 from './GenCanvasPlug2/PicCake2';
import { Geolocation } from "react-native-amap-geolocation";
import geoLocationUtils from '../../CommonFunction/geoLocationUtils';
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
export default class GenCanvasDemo2 extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
            hasImgLoad: false,
            hasImgGened: false,
            dataImg: null,
            location: {},
            timePoint: null,
            rotate: null,
            finalData: "dede",
            showImg: false,
        };
    }

    async componentDidMount() {
        Geolocation.init({
            ios: "e9095b2f2410226942a50557751d76b6",
            android: "6219a77021c71708b6dd394c7cd8d9cb"
        })

        Geolocation.setOptions({
            interval: 10000,
            distanceFilter: 10,
            background: true,
            reGeocode: true
        });

        Geolocation.addLocationListener(location =>
            this.updateLocationState(location)
        );

        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: '申请定位权限',
                    message:
                        '一个很牛逼的应用想申请您的定位权限',
                    buttonNeutral: '等会再问我',
                    buttonNegative: '不行',
                    buttonPositive: '好的',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.start();
            } else {
                
            }
        } catch (err) {
            console.warn(err);
        }

        // Geolocation.start();
    }

    render() {
        /**
         * cLon	clat
117.188775	39.136051
         */
        const { location } = this.state;
        console.log('YINDONG_location_render',location)

        if (location&&location.cityCode&&location.cityCode!=undefined) {
            location.offset = geoLocationUtils.getInstance(39.136051,117.188775,location.latitude,location.longitude);
        }

        const finalImg = this.state.hasImgLoad ?
            <PicCake2 url={this.state.avatarSource} data={this.state.dataImg} handle={this.handleImgData.bind(this)}
                time={this.state.timePoint}
                local={this.state.location} rotate={this.state.rotate} />
            : <Text>图片合成demo2请拍照</Text>;

        // const showImg = this.state.finalData?
        // :null;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.item} onPress={this.choosePic.bind(this)}>选择照片</Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Image
                            style={{
                                width: 176,
                                height: 328,
                                flexDirection: 'row',
                                resize: 'contain',


                            }}
                            source={{
                                uri: this.state.finalData.slice(1, -1)
                            }}
                        />


                    </View>

                    {finalImg}

                
                    
                    {Object.keys(location).map(key => (
                        <View style={styles.item2} key={key}>
                            <Text style={styles.label}>{key}</Text>
                            <Text>{location[key]}</Text>
                        </View>
                    ))}

                </View>
            </ScrollView>
        );
    }

    componentDidUpdate() {
        console.log(this.state.finalData.slice(1, -1))
    }

    componentWillUnmount() {
        Geolocation.stop();
    }

    updateLocationState(location) {
        if (location) {
            location.timestamp = new Date(location.timestamp).toLocaleString();
            this.setState({ location });
            console.log('YINDONG1-location', location);
        }
    }

    //选择照片按钮点击
    choosePic() {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.data) {
                
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
                let source = { uri: response.uri };
                // let bool =!this.state.hasImgLoad;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                console.log('YINDONG2');

                this.setState({
                    dataImg: response.data,
                    avatarSource: source,
                    location: {},
                    timePoint: response.timestamp,
                    hasImgLoad: true,
                    rotate: response.isVertical,
                    hasImgGened: true,
                    uri: source
                });
            }
        });
    }

    handleImgData(datas) {
        datas.then((result) => {
            console.log("chenggong" + result);
            this.setState({
                finalData: result,
                showImg: true,
            })
            // canvas.props.handle(data);
        }, (err) => {
            console.log('失败' + err) //失败失败1
        })
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
    body: {
        padding: 16
    },
    controls: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 12,
        marginBottom: 24
    },
    item2: {
        flexDirection: "row",
        marginBottom: 4
    },
    label: {
        color: "#f5533d",
        width: 120,
        paddingRight: 10,
        textAlign: "right"
    }
});

