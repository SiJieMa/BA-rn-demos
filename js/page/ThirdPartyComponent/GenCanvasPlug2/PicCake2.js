import React, {Component} from 'react';
import {Image, ScrollView, StatusBar, Text, View, StyleSheet} from 'react-native';
import Canvas, {Image as CanvasImage, Path2D} from 'react-native-canvas';
const Example = ({sample, children}) => (
    <View style={styles.example}>
        <View style={styles.exampleLeft}>{children}</View>
        <View style={styles.exampleRight}>
            <Image source={sample} style={{width: 100, height: 100}} />
        </View>
    </View>
);

export default class PicCake2 extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null,
        }
    }


    handleImageRect(canvas) {
        const image = new CanvasImage(canvas);
        canvas.width = 355;
        canvas.height = 657;
        const dataImg = canvas.props.newdata;
        const ctx = canvas.getContext('2d');
        image.src = 'data:image/jpeg;base64,'+dataImg;
        image.addEventListener('load', () => {
            ctx.drawImage(image, 15, 90, 320, 550);
            ctx.textAlign = 'left';
            ctx.font = 'bold 14px Arial';
            ctx.fillStyle = '#ffffff';
            // ctx.fillText("loaction"+li, -150,-270);
            ctx.fillText("门店名称：屈臣氏一店测试", 15,20);
            ctx.fillText("人员名称:业务主管", 50, 40);
            ctx.fillText("照片区域：离店签到", 15,60);
            ctx.fillText("时间：2019.1.1 19:20", 50,80);
            ctx.fillText("照片类型:进店签到" ,15, 80);
            ctx.save();
            canvas.props.handle(canvas.toDataURL("image/jpeg", 0.1));
        });

        // canvas.toDataURL().then((data)=>{
        //      canvas.props.handle(data);
        //  });




    }


    render() {

        return (
            <View style={styles.container}>
                <Canvas newdata={this.props.data} handle={this.props.handle} ref={this.handleImageRect}/>
            </View>
        );
    }
}

const full = {
    position: 'absolute',
    top: 0,
    left:400,
    width: '100%',
    height: '100%',
};

const cell = {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
};

const styles = StyleSheet.create({
    container: {
        ...full,
    },
    examples: {
        ...full,
        padding: 5,
        paddingBottom: 0,
    },
    example: {
        paddingBottom: 5,
        flex: 1,
        flexDirection: 'column',
    },
    exampleLeft: {
        ...cell,
    },
    exampleRight: {
        ...cell,
    },
});