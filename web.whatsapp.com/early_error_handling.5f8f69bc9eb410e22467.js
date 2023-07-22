/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[5617],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},45095:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";if(null==e)throw new Error(`Unexpected null or undefined: ${t}`);return e}},20289:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UPLOAD_TO_CLB=t.TICKET_URL=t.LOG_SIZE=t.CLB_URL=t.CLB_TOKEN=t.CLB_CHECK_URL=void 0;t.CLB_CHECK_URL="https://crashlogs.whatsapp.net/wa_fls_upload_check";t.CLB_TOKEN="1063127757113399|745146ffa34413f9dbb5469f5370b7af";t.CLB_URL="https://crashlogs.whatsapp.net/wa_clb_data";t.TICKET_URL="https://web.whatsapp.com/web-contact-us";let n=0;n=1;t.UPLOAD_TO_CLB=1;t.LOG_SIZE=4999},57977:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDistribution=function(){let e="unknown";return e="prod","web_prod"},t.getLogUserAgent=function(e){let t,{appVersion:n,browser:r,device:o}=e;return t="Web/"+r,`WhatsApp/${n} ${t} Device/${o}`}},46722:(e,t,n)=>{"use strict";var r=n(95318);var o=r(n(45095)),a=n(20289),s=n(57977),c=r(n(4285)),i=n(4617);function l(e,t,n){const r=t.split("?")[0];if("Uncaught SyntaxError: Unexpected token '<'"===e)return u(r),!0;return d(p({error:e,reason:`Error at [${r}:${n}]`,stack:""})),!1}function u(e){d(p({error:"failed to load a js or css bundle",reason:`failed to load [${e.split("/")[3].replace(/^\//,"")}]`,stack:""}))}function d(e){!function(e,t){const n=window.navigator.userAgent;if(n===_&&e.includes("getElementsByTagName"))return;const r=new FormData,l=new Blob([e],{type:"text/plain"});r.append("from_jid",function(){if(w)return w;try{w=JSON.parse((0,o.default)(c.default,"localStorage").getItem(f)),w&&(w=w.replace("-",""))}catch(e){}if(!w){w="unknown"+Math.floor(1e10*Math.random());const e=w;try{(0,o.default)(c.default,"localStorage").setItem(f,JSON.stringify(e))}catch(e){}}return(0,o.default)(w,"id")}()),r.append("agent",(0,s.getLogUserAgent)((0,i.parseUASimple)(n,"2.2211.2"))),r.append("file",l,"logs.txt"),r.append("tags",t);const u=new XMLHttpRequest,d=a.CLB_URL+"?access_token="+encodeURIComponent(a.CLB_TOKEN);u.open("POST",d,!0),u.send(r)}(e,"load")}function p(e){let{error:t,reason:n,stack:r}=e;const o=(new Date).toISOString();return`${o}: error: ${t}\n${o}: reason for logs: ${n}\n${o}: userAgent: ${window.navigator.userAgent}\n${r}`}null==window.onerror&&(window.onerror=l);const f="WAUnknownID",_="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";let w},4617:(e,t)=>{"use strict";function n(e){return e.includes("windows")?"Windows":e.includes("mac")?"Mac OS":e.includes("linux")?"Linux":"Unparsed"}Object.defineProperty(t,"__esModule",{value:!0}),t.parseUASimple=function(e,t){const r=e.toLowerCase();return{browser:s(r),device:n(r),appVersion:t}};const r=/(chrome|firefox)\/([\w\.]+)/i,o=/(edge|opr)\/([\w\.]+)/i,a={chrome:"Chrome",edge:"Edge",opr:"Opera",firefox:"Firefox"};function s(e){const t=e.match(o)||e.match(r);return null==t?"Unparsed":`${a[t[1]]} ${t[2]}`}},4285:(e,t)=>{"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;try{n=window.localStorage}catch(e){}var r=n;t.default=r}},e=>{"use strict";var t;t=46722,e(e.s=t)}]);
//# sourceMappingURL=https://web.whatsapp.com/early_error_handling.5f8f69bc9eb410e22467.js.map
