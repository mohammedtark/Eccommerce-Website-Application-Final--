"use strict";(self.webpackChunkFreshCart=self.webpackChunkFreshCart||[]).push([[472],{6472:(S,u,o)=>{o.d(u,{JX:()=>y});var l=o(4769),m=o(6814);class L{constructor(){this.change=new l.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(t){return null==t.id&&(t.id=this.DEFAULT_ID),this.instances[t.id]?this.updateInstance(t):(this.instances[t.id]=t,!0)}updateInstance(t){let e=!1;for(let i in this.instances[t.id])t[i]!==this.instances[t.id][i]&&(this.instances[t.id][i]=t[i],e=!0);return e}getCurrentPage(t){return this.instances[t]?this.instances[t].currentPage:1}setCurrentPage(t,e){if(this.instances[t]){let i=this.instances[t];e<=Math.ceil(i.totalItems/i.itemsPerPage)&&1<=e&&(this.instances[t].currentPage=e,this.change.emit(t))}}setTotalItems(t,e){this.instances[t]&&0<=e&&(this.instances[t].totalItems=e,this.change.emit(t))}setItemsPerPage(t,e){this.instances[t]&&(this.instances[t].itemsPerPage=e,this.change.emit(t))}getInstance(t=this.DEFAULT_ID){return this.instances[t]?this.clone(this.instances[t]):{}}clone(t){var e={};for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}}let y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({providers:[L],imports:[[m.ez]]}),n})()}}]);