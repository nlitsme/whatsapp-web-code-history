/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */(()=>{"use strict";var e,a,c,l,o,s,d,b={},f={};function t(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={id:e,loaded:!1,exports:{}};return b[e].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}t.m=b,t.amdO={},e=[],t.O=(a,c,l,o)=>{if(!c){var s=1/0;for(f=0;f<e.length;f++){for(var[c,l,o]=e[f],d=!0,b=0;b<c.length;b++)(!1&o||s>=o)&&Object.keys(t.O).every((e=>t.O[e](c[b])))?c.splice(b--,1):(d=!1,o<s&&(s=o));d&&(e.splice(f--,1),a=l())}return a}o=o||0;for(var f=e.length;f>0&&e[f-1][2]>o;f--)e[f]=e[f-1];e[f]=[c,l,o]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,t.t=function(e,l){if(1&l&&(e=this(e)),8&l)return e;if("object"==typeof e&&e){if(4&l&&e.__esModule)return e;if(16&l&&"function"==typeof e.then)return e}var o=Object.create(null);t.r(o);var s={};a=a||[null,c({}),c([]),c(c)];for(var d=2&l&&e;"object"==typeof d&&!~a.indexOf(d);d=c(d))Object.getOwnPropertyNames(d).forEach((a=>s[a]=()=>e[a]));return s.default=()=>e,t.d(o,s),o},t.d=(e,a)=>{for(var c in a)t.o(a,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((a,c)=>(t.f[c](e,a),a)),[])),t.u=e=>(({88:"locales/de-json",155:"locales/kn",165:"locales/cs",239:"lazy_loaded_ca_root_certificates",248:"locales/tr",275:"lazy_loaded_low_priority_components",319:"moment_locales/nl",673:"locales/es",677:"locales/bn-json",792:"locales/et",820:"locales/ko",887:"locales/ru-json",906:"locales/uk",907:"locales/fil",951:"moment_locales/th",1055:"moment_locales/el",1069:"moment_locales/sv",1081:"locales/zh-HK",1204:"locales/el",1234:"locales/bg-json",1244:"locales/gu-json",1248:"locales/mr",1381:"moment_locales/hr",1389:"locales/hu-json",1473:"moment_locales/ar",1520:"moment_locales/ms-MY",1529:"locales/lt",1592:"locales/mk-json",1628:"locales/da",1702:"vendors~lazy_loaded_low_priority_components",1770:"locales/sk",1791:"moment_locales/es",1967:"locales/az-json",1992:"locales/pt-json",2017:"moment_locales/sw",2023:"moment_locales/cs",2091:"locales/pt-BR",2101:"vendors~bootstrap_main",2135:"locales/th",2394:"moment_locales/es-DO",2422:"locales/he-json",2445:"moment_locales/fr",2556:"locales/hu",2619:"locales/ur-json",2739:"locales/ta",2771:"locales/mr-json",2790:"lazy_loaded_low_priority_components~",2830:"locales/it",2944:"locales/sv",2957:"moment_locales/ru",2966:"moment_locales/ar-MA",2967:"locales/sr-json",2974:"vendors~pdf",2979:"moment_locales/en-IE",3004:"locales/el-json",3017:"moment_locales/uz",3047:"moment_locales/zh-CN",3113:"moment_locales/ml",3370:"moment_locales/te",3421:"locales/zh-TW-json",3422:"moment_locales/mr",3501:"moment_locales/sl",3539:"locales/cs-json",3565:"locales/fil-json",3569:"moment_locales/ro",3721:"locales/ta-json",3722:"locales/hi",3748:"moment_locales/af",3853:"locales/hr-json",3892:"moment_locales/en-NZ",3934:"moment_locales/ar-XB",3998:"locales/sw",4046:"locales/nb-json",4132:"locales/id-json",4169:"locales/lt-json",4259:"locales/sl",4260:"locales/kk-json",4339:"moment_locales/hu",4361:"locales/ur",4451:"locales/ca-json",4468:"moment_locales/gu",4473:"moment_locales/et",4616:"moment_locales/en-CA",4680:"locales/zh-CN-json",4708:"locales/lv",4739:"locales/es-json",4768:"locales/sv-json",4771:"locales/te-json",4794:"locales/ml-json",4815:"vendors~lazy_loaded_relay",4818:"moment_locales/ko",4853:"locales/fa-json",4873:"locales/uz",4980:"moment_locales/pl",5027:"moment_locales/he",5125:"moment_locales/zh-TW",5128:"locales/id",5170:"moment_locales/sr",5182:"locales/ja",5211:"locales/[request]",5247:"moment_locales/it",5282:"locales/uk-json",5315:"locales/vi-json",5443:"locales/ms",5512:"svg",5608:"locales/ja-json",5632:"locales/ca",5650:"locales/te",5671:"moment_locales/ar-LY",5708:"locales/hr",5729:"locales/he",5740:"moment_locales/az",5790:"moment_locales/sr-CYRL",5862:"moment_locales/de",5881:"locales/it-json",5955:"locales/th-json",5959:"moment_locales/nb",5965:"moment_locales/sk",6032:"locales/pa-json",6038:"locales/gu",6098:"locales/sq-json",6163:"moment_locales/ur",6282:"moment_locales/ar-KW",6293:"locales/fr",6331:"locales/sr",6352:"vendors~lazy_loaded_business_direct_utils",6365:"locales/af",6483:"locales/zh-CN",6496:"moment_locales/sq",6511:"moment_locales/id",6547:"moment_locales/pt-BR",6568:"moment_locales/kn",6606:"locales/sw-json",6651:"locales/mk",6655:"locales/ml",6700:"locales/kn-json",6709:"moment_locales/hi",6884:"moment_locales/ar-DZ",6920:"moment_locales/lt",6933:"locales/en",6953:"locales/pt",7020:"locales/ko-json",7055:"locales/nl-json",7072:"locales/az",7074:"moment_locales/kk",7102:"locales/bg",7162:"locales/ro",7163:"locales/sk-json",7205:"lazy_loaded_high_priority_components",7216:"locales/de",7315:"moment_locales/da",7334:"locales/fr-json",7386:"moment_locales/fi",7494:"locales/en-json",7542:"locales/zh-TW",7626:"locales/sl-json",7654:"locales/uz-json",7662:"moment_locales/fa",7728:"moment_locales/bn",7739:"moment_locales/ms",7749:"locales/nb",7920:"locales/zh-HK-json",7938:"locales/lv-json",7964:"bootstrap_main",8054:"locales/ar",8117:"moment_locales/uz-LATN",8132:"moment_locales/pa-IN",8288:"locales/af-json",8292:"locales/ru",8295:"vendors~lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",8598:"locales/vi",8606:"locales/hi-json",8628:"locales/pl",8634:"moment_locales/ta",8678:"moment_locales/en-AU",8700:"locales/bn",8799:"moment_locales/fr-CH",8801:"locales/ar-json",8945:"locales/ro-json",8962:"locales/tr-json",9116:"moment_locales/pt",9227:"moment_locales/en-GB",9289:"moment_locales/ar-TN",9313:"moment_locales/tr",9488:"lazy_loaded_high_priority_components~lazy_loaded_low_priority_components",9545:"moment_locales/mk",9566:"locales/pl-json",9599:"locales/et-json",9613:"locales/fi",9626:"locales/da-json",9646:"moment_locales/ar-SA",9682:"moment_locales/uk",9719:"locales/kk",9737:"locales/sq",9750:"locales/nl",9765:"moment_locales/fr-CA",9789:"locales/fi-json",9815:"locales/pa",9817:"moment_locales/ca",9911:"locales/ms-json",9995:"locales/ar-XB",9999:"locales/fa"}[e]||e)+"."+{88:"0fe95a85cfaf2758728a",155:"b1618f91f5b563bbdd5c",165:"ceaa95936c5e28d58d4d",239:"ba2b39a70171becd91c7",248:"139432331966a0a756cd",275:"eee47c846058dde2aa75",319:"83cbe9831383610b7fdc",673:"3f763bee65b9f71309ad",677:"55d7841c07166b488b7a",792:"870f688d9243e92cc050",820:"a2584fbbdeb96a6d89e5",887:"b5843855a4b1cfcd612e",906:"5a9a0eed4d74956b7141",907:"c131bac636707194176f",951:"81c8248690c3bee6b89b",1055:"1148c38ebfc9461ef42c",1069:"9b20d36ab6457d7240b9",1081:"bcc69042e19b7183894b",1204:"8cc57e36ae0023409bd2",1234:"8431a9334b8f7d7a9a49",1244:"7c7cce7bde23bfb90486",1248:"fa2a422495f297037a48",1381:"1bd84052102c0eebfe3d",1389:"a1b86c1bdd6085ef18ff",1473:"c6a578a0f882665ccfce",1505:"0c5161c0c94a073e8cce",1520:"96c8b7c223ac076145c0",1529:"ece206c202f394c13e7d",1592:"0162226b92bbdcb60ab9",1628:"3dd1e6370ff035b2f303",1702:"13fc748c912a34c8d1b1",1770:"edc035e3ef85102ec1d3",1791:"5d00d5442a0b32975cd9",1967:"b31321e5a588eb4aff81",1992:"b8422b30842307551651",2017:"25389f8f2f5a19c26478",2023:"58fd9b1d7ca7e6232553",2091:"d0c189e0b70406eed5a6",2101:"c8e7af1e3df9523b5d83",2135:"947a78a91ecb95d7b6e2",2394:"fe9d41487fadadf19a5a",2422:"52fdba749be5c673ba20",2445:"7afc6c4e863b0ff716d7",2556:"0be42d6029cebcb8e1b0",2619:"f942e320640c0162112e",2739:"ec605ae2290b5f956c3e",2771:"8fed762e3f437e6c7ba4",2776:"b87d45215fd3a1ecafe1",2790:"1c52032d700b535f36f0",2830:"7d4666bcc456913d457d",2944:"865845135ec5740ea925",2957:"458f6a3df28a64ebf1a7",2966:"60849ece5618cb0cf09a",2967:"362478e5832aab688048",2974:"08cac1e0a1538c215d2f",2979:"52fcca7fb9e57d1beef6",3004:"64ad3245b85a972ed12b",3017:"534f6909aa3db3adaaa5",3047:"59fba06a85f8e7691979",3113:"9ddd84a938cb211b9477",3370:"7ce9f5f4d6cbd1bb4443",3421:"546b58d96147e07bbafa",3422:"5aacc295735c44379936",3501:"ebfd88cb856507d33d2a",3539:"25b67b4705a74630fb56",3565:"b2a178e055a6ffef8fe7",3569:"cb41d71c20427b9ac758",3721:"53db1f0b64aa334ce9da",3722:"32ed3a56cf32f5a485e3",3748:"0787cfbffd5dbf589a49",3770:"a493ccb47bc0d4fa423a",3853:"9007042fa9356179f299",3892:"c0f28e17ef21ad0b5a30",3934:"06d983df1641abe18dcd",3998:"79268c1f2f5b0f6b51e6",4046:"732f54324513f3078d7e",4132:"7faa70151aaba9901acd",4169:"117da77847a8aad558b7",4259:"d3248c6ab6a38f95f9d5",4260:"5893bc57c14688e0235c",4339:"078d265cf68ba68bb2fc",4361:"a8f3230987567d03d92f",4451:"9cc574005d1ddf6ffc49",4468:"3330aad871a099a01520",4473:"fb2a5df5221f9cf5adf2",4616:"348e57fa93cc3320c3e8",4680:"656c9f1358a26db8ef5d",4708:"bbc055df42bbb3df2a5b",4739:"e7089a12e030c2a7740a",4768:"98b4c10b45ad5abe6975",4771:"2a2d81c7502dd7b5216f",4794:"68c5449a30f9800625b1",4815:"3b046b56cfca940eb3c2",4818:"4b55fd4538f536760276",4853:"7fd5a0f706e447718fca",4873:"3049988273559bd60e0a",4980:"88275de5b031b65f02dc",5027:"de975a0a0955aca74cc9",5125:"824a10ee19179e755fbd",5128:"91da7ff6f22fadfe8028",5170:"cdb251f1f98085c1d39c",5179:"40b8618e121ba96c086b",5182:"b66bd2ca1348b04c597e",5211:"49ef4442675cc104fdef",5247:"4dcdd410752430c77a68",5282:"31467173492e95981b34",5315:"624b6415f12ff5dea8e9",5377:"a49fd012f0a1fae75e4e",5443:"fddfc0571872d7921ace",5512:"daecf6d6123746fa07e4",5608:"a87508c2769b6db3a659",5632:"2cc0989c4f5ee54bbac9",5650:"3c19aa5ecd87b1ec7b7e",5671:"bafe64d2ade59a1cdd15",5708:"bf1baafa206f76746072",5729:"b89410a98fa23df768c6",5740:"b13c09008e768b87eff3",5790:"9dd140c0c794c6d993a7",5862:"b9b860d9df89d21ebc49",5881:"ec7c008b558749467d24",5955:"be1860e73edfba23d140",5959:"7137d0039d6f44600aba",5965:"739dd3227233835d66d3",6032:"bccd4187d3396b3d50c7",6038:"5421ae2a81e9be8855d8",6098:"62e75d820f33a05b067e",6163:"1fb662c3e9270cc9afff",6282:"95e2e311cceae5491629",6293:"db19a7a3a20099f61289",6331:"6744c4afd9d9db9d0f51",6352:"f1d125b4e85bb175dce4",6365:"daad93afadee21938191",6483:"7ef230e53083fbb2e871",6496:"edaf0fbff256f1ff24b0",6511:"65ead3da9b608e7d6244",6547:"0f0ddf3cecd2fb5016e5",6568:"fca20c539a28c8805726",6606:"6c23ebd2c351faf5b842",6651:"a07dc6c7faacddf2f8c4",6655:"6f92900bd63caae1bc91",6700:"0e1f50faa2a5b4020ca1",6709:"f3ea45fa423a925f6fd2",6801:"fb7409bf89a994776a9d",6884:"37c2493c1b20c4fcb765",6920:"5e3c1daecff112dac5f7",6933:"7e69aaa180bd35b90493",6953:"eb027ed41827d3f9b7a7",7020:"0533eb0b19a1c603894a",7055:"2cbb0f18c20963fb08a0",7072:"d8d3ba926b670d5a1c38",7074:"4b629c2ab0992918e3fc",7102:"e4d301c4be71cd9537dc",7162:"dc1a5d89379001a8841f",7163:"ac2e118301cdf1751516",7205:"7baf7f1b90d7e8f5cbe8",7216:"acf27d1dfd7c934e7369",7315:"452c45210a3cf5fd8f3b",7334:"9327eb254ed6a6b76045",7386:"5c03655a00dde9807e4b",7494:"3502305bdcc68358f1ae",7542:"772453ba4e562d1719c3",7626:"1518868413beee6a52df",7654:"ee2b33004d8892aa057f",7662:"471a0023c83377170f6a",7728:"3c394a08e77be7dda173",7739:"9692e22766ee7855ca38",7749:"26f3aad76679e0574d5c",7920:"e56b99ad3f09e2e10706",7938:"4fbe825a03d10b036dc6",7964:"fe0802617bf6538a8585",8054:"18216ee45139f7168486",8117:"efe51522cd6c58e85c22",8132:"7fcc95ecf5b8ca57690b",8288:"49c02defe7920d1a1900",8292:"fa308f4cbc5588f4aa0a",8295:"b6bfad225483e6d4abb9",8578:"e0666195cb72f7a1df80",8598:"5a48e8c0c2b553217d4e",8606:"25cd52b470c3aae9b338",8628:"141dec5c79a1fe014a50",8634:"723b489842ff8e8b22d8",8678:"2ed99a24ca30b04c6090",8700:"72914edc341fca03e15b",8799:"25d9eab9f465d3f713e0",8801:"4daf55985cf5ed8c3b69",8945:"6161265d60631c95c3a5",8962:"b1c0ae548ecd17de08ff",9116:"215029cfbea8c785c1e7",9227:"1956b2b30e98812cc5cb",9289:"d37c589c8d66bbc2adeb",9313:"d785c5094ddd778054e5",9488:"62a46f9922e4eb39982f",9545:"b63d96194bf4fcff122a",9566:"ee7b764ede1c4c2a18de",9599:"4b67ae581c85a6cf6cd2",9613:"d7ad9519abfc199f3c74",9626:"d7ff59af4f22e87b2c27",9646:"edf30e0eeade1450698c",9682:"1bbacc26ec9ff0efafff",9719:"05e66fd1c6823e2eedd0",9737:"a3528478399cb1c1912b",9750:"6b24b1283ab01eadacca",9765:"d59390277327cefe8b13",9789:"4708336c0ada8a34f3d7",9815:"6ee9e158bc95b8afd932",9817:"2d8acd348b0498b326e9",9911:"94089f0df43c868ba4a2",9995:"4d5fff3d8fe43b816c0c",9999:"1ada3a565c949e29d0f8"}[e]+".js"),t.miniCssF=e=>({275:"lazy_loaded_low_priority_components",7205:"lazy_loaded_high_priority_components",7964:"bootstrap_main",9488:"lazy_loaded_high_priority_components~lazy_loaded_low_priority_components"}[e]+"."+{275:"d3481677efaf82e4a442",7205:"0a932517fefa75acfd54",7964:"b885e9cc9f5e3e727225",9488:"eaa06d05056d72daa4a6"}[e]+".css"),t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),l={},o="whatsapp-web-client:",t.l=(e,a,c,s)=>{if(l[e])l[e].push(a);else{var d,b;if(void 0!==c)for(var f=document.getElementsByTagName("script"),n=0;n<f.length;n++){var r=f[n];if(r.getAttribute("src")==e||r.getAttribute("data-webpack")==o+c){d=r;break}}d||(b=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,t.nc&&d.setAttribute("nonce",t.nc),d.setAttribute("data-webpack",o+c),d.src=e),l[e]=[a];var m=(a,c)=>{d.onerror=d.onload=null,clearTimeout(i);var o=l[e];if(delete l[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(c))),a)return a(c)},i=setTimeout(m.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=m.bind(null,d.onerror),d.onload=m.bind(null,d.onload),b&&document.head.appendChild(d)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.p="/",s=e=>new Promise(((a,c)=>{var l=t.miniCssF(e),o=t.p+l;if(((e,a)=>{for(var c=document.getElementsByTagName("link"),l=0;l<c.length;l++){var o=(d=c[l]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(o===e||o===a))return d}var s=document.getElementsByTagName("style");for(l=0;l<s.length;l++){var d;if((o=(d=s[l]).getAttribute("data-href"))===e||o===a)return d}})(l,o))return a();((e,a,c,l)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=s=>{if(o.onerror=o.onload=null,"load"===s.type)c();else{var d=s&&("load"===s.type?"missing":s.type),b=s&&s.target&&s.target.href||a,f=new Error("Loading CSS chunk "+e+" failed.\n("+b+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=d,f.request=b,o.parentNode.removeChild(o),l(f)}},o.href=a,document.head.appendChild(o)})(e,o,a,c)})),d={3666:0},t.f.miniCss=(e,a)=>{d[e]?a.push(d[e]):0!==d[e]&&{275:1,7205:1,7964:1,9488:1}[e]&&a.push(d[e]=s(e).then((()=>{d[e]=0}),(a=>{throw delete d[e],a})))},(()=>{var e={3666:0};t.f.j=(a,c)=>{var l=t.o(e,a)?e[a]:void 0;if(0!==l)if(l)c.push(l[2]);else if(3666!=a){var o=new Promise(((c,o)=>l=e[a]=[c,o]));c.push(l[2]=o);var s=t.p+t.u(a),d=new Error;t.l(s,(c=>{if(t.o(e,a)&&(0!==(l=e[a])&&(e[a]=void 0),l)){var o=c&&("load"===c.type?"missing":c.type),s=c&&c.target&&c.target.src;d.message="Loading chunk "+a+" failed.\n("+o+": "+s+")",d.name="ChunkLoadError",d.type=o,d.request=s,l[1](d)}}),"chunk-"+a,a)}else e[a]=0},t.O.j=a=>0===e[a];var a=(a,c)=>{var l,o,[s,d,b]=c,f=0;for(l in d)t.o(d,l)&&(t.m[l]=d[l]);if(b)var n=b(t);for(a&&a(c);f<s.length;f++)o=s[f],t.o(e,o)&&e[o]&&e[o][0](),e[s[f]]=0;return t.O(n)},c=self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();
//# sourceMappingURL=https://web.whatsapp.com/runtime.aa123de32b478b3d83ef.js.map
