(window.webpackJsonplike=window.webpackJsonplike||[]).push([[0],{14:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),r=i(3),o=i.n(r),l=i(4),c=i(5),a=i(7),k=i(6),u=i(8),d=i(1),m=i.n(d),f=function(e){function t(){var e,i;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(i=Object(a.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(s)))).state={isLikePressed:!1,likeCounter:100,isDislikePressed:!1,dislikeCounter:25},i.onLikeButtonClick=function(){i.isDislikePressed()&&(i.decrementDislike(),i.toggleDislike()),i.isLikePressed()?i.decrementLike():i.incrementLike(),i.toggleLike()},i.isLikePressed=function(){return i.state.isLikePressed},i.decrementLike=function(){i.setState((function(e,t){return{likeCounter:e.likeCounter-1}}))},i.incrementLike=function(){i.setState((function(e,t){return{likeCounter:e.likeCounter+1}}))},i.toggleLike=function(){i.setState((function(e,t){return{isLikePressed:!e.isLikePressed}}))},i.onDislikeButtonClick=function(){i.isLikePressed()&&(i.decrementLike(),i.toggleLike()),i.isDislikePressed()?i.decrementDislike():i.incrementDislike(),i.toggleDislike()},i.isDislikePressed=function(){return i.state.isDislikePressed},i.decrementDislike=function(){i.setState((function(e,t){return{dislikeCounter:e.dislikeCounter-1}}))},i.incrementDislike=function(){i.setState((function(e,t){return{dislikeCounter:e.dislikeCounter+1}}))},i.toggleDislike=function(){i.setState((function(e,t){return{isDislikePressed:!e.isDislikePressed}}))},i}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("h2",null,"Like/Dislike"),s.a.createElement(g,{name:"Like",isPressed:this.state.isLikePressed,counter:this.state.likeCounter,clicked:this.onLikeButtonClick}),s.a.createElement(D,{name:"Dislike",isPressed:this.state.isDislikePressed,counter:this.state.dislikeCounter,clicked:this.onDislikeButtonClick})),s.a.createElement("style",null,"\n              .like-button, .dislike-button {\n                  font-size: 1rem;\n                  padding: 5px 10px;\n                  color:   #585858;\n              }\n\n              .liked, .disliked {\n                  font-weight: bold;\n                  color: #1565c0;\n              }\n          "))}}]),t}(n.Component),g=function(e){var t=m()({"like-button":!0,liked:e.isPressed});return s.a.createElement("button",{className:t,onClick:e.clicked},e.name," | ",s.a.createElement("span",{className:"likes-counter"},e.counter))},D=function(e){var t=m()({"dislike-button":!0,disliked:e.isPressed});return s.a.createElement("button",{className:t,onClick:e.clicked},e.name," | ",s.a.createElement("span",{className:"dislikes-counter"},e.counter))},L=f;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,i){e.exports=i(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.3de05929.chunk.js.map