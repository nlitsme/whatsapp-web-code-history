/*! Copyright (c) 2024 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[9159],{273925:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JobBuilder=void 0,e.definePersistedJob=function(){return new r([])};var a=n(811158),s=n(632157);class r{constructor(t){this.steps=t}step(t,e){return this._stepWithOptions(t,"function"==typeof e?{code:e}:e)}_stepWithOptions(t,e){const{stopRetryIf:n,requirements:o,code:l}=e;let p=i(o,l,n);if(n){const{timePassedSeconds:t,appCrashed:e,onStopRetry:r}=n,o=i(null,function(t){return(e,n,s)=>Promise.resolve(t(e,n,s)).then((t=>t instanceof a.InterruptJob?t:new a.InterruptJob(t)))}(r),n);null!=t&&(p=u(((e,n,a)=>{let{jobStartTime:r}=a;return(0,s.happenedWithin)(r,t)}),p,o)),e&&(p=u(((t,e,n)=>{let{afterCrash:a}=n;return!a}),p,o))}return new r([...this.steps,{stepName:t,info:p}])}finalStep(t,e){const n=this.step(t,e);return{end:()=>n.steps}}}function u(t,e,n){return(a,s,r)=>t(a,s,r)?e(a,s,r):n(a,s,r)}function i(t,e,n){const a={requirements:t,code:e,stopRetryIf:n};return()=>a}e.JobBuilder=r},193182:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.defineWebPersistedJob=function(){return(0,a.definePersistedJob)()};var a=n(273925)},196327:(t,e,n)=>{"use strict";var a=n(595318);Object.defineProperty(e,"__esModule",{value:!0}),e.mexUpdateTextStatus=function(){return o.apply(this,arguments)};var s,r=a(n(348926)),u=n(123982),i=n(574892);function o(){return(o=(0,r.default)((function*(t,e,a){const r=void 0!==s?s:s=n(769009),o=(0,i.createTextStatusObjectForUpdateRequest)({textStatusString:t,textStatusEmoji:e,textStatusEphemeralDuration:a});return yield(0,u.fetchQuery)(r,{input:o})}))).apply(this,arguments)}},769009:t=>{"use strict";var e,n,a={fragment:{argumentDefinitions:e=[{defaultValue:null,kind:"LocalArgument",name:"input"}],kind:"Fragment",metadata:null,name:"WAWebMexUpdateTextStatusJobMutation",selections:n=[{alias:null,args:[{kind:"Variable",name:"text_status_input",variableName:"input"}],concreteType:"XWA2TextStatusMutationResponse",kind:"LinkedField",name:"xwa2_update_text_status",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"result",storageKey:null}],storageKey:null}],type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"WAWebMexUpdateTextStatusJobMutation",selections:n},params:{id:"6995196977195668",metadata:{},name:"WAWebMexUpdateTextStatusJobMutation",operationKind:"mutation",text:null}};t.exports=a},559159:(t,e,n)=>{"use strict";var a=n(595318);Object.defineProperty(e,"__esModule",{value:!0}),e.setTextStatus=void 0;var s=a(n(348926)),r=n(193182),u=n(465232);const i=(0,r.defineWebPersistedJob)().finalStep("sendMex",function(){var t=(0,s.default)((function*(t){let{id:e,text:n,emoji:a,ephemeralDurationSeconds:s}=t;return yield(0,u.updateTextStatus)(e,n,a,s)}));return function(){return t.apply(this,arguments)}}()).end();e.setTextStatus=i},465232:(t,e,n)=>{"use strict";var a=n(595318);Object.defineProperty(e,"__esModule",{value:!0}),e.updateTextStatus=function(){return i.apply(this,arguments)};var s=a(n(348926)),r=n(795139),u=n(196327);function i(){return(i=(0,s.default)((function*(t,e,n,a){var s;const i=new r.GraphQlPerfTracker("update-text-status");i.start(),i.toUseGraphQL();const o=null===(s=(yield(0,u.mexUpdateTextStatus)(e,n,a)).xwa2_update_text_status)||void 0===s?void 0:s.result;return i.stop(),__LOG__(2)`updateTextStatus:${t.toString()}`,{id:t,result:o}}))).apply(this,arguments)}}}]);
//# sourceMappingURL=https://web.whatsapp.com/9159.16630a5ffeb304945025.js.map