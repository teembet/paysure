(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3,9,12],{504:function(t,e,n){"use strict";n.r(e);var r={name:"Nav",data:function(){return{menuColor:!1,scrollY:0}},methods:{showMenu:function(){var t=document.getElementById("nav-toggle"),nav=document.getElementById("nav-menu");t&&nav&&nav.classList.toggle("show-menu")},linkAction:function(){document.getElementById("nav-menu").classList.remove("show-menu")},scrollHeader:function(){var nav=document.getElementById("header");this.scrollY>=70?nav.classList.add("scroll-header"):nav.classList.remove("scroll-header")},changeTheme:function(){var t="dark-theme",e=document.getElementById("checkbox").checked;e?document.body.classList.add(t):e||document.body.classList.remove(t),localStorage.setItem("selected-theme",document.body.classList.contains(t)?"dark":"light")},checkTheme:function(){var t="dark-theme",e=localStorage.getItem("selected-theme");"dark"==e?(document.body.classList.add(t),document.getElementById("checkbox").checked=!0):"light"==e&&(document.body.classList.remove(t),document.getElementById("checkbox").checked=!1)}},mounted:function(){this.checkTheme()},created:function(){},destroyed:function(){}},o=(n(514),n(63)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header l-header header-color header-box-shadow-on-scroll header-abs-top  header-show-hide",attrs:{id:"header"}},[r("div",{staticClass:"header-section header-color"},[r("div",{staticClass:"container",attrs:{id:"logoAndNav"}},[r("nav",{staticClass:"js-mega-menu navbar navbar-light navbar-expand-lg"},[r("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/","aria-label":"Front"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(506)}})]),t._v(" "),r("button",{staticClass:"navbar-toggler btn btn-icon btn-sm rounded-circle",attrs:{type:"button","aria-label":"Toggle navigation","aria-expanded":"false","aria-controls":"navBar","data-toggle":"collapse","data-target":"#navBar"}},[r("span",{staticClass:"navbar-toggler-default"},[r("svg",{attrs:{width:"18",height:"16",viewBox:"0 0 18 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z",fill:"#041644"}})])]),t._v(" "),r("span",{staticClass:"navbar-toggler-toggled"},[r("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{fill:"currentColor",d:"M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"}})])])]),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navBar"}},[r("div",{staticClass:"navbar-body header-abs-top-inner"},[r("ul",{staticClass:"navbar-nav"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div"),t._v(" "),r("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[r("nuxt-link",{staticClass:"hs-mega-menu-invoker nav-link",attrs:{id:"homeMegaMenu",to:"/login"}},[t._v("\n                  Login\n                ")])],1),t._v(" "),r("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[r("nuxt-link",{staticClass:"hs-mega-menu-invoker btn-signup",attrs:{id:"homeMegaMenu",to:"/register",tag:"button"}},[t._v("\n                  Create Account\n                ")])],1),t._v(" "),r("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[r("div",{staticClass:"container-d"},[r("label",{staticClass:"toggle"},[r("input",{attrs:{type:"checkbox",id:"checkbox"},on:{change:function(e){return t.changeTheme()}}}),t._v(" "),r("span",{staticClass:"slider round material-icons"})])])])])])])],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[n("a",{staticClass:"hs-mega-menu-invoker nav-link",attrs:{id:"homeMegaMenu",href:"/#services",activeclass:"active"}},[t._v("\n                  Services\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[n("a",{staticClass:"hs-mega-menu-invoker nav-link",attrs:{id:"homeMegaMenu",href:"/#company"}},[t._v("\n                  Company\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[n("a",{staticClass:"hs-mega-menu-invoker nav-link",attrs:{id:"homeMegaMenu",href:"#becomeAgent"}},[t._v("\n                  Become an Agent\n                ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"hs-has-mega-menu navbar-nav-item"},[n("a",{staticClass:"hs-mega-menu-invoker nav-link",attrs:{id:"homeMegaMenu",href:"/#contact"}},[t._v("\n                  Contact\n                ")])])}],!1,null,"491b142e",null);e.default=component.exports;installComponents(component,{Nav:n(504).default})},505:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("9d2e338a",content,!0,{sourceMap:!1})},506:function(t,e,n){t.exports=n.p+"img/paysure.0b677ae.png"},514:function(t,e,n){"use strict";n(505)},515:function(t,e,n){var r=n(55)(!1);r.push([t.i,'.header-color[data-v-491b142e]{background-color:var(--body-color)!important}.navbar[data-v-491b142e]{padding:0}.l-header[data-v-491b142e]{width:100%;position:fixed;top:0;left:0;z-index:var(--z-fixed)}.nav-link[data-v-491b142e]{color:var(--text-color)!important;margin-left:20px;transition:.3s;font-size:var(--smaller-font-size);font-weight:var(--font-semi-bold);cursor:pointer}.active[data-v-491b142e],.nav-link[data-v-491b142e]:hover{color:#00008b!important}.navbar-toggler[data-v-491b142e]{background-color:var(--body-color)}.btn-icon[data-v-491b142e]{font-size:1.5em!important;margin:5px;color:var(--text-color)}hr[data-v-491b142e]{border-top:.0625rem solid #000}.blink_me[data-v-491b142e]{-webkit-animation:blinker-data-v-491b142e 2s linear infinite;animation:blinker-data-v-491b142e 2s linear infinite}@-webkit-keyframes blinker-data-v-491b142e{50%{opacity:0}}@keyframes blinker-data-v-491b142e{50%{opacity:0}}path[data-v-491b142e]{fill:var(--text-color)}.btn[data-v-491b142e]:focus{outline:none!important;box-shadow:none!important}.btn-signup[data-v-491b142e]{padding:10px!important;background-color:var(--primary-color);color:var(--white-color)!important;border-radius:4px;width:200px;font-size:var(--smaller-font-size);cursor:pointer;transition:box-shadow 1s}.btn-signup[data-v-491b142e]:hover{color:#fff;box-shadow:0 8px 7px #999}.nav__item[data-v-491b142e]{margin-bottom:var(--mb-2)}.nav__link[data-v-491b142e],.nav__logo[data-v-491b142e],.nav__toggle[data-v-491b142e]{color:var(--text-color)}.nav__logo[data-v-491b142e]:hover{color:var(--secondary-color)}.nav__link[data-v-491b142e]{transition:.3s;font-size:var(--smaller-font-size);font-weight:var(--font-medium)}.nav__link[data-v-491b142e]:hover{color:var(--secondary-color)}.nav__toggle[data-v-491b142e]{font-size:1.3rem;cursor:pointer}.show-menu[data-v-491b142e]{top:var(--header-height)}.container-d[data-v-491b142e]{display:flex;align-items:center;justify-content:center;transition:background .2s}.toggle[data-v-491b142e]{margin-top:.5rem;position:relative;width:2.6rem;height:.6rem;border-radius:1.5rem}.toggle input[data-v-491b142e]{opacity:0;width:0;height:0}.toggle .slider[data-v-491b142e]{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.38);transition:.4s}.navbar-brand[data-v-491b142e],.navbar-brand>img[data-v-491b142e]{width:7.5rem!important}.toggle .slider[data-v-491b142e]:before{position:absolute;content:"wb_sunny";font-size:1rem;text-align:center;color:var(--color-orange-regular);padding:.3rem;left:0;top:50%;transform:translateY(-50%);background:#fff;transition:all .4s;z-index:2;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.toggle input:checked+.slider[data-v-491b142e]{background-color:var(--secondary-color)}.toggle input:checked+.slider[data-v-491b142e]:before{transform:translate(1.6rem,-50%);background-color:var(--primary-color);content:"brightness_2"}.toggle .slider.round[data-v-491b142e]{border-radius:1.5rem}.toggle .slider.round[data-v-491b142e]:before{border-radius:50%}.change-theme[data-v-491b142e]{position:absolute;right:1rem;top:1.8rem;color:var(--text-color);font-size:1rem;cursor:pointer}.navbar-nav-item[data-v-491b142e]{margin-left:15px}.navbar-light .navbar-toggler[data-v-491b142e]{border-color:var(--text-color)}.btn svg[data-v-491b142e]{color:var(--text-color)}@media screen and (max-width:992px){.navbar-nav-item[data-v-491b142e]{margin-left:0;margin-bottom:20px!important;display:flex!important;justify-content:center!important}.container-d[data-v-491b142e]{margin-top:10px}}',""]),t.exports=r},519:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7b3BhY2l0eTowLjc0O30uYntmaWxsOm5vbmU7fS5je2ZpbGw6IzUzMjNkNzt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImEiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMCwwSDI0VjI0SDBaIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0yMCwyMkg0YTEsMSwwLDAsMS0xLTFWM0ExLDEsMCwwLDEsNCwySDIwYTEsMSwwLDAsMSwxLDFWMjFBMSwxLDAsMCwxLDIwLDIyWm0tMS0yVjRINVYyMFpNOCw5aDh2Mkg4Wm0wLDRoOHYySDhaIi8+PC9nPjwvc3ZnPg=="},528:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZWVlOGZmO30uYntmaWxsOm5vbmU7fS5je2ZpbGw6IzUzMjNkNzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3NjcgLTgyKSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgcng9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzY3IDgyKSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3NzkuMDUzIDk0LjA1MykiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMCwwSDE5Ljg5M1YxOS44OTNIMFoiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTEwLjQ2LDJhNy40NzMsNy40NzMsMCwwLDEsNy40Niw3LjQ4NlYxNi45MkgzVjkuNDg2QTcuNDczLDcuNDczLDAsMCwxLDEwLjQ2LDJaTTguMzg4LDE3Ljc0OWg0LjE0NGEyLjA3MiwyLjA3MiwwLDEsMS00LjE0NCwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNTEzIC0wLjM0MikiLz48L2c+PC9nPjwvc3ZnPg=="},529:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZWVlOGZmO30uYntmaWxsOm5vbmU7fS5je2ZpbGw6IzUzMjNkNzt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3ODAgLTM4KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgcng9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzgwIDM4KSIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3OTAgNDgpIj48cGF0aCBjbGFzcz0iYiIgZD0iTTAsMEgyNFYyNEgwWiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMTIsMjJBMTAsMTAsMCwxLDEsMjIsMTIsMTAsMTAsMCwwLDEsMTIsMjJaTTcsMTJhNSw1LDAsMCwwLDEwLDBIMTVhMywzLDAsMCwxLTYsMFoiLz48L2c+PC9nPjwvc3ZnPg=="},530:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("7931684b",content,!0,{sourceMap:!1})},531:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM1MzIzZDc7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMCwwSDI0VjI0SDBaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xMywxOWg2VjkuOTc4TDEyLDQuNTM0LDUsOS45NzhWMTloNlYxM2gyWm04LDFhMSwxLDAsMCwxLTEsMUg0YTEsMSwwLDAsMS0xLTFWOS40OWExLDEsMCwwLDEsLjM4Ni0uNzlsOC02LjIyMmExLDEsMCwwLDEsMS4yMjgsMGw4LDYuMjIyQTEsMSwwLDAsMSwyMSw5LjQ5VjIwWiIvPjwvc3ZnPg=="},532:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7b3BhY2l0eTowLjc0O30uYntmaWxsOm5vbmU7fS5je2ZpbGw6IzUzMjNkNzt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImEiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMCwwSDI0VjI0SDBaIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0xLjkyMyw5LjM3Yy0uNTEtLjItLjUtLjUxLjAzNC0uNjg5TDIxLjA0MywyLjMxOWMuNTI5LS4xNzYuODMyLjEyLjY4NC42MzhMMTYuMjczLDIyLjA0M2MtLjE1LjUyOS0uNDc1LjU1My0uNzE3LjA3TDExLDEzWm00Ljg5LS4yLDUuNjM2LDIuMjU1LDMuMDQsNi4wODJMMTkuMDM1LDUuMSw2LjgxMiw5LjE3WiIvPjwvZz48L3N2Zz4="},533:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7b3BhY2l0eTowLjc0O30uYntmaWxsOm5vbmU7fS5je2ZpbGw6IzUzMjNkNzt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImEiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMCwwSDI0VjI0SDBaIi8+PHBhdGggY2xhc3M9ImMiIGQ9Ik03LDRWMjBIMTdWNFpNNiwySDE4YTEsMSwwLDAsMSwxLDFWMjFhMSwxLDAsMCwxLTEsMUg2YTEsMSwwLDAsMS0xLTFWM0ExLDEsMCwwLDEsNiwyWm02LDE1YTEsMSwwLDEsMS0xLDFBMSwxLDAsMCwxLDEyLDE3WiIvPjwvZz48L3N2Zz4="},534:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM1MzIzZDc7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJhIiBkPSJNMCwwSDI0VjI0SDBaIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00LDE4SDZ2MkgxOFY0SDZWNkg0VjNBMSwxLDAsMCwxLDUsMkgxOWExLDEsMCwwLDEsMSwxVjIxYTEsMSwwLDAsMS0xLDFINWExLDEsMCwwLDEtMS0xWm0yLTdoN3YySDZ2M0wxLDEyLDYsOFoiLz48L3N2Zz4="},535:function(t,e,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("160ee7a0",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(530)},553:function(t,e,n){var r=n(55)(!1);r.push([t.i,".navbar[data-v-97722af8]{z-index:2000;background:var(--body-color)}body[data-v-97722af8]{padding-top:0!important}.navbar-expand-lg .navbar-nav .nav-link[data-v-97722af8]{padding-top:0!important;padding-bottom:0!important}.navbar-brand>img[data-v-97722af8]{width:7.5rem}.middle[data-v-97722af8]{display:none!important}@media screen and (min-width:1200px){.middle[data-v-97722af8]{display:block!important}.close-aside[data-v-97722af8]{display:none}}.active[data-v-97722af8]{width:250px;height:60px;background-color:#eee8ff;color:#fff;border-radius:17px}",""]),t.exports=r},554:function(t,e,n){"use strict";n(535)},555:function(t,e,n){var r=n(55)(!1);r.push([t.i,"body[data-v-29d6f3f9]{overflow-x:hidden}#wrapper[data-v-29d6f3f9]{padding-left:0;transition:all .5s ease}#wrapper.toggled[data-v-29d6f3f9]{padding-left:250px}#sidebar-wrapper[data-v-29d6f3f9]{z-index:1000;position:relative;left:250px;width:0;height:100%;margin-left:-250px;overflow-y:auto;background-color:var(--body-color);transition:all .5s ease;border-right:1px solid #f0f0f0}#wrapper.toggled #sidebar-wrapper[data-v-29d6f3f9]{width:250px}#page-content-wrapper[data-v-29d6f3f9]{width:100%;position:absolute;padding:15px}#wrapper.toggled #page-content-wrapper[data-v-29d6f3f9]{position:absolute;margin-right:-250px}.icons[data-v-29d6f3f9]{width:20%}.sidebar-nav[data-v-29d6f3f9]{position:absolute;width:100%;margin:0;padding:0;list-style:none;top:0;left:0;flex-direction:column;align-items:flex-start}.logout[data-v-29d6f3f9],.sidebar-nav[data-v-29d6f3f9]{display:flex;justify-content:center}.logout[data-v-29d6f3f9]{border-bottom:1px solid hsla(0,0%,100%,.02);cursor:pointer;margin:20px 10px;font-size:var(--small-font-size);font-weight:600;width:180px;height:50px;background:#fcfcfc;color:var(--primary-color);border-radius:10px;text-decoration:none;transition:.5s;align-items:center}.sidebar-nav li[data-v-29d6f3f9]{text-indent:20px;line-height:40px}.sidebar-nav li a[data-v-29d6f3f9]:active,.sidebar-nav li a[data-v-29d6f3f9]:focus{text-decoration:none}.jover a[data-v-29d6f3f9]{color:var(--primary-color)}.space-y[data-v-29d6f3f9]{margin-top:8rem}.sidebar-nav li[data-v-29d6f3f9]{border-bottom:1px solid hsla(0,0%,100%,.02);cursor:pointer;margin:10px;font-size:var(--small-font-size);font-weight:600;width:180px;height:50px;background:#fcfcfc;color:var(--primary-color);border-radius:10px;text-decoration:none;display:flex;transition:.5s;align-items:center}.active[data-v-29d6f3f9],.sidebar-nav li[data-v-29d6f3f9]:hover{width:180px;font-size:var(--small-font-size);height:50px;background:#eee8ff;color:var(--primary-color);border-radius:10px;text-decoration:none;display:flex;transition:.5s;align-items:center}.active[data-v-29d6f3f9]{justify-content:center}@media (min-width:768px){#wrapper[data-v-29d6f3f9]{padding-left:250px}#wrapper.toggled[data-v-29d6f3f9]{padding-left:0}#sidebar-wrapper[data-v-29d6f3f9]{width:250px}#wrapper.toggled #sidebar-wrapper[data-v-29d6f3f9]{width:0}#page-content-wrapper[data-v-29d6f3f9]{padding:20px;position:relative}#wrapper.toggled #page-content-wrapper[data-v-29d6f3f9]{position:relative;margin-right:0}}",""]),t.exports=r},572:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"navbar-nav flex-row"},[r("li",{staticClass:"nav-item  me-3 me-lg-1"},[r("a",{staticClass:"nav-link",attrs:{href:"#"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(528)}})])]),t._v(" "),r("li",{staticClass:"nav-item dropdown me-3 me-lg-1"},[r("a",{staticClass:"nav-link dropdown-toggle hidden-arrow",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(529)}})]),t._v(" "),r("ul",{staticClass:"dropdown-menu dropdown-menu-end",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Some news")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another news")])]),t._v(" "),r("li",[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])])])}],o={name:"dashboardNav",methods:{openNav:function(){var aside=document.getElementById("wrapper");aside&&aside.classList.toggle("toggled")}}},d=(n(552),n(63)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light fixed-top"},[r("div",{staticClass:"container-fluid justify-content-between"},[r("ul",{staticClass:"d-flex ml-4"},[r("i",{staticClass:"fa fa-bars close-aside hidden-sm hidden-md hidden-lg",staticStyle:{"align-self":"center"},attrs:{"data-close":"show-side-navigation1"},on:{click:function(e){return t.openNav()}}}),t._v(" "),r("nuxt-link",{staticClass:"navbar-brand ml-3",attrs:{to:"/dashboard/overview"}},[r("img",{staticClass:"img-fluid",staticStyle:{"margin-top":"2px"},attrs:{src:n(506),alt:""}})])],1),t._v(" "),t._m(0)])])])}),r,!1,null,"97722af8",null);e.default=component.exports;installComponents(component,{Nav:n(504).default})},573:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(534)}}),t._v("\n        Log Out\n      ")])}],o={name:"sidenav",components:{},data:function(){return{activeBtn:""}},methods:{Logout:function(){localStorage.removeItem("user"),localStorage.removeItem("token"),this.$router.push("/login")},closeNav:function(){if(!window.matchMedia("(min-width: 768px)").matches){var aside=document.getElementById("wrapper");aside&&aside.classList.toggle("toggled")}}}},d=(n(554),n(63)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"sidebar-wrapper"}},[r("ul",{staticClass:"sidebar-nav",attrs:{id:"toolBtns"}},[r("li",{staticClass:"jover mt-5"},[r("router-link",{class:{active:"btn1"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/overview"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(531)}}),t._v("\n        Dashboard\n      ")])],1),t._v(" "),r("li",{staticClass:"jover"},[r("router-link",{class:{active:"btn2"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/send-money"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(532)}}),t._v("\n        Send Money\n      ")])],1),t._v(" "),r("li",{staticClass:"jover"},[r("router-link",{class:{active:"btn3"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/airtime"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(533)}}),t._v("\n        Recharge Airtime\n      ")])],1),t._v(" "),r("li",{staticClass:"jover"},[r("router-link",{class:{active:"btn4"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/bills"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(519)}}),t._v("\n        Pay Bills\n      ")])],1),t._v(" "),r("li",{staticClass:"jover"},[r("router-link",{class:{active:"btn5"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/transactions"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(519)}}),t._v("\n        Transactions\n      ")])],1),t._v(" "),r("li",{staticClass:"jover"},[r("router-link",{class:{active:"btn6"===t.activeBtn},attrs:{"exact-active-class":"active",to:"/dashboard/settings"},nativeOn:{click:function(e){return t.closeNav()}}},[r("img",{staticClass:"img-fluid",staticStyle:{width:"17px","margin-right":"18px"},attrs:{src:n(519)}}),t._v("\n        Settings\n      ")])],1),t._v(" "),r("li",{staticClass:"jover",staticStyle:{"margin-top":"6rem !important"},on:{click:t.Logout}},[t._m(0)])])])}),r,!1,null,"29d6f3f9",null);e.default=component.exports},577:function(t,e,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("ccff75a0",content,!0,{sourceMap:!1})},607:function(t,e,n){"use strict";n(577)},608:function(t,e,n){var r=n(55)(!1);r.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*!\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */body[data-v-c71b5ed4]{overflow-x:hidden}#wrapper[data-v-c71b5ed4]{padding-left:0;transition:all .5s ease}#wrapper.toggled[data-v-c71b5ed4]{padding-left:250px}#sidebar-wrapper[data-v-c71b5ed4]{z-index:1000;position:fixed;left:250px;width:0;height:100%;margin-left:-250px;overflow-y:auto;background-color:var(--body-color);transition:all .5s ease}#wrapper.toggled #sidebar-wrapper[data-v-c71b5ed4]{width:250px}#page-content-wrapper[data-v-c71b5ed4]{width:100%;position:absolute;height:100%;background-color:var(--body-color)}#wrapper.toggled #page-content-wrapper[data-v-c71b5ed4]{position:absolute;margin-right:-250px}@media (min-width:768px){#wrapper[data-v-c71b5ed4]{padding-left:250px}#wrapper.toggled[data-v-c71b5ed4]{padding-left:0}#sidebar-wrapper[data-v-c71b5ed4]{width:250px}#wrapper.toggled #sidebar-wrapper[data-v-c71b5ed4]{width:0}#page-content-wrapper[data-v-c71b5ed4]{padding:20px;position:relative}#wrapper.toggled #page-content-wrapper[data-v-c71b5ed4]{position:relative;margin-right:0}}.wrapper-body[data-v-c71b5ed4]{width:100%;min-height:100vh;display:relative;margin:0;padding:0;background:-webkit-linear-gradient(-45deg,#183850,#183850 25%,#192c46 50%,#22254c 75%,#22254c)}.wrapper[data-v-c71b5ed4]{position:absolute;top:50%;left:50%;align-items:center;justify-content:center;transform:translate(-50%,-50%);text-align:center}.button[data-v-c71b5ed4]{display:block;padding:15px 30px;background:#22254c;color:#fff;letter-spacing:5px;text-decoration:none;box-shadow:0 0 15px #22254c}",""]),t.exports=r},666:function(t,e,n){"use strict";n.r(e);n(98);var r=n(572),o=n(573),d={name:"dashboard",components:{dashboardNav:r.default,sidenav:o.default},methods:{openNav:function(){var aside=document.getElementById("wrapper");aside&&aside.classList.toggle("toggled")},refresh:function(){var t=this;this.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),5e3),this.$nuxt.refresh()}}},l=(n(607),n(63)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"20px"}},[n("dashboard-nav"),t._v(" "),n("div",{attrs:{id:"wrapper"}},[n("sidenav"),t._v(" "),n("div",{attrs:{id:"page-content-wrapper"}},[n("div",{staticClass:"container-fluid mt-4"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("Nuxt")],1)])])])],1)],1)}),[],!1,null,"c71b5ed4",null);e.default=component.exports;installComponents(component,{DashboardNav:n(572).default,Sidenav:n(573).default})}}]);