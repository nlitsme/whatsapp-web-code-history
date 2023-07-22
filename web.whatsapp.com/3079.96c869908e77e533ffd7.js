/*! Copyright (c) 2021 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[3079],{15115:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.definePersistedJob=function(){return new i([])},t.JobBuilder=void 0;var n=s(57148),r=s(55329);class i{constructor(e){this.steps=e}step(e,t){return this._stepWithOptions(e,"function"==typeof t?{code:t}:t)}_stepWithOptions(e,t){const{stopRetryIf:s,requirements:a,code:p}=t;let d=u(a,p,s);if(s){const{timePassedSeconds:e,appCrashed:t,onStopRetry:i}=s,a=u(null,function(e){return(t,s,n)=>Promise.resolve(e(t,s,n)).then((e=>e instanceof r.InterruptJob?e:new r.InterruptJob(e)))}(i),s);null!=e&&(d=o(((t,s,{jobStartTime:r})=>(0,n.happenedWithin)(r,e)),d,a)),t&&(d=o(((e,t,{afterCrash:s})=>!s),d,a))}return new i([...this.steps,{stepName:e,info:d}])}finalStep(e,t){const s=this.step(e,t);return{end:()=>s.steps}}}function o(e,t,s){return(n,r,i)=>e(n,r,i)?t(n,r,i):s(n,r,i)}function u(e,t,s){const n={requirements:e,code:t,stopRetryIf:s};return()=>n}t.JobBuilder=i},50113:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineWebPersistedJob=function(){return(0,n.definePersistedJob)()};var n=s(15115)},33079:(e,t,s)=>{"use strict";var n=s(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(s(48926)),i=s(10817),o=s(84922),u=s(50113);const a=new(s(41118).WapParser)("aboutResponse",(e=>(e.assertAttr("type","result"),{id:e.attrInt("id")})));var p=(0,u.defineWebPersistedJob)().finalStep("sendStanza",function(){var e=(0,r.default)((function*({content:e}){const t=(0,i.wap)("iq",{to:i.S_WHATSAPP_NET,type:"set",xmlns:"status",id:(0,i.generateId)()},(0,i.wap)("status",null,e)),s=yield(0,o.sendIq)(t,a);return s.success?{status:200}:{status:s.errorCode}}));return function(){return e.apply(this,arguments)}}()).end();t.default=p}}]);