/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[5617],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},45095:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";if(null==e)throw new Error(`Unexpected null or undefined: ${t}`);return e}},92417:(e,t)=>{"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;try{n=window.localStorage}catch(e){}var r=n;t.default=r},82867:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDistribution=function(){let e="unknown";return e="prod","web_prod"},t.getLogUserAgent=function(e){let t,{appVersion:n,browser:r,device:o}=e;return t="Web/"+r,`WhatsApp/${n} ${t} Device/${o}`}},38813:(e,t,n)=>{"use strict";var r=n(95318);var o=r(n(45095)),a=n(82867),s=r(n(92417)),i=n(55153);function c(e,t,n){const r=t.split("?")[0];if("Uncaught SyntaxError: Unexpected token '<'"===e)return l(r),!0;u(d({error:e,reason:`Error at [${r}:${n}]`,stack:""}));return!1}function l(e){u(d({error:"failed to load a js or css bundle",reason:`failed to load [${e.split("/")[3].replace(/^\//,"")}]`,stack:""}))}function u(e){!function(e,t){const n=window.navigator.userAgent;if(n===g&&e.includes("getElementsByTagName"))return;const r=new FormData,c=new Blob([e],{type:"text/plain"});r.append("from_jid",function(){if(_)return _;try{_=JSON.parse((0,o.default)(s.default,"localStorage").getItem(h)),_&&(_=_.replace("-",""))}catch(e){}if(!_){_="unknown"+Math.floor(1e10*Math.random());const e=_;try{(0,o.default)(s.default,"localStorage").setItem(h,JSON.stringify(e))}catch(e){}}return(0,o.default)(_,"id")}()),r.append("agent",(0,a.getLogUserAgent)((0,i.parseUASimple)(n,p))),r.append("file",c,"logs.txt"),r.append("tags",t);const l=new XMLHttpRequest,u=f+"?access_token="+encodeURIComponent(w);l.open("POST",u,!0),l.send(r)}(e,"load")}function d(e){let{error:t,reason:n,stack:r}=e;const o=(new Date).toISOString();return`${o}: error: ${t}\n${o}: reason for logs: ${n}\n${o}: userAgent: ${window.navigator.userAgent}\n${r}`}null==window.onerror&&(window.onerror=c);const p="2.2205.5",f="https://crashlogs.whatsapp.net/wa_clb_data",w="1063127757113399|745146ffa34413f9dbb5469f5370b7af",g="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36",h="WAUnknownID";let _},55153:(e,t)=>{"use strict";function n(e){return e.includes("windows")?"Windows":e.includes("mac")?"Mac OS":e.includes("linux")?"Linux":"Unparsed"}Object.defineProperty(t,"__esModule",{value:!0}),t.parseUASimple=function(e,t){const r=e.toLowerCase();return{browser:s(r),device:n(r),appVersion:t}};const r=/(chrome|firefox)\/([\w\.]+)/i,o=/(edge|opr)\/([\w\.]+)/i,a={chrome:"Chrome",edge:"Edge",opr:"Opera",firefox:"Firefox"};function s(e){const t=e.match(o)||e.match(r);return null==t?"Unparsed":`${a[t[1]]} ${t[2]}`}}},e=>{"use strict";var t;t=38813,e(e.s=t)}]);
//# sourceMappingURL=https://web.whatsapp.com/early_error_handling.3879d40234d8e056e725.js.map
