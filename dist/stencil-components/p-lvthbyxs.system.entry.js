System.register(["./p-65a13e82.system.js"],function(t,e){"use strict";var n,i;return{setters:[function(t){n=t.d;i=t.e}],execute:function(){function e(t,e,n){return(t||"")+(e?" "+e:"")+(n?" "+n:"")}var r=function(){function t(t){n(this,t)}t.prototype.getText=function(){return e(this.first,this.middle,this.last)};t.prototype.render=function(){return i("div",null,"Hello, World! I'm ",this.getText())};return t}();t("my_component",r);var o=function(){function t(t){n(this,t);this.timeLeft=0}t.prototype.startTimer=function(){var t=this;this.interval=setInterval(function(){if(t.timeLeft>-1){t.timeLeft=t.timeLeft+1}else{t.timeLeft=0}},1)};t.prototype.componentDidLoad=function(){this.startTimer()};t.prototype.componentDidUnload=function(){window.clearInterval(this.interval)};t.prototype.render=function(){return i("div",{id:"timer"},i("div",{class:"timer-container"},this.timeLeft," ms"))};Object.defineProperty(t,"style",{get:function(){return"#timer{font-weight:700;font-size:25px;text-align:center}#timer .timer-container{width:160px;height:90px;margin:20px auto}"},enumerable:true,configurable:true});return t}();t("timer_component",o)}}});