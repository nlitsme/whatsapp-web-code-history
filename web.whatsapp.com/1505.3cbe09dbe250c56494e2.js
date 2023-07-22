/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[1505],{58114:(e,l,a)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.JobBuilder=void 0,l.definePersistedJob=function(){return new r([])};var t=a(47901),n=a(92844);class r{constructor(e){this.steps=e}step(e,l){return this._stepWithOptions(e,"function"==typeof l?{code:l}:l)}_stepWithOptions(e,l){const{stopRetryIf:a,requirements:u,code:o}=l;let d=s(u,o,a);if(a){const{timePassedSeconds:e,appCrashed:l,onStopRetry:r}=a,u=s(null,function(e){return(l,a,n)=>Promise.resolve(e(l,a,n)).then((e=>e instanceof t.InterruptJob?e:new t.InterruptJob(e)))}(r),a);null!=e&&(d=i(((l,a,t)=>{let{jobStartTime:r}=t;return(0,n.happenedWithin)(r,e)}),d,u)),l&&(d=i(((e,l,a)=>{let{afterCrash:t}=a;return!t}),d,u))}return new r([...this.steps,{stepName:e,info:d}])}finalStep(e,l){const a=this.step(e,l);return{end:()=>a.steps}}}function i(e,l,a){return(t,n,r)=>e(t,n,r)?l(t,n,r):a(t,n,r)}function s(e,l,a){const t={requirements:e,code:l,stopRetryIf:a};return()=>t}l.JobBuilder=r},26046:e=>{"use strict";const l={fragment:{argumentDefinitions:a=[{defaultValue:null,kind:"LocalArgument",name:"request"}],kind:"Fragment",metadata:null,name:"queryProductListCatalogQuery",selections:i=[{alias:null,args:[{kind:"Variable",name:"request",variableName:"request"}],concreteType:"XWAProductCatalogGetProductListResponseSuccess",kind:"LinkedField",name:"xwa_product_catalog_get_product_list",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogGetProductListResponseSuccessProductList",kind:"LinkedField",name:"product_list",plural:!1,selections:[{alias:null,args:null,concreteType:"XWAProductCatalogGetProductListResponseSuccessProductListProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{kind:"InlineFragment",selections:[t,n={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"retailer_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_hidden",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"availability",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"currency",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"price",storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogProductStatusInfo",kind:"LinkedField",name:"status_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"can_appeal",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogProductSalePrice",kind:"LinkedField",name:"sale_price",plural:!1,selections:[r,{alias:null,args:null,kind:"ScalarField",name:"start_date",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_date",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogProductMedia",kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,concreteType:"XWAProductCatalogProductMediaImage",kind:"LinkedField",name:"images",plural:!0,selections:[n,{alias:null,args:null,kind:"ScalarField",name:"original_image_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"request_image_url",storageKey:null}],storageKey:null}],storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"belongs_to",storageKey:null}],type:"XWAProductCatalogGetResponseSuccessProductCatalogProduct",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"compliance_category",storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogGetProductResponseSuccessProductCatalogProductComplianceInfo",kind:"LinkedField",name:"compliance_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"country_code_origin",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"importer_name",storageKey:null},{alias:null,args:null,concreteType:"XWAProductCatalogGetProductResponseSuccessProductCatalogProductComplianceInfoImporterAddress",kind:"LinkedField",name:"importer_address",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"street1",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"street2",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"postal_code",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"city",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"region",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"country_code",storageKey:null}],storageKey:null}],storageKey:null}],type:"XWAProductCatalogGetProductResponseSuccessProductCatalogProduct",abstractKey:null}],type:"XWAICatalogProduct",abstractKey:"__isXWAICatalogProduct"}],storageKey:null}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"queryProductListCatalogQuery",selections:i},params:{id:"queryProductListCatalogQuery",metadata:{},name:"queryProductListCatalogQuery",operationKind:"query",text:null}};var a,t,n,r,i;l.hash="2022513dc8cc1eb839cc2d3078d946a9",e.exports=l},78972:(e,l,a)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.defineWebPersistedJob=function(){return(0,t.definePersistedJob)()};var t=a(58114)},71505:(e,l,a)=>{"use strict";var t=a(95318);Object.defineProperty(l,"__esModule",{value:!0}),l.QueryProductListCatalog=void 0;var n,r=t(a(48926)),i=t(a(53872)),s=t(a(45095)),u=a(31914),o=a(71914),d=a(92574),c=a(48089),g=a(8139),p=a(1321),y=a(45454),_=t(a(57291)),m=a(23216),P=a(24747),k=a(78972),S=a(90667),f=a(53069),h=a(26002),F=a(39410);const C=new o.WapParser("productListResponse",(e=>{e.assertTag("iq"),e.assertFromServer();const l=e.child("product_list"),a=[];return l.forEachChildWithTag("product",(e=>{const l=e.maybeChild("id");if(!l)return;const t=e.maybeChild("status");(null==t?void 0:t.contentString())===h.INVALID_PRODUCT_TOKEN?a.push({id:l.contentString(),status:h.INVALID_PRODUCT_TOKEN}):a.push((0,S.parseProductNode)(e))})),a})),K=function(){var e=(0,r.default)((function*(e){let{catalogWid:l,productIds:a,width:t,height:n,directConnectionEncryptedInfo:r}=e;const i=(0,u.wap)("iq",{to:u.S_WHATSAPP_NET,type:"get",smax_id:"21",xmlns:"w:biz:catalog",id:(0,u.generateId)()},(0,u.wap)("product_list",{jid:(0,F.USER_JID)((0,y.createWid)(l))},a.map((e=>(0,u.wap)("product",null,(0,u.wap)("id",null,e)))).concat((0,_.default)([(0,u.wap)("width",null,t.toString()),(0,u.wap)("height",null,n.toString()),r?(0,u.wap)("direct_connection_encrypted_info",null,r):null])))),s=yield(0,P.sendIq)(i,C);if(s.success)return s.result;throw new d.ServerStatusCodeError(s.errorCode)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=(0,r.default)((function*(e){try{var l,t;const{catalogWid:r,productIds:i,width:u,height:o,directConnectionEncryptedInfo:d}=e,c=yield(0,p.fetchQuery)(void 0!==n?n:n=a(26046),{request:{product_list:{jid:r.toString(),products:i.map((e=>({id:e}))),width:String(u),height:String(o),direct_connection_encrypted_info:d}}},{eventLogger:(0,m.createCatalogEventLogger)(m.GRAPHQL_CATALOG_ENDPOINT.GET_PRODUCT_LIST)});return(0,s.default)(null==c||null===(l=c.xwa_product_catalog_get_product_list)||void 0===l||null===(t=l.product_list)||void 0===t?void 0:t.products.map(f.parseProductGraphQL),"data?.xwa_product_catalog_get_product_list?.product_list?.products.map(parseProductGraphQL)")}catch(l){return l instanceof c.GraphQLServerError&&(0,i.default)(l),__LOG__(3)`GraphQL: Failed fetching xwa_product_catalog_get_product_list query. Falling back to IQ.`,K(e)}}));return function(){return e.apply(this,arguments)}}(),b=(0,k.defineWebPersistedJob)().finalStep("sendStanza",(e=>((0,g.graphQLForCatalogM1Enabled)()?L:K)(e))).end();l.QueryProductListCatalog=b}}]);
//# sourceMappingURL=https://web.whatsapp.com/1505.3cbe09dbe250c56494e2.js.map
