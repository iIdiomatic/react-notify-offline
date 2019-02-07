require('source-map-support').install();
(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define('ReactOfflineNotify',[],b):'object'==typeof exports?exports.ReactOfflineNotify=b():a.ReactOfflineNotify=b()})('undefined'==typeof self?this:self,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='./',b(b.s=1)}([function(a){a.exports=require('react')},function(a,b,c){a.exports=c(2)},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),e=c.n(d),f=c(3),g=c.n(f);class h extends d.Component{constructor(...a){var b;return b=super(...a),Object.defineProperty(this,'state',{enumerable:!0,writable:!0,value:{isOnline:navigator.onLine,showNotification:!1,animateDown:!1,animateUp:!1}}),Object.defineProperty(this,'handleOnline',{enumerable:!0,writable:!0,value:()=>{this.handleEvent(!0)}}),Object.defineProperty(this,'handleOffline',{enumerable:!0,writable:!0,value:()=>{this.handleEvent(!1)}}),Object.defineProperty(this,'handleEvent',{enumerable:!0,writable:!0,value:(a=!0)=>{a?this.setState({isOnline:a,showNotification:!0},()=>{setTimeout(()=>{this.setState((a)=>({animateDown:!0===a.isOnline}))},this.props.timeout-150||2850),setTimeout(()=>{this.setState((a)=>({showNotification:!1===a.isOnline&&!0,animateDown:!1}))},this.props.timeout||3e3)}):this.setState((b)=>({isOnline:a,animateUp:!1===b.showNotification,showNotification:!0}))}}),b}componentDidMount(){window.addEventListener('online',this.handleOnline),window.addEventListener('offline',this.handleOffline)}componentWillUnmount(){window.removeEventListener('online',this.handleOnline),window.removeEventListener('offline',this.handleOffline)}renderToast(){var a=this.state;let b=a.isOnline,c=a.animateDown,e=a.animateUp;var f=this.props;let g=f.onlineText,h=f.offlineText;return Object(d.createElement)('div',{className:`offline-toast-container ${b?'online':'offline'} ${c?'offline-toast-down':''} ${e?'offline-toast-up':''}`},b?g||'Online':h||'Offline')}render(){return this.state.showNotification?this.renderToast():null}}b['default']=h},function(){}])});
//# sourceMappingURL=ReactOfflineNotify.js.map