(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2e388c15"],{"2b09":function(e,t,o){},"955f":function(e,t,o){"use strict";var r=o("2b09"),a=o.n(r);a.a},e524:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"camera-modal"},[o("video",{ref:"video",staticClass:"camera-sample",attrs:{autoplay:"",playsinline:""}}),o("div",{staticClass:"fixed-bottom taken"},[o("q-btn",{attrs:{color:"purple",size:"35px",round:"",dense:"",icon:"camera"},on:{click:e.capture}})],1)])])},a=[],n={name:"CameraPage",mounted:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.$refs.video.srcObject=t,e.$refs.video.play()})).catch((function(e){return console.error("getUserMedia() error:",e)}))},destroyed:function(){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){console.log("Stop camera"),e.getVideoTracks()[0].stop()})).catch((function(e){return console.error("getUserMedia() error:",e)}))},methods:{capture:function(){var e=this,t=this.$refs.video.srcObject.getVideoTracks()[0],o=new window.ImageCapture(t);return o.takePhoto().then((function(t){console.log(t),e.$router.push("home")}))}}},i=n,c=(o("955f"),o("2877")),s=Object(c["a"])(i,r,a,!1,null,"f4e53bda",null);t["default"]=s.exports}}]);