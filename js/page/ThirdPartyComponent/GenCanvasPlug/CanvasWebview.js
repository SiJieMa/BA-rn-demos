import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    WebView,
    TouchableOpacity
} from 'react-native';
import NavigationUtils from "../../../navigator/NavigationUtils";

var html =
    `<html>
<head>
  <title>canvas</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
  </style>
</head> 
<body>
<p id="testt" style="color: red">dasdas</p>
<img id="itest" style="max-width: 100%"  src="">  
<canvas id="can" width="500" height="660"></canvas>
  <script>
    var isclean=false,drawState=false,lastX,lastY,ctx;
    var _width,_height;
    window.document.addEventListener('message', function (e){
        // let objs=e.data.substring(0, 10);
        // $("#testt").html(objs);
        var obj = JSON.parse(e.data);
        switch (parseInt(obj.action)){
          case 4:
              /* url */
              createImg(obj.data);
              break;
          case 5:
              /* case64 */
               $("#testt").html("objs");
              createImg(obj.data,obj.time,obj.local,obj.rotate);
              break;
          case 0:
              /* 返回base64 */
              returnBase64();
              break;
        }
    });
    
    function createImg(data,ti,li,r){
   
       let datas ="data:image/jpeg;base64,"+data;
       
        // $("#itest").attr('src',datas); 
     var canvas = document.getElementById("can")
   //获取对应的CanvasRenderingContext2D对象(画笔)
     var ctx = canvas.getContext("2d");
        ctx.fillStyle="#787878";
        ctx.fillRect(0,0,390,657);
     //创建新的图片对象
     var img = new Image();
     //指定图片的URL
        img.src= datas;
        img.height = 390;
        img.width = 600;
     //浏览器加载图片完毕后再绘制图片
     img.onload = function(){
             if(r == false ){
                 ctx.translate(195,328);//设置画布上的(0,0)位置，也就是旋转的中心点
                 ctx.rotate(90*Math.PI/180);
                 ctx.drawImage(img,75-img.width/2,20-img.height/2,550,360);//把图片绘制在旋转的中心点，
                 ctx.save();
                 ctx.translate(0, 0);
                 ctx.rotate(-90*Math.PI/180);
                 ctx.textAlign = 'left';
                 ctx.font = 'bold 16px Arial';
                 ctx.fillStyle = '#1d1d1d';
                 // ctx.fillText("loaction"+li, -150,-270);
                  ctx.fillText("门店名称：屈臣氏一店测试", -180,-300);
                   ctx.fillText("人员名称:业务主管", -180, -275);    
                   ctx.fillText("照片区域：离店签到", 0,-275);
                   ctx.fillText("时间：2019.1.1 19:20", 0,-250);
                   ctx.fillText("照片类型:进店签到" ,-180, -250);  
                 ctx.restore();           
      }else {
            ctx.drawImage(img,15,90,360,550);
            ctx.textAlign = 'left';
            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#ffffff';
            ctx.fillText("门店名称：屈臣氏一店测试", 15,20);
            ctx.fillText("人员名称:业务主管", 15, 50);    
            ctx.fillText("照片区域：离店签到", 200,50);
            ctx.fillText("时间：2019.1.1 19:20", 200,80);
            ctx.fillText("照片类型:进店签到" ,15, 80);  
      }
            
          var data = canvas.toDataURL();
          window.postMessage(JSON.stringify({action: 0, data: data}));
     
         
   };
    // returnBase64(); 

 }

    // function imageData2base64(imgdata){
    //     var can = $("<canvas>").attr("width", imgdata.width).attr("height", imgdata.height);
    //     can = can[0];
    //     var ctx = can.getContext("2d");
    //     ctx.putImageData(imgdata, 0, 0);
    //     return can.toDataURL();
    // }

    /*
        保存图片功能，将图片保存成一张图片并返回base64
    */
    // function saveAsBase64(){
    //     var obj = this.ctx_img.getImageData(0,0,this.width, this.height);
    //     var obj2 = this.ctx_edit.getImageData(0,0,this.width, this.height);
    //     var new_obj = this.ctx_img.createImageData(this.width, this.height);
    //     var len = obj2.data.length / 4;
    //     for(var i=0;i<len;i++){
    //         if (obj2.data[i*4+3] != 0){
    //             new_obj.data[i*4] = obj2.data[i*4];
    //             new_obj.data[i*4+1] = obj2.data[i*4+1];
    //             new_obj.data[i*4+2] = obj2.data[i*4+2];
    //             new_obj.data[i*4+3] = 255;
    //         }else{
    //             new_obj.data[i*4] = obj.data[i*4];
    //             new_obj.data[i*4+1] = obj.data[i*4+1];
    //             new_obj.data[i*4+2] = obj.data[i*4+2];
    //             new_obj.data[i*4+3] = obj.data[i*4+3];
    //         }
    //     } 
    //     return imageData2base64(new_obj);
    // }
    function returnBase64(){
           var canvas =document.getElementById("can");
           var data = canvas.toDataURL();
           window.postMessage(JSON.stringify({action: 0, data: data}));
    }
  </script>
</body>
</html>
`;
var _width, _height;
export default class CanvasWebview extends Component {
    webview = {};

    constructor(props) {
        super(props);
        this.state = {
            height: this.props.height,
            width: this.props.width,
            data:this.props.base64,
            time:this.props.time,
            local:this.props.local,
            rotate:this.props.rotate,

        }
    }

    post(obj) {
        this.webview.postMessage(JSON.stringify(obj));
    }

    // 以base64的形式添加背景
    _addImageBase64(data, t, l, r) {
        this.post({action: 5, data: data, time: t, local: l, rotate: r});
    }

    _addPropsData(){
        this.post({action: 5, data:this.state.data, time:this.state.time, local:this.state.local, rotate:this.state.rotate});
    }

    webviewload() {
        this.webview.injectJavaScript('init_canvas(' + this.props.width + ', ' + this.props.height + ');');
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    }

    //接受到参数
    handleMessage(e) {
        const obj = JSON.parse(e.nativeEvent.data);
        if (obj.action === 0) {
            this.props.handleBase64(obj.data);
        }
    }


    componentDidMount(){
        setTimeout(()=>{
            this._addPropsData()
         },2000);
    }

    render() {
        return (

                <WebView
                    style={{width: this.state.width, height: this.state.height}}
                    ref={(w) => {
                        this.webview = w
                    }}
                    // onLoad={this._addPropsData.bind(this)}
                    source={{html: html}}
                    onMessage={e => this.handleMessage(e)}
                    javaScriptEnabled={true}
                    domStorageEnabled={false}
                    automaticallyAdjustContentInsets={true}
                    scalesPageToFit={false}
                />

        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',

    }
});
