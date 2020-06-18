(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],h=0,d=[];h<s.length;h++)i=s[h],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"010e":function(t,e,r){"use strict";var n=r("1843"),o=r.n(n);o.a},1843:function(t,e,r){},"21bb":function(t,e,r){"use strict";var n=r("2dad"),o=r.n(n);o.a},"2dad":function(t,e,r){},"38f2":function(t,e,r){"use strict";var n=r("6bd3"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n,o=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Nav"),r("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{attrs:{id:"nav"}},[r("div",{staticClass:"nav-container"},[r("div",{attrs:{id:"nav-left"}},[r("router-link",{attrs:{id:"home-link",to:"/"}},[r("h1",[t._v("Orange")])])],1),r("div",{attrs:{id:"nav-middle"}},[t.$auth.isAuthenticated?r("p",{staticClass:"hi",staticStyle:{"user-select":"none"}},[t._v("hi, "+t._s(t.$auth.user.name))]):t._e()]),r("div",{attrs:{id:"nav-right"}},[t.$auth.isAuthenticated?r("router-link",{staticClass:"nav-link",attrs:{to:{name:"profile",params:{}}}},[t._v("Profile")]):t._e(),t.$auth.loading?t._e():r("div",{staticClass:"auth-button"},[t.$auth.isAuthenticated?t._e():r("button",{on:{click:t.login}},[t._v("Log in")]),t.$auth.isAuthenticated?r("button",{on:{click:t.logout}},[t._v("Log out")]):t._e()])],1)])])},l=[],c={name:"Nav",methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout({returnTo:window.location.origin})}}},u=c,h=(r("6838"),r("2877")),d=Object(h["a"])(u,s,l,!1,null,"2e590c4e",null),p=d.exports,m={name:"App",components:{Nav:p}},f=m,b=(r("5c0b"),Object(h["a"])(f,a,i,!1,null,null,null)),g=b.exports,v=r("8c4f"),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"home"}},[n("img",{attrs:{alt:"Westcott Multimedia logo",src:r("6a73")}}),n("div",{staticClass:"greeting-div"},[n("h2",[t._v("We get the right message"),n("br"),t._v(" to the right audience"),n("br"),t._v(" at the right time. ")])])])}],C={name:"Home"},_=C,y=(r("21bb"),Object(h["a"])(_,k,w,!1,null,null,null)),x=y.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"profile-wrapper"},[r("div",{staticClass:"container"},[r("div",{staticClass:"user-info-wrapper"},[r("h1",{staticStyle:{margin:"0 auto"}},[t._v(t._s(t.$auth.user.name)+"'s Profile")])]),"admin"===t.$auth.user.name?r("div",{},[r("p",[t._v("select a user's profile to emulate:")]),r("div",{staticClass:"admin-emu-selector"},[r("div",{staticClass:"emu-choice",on:{click:function(e){return t.adminSwitchProfile(0)}}},[t._v("Sixshooter")]),r("div",{staticClass:"emu-choice",on:{click:function(e){return t.adminSwitchProfile(1)}}},[t._v("EOne")])])]):t._e(),"SixShooter"===t.$auth.user.name||0===t.emu?r("div",{staticClass:"profile-link-wrapper"},[r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-artist",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#ff6d6d"}},[t._v("Ad")])]),r("p",[t._v("Artist Dashboard")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-adtracker",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#6ddbff"}},[t._v("At")])]),r("p",[t._v("Ad Tracker")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-marketing-actions",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#fdff6a"}},[t._v("Ma")])]),r("p",[t._v("Marketing Actions")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-roster",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#90EE90"}},[t._v("Mr")])]),r("p",[t._v("My Roster")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-ad-content",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#663399"}},[t._v("Ac")])]),r("p",[t._v("Ad Content")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-bugs",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#b5b5b5"}},[t._v("Bt")])]),r("p",[t._v("Bug Tracker")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"sixshooter-sys-prefs",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#ff9633"}},[t._v("Sp")])]),r("p",[t._v("System Preferences")])])],1):t._e(),"EOne"===t.$auth.user.name||1===t.emu?r("div",{staticClass:"profile-link-wrapper"},[r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-artist",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#ff6d6d"}},[t._v("Ad")])]),r("p",[t._v("Artist Dashboard")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-label",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#ff9e6d"}},[t._v("Dd")])]),r("p",[t._v("Distributor Dashboard")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-adtracker",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#6ddbff"}},[t._v("At")])]),r("p",[t._v("Ad Tracker")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-marketing-actions",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#fdff6a"}},[t._v("Ma")])]),r("p",[t._v("Marketing Actions")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-roster",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#90EE90"}},[t._v("Mr")])]),r("p",[t._v("My Roster")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-ad-content",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#663399"}},[t._v("Ac")])]),r("p",[t._v("Ad Content")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-bugs",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#b5b5b5"}},[t._v("Bt")])]),r("p",[t._v("Bug Tracker")])]),r("router-link",{staticClass:"router-link",attrs:{to:{name:"eone-sys-prefs",params:{}}}},[r("div",{staticClass:"link-img-container"},[r("h2",{staticStyle:{"background-color":"#ff9633"}},[t._v("Sp")])]),r("p",[t._v("System Preferences")])])],1):t._e()])])},O=[],A=(r("4160"),r("b0c0"),r("159b"),{methods:{adminSwitchProfile:function(t){if("admin"===this.$auth.user.name){var e=document.getElementsByClassName("emu-choice");e.forEach((function(t){return t.classList.remove("active")})),this.emu=t,e[this.emu].classList.add("active")}}},data:function(){return{emu:null}},created:function(){}}),E=A,L=(r("010e"),Object(h["a"])(E,S,O,!1,null,"9d0655b4",null)),R=L.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"dashboard-wrapper"},[r("div",{staticClass:"container"},[r("iframe",{attrs:{id:"dashboard-iframe",src:t.url,width:t.width,height:t.height}})])])},$=[],P={name:"SixshooterArtist",props:{width:String,height:String,url:String},methods:{checkIframeLoaded:function(){var t=document.getElementById("dashboard-iframe"),e=t.contentDocument||t.contentWindow.document;if("complete"==e.readyState)return t.contentWindow.onload=function(){},void this.afterLoading();window.setTimeout(this.checkIframeLoaded,100)},afterLoading:function(){console.log("hurrr")}},mounted:function(){}},j=P,M=(r("38f2"),Object(h["a"])(j,T,$,!1,null,"2dd8e466",null)),D=M.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"airtable-wrapper"},[n("div",{staticClass:"container"},[t.modalUrl?n("div",{directives:[{name:"show",rawName:"v-show",value:!this.modalOpen,expression:"!this.modalOpen"}],staticClass:"form-show-button",on:{click:t.switchModal}},[n("span",[t._v("+")])]):t._e(),t.modalUrl?n("div",{directives:[{name:"show",rawName:"v-show",value:this.modalOpen,expression:"this.modalOpen"}],staticClass:"form-show-button close",on:{click:t.switchModal}},[n("span",[t._v("x")])]):t._e(),n("div",{staticClass:"form-show-button reload",on:{click:t.reloadTable}},[n("img",{attrs:{alt:"reload",src:r("7086")}})]),n("iframe",{attrs:{id:"airtable-embed",src:t.url,width:t.width,height:t.height,frameborder:"0",onmousewheel:""}}),n("AirtableForm",{attrs:{id:"form-modal-wrap",url:t.modalUrl}})],1)])},B=[],W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("iframe",{attrs:{src:t.url,width:"100%",height:"100%"}})])},z=[],I={name:"AirtableForm",props:{url:String}},H=I,N=Object(h["a"])(H,W,z,!1,null,"6a21fd36",null),F=N.exports,V={name:"AirtableEmbed",components:{AirtableForm:F},props:{width:String,height:String,url:String,modalUrl:String},methods:{switchModal:function(){console.log("hello"),this.modalOpen=!this.modalOpen;var t=document.getElementById("form-modal-wrap");this.modalOpen?t.classList.add("active"):(t.classList.remove("active"),this.reloadTable())},reloadTable:function(){document.getElementById("airtable-embed").src=document.getElementById("airtable-embed").src}},data:function(){return{modalOpen:!1}}},J=V,q=(r("7b82"),Object(h["a"])(J,U,B,!1,null,"90a31cea",null)),X=q.exports,G=(r("caad"),r("ac1f"),r("2532"),r("841c"),r("96cf"),r("1da1")),K=r("15fd"),Y=r("5891"),Q=r.n(Y),Z=function(){return window.history.replaceState({},document.title,window.location.pathname)},tt=function(){return n},et=function(t){var e=t.onRedirectCallback,r=void 0===e?Z:e,a=t.redirectUri,i=void 0===a?window.location.origin:a,s=Object(K["a"])(t,["onRedirectCallback","redirectUri"]);return n||(n=new o["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(t){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.popupOpen=!0,r.prev=1,r.next=4,e.auth0Client.loginWithPopup(t);case 4:r.next=9;break;case 6:r.prev=6,r.t0=r["catch"](1),console.error(r.t0);case 9:return r.prev=9,e.popupOpen=!1,r.finish(9);case 12:return r.next=14,e.auth0Client.getUser();case 14:e.user=r.sent,e.isAuthenticated=!0;case 16:case"end":return r.stop()}}),r,null,[[1,6,9,12]])})))()},handleRedirectCallback:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.auth0Client.handleRedirectCallback();case 4:return e.next=6,t.auth0Client.getUser();case 6:t.user=e.sent,t.isAuthenticated=!0,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),t.error=e.t0;case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q()({domain:s.domain,client_id:s.clientId,audience:s.audience,redirect_uri:i});case 2:if(t.auth0Client=e.sent,e.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.auth0Client.handleRedirectCallback();case 7:n=e.sent,o=n.appState,r(o);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](3),t.error=e.t0;case 15:return e.prev=15,e.next=18,t.auth0Client.isAuthenticated();case 18:return t.isAuthenticated=e.sent,e.next=21,t.auth0Client.getUser();case 21:return t.user=e.sent,t.loading=!1,e.finish(15);case 24:case"end":return e.stop()}}),e,null,[[3,12,15,24]])})))()}}),n)},rt={install:function(t,e){t.prototype.$auth=et(e)}},nt=function(t,e,r){var n=tt(),o=function(){if(n.isAuthenticated)return r();n.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!n.loading)return o();n.$watch("loading",(function(t){if(!1===t)return o()}))};o["a"].use(v["a"]);var ot=[{path:"/",name:"Home",component:x},{path:"/profile",name:"profile",component:R,beforeEnter:nt},{path:"/profile/sixshooter-artist",name:"sixshooter-artist",component:D,props:{url:"https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/Story1?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no",width:"1100",height:"100%"},beforeEnter:nt},{path:"/profile/eone-artist",name:"eone-artist",component:D,props:{url:"https://10ay.online.tableau.com/t/westcottmultimedia/views/eOneDashboardOverview/Dr_DreDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-label",name:"sixshooter-label",component:D,props:{url:"https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/SixshooterDashboard?:embed=yes:toolbar=no",width:"1100",height:"100%"},beforeEnter:nt},{path:"/profile/eone-label",name:"eone-label",component:D,props:{url:"https://10ay.online.tableau.com/t/westcottmultimedia/views/eOneDashboardOverview/eOneDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-adtracker",name:"sixshooter-adtracker",component:D,props:{url:"https://10ay.online.tableau.com/t/westcottmultimedia/views/SixShooterDashboards/AdTrackerDashboard?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes:toolbar=no",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-adtracker",name:"eone-adtracker",component:X,props:{url:"https://airtable.com/embed/shrHmzcVrRftIvq5T?backgroundColor=cyanLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-roster",name:"sixshooter-roster",component:X,props:{url:"https://airtable.com/embed/shrLMs4FmRILi0MtW?backgroundColor=blue&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-roster",name:"eone-roster",component:X,props:{url:"https://airtable.com/embed/shrUTYI8oNz4yisRa?backgroundColor=blueLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-ad-content",name:"sixshooter-ad-content",component:X,props:{url:"https://airtable.com/embed/shr8NXx6yt3ghXMG7?backgroundColor=red&viewControls=on",modalUrl:"https://airtable.com/embed/shrPSgAxpxKALXTFq?backgroundColor=redLight",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-ad-content",name:"eone-ad-content",component:X,props:{url:"https://airtable.com/embed/shrdn3Fzdzc3iStb7?backgroundColor=redLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-marketing-actions",name:"sixshooter-marketing-actions",component:X,props:{url:"https://airtable.com/embed/shrSWdwflvYhL3Wk1?backgroundColor=greenLight&viewControls=on",modalUrl:"https://airtable.com/embed/shr6gPiD9eUrhyrKV?backgroundColor=greenLight",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-marketing-actions",name:"eone-marketing-actions",component:X,props:{url:"https://airtable.com/embed/shrHmzcVrRftIvq5T?backgroundColor=cyanLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-bugs",name:"sixshooter-bugs",component:X,props:{url:"https://airtable.com/embed/shrA1U3HS4S8JZDja?backgroundColor=yellow&viewControls=on",modalUrl:"https://airtable.com/embed/shruFMgpWcgelwQ3B?backgroundColor=yellowLight",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-bugs",name:"eone-bugs",component:X,props:{url:"https://airtable.com/embed/shrPMTYElgDsw3fZG?backgroundColor=yellowLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/sixshooter-sys-prefs",name:"sixshooter-sys-prefs",component:X,props:{url:"https://airtable.com/embed/shrCqCSnPqo8R5JBU?backgroundColor=pinkLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt},{path:"/profile/eone-sys-prefs",name:"eone-sys-prefs",component:X,props:{url:"https://airtable.com/embed/shrGBv1mjFLK7kvxs?backgroundColor=pinkLight&viewControls=on",width:"100%",height:"100%"},beforeEnter:nt}],at=new v["a"]({mode:"history",base:"/",routes:ot}),it=at,st=r("8160"),lt=r("6c39"),ct=r.n(lt);o["a"].use(ct.a),o["a"].use(rt,{domain:st["b"],clientId:st["a"],onRedirectCallback:function(t){it.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),o["a"].config.productionTip=!1,new o["a"]({router:it,render:function(t){return t(g)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},6838:function(t,e,r){"use strict";var n=r("ffcd"),o=r.n(n);o.a},"6a73":function(t,e,r){t.exports=r.p+"img/westcott-logo.9ff4bfcc.png"},"6bd3":function(t,e,r){},7086:function(t,e,r){t.exports=r.p+"img/reload.fa081de6.png"},"7b82":function(t,e,r){"use strict";var n=r("9385"),o=r.n(n);o.a},8160:function(t){t.exports=JSON.parse('{"b":"dev-s6rwatw0.auth0.com","a":"JOHNla33fxpz86Xzi6Rlo6X9Qe1Aovaf"}')},9385:function(t,e,r){},"9c0c":function(t,e,r){},ffcd:function(t,e,r){}});
//# sourceMappingURL=app.433f6f9e.js.map