import{a as N}from"chunk-YWBVRV5Y.mjs";import{l as f}from"chunk-CMAEAGWD.mjs";import{a as x}from"chunk-JB2N3EQZ.mjs";import{c as a,e as p}from"chunk-AHQIRSXG.mjs";var V=a(g=>{"use strict";var E=N();g.useSubscription=function(e){return E.useSyncExternalStore(e.subscribe,e.getCurrentValue)}});var m=a((O,S)=>{"use strict";S.exports=V()});var l=p(x(),1),b=p(m(),1);var s=new Map,i=new Set;window.addEventListener("storage",e=>{if(!(e.storageArea!==localStorage||e.key===null))try{if(e.newValue===null)s.set(e.key,null);else if(e.oldValue!==e.newValue){let t=JSON.parse(e.newValue);s.set(e.key,t)}for(let t of i)t(e.key)}catch{}});function d(e,t){if(t===null)s.set(e,null),localStorage.removeItem(e);else{s.set(e,t);let r=JSON.stringify(t);localStorage.setItem(e,r)}for(let r of i)r(e)}function I(e,t){let r=(0,l.useMemo)(()=>{function o(){if(s.has(e))return s.get(e);let n=localStorage.getItem(e);if(n)try{let u=JSON.parse(n);return s.set(e,u),u}catch{}return null}function c(n){function u(h){h===e&&n()}return i.add(u),()=>i.delete(u)}return{getCurrentValue:o,subscribe:c}},[e]),w=(0,b.useSubscription)(r)??t,C=(0,l.useCallback)(o=>{try{if(f(o)){let c=r.getCurrentValue()??t,n=o(c);d(e,n)}else d(e,o)}catch{}},[e,t,r.getCurrentValue]);return[w,C]}export{d as a,I as b};
/*! Bundled license information:

use-subscription/cjs/use-subscription.production.min.js:
  (**
   * @license React
   * use-subscription.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-RIGFMZJN.mjs.map
