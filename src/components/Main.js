require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//let yeomanImage = require('../images/yeoman.png');
// 获取图片相关数据
let imageData = require('../data/imageData.json');
// 以下这段可以写成下面的自执行函数
/*function genImageURL(imageDataArr){
    for(var i = 0, j = imageDataArr.length; i < j; i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName)
        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
}

imageData = genImageURL(imageData);*/
// 利用自执行函数，将图片名信息转成图片 URL 路径信息
imageData = (function genImageURL(imageDataArr){
    for(var i = 0, j = imageDataArr.length; i < j; i++){
        var singleImageData = imageDataArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName)
        imageDataArr[i] = singleImageData;
    }
    return imageDataArr;
})(imageData);

class AppComponent extends React.Component {
  render() {
    return (
        <section className = "stage">
            <section className = "ima-sec">
            </section>
            <nav className = "controller-nav">
            </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
