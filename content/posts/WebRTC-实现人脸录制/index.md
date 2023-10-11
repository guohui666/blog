---
title: "WebRTC-实现人脸录制"
tags: [WebRTC]
categories: [typescript]
description: WebRTC-实现人脸录制
weight: 50
draft: true
date: 2022-10-18T09:46:52+08:00
# lastmod: 2017-08-28T21:41:52+08:00
# you can close something for this content if you open it in config.toml.
comment: false
mathjax: false

---
### 什么是 WebRTC ？

MDN对WebRTC的介绍如下：

>WebRTC（Web Real-Time Communications）是一项实时通讯技术，它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的传输。WebRTC 包含的这些标准使用户在无需安装任何插件或者第三方的软件的情况下，创建点对点（Peer-to-Peer）的数据分享和电话会议成为可能。

简单来说，WebRTC 是一个可以在 Web 应用程序中实现音视频和数据的实时通信的开源项目。在WebRTC中，音视频数据的采集和编解码等一系列复杂处理都交由浏览器的底层封装来完成。我们可以直接拿到优化后的媒体流，然后将其输出到本地屏幕和扬声器，或者转发给其对等端。
<!--more-->

### getUserMedia
WebRTC提供了`navigator.mediaDevices.getUserMedia`API来获取当前设备的摄像头和麦克风，实现在手机上进行人脸录制功能，我们只需调用时指定优先前置或后置摄像头即可，手机端浏览器已经封装了`facingMode`参数，不用提前获取设备集合。一些复杂场景下还可以选择多个摄像头进行录制，不过本次分享先按下不表。

### MediaRecorder
使用 `MediaRecorder` 对 `getUserMedia`返回的媒体流`MediaStream`进行录制，是实现人脸录制功能的核心对象

### 基本的实现流程
实现人脸录制用得最多的场景便是业务中进行人脸识别，与服务器数据进行活体比对，大致的实现流程如下：
- 进人脸录制页面
- 唤起摄像头（授权）
- 对媒体流进行处理（录制视频）
- 处理录制好的视频
- 上传服务器，服务器返回比对结果

但是真正要上线的代码还需要处理更多边界情况

### 兼容性检测
可能有人会认为`WebRTC`在手机端浏览器兼容性会比PC好，但事实恰恰相反，在我实际的测试过程中，手机端浏览器对`WebRTC`的支持一言难尽，普遍有支持不全的情况，仅仅是唤起摄像头这一步，手机端不同的浏览器可能会报不一样的错误。 
所以在实现视频录制之前，我们需要先进行兼容性检测，并且准备好降级方案，采用`input`上传。

#### detectrtc
`detectrtc` 是一个用于检测`WebRTC`功能的库，我们可以用它来检测当前设备、浏览器对WebRTC的支持度

```javascript
import {
  isWebRTCSupported,
  isGetUserMediaSupported,
  hasWebcam,
  load
} from 'detectrtc'
export default {
  //...
  created(){
    // 对当前设备以及使用的浏览器进行兼容性检测
    load(() => {
      console.info('isWebRTCSupported', isWebRTCSupported)
      console.info('isGetUserMediaSupported', isGetUserMediaSupported)
      console.info('hasWebcam', hasWebcam)
      if (!isGetUserMediaSupported || !hasWebcam) {
        // 切换到input方案
      }
    })
  }
//...
}

```
手机端可以通过打开 [https://www.webrtc-experiment.com/DetectRTC/](https://www.webrtc-experiment.com/DetectRTC/)来检测当前浏览器对`WebRTC`相关API的支持情况

#### webrtc-adapter.
`webrtc-adapter`是一个抹平不同浏览器对`WebRTC`API的实现和执行行为差异的工具，导入这个库后，我们不用区分不同浏览器`WebRTC`API的方法前缀，如`webkit`、`moz`。

#### 理想很丰满，现实很骨感
本以为通过`detectrtc`做好兼容性检测后，便能轻松实现实时视频录制，但是架不住各个手机浏览器的奇怪报错，部分浏览器在使用相关通过`detectrtc`检测通过后的API时，还是不能正常唤起摄像头，或者时唤起摄像头后无法进行录制。此时只能进行降级，切换到input方案。

### 具体实现

#### 准备页面
通过上面的分析，实现录制人脸功能时，我们需要准备两套方案
- 通过RTC录制（可自由定制录制页面样式，对录制的视频实时处理，兼容性略差）
- 通过input拍摄后上传（只能使用原生相机界面，无法定制，是目前最基本的且成熟的拍视频上传模式）

在录制页面准备两个组件
`VideoByInput`
`VideoByRtc`



