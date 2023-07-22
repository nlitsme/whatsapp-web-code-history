/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[5617],{307914:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},595318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},415227:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=new Error(e);if(void 0===t.stack)try{throw t}catch(e){}return t}},670983:(e,t,n)=>{"use strict";var r=n(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";if(null==e)throw(0,o.default)(`Unexpected null or undefined: ${t}`);return e};var o=r(n(415227))},801506:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UPLOAD_TO_CLB=t.TICKET_URL=t.LOG_SIZE=t.CLB_URL=t.CLB_TOKEN=t.CLB_CHECK_URL=void 0;t.CLB_CHECK_URL="https://crashlogs.whatsapp.net/wa_fls_upload_check";t.CLB_TOKEN="1063127757113399|745146ffa34413f9dbb5469f5370b7af";t.CLB_URL="https://crashlogs.whatsapp.net/wa_clb_data";t.TICKET_URL="https://web.whatsapp.com/web-contact-us";let n=0;n=1;t.UPLOAD_TO_CLB=1;t.LOG_SIZE=4999},207024:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDistribution=function(){let e="unknown";return e="prod","web_prod"},t.getLogUserAgent=function(e){let t,{appVersion:n,browser:r,device:o}=e;return t="Web/"+r,`WhatsApp/${n} ${t} Device/${o}`}},794858:(e,t,n)=>{"use strict";var r=n(595318);var o=r(n(670983)),a=n(801506),s=n(207024),c=r(n(174285)),u=n(425017);function i(e,t,n){const r=t.split("?")[0];if("Uncaught SyntaxError: Unexpected token '<'"===e)return function(e){const t=e.split("/")[3].replace(/^\//,"");l(d({error:"failed to load a js or css bundle",reason:`failed to load [${t}]`,stack:""}))}(r),!0;return l(d({error:e,reason:`Error at [${r}:${n}]`,stack:""})),!1}function l(e){!function(e,t){const n=window.navigator.userAgent;if(n===f&&e.includes("getElementsByTagName"))return;const r=new FormData,i=new Blob([e],{type:"text/plain"});r.append("from_jid",function(){if(_)return _;try{_=JSON.parse((0,o.default)(c.default,"localStorage").getItem(p)),_&&(_=_.replace("-",""))}catch(e){}if(!_){_="unknown"+Math.floor(1e10*Math.random());const e=_;try{(0,o.default)(c.default,"localStorage").setItem(p,JSON.stringify(e))}catch(e){}}return(0,o.default)(_,"id")}()),r.append("agent",(0,s.getLogUserAgent)((0,u.parseUASimple)(n,"2.2301.6"))),r.append("file",i,"logs.txt"),r.append("tags",t);const l=new XMLHttpRequest,d=a.CLB_URL+"?access_token="+encodeURIComponent(a.CLB_TOKEN);l.open("POST",d,!0),l.send(r)}(e,"load")}function d(e){let{error:t,reason:n,stack:r}=e;const o=(new Date).toISOString();return`${o}: error: ${t}\n${o}: reason for logs: ${n}\n${o}: userAgent: ${window.navigator.userAgent}\n${r}`}null==window.onerror&&(window.onerror=i);const p="WAUnknownID",f="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";let _},425017:(e,t)=>{"use strict";function n(e){return e.includes("windows")?"Windows":e.includes("mac")?"Mac OS":e.includes("linux")?"Linux":"Unparsed"}Object.defineProperty(t,"__esModule",{value:!0}),t.parseUASimple=function(e,t){const r=e.toLowerCase();return{browser:s(r),device:n(r),appVersion:t}};const r=/(chrome|firefox)\/([\w\.]+)/i,o=/(edge|opr)\/([\w\.]+)/i,a={chrome:"Chrome",edge:"Edge",opr:"Opera",firefox:"Firefox"};function s(e){const t=e.match(o)||e.match(r);return null==t?"Unparsed":`${a[t[1]]} ${t[2]}`}},174285:(e,t)=>{"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;try{n=window.localStorage}catch(e){}var r=n;t.default=r}},e=>{"use strict";var t;t=794858,e(e.s=t)}]);
//# sourceMappingURL=https://web.whatsapp.com/early_error_handling.e9999c23a951a2d316db.js.map
