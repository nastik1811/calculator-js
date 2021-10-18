(()=>{"use strict";const e={ADD:"+",SUB:"-",MUL:"*",DIV:"/",MOD:"mod",POWER:"xy",Y_SQRT:"ysqrt"},t={NEG:"neg",POWER_OF_TWO:"2nd",SQUARE:"x2",SQRT:"sqrt",LN:"ln",LG:"lg",TENX:"10x",EX:"ex",REVERSE:"1/x"},s="first operand",r="ready for second operand",n="second operand",a="finished",i="accentColor";class c{constructor(e,t="0"){this.firstOperand=parseFloat(e),this.secondOperand=parseFloat(t)}execute(){throw new Error("This method should be implemented")}}const u=10**7;function o(e){return Math.round(e*u)/u}class l extends c{execute(){return o(this.firstOperand+this.secondOperand)}}class h extends c{execute(){return 0===this.secondOperand?NaN:o(this.firstOperand/this.secondOperand)}}class d extends c{execute(){return o(this.firstOperand*this.secondOperand)}}class p extends c{execute(){return this.firstOperand%this.secondOperand}}class O extends c{execute(){return o(this.firstOperand**this.secondOperand)}}class m extends c{execute(){return this.firstOperand<0?NaN:Math.sqrt(this.firstOperand)}}class S extends c{execute(){return o(this.firstOperand-this.secondOperand)}}class x extends c{execute(){return this.secondOperand<0||1===this.secondOperand?NaN:10===this.secondOperand?Math.log10(this.firstOperand):Math.log(this.firstOperand)}}class E extends c{execute(){return Math.exp(this.firstOperand)}}const V=document.querySelectorAll(".key-numeric"),f=document.querySelectorAll(".key-operator"),w=document.querySelector("#clear"),v=document.querySelector("#equal"),y=document.querySelector("#result"),C=document.querySelector("#menu"),k=document.querySelector(":root"),b=document.querySelector("#decimal"),N=new class{constructor(e,t){this.$resultNode=e,this.createCommand=t,this.init()}init(){this.appState=a,this.currentValue="0",this.savedValue=null,this.nextOperation=null}setAppState(e){this.appState=e}setCurrentValue(e){this.currentValue=e,this.render()}enterDigit(e){switch(this.appState){case s:case n:"0"===this.currentValue?this.setCurrentValue(e):this.setCurrentValue(this.currentValue+e);break;case r:this.setCurrentValue(e),this.setAppState(n);break;case a:this.setCurrentValue(e),this.setAppState(s);break;default:this.setCurrentValue(e)}}addDecimalPoint(){this.appState===a&&this.setAppState(s),this.currentValue.includes(".")||this.setCurrentValue(`${this.currentValue}.`)}setOperation(s){if(function(e){return Object.values(t).includes(e)}(s))this.setUnaryOperation(s);else{if(!function(t){return Object.values(e).includes(t)}(s))throw new Error("Unsupported operation");this.setBinOperation(s)}}setUnaryOperation(e){this.nextOperation&&this.calculate(),this.savedValue=this.currentValue,this.nextOperation=e,this.calculate()}setBinOperation(e){switch(this.appState){case s:this.savedValue=this.currentValue,this.setAppState(r);break;case r:break;case n:this.calculate(),this.savedValue=this.currentValue;break;case a:this.savedValue="0",this.setCurrentValue("0"),this.setAppState(r);break;default:this.setAppState(a)}this.nextOperation=e}calculate(){const e=this.createCommand(this.nextOperation,this.currentValue,this.savedValue).execute();Number.isNaN(e)?(this.setCurrentValue("Not a number"),this.reset()):(this.setCurrentValue(e.toString()),this.savedValue=this.currentValue,this.nextOperation=null,this.setAppState(r))}finish(){this.nextOperation&&this.calculate(),this.reset()}clear(){this.setCurrentValue("0"),this.reset(),this.render()}reset(){this.setAppState(a),this.savedValue=null,this.nextOperation=null}render(){this.$resultNode.innerText=this.currentValue}}(y,(function(s,r,n){switch(s){case e.ADD:return new l(n,r);case e.SUB:return new S(n,r);case e.DIV:return new h(n,r);case e.MUL:return new d(n,r);case e.MOD:return new p(n,r);case e.POWER:return new O(n,r);case e.Y_SQRT:return new m(n,r);case t.NEG:return new d(n,-1);case t.POWER_OF_TWO:return new O(2,n);case t.SQUARE:return new O(n,2);case t.SQRT:return new m(n,2);case t.LN:return new x(n);case t.LG:return new x(n,10);case t.TENX:return new O(10,n);case t.EX:return new E(n,r);case t.REVERSE:return new h(1,n);default:throw new Error(`This operator "${s}" is not supported!`)}})),A=new class{constructor(e,t){this.$container=e,this.$root=t,this.getThemeFromStorage()}getThemeFromStorage(){const e=localStorage.getItem(i);e?this.setColor(e):this.setColor("#00ff62"),this.applyTheme(this.color)}setColor(e){this.color=e}saveTheme(e){this.setColor(e),localStorage.setItem(i,e)}applyTheme(e){this.$root.style.setProperty("--accentColor",e)}initColorInput(){const e=document.createElement("label");e.className="menu-option",e.innerText="Choose theme color";const t=document.createElement("input");t.setAttribute("type","color"),t.setAttribute("name","color-input"),t.setAttribute("value",this.color),t.className="color-input",e.insertAdjacentElement("beforeend",t),this.$container.appendChild(e),t.addEventListener("input",(e=>{this.applyTheme(e.target.value)})),t.addEventListener("change",(e=>{this.saveTheme(e.target.value)}))}}(C,k);A.initColorInput(),V.forEach((e=>{e.addEventListener("click",(()=>{N.enterDigit(e.value)}))})),f.forEach((e=>{e.addEventListener("click",(()=>{N.setOperation(e.value)}))})),w.addEventListener("click",(()=>{N.clear()})),v.addEventListener("click",(()=>{N.finish()})),b.addEventListener("click",(()=>{N.addDecimalPoint()})),document.addEventListener("keypress",(e=>{switch(e.preventDefault(),e.key){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":N.enterDigit(e.key);break;case".":N.addDecimalPoint();break;case"*":case"/":case"+":case"-":N.setOperation(e.key);break;case"=":case"Enter":N.finish()}}))})();