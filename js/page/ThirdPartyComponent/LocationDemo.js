import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View, PermissionsAndroid, ScrollView,Image } from "react-native";
// import { Geolocation } from "react-native-amap-geolocation";
// import Canvas from 'react-native-canvas';

// const Example = ({ sample, children }) => (
//     <View style={style.example}>
//         <View style={style.exampleLeft}>{children}</View>
//         <View style={style.exampleRight}>
//             <Image source={sample} style={{ width: 100, height: 100 }} />
//         </View>
//     </View>
// );
// const cell = {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   };
// const style = StyleSheet.create({
//     body: {
//         padding: 16
//     },
//     controls: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         marginTop: 12,
//         marginBottom: 24
//     },
//     item: {
//         flexDirection: "row",
//         marginBottom: 4
//     },
//     label: {
//         color: "#f5533d",
//         width: 120,
//         paddingRight: 10,
//         textAlign: "right"
//     },
//     example: {
//         paddingBottom: 5,
//         flex: 1,
//         flexDirection: 'row',
//     },
//     exampleLeft: {
//         ...cell,
//     },
//     exampleRight: {
//         ...cell,
//     },
// });

export default class LocationDemo extends Component {
//     state = { location: {} };

//     async componentDidMount() {
//         await Geolocation.init({
//             ios: "9bd6c82e77583020a73ef1af59d0c759",
//             android: "6219a77021c71708b6dd394c7cd8d9cb"
//         });
//         Geolocation.setOptions({
//             interval: 10000,
//             distanceFilter: 10,
//             background: true,
//             reGeocode: true
//         });
//         Geolocation.addLocationListener(location =>
//             this.updateLocationState(location)
//         );
//     }

//     componentWillUnmount() {
//         Geolocation.stop();
//     }

//     updateLocationState(location) {
//         if (location) {
//             location.timestamp = new Date(location.timestamp).toLocaleString();
//             this.setState({ location });
//             console.log(location);
//         }
//     }

//     async startLocation() {

//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: '申请定位权限',
//                     message:
//                         '一个很牛逼的应用想申请您的定位权限',
//                     buttonNeutral: '等会再问我',
//                     buttonNegative: '不行',
//                     buttonPositive: '好的',
//                 },
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('现在你获得摄像头权限了');
//                 Geolocation.start();
//             } else {
//                 console.log('用户并不屌你');
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     }
//     stopLocation = () => Geolocation.stop();
//     getLastLocation = async () =>
//         this.updateLocationState(await Geolocation.getLastLocation());

//     handleCanvas = (canvas) => {
//         const ctx = canvas.getContext('2d');
//         ctx.fillStyle = 'purple';
//         ctx.fillRect(0, 0, 100, 100);
//     }

//     handleImageData(canvas) {        
//         canvas.width = 100;
//         canvas.height = 100;

//         const context = canvas.getContext('2d');
//         context.fillStyle = 'purple';
//         context.fillRect(0, 0, 100, 100);

//         context.getImageData(0, 0, 100, 100)
//             .then(imageData => {
//                 const data = Object.values(imageData.data);
//                 const length = Object.keys(data).length;
//                 for (let i = 0; i < length; i += 4) {
//                     data[i] = 0;
//                     data[i + 1] = 0;
//                     data[i + 2] = 0;
//                 }
//                 const imgData = new ImageData(canvas, data, 100, 100);
//                 context.putImageData(imgData, 0, 0);
//             });
//     }

//     render() {
//         const { location } = this.state;
//         return (
//             <ScrollView>

//                 <View style={style.body}>
//                     <View style={style.controls}>
//                         <Button
//                             style={style.button}
//                             onPress={() => this.startLocation()}
//                             title="开始定位"
//                         />
//                         <Button
//                             style={style.button}
//                             onPress={this.stopLocation}
//                             title="停止定位"
//                         />
//                     </View>
//                     {Object.keys(location).map(key => (
//                         <View style={style.item} key={key}>
//                             <Text style={style.label}>{key}</Text>
//                             <Text>{location[key]}</Text>
//                         </View>
//                     ))}

//                     <Example sample={{ uri: 'https://facebook.github.io/react/logo-og.png' }}>
//                         <Canvas ref={this.handleImageData} />
//                     </Example>
//                 </View>
//             </ScrollView>
//         );
//     }
}
