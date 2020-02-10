(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n,r=a(0),l=a.n(r),o=a(22),i=a.n(o),c=a(6),s=a(7),m=a(9),u=a(8),h=a(10),f=a(73),p=a(27),d=a(71),g=a(59),v=a(29),y=a(105),b=a(112),w=function(e){return e.split("").map((function(e,t){return 0===t?e.toUpperCase():e})).join("")},E=function(e){return JSON.parse(JSON.stringify(e))},x=function(e){for(var t=[],a=0;a<e;a++)t.push(a);return t},j=function(){return n||(n={}),n},k=function(e){n&&Object.keys(n).forEach((function(t){return t!==e&&delete n[t]}))},O=a(35),S=a.n(O),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={talkative:S.a.get(j(),"personality.talkative",0),faultWithOthers:S.a.get(j(),"personality.faultWithOthers",0),thoroughJob:S.a.get(j(),"personality.thoroughJob",0),depressed:S.a.get(j(),"personality.depressed",0)},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,parseInt(r)))},a.handleNext=function(){j().personality=E(a.state),a.props.history.replace("/select")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=function(t){return[0,1,2,3,4].map((function(a,n){return l.a.createElement("td",{key:n},l.a.createElement("input",{type:"radio",name:t,value:a,checked:e.state[t]===a,onChange:e.handleChange}))}))};return l.a.createElement("div",{className:"vertical-center"},l.a.createElement(y.a,null,l.a.createElement("p",null," Here are a number of characteristics that may or may not apply to you. For example, do you agree that you are someone who likes to spend time with others? Please select a box next to each statement to indicate the extent to which you agree or disagree with that statement. "),l.a.createElement("br",null),l.a.createElement("p",null," I see myself as someone who\u2026 "),l.a.createElement("table",{border:"0",cellPadding:"10"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null),l.a.createElement("th",null,"Disagree Strongly"),l.a.createElement("th",null,"Disagree a little"),l.a.createElement("th",null,"Neither agree nor disagree"),l.a.createElement("th",null,"Agree a little"),l.a.createElement("th",null,"Agree Strongly")),l.a.createElement("tr",null,l.a.createElement("td",null,"Is talkative"),t("talkative")),l.a.createElement("tr",null,l.a.createElement("td",null,"Tends to find fault with others"),t("faultWithOthers")),l.a.createElement("tr",null,l.a.createElement("td",null,"Does a thorough job"),t("thoroughJob")),l.a.createElement("tr",null,l.a.createElement("td",null,"Is depressed, blue"),t("depressed")))),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNext},"Next")))}}]),t}(l.a.Component),N=a(106),A=a(114),q=a(43),D=a(14),I=a(61),M=a.n(I),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={selected:{}},a.handleChange=function(e){var t=e.target,n=t.name,r=t.checked,l=a.state.selected;if(r){if(20===Object.keys(l).length)return e.target.checked=void 0,alert("You can only select up to 20 movies");l[n]=!0}else delete l[n];a.setState({selected:l})},a.handleNext=function(){if(0===Object.keys(a.state.selected).length)return alert("Please select movies");if(Object.keys(a.state.selected).length<5)return alert("Please select more than 4 movies");var e=Object.keys(a.state.selected).map((function(e){return q[parseInt(e)]}));j().selectedMovies=e;var t=x(e.length),n=D.ratingStyles;j().navSequence=[],t.forEach((function(e){return n.forEach((function(t){return j().navSequence.push({movieid:e,ratingstyle:t})}))})),M()(j().navSequence),a.props.history.replace("/common")},a.handleBack=function(){k("personality"),a.props.history.replace("/")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement("h6",null,"Instructions:"),l.a.createElement("h6",null,"We are going to show you set of 5 movies at a time. Please choose the movies you have watched before from the given list."),l.a.createElement(N.a,null,q.map((function(t,a){var n=t.name,r=t.img;return l.a.createElement(A.a,{key:a},l.a.createElement(A.a.Body,null,l.a.createElement("img",{src:r,alt:"Poster",height:"400",width:"240"})),l.a.createElement(A.a.Footer,null,l.a.createElement("h6",null,n," ",l.a.createElement("input",{type:"checkbox",name:a,onChange:e.handleChange}))))}))),l.a.createElement(b.a,{style:{float:"left"},onClick:this.handleBack},"Back"),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNext},"Next")))}}]),t}(l.a.Component),B=a(111),R=a(30),W=(a(40),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){j().selectedMovies[e].commonRate=t}},a.handleNext=function(){if(j().selectedMovies.filter((function(e){return"number"!==typeof e.commonRate})).length>0)return alert("Please rate all the movies");var e=j().navSequence.pop(),t=e.movieid,n=e.ratingstyle;a.props.history.replace("/rate/".concat(t,"/").concat(n))},a.handleBack=function(){window.confirm("Are you sure? All selected movies will be cleared")&&(k("personality"),a.props.history.replace("/select"))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement("h6",null,"Please rate the movies you have selected :"),l.a.createElement(B.a,{style:{overflow:"auto"},horizontal:!0},j().selectedMovies.map((function(t,a){var n=t.name,r=t.img,o=t.commonRate;return l.a.createElement(B.a.Item,{key:a},l.a.createElement("img",{src:r,alt:"Poster",height:"400",width:"240"})," ",l.a.createElement("br",null),l.a.createElement("h6",null," ",n," "),l.a.createElement(R.a,{initialRating:o,stop:5,emptySymbol:D.commonRate.empty,fullSymbol:D.commonRate.full,onChange:e.handleChange(a)}))}))),l.a.createElement("br",null),l.a.createElement(b.a,{style:{float:"left"},onClick:this.handleBack},"Previous"),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNext},"Next")))}}]),t}(l.a.Component)),T=a(107),F=a(108),J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={selected:{}},a.getMovie=function(){return j().selectedMovies[parseInt(a.props.match.params.movieid)]},a.getSelected=function(){return Object.keys(a.state.selected).map((function(e){return parseInt(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,r=t.checked,l=a.state.selected;r?l[n]=!0:delete l[n],a.setState({selected:l})},a.handleNext=function(){if(0===Object.keys(a.state.selected).length)return alert("Please select");var e=a.getMovie(),t=a.getSelected(),n=[];if(D.allRatingStyles.forEach((function(a,r){return t.indexOf(e[a])>-1&&n.push(r)})),a.getMovie().chosenRatings=n,j().reviewSequence.length>0)return a.props.history.replace("/review/".concat(j().reviewSequence.shift())),a.setState({selected:{}});a.props.history.replace("/askemail")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.getMovie();return l.a.createElement("div",{className:"text-center"},l.a.createElement(y.a,null,l.a.createElement("h6",null,"For the movies that you rated so far using 6 different scales, all the 6 numeric values of your ratings will appear for each movie. please select all the boxes which have the value you think is best suited for the movie:"),l.a.createElement("img",{src:t.img,alt:"Poster",height:"400",width:"240"}),l.a.createElement("h6",null,t.name),D.allRatingStyles.map((function(a,n){return l.a.createElement("div",{key:n},l.a.createElement(T.a,{className:"justify-content-md-center"},l.a.createElement(F.a,{xs:!0,lg:"1"},l.a.createElement("input",{type:"checkbox",name:t[a],checked:e.getSelected().indexOf(t[a])>-1,onChange:e.handleChange})),l.a.createElement(F.a,{xs:!0,lg:"1"},l.a.createElement("h5",null,t[a]))),l.a.createElement("br",null))})),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNext},"Next")))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={choice:null},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,parseInt(r)))},a.handleNext=function(){j().reviewOverall=a.state.choice,j().reviewSequence=x(j().selectedMovies.length),a.props.history.replace("/review/".concat(j().reviewSequence.shift()))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement("h6",null,"Your ratings will be considered very helpful into the final ratings provided by the studio, would you like to re-rate it again ? If so, which one of the rating scales would you use?"),D.allRatingStyles.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement(T.a,{className:"justify-content-md-center"},l.a.createElement(F.a,{xs:!0,lg:"1"},l.a.createElement("input",{type:"radio",name:"choice",value:a,checked:e.state.choice===a,onChange:e.handleChange})),l.a.createElement(F.a,{xs:!0,lg:"2"},l.a.createElement(R.a,{style:{width:"100%"},readonly:!0,stop:5,initialRating:5,fullSymbol:D[t].full}))),l.a.createElement("br",null))})),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNext},"Submit")))}}]),t}(l.a.Component),z=a(23),H=a.n(z),K=a(110),L=a(109),U=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=void 0!==this.props.loading&&null!==this.props.loading,t="Loading";return"string"===typeof this.props.loading&&this.props.loading.trim().length>0&&(t=this.props.loading),l.a.createElement("div",null,e?l.a.createElement(K.a,{show:e,centered:!0},l.a.createElement(K.a.Body,null,l.a.createElement("div",{className:"text-center"},l.a.createElement(L.a,{animation:"border",variant:"primary"}),"\xa0 ",t))):l.a.createElement("div",null,this.props.children))}}]),t}(r.Component),V=a(65),Z=a.n(V),G=function(){return H.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.awrap(Z.a.post("".concat("https://movie-survey.herokuapp.com/","/submit"),j()));case 2:case"end":return e.stop()}}))},X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleNext=function(){a.props.history.replace("/email")},a.handlExit=function(){return H.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Submitting ..."}),e.next=4,H.a.awrap(G());case 4:a.props.history.replace("/end"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0.message);case 10:return e.prev=10,a.componentUnmounted||a.setState({loading:void 0}),e.finish(10);case 13:case"end":return e.stop()}}),null,null,[[0,7,10,13]])},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return l.a.createElement(U,{loading:this.state.loading},l.a.createElement(y.a,null,l.a.createElement("h6",null," In appreciation of your participation, we would like to offer you the opportunity to enter in a raffle to win $50 gift vouchers. You need to provide your email id if you  want to enter in the raffle draw. If you do not wish to participate in the raffle, you may skip this step and exit the survey."),l.a.createElement("h6",null,"Do you wish to participate in the survey?"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(b.a,{style:{float:"left"},onClick:this.handleNext},"Yes and go to next page"),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handlExit},"No and EXIT")))}}]),t}(l.a.Component),Y=a(113),Q=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.a,null,l.a.createElement(F.a,{xs:"3"},w(this.props.name)),l.a.createElement(F.a,null,l.a.createElement(Y.a,{placeholder:this.props.placeholder?this.props.placeholder:"",type:this.props.type?this.props.type:"text",name:this.props.name,onChange:this.props.onChange}))),l.a.createElement("br",null))}}]),t}(r.Component),$=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={email:null},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(){return H.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Submitting ..."}),j().email=a.state.email,e.next=5,H.a.awrap(G());case 5:a.props.history.replace("/end"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:return e.prev=11,a.componentUnmounted||a.setState({loading:void 0}),e.finish(11);case 14:case"end":return e.stop()}}),null,null,[[0,8,11,14]])},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement("h6",null," Please provide your email id to participate in the raffle draw selection: "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(Q,{name:"email",onChange:this.handleChange}),l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleSubmit},"Submit")))}}]),t}(l.a.Component),ee=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).parse=function(){return{m:parseInt(a.props.match.params.movieid),r:a.props.match.params.ratingstyle}},a.handleChange=function(e){var t=a.parse(),n=t.m,r=t.r;j().selectedMovies[n][r]=e},a.handleNav=function(){var e=a.parse(),t=e.m,n=e.r;if("number"!==typeof j().selectedMovies[t][n])return alert("Please rate the movie");if(j().navSequence.length>0){var r=j().navSequence.pop(),l=r.movieid,o=r.ratingstyle;return a.props.history.replace("/rate/".concat(l,"/").concat(o))}return a.props.history.replace("/reviewoverall")},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.parse(),t=e.m,a=e.r,n=j().selectedMovies[t],r=n.name,o=n.img,i=j().selectedMovies[t][a];return l.a.createElement("div",{className:"text-center"},l.a.createElement(y.a,null,l.a.createElement("h6",null,"Please rate the movie:"),l.a.createElement("img",{src:o,alt:"Poster",height:"400",width:"240"}),l.a.createElement("h6",null,r),l.a.createElement(R.a,{stop:5,emptySymbol:D[a].empty,fullSymbol:D[a].full,onChange:this.handleChange,initialRating:i}),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(b.a,{style:{float:"right"},onClick:this.handleNav},"Next"))))}}]),t}(l.a.Component),te=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y.a,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Does the presence/ absence of colour have any effect regardless of the icons used in the rating scale?"),l.a.createElement("li",null,"Does the presence/ absence of colour  have any effect on user rating behavior when different (expressive vs non expressive ) icons are used in the rating scale?"),l.a.createElement("li",null,"In terms of colorful rating scale, is there any distinction in the rating behaviour of users between gradient vs discrete rating scale?"),l.a.createElement("li",null,"Does the level of emotional stability have any tangible influence on rating behaviour of users in interpreting the features of rating scales?"),l.a.createElement("li",null,"Does informing the users about the importance of their rating have any effect on the rating behaviour?"),l.a.createElement("li",null,"If the users choose to reconsider their primary ratings, which medium of rating would they choose?"))))}}]),t}(l.a.Component),ae=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vertical-center"},l.a.createElement(y.a,null,l.a.createElement("h3",null,"Error :(")))}}]),t}(l.a.Component),ne=a(21),re=Object(ne.b)().moreThan(-1).required().integer(),le=Object(ne.d)().required(),oe=function(e){return Object(ne.c)().shape(e)},ie=oe({talkative:re,faultWithOthers:re,thoroughJob:re,depressed:re}),ce=Object(ne.a)().of(oe({name:le,img:le})).min(0),se=Object(ne.a)().of(oe({movieid:re,ratingstyle:le})).min(0),me=Object(ne.a)().of(re).min(0),ue=Object(ne.a)().of(oe({name:le,img:le,commonRate:re,"color-circle":re,"color-star":re,"color-emoji":re,circle:re,emoji:re})).min(0),he=Object(ne.a)().of(oe({name:le,img:le,commonRate:re,"color-circle":re,"color-star":re,"color-emoji":re,circle:re,emoji:re,chosenRatings:Object(ne.a)().of(re).min(1)})).min(0),fe=re,pe=oe({personality:ie}),de=oe({personality:ie,selectedMovies:ce,navSequence:se}),ge=de,ve=oe({personality:ie,selectedMovies:ue}),ye=oe({personality:ie,selectedMovies:ue,reviewOverall:fe,reviewSequence:me}),be=oe({personality:ie,selectedMovies:he,reviewOverall:fe}),we={"/select":pe,"/common":de,"/rate/:movieid/:ratingstyle":ge,"/reviewoverall":ve,"/review/:movieid":ye,"/askemail":be,"/email":be,"/end":be};function Ee(e){var t=e.component,a=Object(f.a)(e,["component"]);return l.a.createElement(p.b,Object.assign({},a,{render:function(e){var a,n=we[e.match.path];if(!n)return l.a.createElement(p.a,{to:{pathname:"/error",state:{from:e.location}}});try{n.validateSync(j()),a=l.a.createElement(t,e)}catch(r){alert(r),a=l.a.createElement(p.a,{to:{pathname:"/",state:{from:e.location}}})}return a}}))}var xe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(g.Beforeunload,{onBeforeunload:function(){return"Survey data can be loss, are you sure?"}},l.a.createElement(d.a,null,l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:"/",component:C}),l.a.createElement(p.b,{exact:!0,path:"/error",component:ae}),l.a.createElement(Ee,{exact:!0,path:"/select",component:P}),l.a.createElement(Ee,{exact:!0,path:"/common",component:W}),l.a.createElement(Ee,{exact:!0,path:"/reviewoverall",component:_}),l.a.createElement(Ee,{exact:!0,path:"/askemail",component:X}),l.a.createElement(Ee,{exact:!0,path:"/email",component:$}),l.a.createElement(Ee,{exact:!0,path:"/end",component:te}),l.a.createElement(Ee,{exact:!0,path:"/rate/:movieid/:ratingstyle",component:ee}),l.a.createElement(Ee,{exact:!0,path:"/review/:movieid",component:J}))))}}]),t}(l.a.Component);a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(xe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},14:function(e){e.exports=JSON.parse('{"allRatingStyles":["commonRate","color-circle","color-star","color-emoji","circle","emoji"],"ratingStyles":["color-circle","color-star","color-emoji","circle","emoji"],"commonRate":{"empty":["fa fa-star-o fa-2x survey-yellow","fa fa-star-o fa-2x survey-yellow","fa fa-star-o fa-2x survey-yellow","fa fa-star-o fa-2x survey-yellow","fa fa-star-o fa-2x survey-yellow"],"full":["fa fa-star fa-2x survey-yellow","fa fa-star fa-2x survey-yellow","fa fa-star fa-2x survey-yellow","fa fa-star fa-2x survey-yellow","fa fa-star fa-2x survey-yellow"]},"color-circle":{"empty":["far fa-circle fa-2x survey-darkred","far fa-circle fa-2x survey-red","far fa-circle fa-2x survey-orange","far fa-circle fa-2x survey-green","far fa-circle fa-2x survey-darkgreen"],"full":["fas fa-circle fa-2x survey-darkred","fas fa-circle fa-2x survey-red","fas fa-circle fa-2x survey-orange","fas fa-circle fa-2x survey-green","fas fa-circle fa-2x survey-darkgreen"]},"color-star":{"empty":["fa fa-star-o fa-2x survey-darkred","fa fa-star-o fa-2x survey-red","fa fa-star-o fa-2x survey-orange","fa fa-star-o fa-2x survey-green","fa fa-star-o fa-2x survey-darkgreen"],"full":["fa fa-star fa-2x survey-darkred","fa fa-star fa-2x survey-red","fa fa-star fa-2x survey-orange","fa fa-star fa-2x survey-green","fa fa-star fa-2x survey-darkgreen"]},"color-emoji":{"empty":["far fa-frown-open fa-2x survey-darkred","far fa-frown fa-2x survey-red","far fa-meh fa-2x survey-orange","far fa-smile fa-2x survey-green","far fa-grin fa-2x survey-darkgreen"],"full":["fas fa-frown-open fa-2x survey-darkred","fas fa-frown fa-2x survey-red","fas fa-meh fa-2x survey-orange","fas fa-smile fa-2x survey-green","fas fa-grin fa-2x survey-darkgreen"]},"circle":{"empty":["far fa-circle fa-2x","far fa-circle fa-2x","far fa-circle fa-2x","far fa-circle fa-2x","far fa-circle fa-2x"],"full":["fas fa-circle fa-2x","fas fa-circle fa-2x","fas fa-circle fa-2x","fas fa-circle fa-2x","fas fa-circle fa-2x"]},"emoji":{"empty":["far fa-angry fa-2x survey-blue","far fa-frown fa-2x survey-blue","far fa-meh fa-2x survey-blue","far fa-smile fa-2x survey-blue","far fa-grin fa-2x survey-blue"],"full":["fas fa-angry fa-2x survey-blue","fas fa-frown fa-2x survey-blue","fas fa-meh fa-2x survey-blue","fas fa-smile fa-2x survey-blue","fas fa-grin fa-2x survey-blue"]}}')},40:function(e,t,a){},43:function(e){e.exports=JSON.parse('[{"name":"Avengers: Endgame (2019)","img":"https://images.hdqwalls.com/download/2019-avengers-endgame-cm-240x400.jpg"},{"name":"Joker (2019)","img":"https://wallpapercan.com/download/240x400/299c8eac/joker-2019-movie.jpg"},{"name":"It(2017)","img":"https://images.hdqwalls.com/download/pennywise-the-clown-it-2017-movie-4k-hp-240x400.jpg"},{"name":"Frozen (2013)","img":"https://i.pinimg.com/originals/0e/b0/6b/0eb06bbdc1b0f11a32bba45684ca7043.jpg"},{"name":"Avengers: Infinity War(2018)","img":"https://images.hdqwalls.com/download/avengers-infinity-war-2018-4k-poster-06-240x400.jpg"},{"name":"Black Panther (2018)","img":"https://wallpapersmug.com/download/240x400/2d71ba/black-panther-2018-movie-4k.jpg"},{"name":"Bumblebee(2018)","img":"https://images.hdqwalls.com/download/bumblebee-movie-poster-wf-240x400.jpg"},{"name":"Crazy Rich Asians(2018)","img":"https://www.videolesxi.gr/thumbs/16370.jpg"},{"name":"Beauty and the Beast (2017)","img":"https://images.hdqwalls.com/download/beauty-and-the-beast-4k-qu-240x400.jpg"},{"name":"Aquaman (2018)","img":"https://wallpapercan.com/download/240x400/7d8160cd/movie-aquaman-jason-momoa-sharks.jpg"},{"name":"Guardians of Galaxy Franchise","img":"https://wallpapersmug.com/download/240x400/e9c066/guardians-of-the-galaxy-4k-art.jpg"},{"name":"Wonder Woman","img":"https://lh3.googleusercontent.com/proxy/MILjLrWWuNXtXzNQy4AHhjHIA8Cq-fOdrpnXceYgFegVCqF-YQtNvc3Jj3EC-8X6RLgKG4uin6KjdadbAnluJb3hHZtlGm4JNZmsEPA0C_H7FFVWNFX-KSDa"},{"name":"Despicable Me series","img":"https://images.hdqwalls.com/download/despicable-me-3-2017-4k-9y-240x400.jpg"},{"name":"Fast and Furious franchise","img":"https://phoneky.co.uk/thumbs/wallpapers/p2/movies/15/78c4b38012655022.jpg"},{"name":"Captain America: Civil War(2016)","img":"https://lh5.googleusercontent.com/proxy/tgkgFzALIKWvB7KLcsfVMIuddUxTT36d4EY_wiqE_XkpWufxuV22efbbqax8p6964MwtBNDslGRvYjbbzvhSDTenmoSZCID5NaImMbKnHLQ8cBk3O6NuR7erUiALTsQuR5J0Qnp1IA"},{"name":"Suicide Squad(2016)","img":"https://images.wallpapersden.com/image/download/the-suicide-squad-art_66841_240x400.jpg"},{"name":"Deadpool(2016)","img":"https://www.dvd-trailers.gr/dvd/deadpool_2016.jpg"},{"name":"Zootopia(2016)","img":"https://www.dvd-trailers.gr/dvd/zooupoli_2016.jpg"},{"name":"The Martian(2015)","img":"https://www.dvd-trailers.gr/dvd/i_diasosi_2015.jpg"},{"name":"Skyfall(2012)","img":"https://www.picclickimg.com/d/l400/pict/293265867570_/James-Bond-007-Skyfall-One-Sheet-Poster-Signed.jpg"},{"name":"Jurassic World (2015)","img":"https://www.dvd-trailers.gr/dvd/jurassic_world_2015.jpg"},{"name":"Interstellar(2014)","img":"https://lh5.googleusercontent.com/proxy/ymAx7dezcB0L4qyqlLPInx_F_SSk_ed6M3dTzltFWgczv3rWOzHxn72tJ6Ft2vqL0c6HT08KlgOKPDbZKQL2aEbXCEXnLMwb8Kq1kekk8G8z83xpEv2_UdHvDuvrtA"},{"name":"How to Train your Dragon 2 (2014)","img":"https://lh3.googleusercontent.com/proxy/L2WDvBAWLmcKNeswFxzafSOsAhKeuVBPG_T8uFT9Z1iAbwyPzj6y8WTERHtLa4P0UxvCFNwLWftu246nMZOimfo7e8iVy52gmOXNSblMV6qPd4jwKu-ArooXh3KHKZnnCvLEPF6288pNBAlV_Gz76os"},{"name":"The Amazing spider-man (2014)","img":"https://downloadwap.com/thumbs2/wallpapers/p2/15/movies/xpwz4i64.jpg"},{"name":"World War Z (2013)","img":"https://www.videolesxi.gr/thumbs/8603.jpg"},{"name":"Gravity (2013)","img":"https://www.dvd-trailers.gr/posters/gravity_2013.jpg"},{"name":"The Hobbit: An Unexpected Journey(2012)","img":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/6062/9780606262408.jpg"},{"name":"Harry Potter and the Deathly Hallows Part 2.","img":"https://www.picclickimg.com/d/l400/pict/382985349328_/2-Harry-Potter-40x27-D-S-Movie-Posters-Deathly.jpg"},{"name":"Clash of The Titans(2010)","img":"https://1.bp.blogspot.com/_Z3BUX71Sca8/S7avZb1rQLI/AAAAAAAAJv4/ap3fGeACzYw/s400/clashofthetitans-11.jpg"},{"name":"The Twilight Saga: Breaking Dawn part 1","img":"https://a-static.besthdwallpaper.com/the-twilight-saga-breaking-dawn-wallpaper-240x400-12673_194.jpg"},{"name":"Avatar (2009)","img":"https://www.dvd-trailers.gr/dvd/avatar_2009.jpg"},{"name":"Step Up","img":"https://www.picclickimg.com/d/l400/pict/123794510010_/Step-Up-Step-Up-2-The-Streets-DVD-2008.jpg"},{"name":"300 (2007)","img":"https://i.pinimg.com/originals/bf/77/da/bf77da17fdeaedbbdafaa2fc60099308.jpg"},{"name":"The Da Vinci Code(2006)","img":"https://www.picclickimg.com/d/l400/pict/283560801521_/The-Da-Vinci-Code-%E2%80%93-Sakrileg-very-rare.jpg"},{"name":"King Kong (2005)","img":"https://www.videolesxi.gr/thumbs/720.jpg"},{"name":"The Chronicles of Narnia","img":"https://lh6.googleusercontent.com/proxy/RV7c1yZgGoJVVVvRRzrdORxVfhBz-iKj6b-sTmmHXxmBFiGpvqTEkBpUDii7wwwljmUJdDd-7dHGLIJuwE257Pk7gJlywMcKhhZCD7qCisVHEasF0XRzWdPJuDlQ-4lurWBFki01HexLirHWZPrbTNRoAw"},{"name":"Van Helsing","img":"https://prodigits.co.uk/thumbs/wallpapers/p2/fcelebs/15/9ab51d9c12256001.jpg"},{"name":"Finding Nemo(2003)","img":"https://i.pinimg.com/originals/71/b2/37/71b2379b1010282d283c21f1079016fb.jpg"},{"name":"The Matrix Franchise","img":"https://images.hdqwalls.com/download/matrix-trilogy-5k-95-240x400.jpg"},{"name":"The Conjuring (2013)","img":"https://lh4.googleusercontent.com/proxy/pYLhDuBn2f0AOMUMvMctfSXHmwkyKKhGZ0I1tekucoDRE4D0xR8S69P1s8DYI4dBNIhFCzeaZEOGOeVYElI7U_UAFmwkUwcYVSpjNknbDBbzNJ9KQlJzlMAb997fkuPff-3qcA"}]')},74:function(e,t,a){e.exports=a(103)}},[[74,1,2]]]);
//# sourceMappingURL=main.361f1d6d.chunk.js.map