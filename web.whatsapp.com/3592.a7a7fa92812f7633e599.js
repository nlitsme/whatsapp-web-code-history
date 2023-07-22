/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[3592],{411597:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.AdditionalChargesFormDrawer=function(e){let{currency:t,subtotal:r,additionalCharges:n,onBack:u,onApply:x}=e;const C=(null==n?void 0:n.discountText)||"",[M,T]=(0,y.useState)(C),O=(null==n?void 0:n.taxText)||"",[j,A]=(0,y.useState)(O),P=(null==n?void 0:n.shippingText)||"",[I,E]=(0,y.useState)(P),D=(null==n?void 0:n.discountType)||_,[w,k]=(0,y.useState)(D),R=(null==n?void 0:n.taxType)||S,[L,N]=(0,y.useState)(R),[F,U]=(0,y.useState)(!1),[q,B]=(0,y.useState)(!1),H=(0,y.useMemo)((()=>(0,i.additionalChargeErrorHandler)({currency:t,value:I})),[t,I]),G=[F,q,H].some((e=>e));return(0,v.jsxs)(p.default,{children:[(0,v.jsx)(m.DrawerHeader,{title:h.fbt._("Add discount, shipping or tax",null,{hk:"nPDUK"}),type:m.DRAWER_HEADER_TYPE.SMALL,onBack:C!==M||O!==j||P!==I||D!==w||R!==L?()=>{o.ModalManager.open((0,v.jsx)(l.ConfirmDiscardModal,{onOK:u}))}:u,focusBackOrCancel:!0}),(0,v.jsxs)(g.default,{className:(0,b.default)(d.uiPadding.all16),children:[(0,v.jsx)(a.AdditionalChargesTextInput,{text:M,testid:"additional-charges-discount-input",label:h.fbt._("Discount",null,{hk:"3acZrp"}),symbol:w,currency:t,priceValue:r,setText:T,setError:U,setSymbol:k}),(0,v.jsx)(f.TextInput,{value:I,testid:"additional-charges-shipping-input",placeholder:h.fbt._("Shipping ({currency_symbol})",[h.fbt._param("currency_symbol",(0,c.formatAmount1000ToParts)(t,0).symbol)],{hk:"H2WDY"}),onChange:E,theme:"small",maxLength:10,customStyleThemes:["desaturated"],error:H}),(0,v.jsx)(a.AdditionalChargesTextInput,{text:j,testid:"additional-charges-tax-input",label:h.fbt._("Tax",null,{hk:"2r5wzT"}),symbol:L,currency:t,priceValue:r,setText:A,setError:B,setSymbol:N}),(0,v.jsx)(s.OrderApplyChangesButton,{disabled:G,testid:"apply-additional-costs-button",title:h.fbt._("Apply",null,{hk:"3E5Tq7"}),onClick:()=>x({discountText:M,taxText:j,shippingText:I,discountType:w,taxType:L})})]})]})};var o=r(114850),a=r(633571),l=r(100149),i=r(353950),u=r(238977),s=r(208160),d=r(50010),c=r(153593),f=r(517732),p=n(r(168625)),m=r(940237),g=n(r(337090)),h=r(548360),y=r(667294),b=n(r(156720)),v=r(785893);const _=u.PERCENTAGE_SYMBOL,S=u.PERCENTAGE_SYMBOL},633571:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.AdditionalChargesTextInput=function(e){let{text:t,label:r,symbol:n,testid:m,currency:g,priceValue:h,setText:y,setError:b,setSymbol:v}=e;const _=(0,s.useMemo)((()=>{const e=(0,a.additionalChargeErrorHandler)({label:r,currency:g,fieldType:n,maxFlatValue:h/l.DEFAULT_OFFSET,enablePercentValueCheck:!0,value:t});return b(Boolean(e)),e}),[t,r,n,g,b,h]);return(0,c.jsxs)("div",{className:(0,d.default)(f),children:[(0,c.jsx)(i.TextInput,{value:t,testid:m,placeholder:u.fbt._("{input_label} ({currency_or_percentage})",[u.fbt._param("input_label",r),u.fbt._param("currency_or_percentage",n)],{hk:"vf1Ko"}),onChange:e=>y(e),theme:"small",maxLength:10,customStyleThemes:["desaturated"],error:_}),(0,c.jsx)("div",{className:(0,d.default)(p),children:(0,c.jsx)(o.OrderDetailAmountTypeSelector,{currency:g,value:n,onChange:e=>{let{value:t}=e;return v(t)}})})]})};var o=r(660516),a=r(353950),l=r(238977),i=r(517732),u=r(548360),s=r(667294),d=n(r(156720)),c=r(785893);const f={position:"g0rxnol2"},p={position:"lhggkp7q",end:"ebjesfe0",zIndex:"mb8var44",top:"agjvi7sf"}},25968:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.OrderCatalogFormDrawer=function(e){let{currency:t,productsSelection:r,orderItems:n,priceMap:M,onBack:T,onAddProducts:O,onAddCustomItem:j,onProductSelectionChange:A}=e;const[P,I]=(0,b.useState)(!1),E=(0,_.default)(),D=(0,S.default)((()=>new a.default)),w=r.getSelected().reduce(((e,t)=>{var n,o;return e+(null!==(n=null!==(o=t.priceAmount1000)&&void 0!==o?o:M[t.id.toString()])&&void 0!==n?n:0)*Number(r.getVal(t))}),0),k=n.filter((e=>e.isCustomItem)).reduce(((e,t)=>e+t.price*t.quantity),0);return(0,x.jsxs)(p.default,{children:[(0,x.jsx)(g.DrawerHeader,{title:y.fbt._("Add items",null,{hk:"2U1Vru"}),type:g.DRAWER_HEADER_TYPE.SMALL,onBack:P?()=>{l.ModalManager.open((0,x.jsx)(s.ConfirmDiscardModal,{onOK:T}))}:T,focusBackOrCancel:!0}),(0,x.jsxs)(m.default,{children:[(0,x.jsxs)(h.default,{theme:"expand-height",xstyle:C.drawerSection,children:[(0,o.orderDetailsCustomItemEnabled)()&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.AddOrderItem,{title:y.fbt._("Create new item",null,{hk:"2GmSAs"}),onClick:j}),(0,x.jsx)("hr",{className:(0,v.default)(C.catalogBar,c.uiMargin.vert0)})]}),(0,x.jsx)("p",{className:(0,v.default)(C.catalogTitleText,c.uiPadding.start16,c.uiPadding.vert10),children:y.fbt._("Catalog items",null,{hk:"4chzUe"})}),(0,x.jsx)(u.default,{className:(0,v.default)(C.catalogProductsList),productsSelection:r,orderItems:n,flatListController:D.current,onProductSelectChange:function(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];A(e,t),r||P||I(!0),E()}})]}),(0,x.jsx)(d.OrderTotalPrice,{xstyle:[c.uiPadding.all16,c.uiMargin.top10],visible:!0,disabled:!P,totalPrice:(0,f.formatAmount1000)(t,w+k),testid:"save-products-button",onConfirm:O,title:y.fbt._("Subtotal",null,{hk:"4ciFet"}),confirmTitle:y.fbt._("Add to Order",null,{hk:"2SYeoP"})})]})]})};var o=r(72696),a=n(r(570834)),l=r(114850),i=r(359162),u=n(r(881238)),s=r(100149),d=r(208160),c=r(50010),f=r(153593),p=n(r(168625)),m=n(r(531633)),g=r(940237),h=n(r(337090)),y=r(548360),b=r(667294),v=n(r(156720)),_=n(r(229439)),S=n(r(470649)),x=r(785893);const C={catalogTitleText:{fontWeight:"m1e7cby3",lineHeight:"tkq7s68q",fontSize:"ovllcyds",color:"q70jrbp7"},catalogBar:{width:"ln8gz9je",borderEnd:"eta5aym1",borderBottom:"d9802myq",borderStart:"e4xiuwjv",borderTop:"gq6acybq"},catalogProductsList:{overflowX:"i44ccddp",overflowY:"ag5g9lrv",flexGrow:"ggj6brxn",flexShrink:"m0h2a7mj",flexBasis:"l07amlnk"},drawerSection:{display:"p357zi0d",overflowX:"i44ccddp",overflowY:"ag5g9lrv",flexDirection:"f8m0rgwh"}}},504234:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.CatalogFormProduct=function(e){let{product:t,productsSelection:r,onProductSelectChange:n}=e;const s=Number(r.getVal(t))||0,[d,c]=(0,i.useState)(!1);return(0,u.jsx)("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:(0,u.jsx)(a.default,{product:t,detail:(d||r.isSelected(t))&&(0,u.jsx)(o.default,{quantity:s,quantityTitle:l.fbt._("Items in order",null,{hk:"35Mpfd"}),isCollapsed:!d,onAddOneClick:()=>n(t,s+1),onRemoveOneClick:()=>n(t,s-1)}),managedFocus:!0,theme:"product-add-to-order"})})};var o=n(r(763879)),a=n(r(698690)),l=r(548360),i=r(667294),u=r(785893)},881238:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{className:t,productsSelection:r,orderItems:n,flatListController:_,onProductSelectChange:S}=e;const x=(0,b.default)(),C=(0,g.default)(),M=(0,m.default)(C,100),T=a.CatalogCollection.assertGet((0,f.getMaybeMeUser)()),[O,j]=(0,p.useState)(!1),[A,P]=(0,p.useState)(0),[I,E]=(0,p.useState)(!1),D=()=>{const e=new Set(n.map((e=>{let{id:t}=e;return t})));return T.productCollection.getProductModels().filter((t=>!e.has(t.id))).map((e=>({itemKey:e.id.toString(),product:e})))},w=e=>{e.forEach((e=>{const t=n.find((t=>{let{id:r}=t;return r===e.product.id}));void 0!==t&&S(e.product,Number(t.quantity),!0)}))},k=function(){var e=(0,o.default)((function*(){if(I)return;if(!T.afterCursor)return;const e=T.productCollection.getProductModels().length;j(!0),P(e);try{const t=yield a.CatalogCollection.update((0,f.getMaybeMeUser)());if(x.aborted)return;j(!1);const r=(Array.isArray(t)?t[0]:t).productCollection.getProductModels().length;if(w(D().slice(e)),r===A&&E(!0),e*c.PRODUCT_LIST_ITEM_HEIGHT<window.innerHeight)return k()}catch(e){j(!1),E(!0)}}));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((()=>{w(D()),k()}),[]),(0,h.useListener)(T.productCollection,"add",M);const R=(0,y.default)((e=>{O||e.scrollTop+s.SCROLL_FUDGE>e.scrollHeight-e.clientHeight&&k()}),100);return(0,v.jsxs)(i.default,{className:t,flatListControllers:[_],onScroll:e=>{e.currentTarget&&R(e.currentTarget)},children:[(0,v.jsx)(l.FlatList,{flatListController:_,direction:"vertical",forceConsistentRenderCount:!1,data:D(),renderItem:e=>{let{product:t}=e;return(0,v.jsx)(d.CatalogFormProduct,{product:t,productsSelection:r,onProductSelectChange:S})},defaultItemHeight:c.PRODUCT_LIST_ITEM_HEIGHT}),O&&(0,v.jsx)(u.default,{})]})};var o=n(r(348926)),a=r(644130),l=r(512938),i=n(r(964223)),u=n(r(495012)),s=r(914368),d=r(504234),c=r(899841),f=r(459857),p=r(667294),m=n(r(461993)),g=n(r(229439)),h=r(148725),y=n(r(38751)),b=n(r(189957)),v=r(785893)},100149:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.ConfirmDiscardModal=function(e){let{onOK:t}=e;return(0,u.jsx)(l.default,{title:i.fbt._("Discard changes?",null,{hk:"1SaEaC"}),onOK:()=>{o.ModalManager.close(),t()},okText:i.fbt._("Discard",null,{hk:"3etb6C"}),onCancel:()=>o.ModalManager.close(),children:(0,u.jsx)(a.TextDiv,{theme:"muted",children:i.fbt._("If you close this, your draft will be discarded.",null,{hk:"4G5DVj"})})})};var o=r(114850),a=r(206642),l=n(r(744259)),i=r(548360),u=r(785893)},973176:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.CustomItemFormDrawer=function(e){let{currency:t,customItem:r,onBack:n,onSaveCustomItem:o}=e;const[S,x]=(0,y.useState)(null==r?void 0:r.name),[C,M]=(0,y.useState)(Number.isInteger(null==r?void 0:r.price)?String(Number(null==r?void 0:r.price)/1e3):null),[T,O]=(0,y.useState)(null==r?void 0:r.price),[j,A]=(0,y.useState)((null==r?void 0:r.isQuantitySet)?r.quantity:null),[P,I]=(0,y.useState)((null==r?void 0:r.isQuantitySet)?String(r.quantity):null),E=(0,y.useMemo)((()=>function(e){if(null==e)return"";const t=String(h.fbt._("Add a title",null,{hk:"7Lm6B"}));return""===e.trim()?t:""}(S)),[S]),D=(0,y.useMemo)((()=>function(e,t){if(null==t)return"";const r=String(h.fbt._("Enter a valid price",null,{hk:"4yb1Sg"}));return""!==t.trim()&&(0,d.validatePriceString)(e,t,u.MIN_PRICE,u.MAX_PRICE)?"":r}(t,C)),[t,C]),w=(0,y.useMemo)((()=>function(e){if(null==e)return"";const t=String(h.fbt._("Enter a valid quantity",null,{hk:"u6SoG"}));return _(Number(e))?"":t}(P)),[P]),k=function(e,t,r,n){const o=(null==e?void 0:e.isQuantitySet)?Number(n)!==e.quantity:null!=n;return(null==e?void 0:e.name)!==t||(null==e?void 0:e.price)!==r||o}(r,S,T,P);return(0,v.jsxs)(f.default,{children:[(0,v.jsx)(m.DrawerHeader,{title:r?h.fbt._("Update item",null,{hk:"1TL07p"}):h.fbt._("Create new item",null,{hk:"4xRwlm"}),type:m.DRAWER_HEADER_TYPE.SMALL,onBack:k?()=>{a.ModalManager.open((0,v.jsx)(l.ConfirmDiscardModal,{onOK:n}))}:n,focusBackOrCancel:!0}),(0,v.jsx)(p.default,{children:(0,v.jsxs)(g.default,{className:(0,b.default)(s.uiPadding.all16),children:[(0,v.jsx)(c.TextInput,{testid:"custom-item-edit-name-input",value:S,placeholder:h.fbt._("Item name",null,{hk:"1TMRR7"}),onChange:e=>{x(e)},theme:"small",customStyleThemes:["desaturated"],maxLength:150,error:E}),(0,v.jsx)(c.TextInput,{testid:"custom-item-edit-price-input",value:C,placeholder:h.fbt._("Price {symbol}",[h.fbt._param("symbol",(0,d.formatAmount1000ToParts)(t,0).symbol)],{hk:"3jcGcb"}),onChange:e=>{const r=(0,d.valueFromString)(t,e);O(r),M(e)},theme:"small",maxLength:30,customStyleThemes:["desaturated"],error:D}),(0,v.jsx)(c.TextInput,{testid:"custom-item-edit-quantity-input",value:P,placeholder:h.fbt._("Quantity (Optional)",null,{hk:"4swiuO"}),onChange:e=>{let t=""===e?null:Number(e);_(t)||(t=null),A(t),I(""===e?null:e)},theme:"small",maxLength:30,customStyleThemes:["desaturated"],error:w}),(0,v.jsx)(i.OrderApplyChangesButton,{title:r?h.fbt._("Update Order",null,{hk:"HjU1X"}):h.fbt._("Add to Order",null,{hk:"3p1U18"}),disabled:null==S||null==C||!(!r||k)||[E,D,w].some((e=>e)),onClick:()=>{const e={name:S,priceAmount1000:+T,quantity:j,isQuantitySet:Number.isInteger(j)};o(e)},testid:"save-custom-item-button"})]})})]})};var o=r(753958),a=r(114850),l=r(100149),i=r(208160),u=r(75058),s=r(50010),d=r(153593),c=r(517732),f=n(r(168625)),p=n(r(531633)),m=r(940237),g=n(r(337090)),h=r(548360),y=r(667294),b=n(r(156720)),v=r(785893);function _(e){return Number.isInteger(e)&&+e>0&&+e<=o.CART_ITEM_MAX_QUANTITY}},660516:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.OrderDetailAmountTypeSelector=function(e){let{value:t,onChange:r,currency:n}=e;const d=l.formatLocalSymbol(n),c=i.fbt._("Select amount type",null,{hk:"1xddkG"}),f=[{id:"percentage",label:i.fbt._("by Percentage ({percentage-symbol})",[i.fbt._param("percentage-symbol",o.PERCENTAGE_SYMBOL)],{hk:"3fQwM3"}),value:o.PERCENTAGE_SYMBOL},{id:"flat-amount",label:i.fbt._("by Flat amount ({currency-symbol})",[i.fbt._param("currency-symbol",d)],{hk:"duPhj"}),value:d}],p=(0,u.useMemo)((()=>f.findIndex((e=>e.value===t))),[]);return(0,s.jsx)(a.default,{"aria-label":c,options:f,defaultIndex:p,onChange:r})};var o=r(238977),a=n(r(754493)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(153593)),i=r(548360),u=r(667294),s=r(785893);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}},754493:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{defaultIndex:t=0,options:r,onChange:n,"aria-label":p}=e;const m=(0,s.useRef)(null),[g,h]=(0,s.useState)(!1),[y,b]=(0,s.useState)(t),v=r.map(((e,t)=>{const{id:r,label:a}=e;return(0,c.jsx)(o.DropdownItem,{testid:`mi-${r}`,action:()=>{n(e),b(t)},children:(0,c.jsx)("div",{className:(0,d.default)(f),role:"button","aria-label":a,children:t===y?(0,c.jsx)(l.TextSpan,{weight:"bold",children:a}):a})},r)}));return(0,c.jsxs)("div",{ref:m,children:[(0,c.jsx)(a.default,{"aria-label":p,postfixIcon:"down",label:r[y].value,onClick:()=>h((e=>!e))}),g&&m.current&&(0,c.jsx)(i.UIE,{displayName:"ValuePicker",escapable:!0,popable:!0,dismissOnWindowResize:!0,requestDismiss:()=>h(!1),children:(0,c.jsx)(u.default,{contextMenu:{menu:v,anchor:m.current}})})]})};var o=r(675085),a=n(r(55524)),l=r(206642),i=r(76215),u=n(r(279685)),s=r(667294),d=n(r(156720)),c=r(785893);const f={boxSizing:"cm280p3y",color:"tviruh8d",cursor:"ajgl1lbb",fontSize:"f8jlpxt4",height:"lniyxyh2",lineHeight:"gz7w46tb",overflowX:"gfz4du6o",overflowY:"r7fjleex",paddingStart:"sta02ykp",paddingEnd:"pnfw7ual",paddingTop:"lqdozo90",textOverflow:"lhj4utae",whiteSpace:"le5p0ye3",position:"g0rxnol2"}},665195:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getErrorMsgFromProducts=i,t.notifyIfAnyProductMissesPrice=void 0;var n=r(390737),o=r(275125),a=r(548360),l=r(785893);function i(e){const t=e.length;return 0===t?"":1===t?a.fbt._("Enter a price for {first-product-name}",[a.fbt._param("first-product-name",e[0])],{hk:"Lf39K"}):2===t?a.fbt._("Enter prices for {first-product-name} and {second-product-name}",[a.fbt._param("first-product-name",e[0]),a.fbt._param("second-product-name",e[1])],{hk:"1uLet0"}):a.fbt._({"*":"Enter prices for {first-product-name}, {second-product-name} and {other-items} other items",_1:"Enter prices for {first-product-name}, {second-product-name} and 1 other item"},[a.fbt._plural(t-2,"other-items"),a.fbt._param("first-product-name",e[0]),a.fbt._param("second-product-name",e[1])],{hk:"1Crsuq"})}t.notifyIfAnyProductMissesPrice=(e,t)=>{const r=i(e.reduce(((e,r)=>{var n;const o=null!==(n=r.price)&&void 0!==n?n:t[r.id];return Number.isInteger(o)||e.push(r.name||""),e}),[]));r&&n.ToastManager.open((0,l.jsx)(o.Toast,{duration:1e4,id:(0,o.genId)(),msg:r,action:{actionText:a.fbt._("OKAY",null,{hk:"3RIrWh"}),dismiss:!0,theme:"success"}}))}},783592:(e,t,r)=>{"use strict";var n=r(595318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{entryPoint:t,order:r,chat:n,onBack:p}=e;const[P,L]=(0,D.useState)(N.ORDER_SUMMARY),[q,B]=(0,D.useState)(null),[H,G]=(0,D.useState)(!1),[Y,Q]=(0,D.useState)((()=>function(e){if(!e)return[];const t={isCustomItem:!1,isQuantitySet:!0},r=e.products.map((e=>new M.default((0,a.default)((0,a.default)({},t),e))));return(0,C.notifyIfAnyProductMissesPrice)(r,{}),r}(r))),[W,z]=(0,D.useState)({}),[V,K]=(0,D.useState)(null),X=(0,k.default)((()=>new g.default([],(e=>e.id.toString())))).current,$=c.CatalogCollection.get((0,O.getMeUser)()),Z=(e,t)=>{z((r=>(0,a.default)((0,a.default)({},r),{},{[t]:e})))},J=(0,D.useMemo)((()=>Y.reduce(((e,t)=>{var r,n;return e+(null!==(r=null!==(n=t.price)&&void 0!==n?n:W[t.id])&&void 0!==r?r:0)*t.quantity}),0)),[Y,W]),ee=(0,S.calculateFlatAmounts)({orderSubtotal:J/S.DEFAULT_OFFSET,discountType:(null==V?void 0:V.discountType)||"",discountText:(null==V?void 0:V.discountText)||"",taxType:(null==V?void 0:V.taxType)||"",taxText:(null==V?void 0:V.taxText)||"",shippingText:(null==V?void 0:V.shippingText)||""}),te=(0,d.hasCatalog)(s.BusinessProfileCollection.get((0,O.getMaybeMeUser)())),re=()=>{const e=Y.some((e=>W[e.id]));new A.default.OrderDetailsActionsSmb({orderDetailsCreationAction:A.default.ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,actionCategory:String(x.default.ORDER_DETAILS_CREATION),hasCatalog:te,hasAddedPrice:e,orderDetailEntryPoint:String(t)}).commit();const o=null!=r?r:b.OrderCollection.addOrder();o.products=Y.map((e=>{var t;return e.price=null!==(t=e.price)&&void 0!==t?t:W[e.id],e.currency=U,e})),o.currency=U,o.subtotal=J,o.triggerItemCollectionUpdate(),(0,u.sendOrderDetailsMessageAsMerchant)({order:o,chat:n,orderNote:"",offset:S.DEFAULT_OFFSET,total:ee.total,discount:ee.discount,shipping:ee.shipping,tax:ee.tax}),f.DrawerManager.closeDrawerRight()},ne=(0,w.default)((()=>{p?p():f.DrawerManager.closeDrawerRight()})),oe=()=>{!function(e,t,r){if(!e)return t.length>0;return t.length!==e.products.length||t.some(((t,n)=>{var o,a;return t.id!==e.products[n].id||t.quantity!==e.products[n].quantity||(null!==(o=null!==(a=t.price)&&void 0!==a?a:r[t.id])&&void 0!==o?o:null)!==e.products[n].price}))}(r,Y,W)?ne():m.ModalManager.open((0,R.jsx)(v.ConfirmDiscardModal,{onOK:ne}))},ae=e=>{!0!==e&&(0,C.notifyIfAnyProductMissesPrice)(Y,W),L(N.ORDER_SUMMARY)},le=()=>{L(N.CATALOG_PRODUCTS_FORM)},ie=(e,t)=>{const r=Number.isInteger(e)?e:null;B(r),G(!0===t),L(null==r||Y[r].isCustomItem?N.CUSTOM_ITEM_FORM:N.CATALOG_PRODUCTS_FORM)},ue=()=>{L(N.ADDITIONAL_CHARGES_FORM)},se=(e,t)=>{const r=e.length,n=e.reduce(((e,t,r)=>e.set(t.id,r)),new Map);return[...t].sort(((e,t)=>{var o,a;return(null!==(o=n.get(e.id))&&void 0!==o?o:r)-(null!==(a=n.get(t.id))&&void 0!==a?a:r)}))},de=e=>e.map((e=>{var t;return new M.default({id:e.id,name:e.name,price:e.priceAmount1000,thumbnailUrl:null===(t=e.getPreviewImage())||void 0===t?void 0:t.mediaUrl,quantity:Number(X.getVal(e)),isCustomItem:!1,isQuantitySet:!0})})),ce=(e,t,r)=>{const n=null==$?void 0:$.productCollection.getProductModels(),o=new Set(t.map((e=>{let{id:t}=e;return t}))),a=new Set(null==n?void 0:n.map((e=>{let{id:t}=e;return t})));return r.reduce(((e,t)=>{const r=o.has(t.id),n=a.has(t.id);return r||n?e:e.concat(t)}),e)},fe=function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];te&&Q((t=>{const r=X.getSelected(),n=de(r),o=ce(n,r,t);return e&&(0,C.notifyIfAnyProductMissesPrice)(o,W),se(t,o)}))},pe=e=>X.getSelected().find((t=>{let{id:r}=t;return r===e.id})),me=(e,t)=>{X.setVal(e,t)},ge=e=>{if(!Y[e].isCustomItem){const t=pe(Y[e]);t&&me(t,0)}Q((t=>[...t.slice(0,e),...t.slice(e+1)]))},he=(e,t)=>{if(Y[e].isCustomItem)((e,t)=>{t?Q((r=>{const n=[...r];return n[e].quantity=t,n[e].isQuantitySet=!0,n})):ge(e)})(e,t);else{const r=pe(Y[e]);r&&me(r,t),fe(!1)}},ye=function(){var e=(0,o.default)((function*(e){var t;let r,n=null==$?void 0:$.productCollection.getProductModels(),o=(null===(t=n)||void 0===t?void 0:t.length)||0,a=0;for(;(!r||!X.isSelected(r))&&a<o;){var l,i;yield c.CatalogCollection.update((0,O.getMaybeMeUser)()),a=o,n=null==$?void 0:$.productCollection.getProductModels(),r=null===(l=n)||void 0===l?void 0:l.find((t=>t.id===e.id)),r&&me(r,e.quantity),o=null===(i=n)||void 0===i?void 0:i.length}}));return function(){return e.apply(this,arguments)}}();(0,D.useEffect)((()=>{(()=>{if(!r)return[];const e=null==$?void 0:$.productCollection.getProductModels();for(const t of r.products){const r=null==e?void 0:e.find((e=>e.id===t.id));r?me(r,t.quantity):ye(t)}})()}),[]);const be=F.indexOf(P);if(!P)return null;return(0,R.jsx)(j.default,{children:(0,R.jsx)(E.UIE,{displayName:`FlowDrawer${be}`,escapable:!0,children:(0,R.jsx)("div",{children:(e=>{switch(e){case N.CATALOG_PRODUCTS_FORM:return(0,R.jsx)(y.OrderCatalogFormDrawer,{currency:U,productsSelection:X,orderItems:Y,priceMap:W,onBack:ae,onAddProducts:()=>{fe(),ae(!0)},onAddCustomItem:()=>{ie(null,!0)},onProductSelectionChange:me});case N.CUSTOM_ITEM_FORM:return(0,R.jsx)(_.CustomItemFormDrawer,{currency:U,onBack:H?le:ae,onSaveCustomItem:e=>{fe(),(e=>{let{name:t,priceAmount1000:r,quantity:n,isQuantitySet:o}=e;const a=`${(0,I.getCustomItemIdPrefix)()}-${(0,i.default)()}`;Q((e=>se(e,[...e,new M.default({id:a,name:t,price:r,quantity:null!=n?n:1,isCustomItem:!0,isQuantitySet:o})])))})(e),ae()},customItem:Y[Number.isInteger(q)?Number(q):-1]});case N.ORDER_SUMMARY:return(0,R.jsx)(T.OrderSummaryDrawer,{chat:n,currency:U,priceMap:W,orderItems:Y,orderSubtotal:J,additionalCharges:V,flatAmounts:ee,onPriceChange:Z,onBack:oe,onSubmit:re,onAddItem:te&&(0,l.orderDetailsFromCatalogEnabled)()?le:ie,onAdditionalCharges:ue,onDeleteItem:ge,onItemQuantityChange:he});case N.ADDITIONAL_CHARGES_FORM:return(0,R.jsx)(h.AdditionalChargesFormDrawer,{currency:U,additionalCharges:V,subtotal:J,onBack:ae,onApply:e=>{K((t=>(0,a.default)((0,a.default)({},t),e))),ae()}})}})(P)})},be)})};var o=n(r(348926)),a=n(r(81109)),l=r(72696),i=n(r(970319)),u=r(846086),s=r(69108),d=r(85663),c=r(644130),f=r(900316),p=r(486392),m=r(114850),g=n(r(930440)),h=r(411597),y=r(25968),b=r(13622),v=r(100149),_=r(973176),S=r(238977),x=n(r(198146)),C=r(665195),M=n(r(335758)),T=r(832545),O=r(459857),j=n(r(844453)),A=n(r(571834)),P=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=L(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r(153593)),I=r(931678),E=r(76215),D=r(667294),w=n(r(923099)),k=n(r(470649)),R=r(785893);function L(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(L=function(e){return e?r:t})(e)}const N=r(76672).Mirrored(["CATALOG_PRODUCTS_FORM","CUSTOM_ITEM_FORM","ORDER_SUMMARY","ADDITIONAL_CHARGES_FORM"]),F=Array.from(N.members()),U=P.currencyForCountryShortcode((0,p.getCountryShortcodeByPhone)((0,O.getMeUser)().user))}}]);
//# sourceMappingURL=https://web.whatsapp.com/3592.a7a7fa92812f7633e599.js.map
