(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d22c0ff"],{f241:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[e._v("\n        Chuck Norris App\n      ")]),a("div",[e._v("v0.0.1")])],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-maroon"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v("Menu")]),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://www.liander.nl"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[a("q-item-label",[e._v("Liander")]),a("q-item-label",{attrs:{caption:""}},[e._v("https://www.liander.nl")])],1)],1),a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:"https://www.liander.nl"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"help"}})],1),a("q-item-section",[a("q-item-label",[e._v("Over deze app")]),a("q-item-label",{attrs:{caption:""}},[e._v("Wat doet deze app en hoe gaan we om met betrekking tot privacy van uw data?")])],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},n=[],o=a("0967"),l=a("2b0e"),i=function(e,t){var a=window.open;if(!0===o["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)a=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(e,{openExternal:!0})}else if(void 0!==l["a"].prototype.$q.electron)return l["a"].prototype.$q.electron.shell.openExternal(e);var r=a(e,"_blank");if(r)return r.focus(),r;t&&t()},p={name:"MyLayout",data:function(){return{leftDrawerOpen:!1}},methods:{openURL:i}},s=p,c=a("2877"),d=Object(c["a"])(s,r,n,!1,null,null,null);t["default"]=d.exports}}]);