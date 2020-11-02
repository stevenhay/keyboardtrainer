(this["webpackJsonpkeyboard-learner"]=this["webpackJsonpkeyboard-learner"]||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},37:function(e,t,s){"use strict";s.r(t);var a,n,r=s(0),i=s(1),c=s.n(i),o=s(19),l=s.n(o),h=s(15),d=(s(26),s(3)),u=s(4),j=s(7),b=s(6),O=s(8),v=s(2),p=(s(27),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"sf-logo-container",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"sf-logo",children:Object(r.jsxs)("h1",{children:["Keyboard ",Object(r.jsx)("span",{className:"bold",children:"Trainer"})]})})})})}}]),s}(i.Component)),f=(s(28),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"navbar-header",children:Object(r.jsxs)("a",{className:"navbar-brand",href:"#",children:["K",Object(r.jsx)("span",{children:"T"})]})}),Object(r.jsx)("button",{className:"navbar-toggler hidden-md-up pull-xs-right","data-target":"#collapsenav","data-toggle":"collapse",type:"button",children:"\u2630"}),Object(r.jsx)("div",{className:"collapse navbar-collapse",id:"collapsenav",children:Object(r.jsx)("ul",{className:"nav navbar-nav mx-auto"})})]})})}}]),s}(i.Component)),m=function(){function e(){Object(d.a)(this,e),this.localeMap=new Map,this.localeMap.set("ar",this.arabic()),this.localeMap.set("en",this.english())}return Object(u.a)(e,[{key:"getLocaleKeySet",value:function(e){return this.localeMap.get(e)}},{key:"arabic",value:function(){return["\u0627","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0621","\u0629","\u0626","\u0624"]}},{key:"english",value:function(){return["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"]}}]),e}(),x=function(){function e(t){Object(d.a)(this,e),this.keySet=void 0,this.lastIdx=void 0,this.keySet=(new m).getLocaleKeySet(t),this.lastIdx=-1}return Object(u.a)(e,[{key:"hasWordSet",value:function(){return void 0!==this.keySet}},{key:"generateWord",value:function(){for(var e=[],t="",s=0;s<5;s++){var a=void 0;do{a=Math.floor(Math.random()*this.keySet.length)}while(a===this.lastIdx);this.lastIdx=a;var n=this.keySet[a];t+=n,e.push({value:n,colour:"white",typed:!1})}return{word:t,letters:e}}}]),e}();!function(e){e[e.CORRECT=0]="CORRECT",e[e.INCORRECT=1]="INCORRECT",e[e.BACKSPACE=2]="BACKSPACE"}(a||(a={})),function(e){e[e.ALLOWED=0]="ALLOWED",e[e.DISALLOWED=1]="DISALLOWED"}(n||(n={}));var y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).BACKSPACE_KEY="Backspace",a.WHITE_COLOUR="white",a.GREEN_COLOUR="green",a.RED_COLOUR="red",a.inputState=void 0,a.inputState=n.ALLOWED,a.state={currentInput:""},a}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("input",{type:"text",value:this.state.currentInput,onChange:this.onTextFieldChange.bind(this),onKeyDown:this.onKeyDownValue.bind(this),onKeyPress:this.onKeyPressValue.bind(this)})})}},{key:"onTextFieldChange",value:function(e){var t=this,s=e.target.value;if(this.setState({currentInput:s}),this.getCurrentWord().letters.forEach((function(e){return e.colour=t.WHITE_COLOUR})),this.props.handleKeyPressCallback(a.BACKSPACE),0!==s.length){for(var r=0;r<s.length;r++){var i=this.getCurrentWord().letters[r];if(s[r]!==i.value)return this.handleIncorrectInput(i),void this.props.handleKeyPressCallback(a.INCORRECT);i.typed||(this.props.handleKeyPressCallback(a.CORRECT),i.typed=!0),i.colour=this.GREEN_COLOUR,this.inputState=n.ALLOWED}s===this.getCurrentWord().word&&this.handleFinishedWord()}else this.inputState=n.ALLOWED}},{key:"onKeyPressValue",value:function(e){this.inputState===n.DISALLOWED&&(e.preventDefault(),e.stopPropagation())}},{key:"onKeyDownValue",value:function(e){e.key===this.BACKSPACE_KEY&&this.props.handleKeyPressCallback(a.BACKSPACE)}},{key:"handleIncorrectInput",value:function(e){e.colour=this.RED_COLOUR,this.inputState=n.DISALLOWED}},{key:"handleFinishedWord",value:function(){this.setState({currentInput:""}),this.props.wordFinishedCallback(),this.inputState=n.ALLOWED}},{key:"getCurrentWord",value:function(){return this.props.currentWord}}]),s}(c.a.Component),g=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){var e=this.getUnits();return Object(r.jsxs)("div",{id:this.props.id,children:[Object(r.jsxs)("span",{children:[this.leftPad(2,e.min),":"]}),Object(r.jsx)("span",{children:this.leftPad(2,e.sec)})]})}},{key:"getUnits",value:function(){var e=this.props.timeElapsed;return{min:Math.floor(e/60).toString(),sec:Math.floor(e%60).toString()}}},{key:"leftPad",value:function(e,t){return(t+"").length>e?t:(new Array(e).join("0")+t).slice(-e)}}]),s}(c.a.Component),C=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).initialState=void 0,a.timer=void 0,a.startTimer(),a.state=a.initialState={isRunning:!0,timeElapsed:0,times:[]},a}return Object(u.a)(s,[{key:"toggle",value:function(){var e=this;this.setState({isRunning:!this.state.isRunning},(function(){e.state.isRunning?e.startTimer():clearInterval(e.timer)}))}},{key:"lap",value:function(){var e=this.state,t=e.times,s=e.timeElapsed;return this.setState({times:t.concat(s),timeElapsed:0}),s}},{key:"reset",value:function(){clearInterval(this.timer),this.setState(this.initialState)}},{key:"startTimer",value:function(){var e=this;this.timer=setInterval((function(){e.setState({timeElapsed:e.state.timeElapsed+1})}),1e3)}},{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(g,{id:"timer",timeElapsed:this.state.timeElapsed})})}}]),s}(c.a.Component),k=(s(29),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).stopwatchRef=i.createRef(),e}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"sf-statistics",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"sf-stats row",children:Object(r.jsx)("div",{className:"col-sm-12",children:Object(r.jsx)("span",{className:"stats-box timer color-white",children:Object(r.jsx)(C,{ref:this.stopwatchRef})})})}),Object(r.jsxs)("div",{className:"sf-stats row d-none d-lg-flex",children:[Object(r.jsxs)("div",{className:"col-sm-3 offset-sm-2",children:[Object(r.jsx)("h6",{className:"stats-text",children:"Keys"}),Object(r.jsxs)("div",{className:"sf-stats row",children:[Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("span",{className:"stats-box color-green",children:this.props.correctKeys}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"stats-text",children:"Correct"})]}),Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("span",{className:"stats-box color-red",children:this.props.incorrectKeys}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"stats-text",children:"Incorrect"})]})]})]}),Object(r.jsx)("div",{className:"col-sm-2"}),Object(r.jsxs)("div",{className:"col-sm-3",children:[Object(r.jsx)("h6",{className:"stats-text",children:"Time"}),Object(r.jsxs)("div",{className:"sf-stats row",children:[Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("span",{className:"stats-box color-white",children:Object(r.jsx)(g,{id:"average",timeElapsed:this.props.averageTime})}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"stats-text",children:"Average"})]}),Object(r.jsxs)("div",{className:"col-sm-6",children:[Object(r.jsx)("span",{className:"stats-box color-white",children:Object(r.jsx)(g,{id:"average",timeElapsed:this.props.totalTime})}),Object(r.jsx)("br",{}),Object(r.jsx)("span",{className:"stats-text",children:"Total"})]})]})]})]})]})})}},{key:"getStopwatch",value:function(){return this.stopwatchRef}}]),s}(i.Component)),N=(s(30),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).statsRef=i.createRef(),a.wordGen=void 0,a.wordGen=new x(a.props.locale),a.wordGen.hasWordSet()&&(a.state={currentWord:a.wordGen.generateWord(),session:{correctKeyPresses:0,incorrectKeyPresses:0,averageTime:0,totalTime:0,totalWords:0}}),a}return Object(u.a)(s,[{key:"render",value:function(){return this.wordGen.hasWordSet()?Object(r.jsxs)("div",{className:"sf-search",children:[Object(r.jsx)(k,{ref:this.statsRef,correctKeys:this.state.session.correctKeyPresses,incorrectKeys:this.state.session.incorrectKeyPresses,averageTime:this.state.session.averageTime,totalTime:this.state.session.totalTime}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"col-lg-12",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsx)("label",{className:"kl-requested-key",children:this.getColouredWord()})}),Object(r.jsx)(y,{currentWord:this.state.currentWord,wordFinishedCallback:this.wordFinished.bind(this),handleKeyPressCallback:this.handleKeyPress.bind(this)})]})})})]}):Object(r.jsx)("div",{className:"sf-search",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"col-lg-12",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsxs)("h3",{children:["Sorry, the locale '",this.props.locale,"' is not available at this time."]})})})})})}},{key:"getColouredWord",value:function(){for(var e=[],t=0;t<this.state.currentWord.letters.length;t++){var s=this.state.currentWord.letters[t],a=s.value,n=s.colour;e.push(Object(r.jsx)("span",{id:"key-"+t,className:"color-"+n,children:a},"key-"+t))}return e}},{key:"wordFinished",value:function(){if(this.statsRef.current){var e=this.statsRef.current.getStopwatch().current;if(e){var t=this.state.session,s=e.lap();t.totalWords+=1,t.totalTime+=s,t.averageTime=t.totalTime/t.totalWords,this.setState({currentWord:this.wordGen.generateWord()})}else console.log("stopwatchRef is not valid!!")}else console.log("statsRef is not valid!!")}},{key:"handleKeyPress",value:function(e){var t=this.state.session;e===a.CORRECT?(t.correctKeyPresses+=1,this.setState({session:t})):e===a.INCORRECT?(t.incorrectKeyPresses+=1,this.setState({session:t})):this.forceUpdate()}}]),s}(i.Component)),R=(s(31),function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).HISTORY=Object(O.a)(),e}return Object(u.a)(s,[{key:"render",value:function(){return Object(r.jsx)(v.b,{history:this.HISTORY,children:Object(r.jsxs)("div",{className:"keyboard-tutor",children:[Object(r.jsx)(f,{}),Object(r.jsx)(v.a,{exact:!0,path:"/",component:this.displayRoot}),Object(r.jsx)(v.a,{path:"/:locale",component:this.displayRootLocale})]})})}},{key:"displayRoot",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(N,{locale:"ar"})]})}},{key:"displayRootLocale",value:function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{}),Object(r.jsx)(N,{locale:e.match.params.locale})]})}}]),s}(i.Component)),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,38)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),r(e),i(e)}))};l.a.render(Object(r.jsx)(h.a,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),S()}},[[37,1,2]]]);
//# sourceMappingURL=main.b3c77fac.chunk.js.map