/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[5617],{307914:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},595318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},415227:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){const t=new Error(e);if(void 0===t.stack)try{throw t}catch(e){}return t}},670983:(e,t,r)=>{"use strict";var n=r(307914);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";if(null==e)throw(0,o.default)(`Unexpected null or undefined: ${t}`);return e};var o=n(r(415227))},801506:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE=t.TICKET_URL=t.CLB_URL=t.CLB_TOKEN=t.CLB_CHECK_URL=void 0;var n=r(508247);t.CLB_CHECK_URL="https://crashlogs.whatsapp.net/wa_fls_upload_check";t.CLB_TOKEN="1063127757113399|745146ffa34413f9dbb5469f5370b7af";t.CLB_URL="https://crashlogs.whatsapp.net/wa_clb_data";const o=`${n.DYN_ORIGIN}web-contact-us`;t.TICKET_URL=o;t.UNIQUE_UPLOADS_ALLOWED_BEFORE_THROTTLE=0},207024:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.getDistribution=function(){let e="unknown";return e="prod","web_prod"},t.getLogUserAgent=function(e){let t,{appVersion:r,browser:n,device:o}=e;return t="Web/"+n,`WhatsApp/${r} ${t} Device/${o}`};n(r(97359)),n(r(556869))},794858:(e,t,r)=>{"use strict";var n=r(595318);var o=n(r(670983)),a=r(508247),s=r(801506),c=r(207024),u=n(r(174285)),_=r(425017);function i(e,t,r){const n=t.split("?")[0];if("Uncaught SyntaxError: Unexpected token '<'"===e)return function(e){const t=e.split("/")[3].replace(/^\//,"");l(d({error:"failed to load a js or css bundle",reason:`failed to load [${t}]`,stack:""}))}(n),!0;return l(d({error:e,reason:`Error at [${n}:${r}]`,stack:""})),!1}function l(e){!function(e,t){const r=window.navigator.userAgent;if(r===p&&e.includes("getElementsByTagName"))return;const n=new FormData,i=new Blob([e],{type:"text/plain"});n.append("from_jid",function(){if(I)return I;try{I=JSON.parse((0,o.default)(u.default,"localStorage").getItem(f.UNKNOWN_ID)),I&&(I=I.replace("-",""))}catch(e){}if(!I){I="unknown"+Math.floor(1e10*Math.random());const e=I;try{(0,o.default)(u.default,"localStorage").setItem(f.UNKNOWN_ID,JSON.stringify(e))}catch(e){}}return(0,o.default)(I,"id")}()),n.append("agent",(0,c.getLogUserAgent)((0,_.parseUASimple)(r,a.VERSION_BASE))),n.append("file",i,"logs.txt"),n.append("tags",t);const l=new XMLHttpRequest,d=s.CLB_URL+"?access_token="+encodeURIComponent(s.CLB_TOKEN);l.open("POST",d,!0),l.send(n)}(e,"load")}function d(e){let{error:t,reason:r,stack:n}=e;const o=(new Date).toISOString();return`${o}: error: ${t}\n${o}: reason for logs: ${r}\n${o}: userAgent: ${window.navigator.userAgent}\n${n}`}null==window.onerror&&(window.onerror=i);const f={UNKNOWN_ID:a.UNKNOWN_ID},p="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36";let I},425017:(e,t)=>{"use strict";function r(e){return e.includes("windows")?"Windows":e.includes("mac")?"Mac OS":e.includes("linux")?"Linux":"Unparsed"}Object.defineProperty(t,"__esModule",{value:!0}),t.parseUASimple=function(e,t){const n=e.toLowerCase();return{browser:s(n),device:r(n),appVersion:t}};const n=/(chrome|firefox)\/([\w\.]+)/i,o=/(edge|opr)\/([\w\.]+)/i,a={chrome:"Chrome",edge:"Edge",opr:"Opera",firefox:"Firefox"};function s(e){const t=e.match(o)||e.match(n);return null==t?"Unparsed":`${a[t[1]]} ${t[2]}`}},174285:(e,t)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;try{r=window.localStorage}catch(e){}var n=r;t.default=n},508247:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WS_ORIGIN=t.WEB_PUBLIC_PATH=t.VERSION_TERTIARY=t.VERSION_STR=t.VERSION_SECONDARY=t.VERSION_PRIMARY=t.VERSION_BASE=t.USER_TIMINGS=t.UNKNOWN_ID=t.LOCALHOST_ENV_CONFIG=t.HASH_PLACEHOLDER=t.FLB_PLATFORM=t.FB_APP_ID=t.DYN_ORIGIN=t.DIFF_VERSION=t.DIFF_ID=t.BUILD_URL=t.BUILD_TIMESTAMP=t.BUILD_ID=void 0;const r=("","");t.DIFF_ID=r;const n=("","");t.DIFF_VERSION=n;t.LOCALHOST_ENV_CONFIG=!1;t.HASH_PLACEHOLDER="d2adb25a714b5f0a53bcf26279141679621349ec";t.VERSION_PRIMARY="2";t.VERSION_SECONDARY="2402";t.VERSION_TERTIARY="5";t.VERSION_BASE="2.2402.5";t.VERSION_STR="2.2402.5";t.DYN_ORIGIN="https://web.whatsapp.com/";t.WS_ORIGIN="";t.FLB_PLATFORM="web";t.FB_APP_ID="";t.UNKNOWN_ID="WAUnknownID";t.BUILD_ID="555280017";t.BUILD_TIMESTAMP="January 11, 2024";t.WEB_PUBLIC_PATH="/";t.BUILD_URL="https://web.whatsapp.com/";t.USER_TIMINGS=!1},97359:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.default}},556869:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){const r=new Error(t);if(void 0===r.stack)try{throw e}catch(e){}return r}}},e=>{"use strict";var t;t=794858,e(e.s=t)}]);
//# sourceMappingURL=https://web.whatsapp.com/early_error_handling.151a9553a044ef730c3e.js.map