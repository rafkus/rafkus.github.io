(window["webpackJsonpreact-dishes-form"]=window["webpackJsonpreact-dishes-form"]||[]).push([[0],{131:function(e,t,n){e.exports=n(255)},254:function(e,t,n){},255:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(117),i=n(28),u=n(119),s=n.n(u),m=n(121),p=n(292),d=n(291),f=n(295),b=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=2?t:t.length<=4?"".concat(t.slice(0,2)).concat(":").concat(t.slice(2)):"".concat(t.slice(0,2)).concat(":").concat(t.slice(2,4)).concat(":").concat(t.slice(4,6))},E=n(287),h=function(e){var t=e.label,n=e.input,a=e.type,l=e.meta,o=l.touched,c=l.invalid,i=l.error,u=e.inputProps;return r.a.createElement("div",{className:"form__field"},r.a.createElement(E.a,Object.assign({type:a,label:t,placeholder:t,error:o&&c,helperText:o&&i},n,{inputProps:u,fullWidth:!0})))},y=n(260),w=n(261),v=n(258),O=n(259),g=function(e){var t=e.input,n=e.label,a=e.meta,l=a.touched,o=a.error,c=e.children,i=e.inputProps;return r.a.createElement("div",{className:"form__field"},r.a.createElement(v.a,{fullWidth:!0,error:!(!l||!o)},r.a.createElement(w.a,{htmlFor:i.id},n),r.a.createElement(y.a,Object.assign({native:!0},t,{inputProps:i}),c),r.a.createElement(O.a,null,l&&o?o:null)))},_=n(293),P=n(290),j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{name:"no_of_slices",type:"number",component:h,label:"Number of slices",parse:function(e){return""===e?"":parseInt(e,10)}}),r.a.createElement(p.a,{name:"diameter",type:"number",component:h,label:"Diameter",parse:function(e){return""===e?"":parseFloat(e,10)}}))},S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{name:"spiciness_scale",type:"number",component:h,label:"Spiciness scale (1-10)",parse:function(e){return""===e?"":parseInt(e,10)},inputProps:{min:1,max:10}}))},D=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{name:"slices_of_bread",type:"number",component:h,label:"Slices of bread",parse:function(e){return""===e?"":parseInt(e,10)}}))};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k=function(e){return s.a.post("https://frosty-wood-6558.getsandbox.com:443/dishes",e).then((function(e){console.log(e)})).catch((function(e){throw new m.a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.response.data,{_error:"Please fill out the form correctly"}))}))},T=function(e){var t=e.error,n=e.handleSubmit,a=e.pristine,l=e.reset,o=e.submitting,c=null;switch(e.dishType){case"pizza":c=r.a.createElement(j,null);break;case"soup":c=r.a.createElement(S,null);break;case"sandwich":c=r.a.createElement(D,null);break;default:c=null}return r.a.createElement("form",{onSubmit:n(k)},r.a.createElement(p.a,{name:"name",component:h,label:"Name"}),r.a.createElement(p.a,{name:"preparation_time",component:h,label:"Preparation time",normalize:b}),r.a.createElement(p.a,{name:"type",component:g,label:"Dish type",inputProps:{id:"dish-type",name:"type"}},r.a.createElement("option",null),r.a.createElement("option",{value:"pizza"},"Pizza"),r.a.createElement("option",{value:"soup"},"Soup"),r.a.createElement("option",{value:"sandwich"},"Sandwich")),c,t&&r.a.createElement(P.a,{variant:"body1",gutterBottom:!0},t),r.a.createElement("div",{style:{marginTop:"2rem"}},r.a.createElement(_.a,{type:"submit",variant:"contained",color:"primary",disabled:o},"Submit"),r.a.createElement(_.a,{variant:"contained",disabled:a||o,onClick:l},"Clear values")))};T=Object(d.a)({form:"dish"})(T);var z=Object(f.a)("dish"),I=T=Object(i.b)((function(e){return{dishType:z(e,"type")}}))(T);n(254);var x=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Notes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Succesfull submit will be displayed in console."),r.a.createElement("li",null,"Couldn't figure out yet how to connect MD Slider with redux-form."),r.a.createElement("li",null,"Preparation time is not very user friendly while editing."),r.a.createElement("li",null,"There could be redundant data in submitted JSON. ")),r.a.createElement("p",null,"Read more at github: ",r.a.createElement("a",{href:"https://github.com/rafkus/react-dishes-form"},"source")))},F=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(x,null),r.a.createElement("h1",null,"Dish form"),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=n(12),X=n(294),B=Object(W.b)({form:X.a}),C=Object(W.c)(B,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(r.a.createElement(i.a,{store:C},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[131,1,2]]]);
//# sourceMappingURL=main.09d8917d.chunk.js.map