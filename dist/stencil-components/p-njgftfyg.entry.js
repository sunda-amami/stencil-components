import{d as t,e}from"./p-4a95eb13.js";class i{constructor(e){t(this,e)}getText(){return(this.first||"")+((t=this.middle)?` ${t}`:"")+((e=this.last)?` ${e}`:"");var t,e}render(){return e("div",null,"Hello, World! I'm ",this.getText())}}class r{constructor(e){t(this,e),this.timeLeft=0}startTimer(){this.interval=setInterval(()=>{this.timeLeft=this.timeLeft>-1?this.timeLeft+1:0},1)}componentDidLoad(){this.startTimer()}componentDidUnload(){window.clearInterval(this.interval)}render(){return e("div",{id:"timer"},e("div",{class:"timer-container"},this.timeLeft," ms"))}static get style(){return"#timer{font-weight:700;font-size:25px;text-align:center}#timer .timer-container{width:160px;height:90px;margin:20px auto}"}}export{i as my_component,r as timer_component};