/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[5617],{307914:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},595318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},415227:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=new Error(e);if(void 0===t.stack)try{throw t}catch(e){}return t}},670983:(e,t,r)=>{"use strict";var n=r(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";if(null==e)throw(0,o.default)(`Unexpected null or undefined: ${t}`);return e};var o=n(r(415227))},801506:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TICKET_URL=t.CLB_URL=t.CLB_TOKEN=t.CLB_CHECK_URL=void 0;t.CLB_CHECK_URL="https://crashlogs.whatsapp.net/wa_fls_upload_check";t.CLB_TOKEN="1063127757113399|745146ffa34413f9dbb5469f5370b7af";t.CLB_URL="https://crashlogs.whatsapp.net/wa_clb_data";t.TICKET_URL="https://web.whatsapp.com/web-contact-us"},207024:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.getDistribution=function(){let e="unknown";return e="prod","web_prod"},t.getLogUserAgent=function(e){let t,{appVersion:r,browser:n,device:o}=e;return t="Web/"+n,`WhatsApp/${r} ${t} Device/${o}`};n(r(97359)),n(r(556869))},794858:(e,t,r)=>{"use strict";var n=r(595318);var o=n(r(670983)),a=r(801506),s=r(207024),u=n(r(174285)),c=r(425017);function i(e,t,r){const n=t.split("?")[0];if("Uncaught SyntaxError: Unexpected token '<'"===e)return function(e){const t=e.split("/")[3].replace(/^\//,"");l(d({error:"failed to load a js or css bundle",reason:`failed to load [${t}]`,stack:""}))}(n),!0;return l(d({error:e,reason:`Error at [${n}:${r}]`,stack:""})),!1}function l(e){!function(e,t){const r=window.navigator.userAgent;if(r===p&&e.includes("getElementsByTagName"))return;const n=new FormData,i=new Blob([e],{type:"text/plain"});n.append("from_jid",function(){if(_)return _;try{_=JSON.parse((0,o.default)(u.default,"localStorage").getItem(f)),_&&(_=_.replace("-",""))}catch(e){}if(!_){_="unknown"+Math.floor(1e10*Math.random());const e=_;try{(0,o.default)(u.default,"localStorage").setItem(f,JSON.stringify(e))}catch(e){}}return(0,o.default)(_,"id")}()),n.append("agent",(0,s.getLogUserAgent)((0,c.parseUASimple)(r,"2.2327.5"))),n.append("file",i,"logs.txt"),n.append("tags",t);const l=new XMLHttpRequest,d=a.CLB_URL+"?access_token="+encodeURIComponent(a.CLB_TOKEN);l.open("POST",d,!0),l.send(n)}(e,"load")}function d(e){let{error:t,reason:r,stack:n}=e;const o=(new Date).toISOString();return`${o}: error: ${t}\n${o}: reason for logs: ${r}\n${o}: userAgent: ${window.navigator.userAgent}\n${n}`}null==window.onerror&&(window.onerror=i);const f="WAUnknownID",p="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";let _},425017:(e,t)=>{"use strict";function r(e){return e.includes("windows")?"Windows":e.includes("mac")?"Mac OS":e.includes("linux")?"Linux":"Unparsed"}Object.defineProperty(t,"__esModule",{value:!0}),t.parseUASimple=function(e,t){const n=e.toLowerCase();return{browser:s(n),device:r(n),appVersion:t}};const n=/(chrome|firefox)\/([\w\.]+)/i,o=/(edge|opr)\/([\w\.]+)/i,a={chrome:"Chrome",edge:"Edge",opr:"Opera",firefox:"Firefox"};function s(e){const t=e.match(o)||e.match(n);return null==t?"Unparsed":`${a[t[1]]} ${t[2]}`}},174285:(e,t)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;try{r=window.localStorage}catch(e){}var n=r;t.default=n},97359:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.default}},556869:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){const r=new Error(t);if(void 0===r.stack)try{throw e}catch(e){}return r}}},e=>{"use strict";var t;t=794858,e(e.s=t)}]);
//# sourceMappingURL=https://web.whatsapp.com/early_error_handling.02ce550747bc86017edd.js.map
