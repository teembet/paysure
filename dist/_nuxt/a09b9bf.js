(window.webpackJsonp=window.webpackJsonp||[]).push([[32,6],{497:function(t,e,r){"use strict";r.r(e);var o=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-class"},[e("img",{staticClass:"loader-img",attrs:{src:r(508),alt:""}})])}],n=(r(512),r(63)),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,"b80311a8",null);e.default=component.exports},500:function(t,e,r){t.exports=r.p+"img/paysure_White.3284e91.png"},502:function(t,e,r){var content=r(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("245de3fe",content,!0,{sourceMap:!1})},503:function(t,e,r){"use strict";r(12);var o=r(77),n=r.n(o);e.a=function(){var t="http://52.149.222.131:5009/api/v1/",e={};localStorage.token&&(e.Authorization="Bearer ".concat(localStorage.token));var r=n.a.create({baseURL:t,headers:e});return r.interceptors.response.use((function(t){return new Promise((function(e,r){e(t)}))}),(function(t){if(!t.response)return new Promise((function(e,r){r(t)}));t.response.status,localStorage.removeItem("token"),localStorage.removeItem("user"),window.location="/login",console.log(t)})),r}},508:function(t,e,r){t.exports=r.p+"img/loaderr.23e6408.gif"},512:function(t,e,r){"use strict";r(502)},513:function(t,e,r){var o=r(55)(!1);o.push([t.i,".loader-class[data-v-b80311a8]{display:flex;background:hsla(0,0%,100%,.925);position:absolute;align-items:center;justify-content:center;width:100%;height:100%;left:0;top:0;z-index:999999}.loader-img[data-v-b80311a8]{width:150px}",""]),t.exports=o},521:function(t,e,r){t.exports=r.p+"img/caro1.2feb93e.png"},536:function(t,e,r){t.exports=r.p+"img/1stpic.992b735.png"},537:function(t,e,r){t.exports=r.p+"img/2ndpic.0d180e9.png"},538:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMTE5IiBoZWlnaHQ9IjEwODAiIHZpZXdCb3g9IjAgMCAxMTE5IDEwODAiPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiM1MzIzZDc7b3BhY2l0eTowLjE5O308L3N0eWxlPjwvZGVmcz48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjExMTkiIGhlaWdodD0iMTA4MCIvPjwvc3ZnPg=="},599:function(t,e,r){var content=r(652);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(56).default)("79368dde",content,!0,{sourceMap:!1})},651:function(t,e,r){"use strict";r(599)},652:function(t,e,r){var o=r(55),n=r(97),l=r(538),c=o(!1),d=n(l);c.push([t.i,".login-block[data-v-f5b959b8]{height:auto;position:fixed;left:0;right:0;top:0;bottom:0;max-width:100%;background:var(--body-color)}.title[data-v-f5b959b8]{color:var(--primary-color)}.title-2[data-v-f5b959b8]{font-size:var(--smaller-font-size);color:var(--text-color)}.carousel-inner[data-v-f5b959b8],.carousel-inner img[data-v-f5b959b8],.carousel-item[data-v-f5b959b8]{height:100%;width:auto}.carousel-item[data-v-f5b959b8]{text-align:center}.carousel[data-v-f5b959b8]{height:720px}.carousel-inner img[data-v-f5b959b8]{width:100%;height:auto}.resize[data-v-f5b959b8]{padding:3rem}.carousel-indicators[data-v-f5b959b8]{position:absolute;right:0;left:0;bottom:50px;z-index:15;margin-right:auto;margin-left:auto;list-style:none}.pull-right[data-v-f5b959b8]{display:flex;justify-content:space-between}.formlabel[data-v-f5b959b8]{font-weight:var(--font-semi-bold);font-size:var(--smaller-font-size)}@media screen and (max-width:992px){.login-block[data-v-f5b959b8]{overflow:auto}.carousel-indicators[data-v-f5b959b8]{bottom:0}.carousel[data-v-f5b959b8]{display:none}}.btn-login[data-v-f5b959b8]{padding:10px;background-color:var(--primary-color);color:var(--white-color);border-radius:4px;width:400px;height:52px;cursor:pointer;transition:box-shadow 1s}.banner-sec[data-v-f5b959b8]{display:flex;align-items:center}.img-abs[data-v-f5b959b8]{position:absolute;max-width:100%!important;z-index:2;height:30px!important;margin:20px;top:0}.carousel-indicators li[data-v-f5b959b8]{width:30px!important;height:10px!important;border-radius:50%!important}.carousel-indicators[data-v-f5b959b8]{width:40px!important;height:15px;border-radius:50%!important}.carousel-inner[data-v-f5b959b8]{background-image:url("+d+")}",""]),t.exports=c},676:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(37),r(497)),l=r(503),c={name:"signUp",components:{Loader:n.default},data:function(){return{loader:!1,username:"",password:"",transactionPin:"",phoneNumber:"",emailAddress:"",bvn:"",state:"",addressLine1:"",lga:"",city:""}},methods:{sendRequest:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var form,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={username:t.username,password:t.password,transactionPin:t.transactionPin,phoneNumber:t.phoneNumber,emailAddress:t.emailAddress,bvn:t.bvn,state:t.state,addressLine1:t.addressLine1,lga:t.lga,city:t.city},console.log(t.username),t.loader=!0,e.prev=3,e.next=6,Object(l.a)().post("http://52.149.222.131:5009/api/v1/users/register/user",form);case 6:0===(r=e.sent).data.responseCode?(t.loader=!1,t.$toast.open({message:"Registration Successful",type:"success",duration:7e3,dismissible:!0,position:"top-right"})):(t.loader=!1,t.$toast.open({message:r.data.data.responseMessage,type:"error",duration:7e3,dismissible:!0,position:"top-right"})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),t.loader=!1,t.$toast.open({message:user.data.data.responseMessage,type:"error",duration:7e3,dismissible:!0,position:"top-right"});case 14:case"end":return e.stop()}}),e,null,[[3,10]])})))()}}},d=(r(651),r(63)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Loader",{directives:[{name:"show",rawName:"v-show",value:t.loader,expression:"loader"}]}),t._v(" "),o("div",{staticClass:"login-block"},[o("div",{staticClass:"row"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"img-abs",attrs:{src:r(500)}})]),t._v(" "),o("div",{staticClass:"carousel slide col-lg-6",attrs:{id:"carouselExampleIndicators","data-ride":"carousel"}},[o("no-ssr",[o("carousel",{attrs:{autoplay:!0,nav:!0,items:1}},[o("img",{attrs:{src:r(521)}}),t._v(" "),o("img",{attrs:{src:r(536)}}),t._v(" "),o("img",{attrs:{src:r(537)}})])],1)],1),t._v(" "),o("div",{staticClass:"col-lg-6",staticStyle:{overflow:"scroll"}},[o("div",{staticClass:"container resize"},[o("form",{on:{submit:function(e){return e.preventDefault(),t.sendRequest(e)}}},[o("h1",{staticClass:"title",staticStyle:{"font-size":"35px"}},[t._v("Get Started!")]),t._v(" "),o("h4",{staticClass:"title-2"},[t._v("\n              Let's get you started creating a new account\n            ")]),t._v(" "),o("div",{staticClass:"form-row "},[o("div",{staticClass:"col mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Username")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("BVN")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.bvn,expression:"bvn"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.bvn},on:{input:function(e){e.target.composing||(t.bvn=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row "},[o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Phone No")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Email")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.emailAddress,expression:"emailAddress"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.emailAddress},on:{input:function(e){e.target.composing||(t.emailAddress=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row "},[o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Password")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Transaction Pin")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.transactionPin,expression:"transactionPin"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.transactionPin},on:{input:function(e){e.target.composing||(t.transactionPin=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row "},[o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("State")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.state},on:{input:function(e){e.target.composing||(t.state=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("LGA")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.lga,expression:"lga"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.lga},on:{input:function(e){e.target.composing||(t.lga=e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"form-row "},[o("div",{staticClass:"col-lg-6"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("City")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"col-lg-6 mt-1"},[o("label",{staticClass:"formlabel",attrs:{for:"formGroupExampleInput"}},[t._v("Address")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.addressLine1,expression:"addressLine1"}],staticClass:"form-control",attrs:{type:"text",id:"formGroupExampleInput",placeholder:"",required:""},domProps:{value:t.addressLine1},on:{input:function(e){e.target.composing||(t.addressLine1=e.target.value)}}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"center"},[o("p",{staticClass:"title-2 "},[t._v("\n                Dont Have An Account?\n                "),o("router-link",{staticClass:"title-2",staticStyle:{color:"var(--primary-color)"},attrs:{to:"/login"}},[t._v("Sign In")])],1)])])])])],1)])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"}}),t._v(" "),r("label",{staticClass:"form-check-label title-2",attrs:{for:"gridCheck"}},[t._v("\n                  Yes, I want to receive paysure's newsletter\n                ")])]),t._v(" "),r("div",{staticClass:"form-check"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"gridCheck"}}),t._v(" "),r("label",{staticClass:"form-check-label title-2",attrs:{for:"gridCheck"}},[t._v("\n                  I agree to all Paysure's\n                  "),r("span",{staticStyle:{color:"var(--primary-color)"}},[t._v("Terms & Conditions")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center mt-3"},[r("button",{staticClass:"btn-login",attrs:{tag:"button",type:"submit"}},[t._v("\n                Create Account\n              ")])])}],!1,null,"f5b959b8",null);e.default=component.exports;installComponents(component,{Loader:r(497).default})}}]);