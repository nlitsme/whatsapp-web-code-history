/*! Copyright (c) 2022 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client=self.webpackChunkwhatsapp_web_client||[]).push([[4339],{22138:function(e,r,n){!function(e){"use strict";var r="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,r,n,s){var t=e;switch(n){case"s":return s||r?"néhány másodperc":"néhány másodperce";case"ss":return t+(s||r)?" másodperc":" másodperce";case"m":return"egy"+(s||r?" perc":" perce");case"mm":return t+(s||r?" perc":" perce");case"h":return"egy"+(s||r?" óra":" órája");case"hh":return t+(s||r?" óra":" órája");case"d":return"egy"+(s||r?" nap":" napja");case"dd":return t+(s||r?" nap":" napja");case"M":return"egy"+(s||r?" hónap":" hónapja");case"MM":return t+(s||r?" hónap":" hónapja");case"y":return"egy"+(s||r?" év":" éve");case"yy":return t+(s||r?" év":" éve")}return""}function s(e){return(e?"":"[múlt] ")+"["+r[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,r,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return s.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return s.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(30381))},35180:(e,r,n)=>{"use strict";var s=n(95318);Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(){return[t.default,null,null]};var t=s(n(22138))}}]);