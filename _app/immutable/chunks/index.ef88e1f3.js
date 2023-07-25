var B=Object.defineProperty;var D=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as w,h as b,i as H,j as S,k as L,e as N,l as M,m as W,p as A,q as I,v as P,w as q}from"./scheduler.5277347c.js";let $=!1;function O(){$=!0}function R(){$=!1}function V(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function k(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let o=0;o<t.length;o++){const f=t[o];f.claim_order!==void 0&&s.push(f)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const o=t[s].claim_order,f=(r>0&&t[n[r]].claim_order<=o?r+1:V(1,r,_=>t[n[_]].claim_order,o))-1;i[s]=n[f]+1;const u=f+1;n[u]=s,r=Math.max(u,r)}const l=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(l.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);l.reverse(),a.sort((s,o)=>s.claim_order-o.claim_order);for(let s=0,o=0;s<a.length;s++){for(;o<l.length&&a[s].claim_order>=l[o].claim_order;)o++;const f=o<l.length?l[o]:null;e.insertBefore(a[s],f)}}function F(e,t){e.appendChild(t)}function G(e,t){if($){for(k(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function se(e,t,n){$&&!n?G(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function T(e){return document.createElement(e)}function J(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function x(e){return document.createTextNode(e)}function oe(){return x(" ")}function le(){return x("")}function E(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ce(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function K(e){return Array.from(e.childNodes)}function Q(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function j(e,t,n,i,r=!1){Q(e);const l=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return l.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,l}function z(e,t,n,i){return j(e,r=>r.nodeName===t,r=>{const l=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||l.push(c.name)}l.forEach(a=>r.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return z(e,t,n,T)}function de(e,t,n){return z(e,t,n,J)}function U(e,t){return j(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function _e(e){return U(e," ")}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}let m;function X(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function pe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=T("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const r=X();let l;return r?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",l=E(window,"message",a=>{a.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{l=E(i.contentWindow,"resize",t),t()}),F(e,i),()=>{(r||l&&i.contentWindow)&&l(),C(i)}}function $e(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const l=r.textContent.trim();l===`HEAD_${e}_END`?(i-=1,n.push(r)):l===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ye(e,t){return new e(t)}const h=new Set;let d;function we(){d={r:0,c:[],p:d}}function xe(){d.r||p(d.c),d=d.p}function Y(e,t){e&&e.i&&(h.delete(e),e.i(t))}function ge(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e){e&&e.c()}function be(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),N(()=>{const l=e.$$.on_mount.map(I).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...l):p(l),e.$$.on_mount=[]}),r.forEach(N)}function ee(e,t){const n=e.$$;n.fragment!==null&&(M(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(P.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,r,l,a,c=[-1]){const s=W;A(e);const o=e.$$={fragment:null,ctx:[],props:l,update:w,not_equal:r,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:b(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(o.root);let f=!1;if(o.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return o.ctx&&r(o.ctx[u],o.ctx[u]=v)&&(!o.skip_bound&&o.bound[u]&&o.bound[u](v),f&&te(e,u)),_}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,t.target){if(t.hydrate){O();const u=K(t.target);o.fragment&&o.fragment.l(u),u.forEach(C)}else o.fragment&&o.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),R(),H()}A(s)}class Ae{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){ee(this,1),this.$destroy=w}$on(t,n){if(!S(n))return w;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);export{ae as A,E as B,J as C,$e as D,de as E,Ae as S,se as a,xe as b,_e as c,Y as d,le as e,C as f,T as g,fe as h,Ne as i,K as j,ce as k,he as l,x as m,U as n,me as o,we as p,ye as q,ve as r,oe as s,ge as t,be as u,Z as v,ee as w,ue as x,G as y,pe as z};
