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
        canvas.width = 395;
        canvas.height = 657;
        const dataImg = canvas.props.newdata;
        const context = canvas.getContext('2d');
        image.src = 'data:image/jpeg;base64,'+dataImg;
        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 372, 554);
        });
        console.log("导出的数据为"+canvas.toDataURL());
    }


    componentDidUpdate(){
        // console.log('数据为'+this.state.data);
    }

    render() {

        return (
            <View style={styles.container}>
                    <Canvas newdata={this.props.data} ref={this.handleImageRect}/>
            </View>
        );
    }
}

const full = {
    position: 'absolute',
    top: 0,
    left: 0,
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