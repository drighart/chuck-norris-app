(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4d59bdae"],{"161f":function(e,t,o){},d4cf:function(e,t,o){"use strict";var n=o("161f"),r=o.n(n);r.a},e524:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"camera-modal"},[o("video",{ref:"video",staticClass:"camera-sample",attrs:{autoplay:"",playsinline:""}}),o("div",{staticClass:"fixed-bottom taken"},[o("q-btn",{attrs:{color:"purple",size:"35px",round:"",dense:"",icon:"camera"},on:{click:e.capture}})],1)])])},r=[],a={name:"CameraPage",mounted:function(){var e=this,t={facingMode:"environment"},o={video:t,audio:!1};navigator.mediaDevices.getUserMedia(o).then((function(t){console.log(t),e.$refs.video.srcObject=t,e.$refs.video.play()})).catch((function(e){return console.error("getUserMedia() error:",e)}))},destroyed:function(){navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){e.getTracks().forEach((function(e){console.log("stop"),e.stop()}))})).catch((function(e){return console.error("getUserMedia() error:",e)}))},methods:{capture:function(){var e=this,t=this.$refs.video.srcObject.getVideoTracks()[0],o=new window.ImageCapture(t);return o.takePhoto().then((function(t){console.log(t),e.$router.push("home")}))}}},i=a,c=(o("d4cf"),o("2877")),s=Object(c["a"])(i,n,r,!1,null,"abf5f0d6",null);t["default"]=s.exports}}]);