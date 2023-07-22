/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[1317],{158114:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.JobBuilder=void 0,t.definePersistedJob=function(){return new i([])};var n=s(247901),r=s(892844);class i{constructor(e){this.steps=e}step(e,t){return this._stepWithOptions(e,"function"==typeof t?{code:t}:t)}_stepWithOptions(e,t){const{stopRetryIf:s,requirements:d,code:l}=t;let c=a(d,l,s);if(s){const{timePassedSeconds:e,appCrashed:t,onStopRetry:i}=s,d=a(null,function(e){return(t,s,r)=>Promise.resolve(e(t,s,r)).then((e=>e instanceof n.InterruptJob?e:new n.InterruptJob(e)))}(i),s);null!=e&&(c=o(((t,s,n)=>{let{jobStartTime:i}=n;return(0,r.happenedWithin)(i,e)}),c,d)),t&&(c=o(((e,t,s)=>{let{afterCrash:n}=s;return!n}),c,d))}return new i([...this.steps,{stepName:e,info:c}])}finalStep(e,t){const s=this.step(e,t);return{end:()=>s.steps}}}function o(e,t,s){return(n,r,i)=>e(n,r,i)?t(n,r,i):s(n,r,i)}function a(e,t,s){const n={requirements:e,code:t,stopRetryIf:s};return()=>n}t.JobBuilder=i},647292:(e,t,s)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defineWebPersistedJob=function(){return(0,n.definePersistedJob)()};var n=s(158114)},261317:(e,t,s)=>{"use strict";var n=s(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.deleteReactionsV2=t.deleteAddOns=void 0;var r=n(s(348926)),i=s(647292),o=s(408139),a=n(s(465212)),d=s(758180),l=s(524528),c=s(727485),u=s(957881),p=s(584886),f=s(465193);const y=(0,i.defineWebPersistedJob)().finalStep("deleteAddOns",function(){var e=(0,r.default)((function*(e){let{chatId:t,parentMsgKeys:s}=e;const n=yield Promise.allSettled([_({chatId:t,parentMsgKeys:s}),g({chatId:t,parentMsgKeys:s})]);for(const e of n)if("rejected"===e.status)throw e.reason}));return function(){return e.apply(this,arguments)}}()).end();t.deleteAddOns=y;const h=(0,i.defineWebPersistedJob)().finalStep("deleteReactionsV2",(e=>{let{chatId:t,parentMsgKeys:s}=e;return _({chatId:t,parentMsgKeys:s})})).end();function _(){return b.apply(this,arguments)}function b(){return(b=(0,r.default)((function*(e){let{chatId:t,parentMsgKeys:s}=e;if(!(0,o.receiveReactionsEnabled)())return;__LOG__(2)`Persisted: deleteReactionsV2 persisted job started for ${t}`;const n=yield(0,u.getAllReactionsFromParentMsgs)(s),r=n.map((e=>e.msgKey));if(0===r.length)return void __LOG__(2)`Persisted: deleteReactionsV2 finished, no reactionsMsgKeys`;const i=[];r.forEach((e=>{a.default.fromString(e).fromMe&&i.push(e)})),i.length>0&&(yield(0,p.removeMessagesFromHistory)(i));const d=n.map((e=>[e.parentMsgKey,e.senderUserJid]));yield(0,c.deleteReactionsByRecords)(d),yield(0,f.deleteDatabaseForLastReactionPreview)(s),__LOG__(2)`Persisted: deleteReactionsV2 finished`}))).apply(this,arguments)}function g(){return P.apply(this,arguments)}function P(){return(P=(0,r.default)((function*(e){let{chatId:t,parentMsgKeys:s}=e;(0,d.isPollsReceivingEnabled)()&&(__LOG__(2)`Persisted: deletePollVotes persisted job started for ${t}`,yield(0,l.deletePollVotesByParentMsgKeys)(s),__LOG__(2)`Persisted: deleteReactionsV2 finished`)}))).apply(this,arguments)}t.deleteReactionsV2=h},524528:(e,t,s)=>{"use strict";var n=s(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.deletePollVotesByParentMsgKeys=function(){return a.apply(this,arguments)};var r=n(s(348926)),i=s(986868),o=s(604586);function a(){return(a=(0,r.default)((function*(e){const t=yield(0,o.getTable)().anyOf(["parentMsgKey"],e);if(0===t.length)return;const s=t.map((e=>e.msgKey)),n=t.map((e=>[e.parentMsgKey,e.sender])),r=yield Promise.allSettled([(0,i.removeMessagesFromHistory)(s),(0,o.getTable)().bulkRemove(n)]);for(const e of r)if("rejected"===e.status)throw e.reason}))).apply(this,arguments)}}}]);
//# sourceMappingURL=https://web.whatsapp.com/1317.040bd0ac704c181b60f0.js.map
