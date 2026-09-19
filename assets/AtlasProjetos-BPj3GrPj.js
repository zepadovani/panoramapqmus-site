import{r as se,j as _,a as Uh}from"./index-UY4OV4ni.js";import{F as Fh,c as ni,m as Oh,a as tu,M as Bh,b as Na,d as zh,P as kh,L as Gh}from"./ProducaoItem-FHGtqjSO.js";import{R as nu}from"./formato-oQTc5xmA.js";import{r as Hh,l as Vh,s as Wh,t as Xh,u as qh,v as jh,w as Yh,x as $h,y as Kh,z as Zh,A as Jh,B as Qh}from"./loaders-CetPR3Xa.js";const ed="(max-width: 900px)";function iu(n){const[e,t]=se.useState(()=>typeof window<"u"&&typeof window.matchMedia=="function"?window.matchMedia(n).matches:!1);return se.useEffect(()=>{if(typeof window>"u"||typeof window.matchMedia!="function")return;const i=window.matchMedia(n),r=()=>t(i.matches);return r(),i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[n]),e}function ru(){return iu("(pointer: coarse)")}function su(){return iu(ed)}function td(){const n=se.useRef(null),[e,t]=se.useState({largura:0,altura:0});return se.useEffect(()=>{const i=n.current;if(!i)return;const r=()=>{const a=i.getBoundingClientRect();t(o=>{const c=Math.round(a.width),l=Math.round(a.height);return o.largura===c&&o.altura===l?o:{largura:c,altura:l}})};r();const s=new ResizeObserver(r);return s.observe(i),()=>s.disconnect()},[]),[n,e]}function Bo(n,e,t){se.useEffect(()=>{if(!e)return;const i=s=>{var a;(a=n.current)!=null&&a.contains(s.target)||t()},r=s=>{s.key==="Escape"&&t()};return document.addEventListener("pointerdown",i),document.addEventListener("keydown",r),()=>{document.removeEventListener("pointerdown",i),document.removeEventListener("keydown",r)}},[n,e,t])}const Pr={espia:.2,meia:.5,cheia:.92},Nr=["espia","meia","cheia"];function zi({aberto:n,ariaLabel:e,titulo:t,acoes:i,onFechar:r,children:s,alturaInicial:a="espia",onVoltar:o,rotuloVoltar:c="Voltar"}){const l=su(),[u,f]=se.useState(a),h=se.useRef(null),g=se.useRef(null),v=l&&u==="cheia";if(se.useEffect(()=>{n&&f(a)},[n,a]),se.useEffect(()=>{if(!n)return;const p=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[n,r]),se.useLayoutEffect(()=>{var d;if(!n)return;const p=document.activeElement;return v&&((d=h.current)==null||d.focus({preventScroll:!0})),()=>{var E;v&&((E=p==null?void 0:p.focus)==null||E.call(p,{preventScroll:!0}))}},[n,v]),se.useEffect(()=>{if(!v)return;const p=d=>{if(d.key!=="Tab")return;const E=h.current;if(!E)return;const A=E.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');if(A.length===0)return;const M=A[0],w=A[A.length-1];d.shiftKey&&document.activeElement===M?(d.preventDefault(),w.focus()):!d.shiftKey&&document.activeElement===w&&(d.preventDefault(),M.focus())};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[v]),!n)return null;const S=_.jsxs(_.Fragment,{children:[o&&_.jsxs("button",{type:"button",className:"painel-voltar",onClick:o,children:[_.jsx("span",{"aria-hidden":"true",children:"‹"})," ",c]}),_.jsx("div",{className:"painel-titulo",children:t}),_.jsxs("div",{className:"painel-acoes",children:[i,_.jsx("button",{type:"button",className:"painel-fechar",onClick:r,"aria-label":"Fechar",children:"✕"})]})]});return l?_.jsxs("div",{ref:h,className:`painel painel-folha painel-${u}`,role:"dialog","aria-modal":v||void 0,"aria-label":e,tabIndex:-1,children:[_.jsx("div",{className:"painel-alca",role:"separator","aria-label":"Altura da folha: arraste para subir ou descer",onPointerDown:p=>{p.currentTarget.setPointerCapture(p.pointerId),g.current={y0:p.clientY,altura0:window.innerHeight*Pr[u],moveu:!1}},onPointerMove:p=>{const d=g.current;if(!d)return;const E=d.altura0+(d.y0-p.clientY);Math.abs(p.clientY-d.y0)>4&&(d.moveu=!0),h.current&&(h.current.style.height=`${Math.max(0,Math.min(E,window.innerHeight*.96))}px`)},onPointerUp:p=>{var M,w;const d=g.current;if(g.current=null,h.current&&(h.current.style.height=""),!d)return;(w=(M=p.currentTarget).hasPointerCapture)!=null&&w.call(M,p.pointerId)&&p.currentTarget.releasePointerCapture(p.pointerId);const E=d.altura0+(d.y0-p.clientY);if(!d.moveu){const b=Nr.indexOf(u);f(Nr[(b+1)%Nr.length]);return}if(E<window.innerHeight*(Pr.espia-.08)){r();return}const A=Nr.reduce((b,P)=>Math.abs(window.innerHeight*Pr[P]-E)<Math.abs(window.innerHeight*Pr[b]-E)?P:b);f(A)},onPointerCancel:()=>{g.current=null,h.current&&(h.current.style.height="")}}),_.jsx("header",{className:"painel-cab",children:S}),_.jsx("div",{className:"painel-corpo",children:s})]}):_.jsxs("aside",{className:"painel painel-lateral",role:"dialog","aria-label":e,children:[_.jsx("header",{className:"painel-cab",children:S}),_.jsx("div",{className:"painel-corpo",children:s})]})}var Da="http://www.w3.org/1999/xhtml";const vl={svg:"http://www.w3.org/2000/svg",xhtml:Da,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ls(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),vl.hasOwnProperty(e)?{space:vl[e],local:n}:n}function nd(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Da&&e.documentElement.namespaceURI===Da?e.createElement(n):e.createElementNS(t,n)}}function id(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function au(n){var e=Ls(n);return(e.local?id:nd)(e)}function rd(){}function zo(n){return n==null?rd:function(){return this.querySelector(n)}}function sd(n){typeof n!="function"&&(n=zo(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=new Array(a),c,l,u=0;u<a;++u)(c=s[u])&&(l=n.call(c,c.__data__,u,s))&&("__data__"in c&&(l.__data__=c.__data__),o[u]=l);return new Yt(i,this._parents)}function ad(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function od(){return[]}function ou(n){return n==null?od:function(){return this.querySelectorAll(n)}}function ld(n){return function(){return ad(n.apply(this,arguments))}}function cd(n){typeof n=="function"?n=ld(n):n=ou(n);for(var e=this._groups,t=e.length,i=[],r=[],s=0;s<t;++s)for(var a=e[s],o=a.length,c,l=0;l<o;++l)(c=a[l])&&(i.push(n.call(c,c.__data__,l,a)),r.push(c));return new Yt(i,r)}function lu(n){return function(){return this.matches(n)}}function cu(n){return function(e){return e.matches(n)}}var ud=Array.prototype.find;function hd(n){return function(){return ud.call(this.children,n)}}function dd(){return this.firstElementChild}function fd(n){return this.select(n==null?dd:hd(typeof n=="function"?n:cu(n)))}var pd=Array.prototype.filter;function md(){return Array.from(this.children)}function gd(n){return function(){return pd.call(this.children,n)}}function _d(n){return this.selectAll(n==null?md:gd(typeof n=="function"?n:cu(n)))}function xd(n){typeof n!="function"&&(n=lu(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=[],c,l=0;l<a;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&o.push(c);return new Yt(i,this._parents)}function uu(n){return new Array(n.length)}function vd(){return new Yt(this._enter||this._groups.map(uu),this._parents)}function Ms(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}Ms.prototype={constructor:Ms,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Md(n){return function(){return n}}function Sd(n,e,t,i,r,s){for(var a=0,o,c=e.length,l=s.length;a<l;++a)(o=e[a])?(o.__data__=s[a],i[a]=o):t[a]=new Ms(n,s[a]);for(;a<c;++a)(o=e[a])&&(r[a]=o)}function yd(n,e,t,i,r,s,a){var o,c,l=new Map,u=e.length,f=s.length,h=new Array(u),g;for(o=0;o<u;++o)(c=e[o])&&(h[o]=g=a.call(c,c.__data__,o,e)+"",l.has(g)?r[o]=c:l.set(g,c));for(o=0;o<f;++o)g=a.call(n,s[o],o,s)+"",(c=l.get(g))?(i[o]=c,c.__data__=s[o],l.delete(g)):t[o]=new Ms(n,s[o]);for(o=0;o<u;++o)(c=e[o])&&l.get(h[o])===c&&(r[o]=c)}function Ed(n){return n.__data__}function bd(n,e){if(!arguments.length)return Array.from(this,Ed);var t=e?yd:Sd,i=this._parents,r=this._groups;typeof n!="function"&&(n=Md(n));for(var s=r.length,a=new Array(s),o=new Array(s),c=new Array(s),l=0;l<s;++l){var u=i[l],f=r[l],h=f.length,g=Td(n.call(u,u&&u.__data__,l,i)),v=g.length,S=o[l]=new Array(v),p=a[l]=new Array(v),d=c[l]=new Array(h);t(u,f,S,p,d,g,e);for(var E=0,A=0,M,w;E<v;++E)if(M=S[E]){for(E>=A&&(A=E+1);!(w=p[A])&&++A<v;);M._next=w||null}}return a=new Yt(a,i),a._enter=o,a._exit=c,a}function Td(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Ad(){return new Yt(this._exit||this._groups.map(uu),this._parents)}function wd(n,e,t){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?s.remove():t(s),i&&r?i.merge(r).order():r}function Rd(n){for(var e=n.selection?n.selection():n,t=this._groups,i=e._groups,r=t.length,s=i.length,a=Math.min(r,s),o=new Array(r),c=0;c<a;++c)for(var l=t[c],u=i[c],f=l.length,h=o[c]=new Array(f),g,v=0;v<f;++v)(g=l[v]||u[v])&&(h[v]=g);for(;c<r;++c)o[c]=t[c];return new Yt(o,this._parents)}function Cd(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var i=n[e],r=i.length-1,s=i[r],a;--r>=0;)(a=i[r])&&(s&&a.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(a,s),s=a);return this}function Pd(n){n||(n=Nd);function e(f,h){return f&&h?n(f.__data__,h.__data__):!f-!h}for(var t=this._groups,i=t.length,r=new Array(i),s=0;s<i;++s){for(var a=t[s],o=a.length,c=r[s]=new Array(o),l,u=0;u<o;++u)(l=a[u])&&(c[u]=l);c.sort(e)}return new Yt(r,this._parents).order()}function Nd(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function Dd(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Ld(){return Array.from(this)}function Id(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length;r<s;++r){var a=i[r];if(a)return a}return null}function Ud(){let n=0;for(const e of this)++n;return n}function Fd(){return!this.node()}function Od(n){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],s=0,a=r.length,o;s<a;++s)(o=r[s])&&n.call(o,o.__data__,s,r);return this}function Bd(n){return function(){this.removeAttribute(n)}}function zd(n){return function(){this.removeAttributeNS(n.space,n.local)}}function kd(n,e){return function(){this.setAttribute(n,e)}}function Gd(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function Hd(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function Vd(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function Wd(n,e){var t=Ls(n);if(arguments.length<2){var i=this.node();return t.local?i.getAttributeNS(t.space,t.local):i.getAttribute(t)}return this.each((e==null?t.local?zd:Bd:typeof e=="function"?t.local?Vd:Hd:t.local?Gd:kd)(t,e))}function hu(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Xd(n){return function(){this.style.removeProperty(n)}}function qd(n,e,t){return function(){this.style.setProperty(n,e,t)}}function jd(n,e,t){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,t)}}function Yd(n,e,t){return arguments.length>1?this.each((e==null?Xd:typeof e=="function"?jd:qd)(n,e,t??"")):Yi(this.node(),n)}function Yi(n,e){return n.style.getPropertyValue(e)||hu(n).getComputedStyle(n,null).getPropertyValue(e)}function $d(n){return function(){delete this[n]}}function Kd(n,e){return function(){this[n]=e}}function Zd(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function Jd(n,e){return arguments.length>1?this.each((e==null?$d:typeof e=="function"?Zd:Kd)(n,e)):this.node()[n]}function du(n){return n.trim().split(/^|\s+/)}function ko(n){return n.classList||new fu(n)}function fu(n){this._node=n,this._names=du(n.getAttribute("class")||"")}fu.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function pu(n,e){for(var t=ko(n),i=-1,r=e.length;++i<r;)t.add(e[i])}function mu(n,e){for(var t=ko(n),i=-1,r=e.length;++i<r;)t.remove(e[i])}function Qd(n){return function(){pu(this,n)}}function ef(n){return function(){mu(this,n)}}function tf(n,e){return function(){(e.apply(this,arguments)?pu:mu)(this,n)}}function nf(n,e){var t=du(n+"");if(arguments.length<2){for(var i=ko(this.node()),r=-1,s=t.length;++r<s;)if(!i.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?tf:e?Qd:ef)(t,e))}function rf(){this.textContent=""}function sf(n){return function(){this.textContent=n}}function af(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function of(n){return arguments.length?this.each(n==null?rf:(typeof n=="function"?af:sf)(n)):this.node().textContent}function lf(){this.innerHTML=""}function cf(n){return function(){this.innerHTML=n}}function uf(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function hf(n){return arguments.length?this.each(n==null?lf:(typeof n=="function"?uf:cf)(n)):this.node().innerHTML}function df(){this.nextSibling&&this.parentNode.appendChild(this)}function ff(){return this.each(df)}function pf(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function mf(){return this.each(pf)}function gf(n){var e=typeof n=="function"?n:au(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function _f(){return null}function xf(n,e){var t=typeof n=="function"?n:au(n),i=e==null?_f:typeof e=="function"?e:zo(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),i.apply(this,arguments)||null)})}function vf(){var n=this.parentNode;n&&n.removeChild(this)}function Mf(){return this.each(vf)}function Sf(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function yf(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function Ef(n){return this.select(n?yf:Sf)}function bf(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Tf(n){return function(e){n.call(this,e,this.__data__)}}function Af(n){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),{type:e,name:t}})}function wf(n){return function(){var e=this.__on;if(e){for(var t=0,i=-1,r=e.length,s;t<r;++t)s=e[t],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):e[++i]=s;++i?e.length=i:delete this.__on}}}function Rf(n,e,t){return function(){var i=this.__on,r,s=Tf(e);if(i){for(var a=0,o=i.length;a<o;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=t),r.value=e;return}}this.addEventListener(n.type,s,t),r={type:n.type,name:n.name,value:e,listener:s,options:t},i?i.push(r):this.__on=[r]}}function Cf(n,e,t){var i=Af(n+""),r,s=i.length,a;if(arguments.length<2){var o=this.node().__on;if(o){for(var c=0,l=o.length,u;c<l;++c)for(r=0,u=o[c];r<s;++r)if((a=i[r]).type===u.type&&a.name===u.name)return u.value}return}for(o=e?Rf:wf,r=0;r<s;++r)this.each(o(i[r],e,t));return this}function gu(n,e,t){var i=hu(n),r=i.CustomEvent;typeof r=="function"?r=new r(e,t):(r=i.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),n.dispatchEvent(r)}function Pf(n,e){return function(){return gu(this,n,e)}}function Nf(n,e){return function(){return gu(this,n,e.apply(this,arguments))}}function Df(n,e){return this.each((typeof e=="function"?Nf:Pf)(n,e))}function*Lf(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,s=i.length,a;r<s;++r)(a=i[r])&&(yield a)}var _u=[null];function Yt(n,e){this._groups=n,this._parents=e}function Er(){return new Yt([[document.documentElement]],_u)}function If(){return this}Yt.prototype=Er.prototype={constructor:Yt,select:sd,selectAll:cd,selectChild:fd,selectChildren:_d,filter:xd,data:bd,enter:vd,exit:Ad,join:wd,merge:Rd,selection:If,order:Cd,sort:Pd,call:Dd,nodes:Ld,node:Id,size:Ud,empty:Fd,each:Od,attr:Wd,style:Yd,property:Jd,classed:nf,text:of,html:hf,raise:ff,lower:mf,append:gf,insert:xf,remove:Mf,clone:Ef,datum:bf,on:Cf,dispatch:Df,[Symbol.iterator]:Lf};function Ut(n){return typeof n=="string"?new Yt([[document.querySelector(n)]],[document.documentElement]):new Yt([[n]],_u)}function Uf(n){let e;for(;e=n.sourceEvent;)n=e;return n}function Ln(n,e){if(n=Uf(n),e===void 0&&(e=n.currentTarget),e){var t=e.ownerSVGElement||e;if(t.createSVGPoint){var i=t.createSVGPoint();return i.x=n.clientX,i.y=n.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[n.clientX-r.left-e.clientLeft,n.clientY-r.top-e.clientTop]}}return[n.pageX,n.pageY]}var Ff={value:()=>{}};function br(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new cs(t)}function cs(n){this._=n}function Of(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}cs.prototype=br.prototype={constructor:cs,on:function(n,e){var t=this._,i=Of(n+"",t),r,s=-1,a=i.length;if(arguments.length<2){for(;++s<a;)if((r=(n=i[s]).type)&&(r=Bf(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++s<a;)if(r=(n=i[s]).type)t[r]=Ml(t[r],n.name,e);else if(e==null)for(r in t)t[r]=Ml(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new cs(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,s;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(e,t)}};function Bf(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function Ml(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=Ff,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}const zf={passive:!1},gr={capture:!0,passive:!1};function Ws(n){n.stopImmediatePropagation()}function Hi(n){n.preventDefault(),n.stopImmediatePropagation()}function xu(n){var e=n.document.documentElement,t=Ut(n).on("dragstart.drag",Hi,gr);"onselectstart"in e?t.on("selectstart.drag",Hi,gr):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function vu(n,e){var t=n.document.documentElement,i=Ut(n).on("dragstart.drag",null);e&&(i.on("click.drag",Hi,gr),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in t?i.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const Dr=n=>()=>n;function La(n,{sourceEvent:e,subject:t,target:i,identifier:r,active:s,x:a,y:o,dx:c,dy:l,dispatch:u}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:s,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:o,enumerable:!0,configurable:!0},dx:{value:c,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:u}})}La.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function kf(n){return!n.ctrlKey&&!n.button}function Gf(){return this.parentNode}function Hf(n,e){return e??{x:n.x,y:n.y}}function Vf(){return navigator.maxTouchPoints||"ontouchstart"in this}function Wf(){var n=kf,e=Gf,t=Hf,i=Vf,r={},s=br("start","drag","end"),a=0,o,c,l,u,f=0;function h(M){M.on("mousedown.drag",g).filter(i).on("touchstart.drag",p).on("touchmove.drag",d,zf).on("touchend.drag touchcancel.drag",E).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function g(M,w){if(!(u||!n.call(this,M,w))){var b=A(this,e.call(this,M,w),M,w,"mouse");b&&(Ut(M.view).on("mousemove.drag",v,gr).on("mouseup.drag",S,gr),xu(M.view),Ws(M),l=!1,o=M.clientX,c=M.clientY,b("start",M))}}function v(M){if(Hi(M),!l){var w=M.clientX-o,b=M.clientY-c;l=w*w+b*b>f}r.mouse("drag",M)}function S(M){Ut(M.view).on("mousemove.drag mouseup.drag",null),vu(M.view,l),Hi(M),r.mouse("end",M)}function p(M,w){if(n.call(this,M,w)){var b=M.changedTouches,P=e.call(this,M,w),x=b.length,R,U;for(R=0;R<x;++R)(U=A(this,P,M,w,b[R].identifier,b[R]))&&(Ws(M),U("start",M,b[R]))}}function d(M){var w=M.changedTouches,b=w.length,P,x;for(P=0;P<b;++P)(x=r[w[P].identifier])&&(Hi(M),x("drag",M,w[P]))}function E(M){var w=M.changedTouches,b=w.length,P,x;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),P=0;P<b;++P)(x=r[w[P].identifier])&&(Ws(M),x("end",M,w[P]))}function A(M,w,b,P,x,R){var U=s.copy(),I=Ln(R||b,w),F,q,T;if((T=t.call(M,new La("beforestart",{sourceEvent:b,target:h,identifier:x,active:a,x:I[0],y:I[1],dx:0,dy:0,dispatch:U}),P))!=null)return F=T.x-I[0]||0,q=T.y-I[1]||0,function N(D,O,W){var $=I,ee;switch(D){case"start":r[x]=N,ee=a++;break;case"end":delete r[x],--a;case"drag":I=Ln(W||O,w),ee=a;break}U.call(D,M,new La(D,{sourceEvent:O,subject:T,target:h,identifier:x,active:ee,x:I[0]+F,y:I[1]+q,dx:I[0]-$[0],dy:I[1]-$[1],dispatch:U}),P)}}return h.filter=function(M){return arguments.length?(n=typeof M=="function"?M:Dr(!!M),h):n},h.container=function(M){return arguments.length?(e=typeof M=="function"?M:Dr(M),h):e},h.subject=function(M){return arguments.length?(t=typeof M=="function"?M:Dr(M),h):t},h.touchable=function(M){return arguments.length?(i=typeof M=="function"?M:Dr(!!M),h):i},h.on=function(){var M=s.on.apply(s,arguments);return M===s?h:M},h.clickDistance=function(M){return arguments.length?(f=(M=+M)*M,h):Math.sqrt(f)},h}function Go(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function Mu(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Tr(){}var _r=.7,Ss=1/_r,Vi="\\s*([+-]?\\d+)\\s*",xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Xf=/^#([0-9a-f]{3,8})$/,qf=new RegExp(`^rgb\\(${Vi},${Vi},${Vi}\\)$`),jf=new RegExp(`^rgb\\(${_n},${_n},${_n}\\)$`),Yf=new RegExp(`^rgba\\(${Vi},${Vi},${Vi},${xr}\\)$`),$f=new RegExp(`^rgba\\(${_n},${_n},${_n},${xr}\\)$`),Kf=new RegExp(`^hsl\\(${xr},${_n},${_n}\\)$`),Zf=new RegExp(`^hsla\\(${xr},${_n},${_n},${xr}\\)$`),Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Go(Tr,vr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:yl,formatHex:yl,formatHex8:Jf,formatHsl:Qf,formatRgb:El,toString:El});function yl(){return this.rgb().formatHex()}function Jf(){return this.rgb().formatHex8()}function Qf(){return Su(this).formatHsl()}function El(){return this.rgb().formatRgb()}function vr(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=Xf.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?bl(e):t===3?new Ht(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Lr(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Lr(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=qf.exec(n))?new Ht(e[1],e[2],e[3],1):(e=jf.exec(n))?new Ht(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=Yf.exec(n))?Lr(e[1],e[2],e[3],e[4]):(e=$f.exec(n))?Lr(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=Kf.exec(n))?wl(e[1],e[2]/100,e[3]/100,1):(e=Zf.exec(n))?wl(e[1],e[2]/100,e[3]/100,e[4]):Sl.hasOwnProperty(n)?bl(Sl[n]):n==="transparent"?new Ht(NaN,NaN,NaN,0):null}function bl(n){return new Ht(n>>16&255,n>>8&255,n&255,1)}function Lr(n,e,t,i){return i<=0&&(n=e=t=NaN),new Ht(n,e,t,i)}function ep(n){return n instanceof Tr||(n=vr(n)),n?(n=n.rgb(),new Ht(n.r,n.g,n.b,n.opacity)):new Ht}function Ia(n,e,t,i){return arguments.length===1?ep(n):new Ht(n,e,t,i??1)}function Ht(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}Go(Ht,Ia,Mu(Tr,{brighter(n){return n=n==null?Ss:Math.pow(Ss,n),new Ht(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?_r:Math.pow(_r,n),new Ht(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Ht(mi(this.r),mi(this.g),mi(this.b),ys(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Tl,formatHex:Tl,formatHex8:tp,formatRgb:Al,toString:Al}));function Tl(){return`#${di(this.r)}${di(this.g)}${di(this.b)}`}function tp(){return`#${di(this.r)}${di(this.g)}${di(this.b)}${di((isNaN(this.opacity)?1:this.opacity)*255)}`}function Al(){const n=ys(this.opacity);return`${n===1?"rgb(":"rgba("}${mi(this.r)}, ${mi(this.g)}, ${mi(this.b)}${n===1?")":`, ${n})`}`}function ys(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function mi(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function di(n){return n=mi(n),(n<16?"0":"")+n.toString(16)}function wl(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new an(n,e,t,i)}function Su(n){if(n instanceof an)return new an(n.h,n.s,n.l,n.opacity);if(n instanceof Tr||(n=vr(n)),!n)return new an;if(n instanceof an)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),s=Math.max(e,t,i),a=NaN,o=s-r,c=(s+r)/2;return o?(e===s?a=(t-i)/o+(t<i)*6:t===s?a=(i-e)/o+2:a=(e-t)/o+4,o/=c<.5?s+r:2-s-r,a*=60):o=c>0&&c<1?0:a,new an(a,o,c,n.opacity)}function np(n,e,t,i){return arguments.length===1?Su(n):new an(n,e,t,i??1)}function an(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}Go(an,np,Mu(Tr,{brighter(n){return n=n==null?Ss:Math.pow(Ss,n),new an(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?_r:Math.pow(_r,n),new an(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new Ht(Xs(n>=240?n-240:n+120,r,i),Xs(n,r,i),Xs(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new an(Rl(this.h),Ir(this.s),Ir(this.l),ys(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=ys(this.opacity);return`${n===1?"hsl(":"hsla("}${Rl(this.h)}, ${Ir(this.s)*100}%, ${Ir(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Rl(n){return n=(n||0)%360,n<0?n+360:n}function Ir(n){return Math.max(0,Math.min(1,n||0))}function Xs(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const yu=n=>()=>n;function ip(n,e){return function(t){return n+t*e}}function rp(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function sp(n){return(n=+n)==1?Eu:function(e,t){return t-e?rp(e,t,n):yu(isNaN(e)?t:e)}}function Eu(n,e){var t=e-n;return t?ip(n,t):yu(isNaN(n)?e:n)}const Cl=function n(e){var t=sp(e);function i(r,s){var a=t((r=Ia(r)).r,(s=Ia(s)).r),o=t(r.g,s.g),c=t(r.b,s.b),l=Eu(r.opacity,s.opacity);return function(u){return r.r=a(u),r.g=o(u),r.b=c(u),r.opacity=l(u),r+""}}return i.gamma=n,i}(1);function Zn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}var Ua=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qs=new RegExp(Ua.source,"g");function ap(n){return function(){return n}}function op(n){return function(e){return n(e)+""}}function lp(n,e){var t=Ua.lastIndex=qs.lastIndex=0,i,r,s,a=-1,o=[],c=[];for(n=n+"",e=e+"";(i=Ua.exec(n))&&(r=qs.exec(e));)(s=r.index)>t&&(s=e.slice(t,s),o[a]?o[a]+=s:o[++a]=s),(i=i[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,c.push({i:a,x:Zn(i,r)})),t=qs.lastIndex;return t<e.length&&(s=e.slice(t),o[a]?o[a]+=s:o[++a]=s),o.length<2?c[0]?op(c[0].x):ap(e):(e=c.length,function(l){for(var u=0,f;u<e;++u)o[(f=c[u]).i]=f.x(l);return o.join("")})}var Pl=180/Math.PI,Fa={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function bu(n,e,t,i,r,s){var a,o,c;return(a=Math.sqrt(n*n+e*e))&&(n/=a,e/=a),(c=n*t+e*i)&&(t-=n*c,i-=e*c),(o=Math.sqrt(t*t+i*i))&&(t/=o,i/=o,c/=o),n*i<e*t&&(n=-n,e=-e,c=-c,a=-a),{translateX:r,translateY:s,rotate:Math.atan2(e,n)*Pl,skewX:Math.atan(c)*Pl,scaleX:a,scaleY:o}}var Ur;function cp(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?Fa:bu(e.a,e.b,e.c,e.d,e.e,e.f)}function up(n){return n==null||(Ur||(Ur=document.createElementNS("http://www.w3.org/2000/svg","g")),Ur.setAttribute("transform",n),!(n=Ur.transform.baseVal.consolidate()))?Fa:(n=n.matrix,bu(n.a,n.b,n.c,n.d,n.e,n.f))}function Tu(n,e,t,i){function r(l){return l.length?l.pop()+" ":""}function s(l,u,f,h,g,v){if(l!==f||u!==h){var S=g.push("translate(",null,e,null,t);v.push({i:S-4,x:Zn(l,f)},{i:S-2,x:Zn(u,h)})}else(f||h)&&g.push("translate("+f+e+h+t)}function a(l,u,f,h){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),h.push({i:f.push(r(f)+"rotate(",null,i)-2,x:Zn(l,u)})):u&&f.push(r(f)+"rotate("+u+i)}function o(l,u,f,h){l!==u?h.push({i:f.push(r(f)+"skewX(",null,i)-2,x:Zn(l,u)}):u&&f.push(r(f)+"skewX("+u+i)}function c(l,u,f,h,g,v){if(l!==f||u!==h){var S=g.push(r(g)+"scale(",null,",",null,")");v.push({i:S-4,x:Zn(l,f)},{i:S-2,x:Zn(u,h)})}else(f!==1||h!==1)&&g.push(r(g)+"scale("+f+","+h+")")}return function(l,u){var f=[],h=[];return l=n(l),u=n(u),s(l.translateX,l.translateY,u.translateX,u.translateY,f,h),a(l.rotate,u.rotate,f,h),o(l.skewX,u.skewX,f,h),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,f,h),l=u=null,function(g){for(var v=-1,S=h.length,p;++v<S;)f[(p=h[v]).i]=p.x(g);return f.join("")}}}var hp=Tu(cp,"px, ","px)","deg)"),dp=Tu(up,", ",")",")"),fp=1e-12;function Nl(n){return((n=Math.exp(n))+1/n)/2}function pp(n){return((n=Math.exp(n))-1/n)/2}function mp(n){return((n=Math.exp(2*n))-1)/(n+1)}const gp=function n(e,t,i){function r(s,a){var o=s[0],c=s[1],l=s[2],u=a[0],f=a[1],h=a[2],g=u-o,v=f-c,S=g*g+v*v,p,d;if(S<fp)d=Math.log(h/l)/e,p=function(P){return[o+P*g,c+P*v,l*Math.exp(e*P*d)]};else{var E=Math.sqrt(S),A=(h*h-l*l+i*S)/(2*l*t*E),M=(h*h-l*l-i*S)/(2*h*t*E),w=Math.log(Math.sqrt(A*A+1)-A),b=Math.log(Math.sqrt(M*M+1)-M);d=(b-w)/e,p=function(P){var x=P*d,R=Nl(w),U=l/(t*E)*(R*mp(e*x+w)-pp(w));return[o+U*g,c+U*v,l*R/Nl(e*x+w)]}}return p.duration=d*1e3*e/Math.SQRT2,p}return r.rho=function(s){var a=Math.max(.001,+s),o=a*a,c=o*o;return n(a,o,c)},r}(Math.SQRT2,2,4);var $i=0,dr=0,nr=0,Au=1e3,Es,fr,bs=0,gi=0,Is=0,Mr=typeof performance=="object"&&performance.now?performance:Date,wu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Ho(){return gi||(wu(_p),gi=Mr.now()+Is)}function _p(){gi=0}function Ts(){this._call=this._time=this._next=null}Ts.prototype=Vo.prototype={constructor:Ts,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Ho():+t)+(e==null?0:+e),!this._next&&fr!==this&&(fr?fr._next=this:Es=this,fr=this),this._call=n,this._time=t,Oa()},stop:function(){this._call&&(this._call=null,this._time=1/0,Oa())}};function Vo(n,e,t){var i=new Ts;return i.restart(n,e,t),i}function xp(){Ho(),++$i;for(var n=Es,e;n;)(e=gi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--$i}function Dl(){gi=(bs=Mr.now())+Is,$i=dr=0;try{xp()}finally{$i=0,Mp(),gi=0}}function vp(){var n=Mr.now(),e=n-bs;e>Au&&(Is-=e,bs=n)}function Mp(){for(var n,e=Es,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:Es=t);fr=n,Oa(i)}function Oa(n){if(!$i){dr&&(dr=clearTimeout(dr));var e=n-gi;e>24?(n<1/0&&(dr=setTimeout(Dl,n-Mr.now()-Is)),nr&&(nr=clearInterval(nr))):(nr||(bs=Mr.now(),nr=setInterval(vp,Au)),$i=1,wu(Dl))}}function Ll(n,e,t){var i=new Ts;return e=e==null?0:+e,i.restart(r=>{i.stop(),n(r+e)},e,t),i}var Sp=br("start","end","cancel","interrupt"),yp=[],Ru=0,Il=1,Ba=2,us=3,Ul=4,za=5,hs=6;function Us(n,e,t,i,r,s){var a=n.__transition;if(!a)n.__transition={};else if(t in a)return;Ep(n,t,{name:e,index:i,group:r,on:Sp,tween:yp,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Ru})}function Wo(n,e){var t=cn(n,e);if(t.state>Ru)throw new Error("too late; already scheduled");return t}function bn(n,e){var t=cn(n,e);if(t.state>us)throw new Error("too late; already running");return t}function cn(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function Ep(n,e,t){var i=n.__transition,r;i[e]=t,t.timer=Vo(s,0,t.time);function s(l){t.state=Il,t.timer.restart(a,t.delay,t.time),t.delay<=l&&a(l-t.delay)}function a(l){var u,f,h,g;if(t.state!==Il)return c();for(u in i)if(g=i[u],g.name===t.name){if(g.state===us)return Ll(a);g.state===Ul?(g.state=hs,g.timer.stop(),g.on.call("interrupt",n,n.__data__,g.index,g.group),delete i[u]):+u<e&&(g.state=hs,g.timer.stop(),g.on.call("cancel",n,n.__data__,g.index,g.group),delete i[u])}if(Ll(function(){t.state===us&&(t.state=Ul,t.timer.restart(o,t.delay,t.time),o(l))}),t.state=Ba,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Ba){for(t.state=us,r=new Array(h=t.tween.length),u=0,f=-1;u<h;++u)(g=t.tween[u].value.call(n,n.__data__,t.index,t.group))&&(r[++f]=g);r.length=f+1}}function o(l){for(var u=l<t.duration?t.ease.call(null,l/t.duration):(t.timer.restart(c),t.state=za,1),f=-1,h=r.length;++f<h;)r[f].call(n,u);t.state===za&&(t.on.call("end",n,n.__data__,t.index,t.group),c())}function c(){t.state=hs,t.timer.stop(),delete i[e];for(var l in i)return;delete n.__transition}}function ds(n,e){var t=n.__transition,i,r,s=!0,a;if(t){e=e==null?null:e+"";for(a in t){if((i=t[a]).name!==e){s=!1;continue}r=i.state>Ba&&i.state<za,i.state=hs,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete t[a]}s&&delete n.__transition}}function bp(n){return this.each(function(){ds(this,n)})}function Tp(n,e){var t,i;return function(){var r=bn(this,n),s=r.tween;if(s!==t){i=t=s;for(var a=0,o=i.length;a<o;++a)if(i[a].name===e){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function Ap(n,e,t){var i,r;if(typeof t!="function")throw new Error;return function(){var s=bn(this,n),a=s.tween;if(a!==i){r=(i=a).slice();for(var o={name:e,value:t},c=0,l=r.length;c<l;++c)if(r[c].name===e){r[c]=o;break}c===l&&r.push(o)}s.tween=r}}function wp(n,e){var t=this._id;if(n+="",arguments.length<2){for(var i=cn(this.node(),t).tween,r=0,s=i.length,a;r<s;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((e==null?Tp:Ap)(t,n,e))}function Xo(n,e,t){var i=n._id;return n.each(function(){var r=bn(this,i);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return cn(r,i).value[e]}}function Cu(n,e){var t;return(typeof e=="number"?Zn:e instanceof vr?Cl:(t=vr(e))?(e=t,Cl):lp)(n,e)}function Rp(n){return function(){this.removeAttribute(n)}}function Cp(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Pp(n,e,t){var i,r=t+"",s;return function(){var a=this.getAttribute(n);return a===r?null:a===i?s:s=e(i=a,t)}}function Np(n,e,t){var i,r=t+"",s;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?s:s=e(i=a,t)}}function Dp(n,e,t){var i,r,s;return function(){var a,o=t(this),c;return o==null?void this.removeAttribute(n):(a=this.getAttribute(n),c=o+"",a===c?null:a===i&&c===r?s:(r=c,s=e(i=a,o)))}}function Lp(n,e,t){var i,r,s;return function(){var a,o=t(this),c;return o==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),c=o+"",a===c?null:a===i&&c===r?s:(r=c,s=e(i=a,o)))}}function Ip(n,e){var t=Ls(n),i=t==="transform"?dp:Cu;return this.attrTween(n,typeof e=="function"?(t.local?Lp:Dp)(t,i,Xo(this,"attr."+n,e)):e==null?(t.local?Cp:Rp)(t):(t.local?Np:Pp)(t,i,e))}function Up(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function Fp(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function Op(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&Fp(n,s)),t}return r._value=e,r}function Bp(n,e){var t,i;function r(){var s=e.apply(this,arguments);return s!==i&&(t=(i=s)&&Up(n,s)),t}return r._value=e,r}function zp(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var i=Ls(n);return this.tween(t,(i.local?Op:Bp)(i,e))}function kp(n,e){return function(){Wo(this,n).delay=+e.apply(this,arguments)}}function Gp(n,e){return e=+e,function(){Wo(this,n).delay=e}}function Hp(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?kp:Gp)(e,n)):cn(this.node(),e).delay}function Vp(n,e){return function(){bn(this,n).duration=+e.apply(this,arguments)}}function Wp(n,e){return e=+e,function(){bn(this,n).duration=e}}function Xp(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?Vp:Wp)(e,n)):cn(this.node(),e).duration}function qp(n,e){if(typeof e!="function")throw new Error;return function(){bn(this,n).ease=e}}function jp(n){var e=this._id;return arguments.length?this.each(qp(e,n)):cn(this.node(),e).ease}function Yp(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;bn(this,n).ease=t}}function $p(n){if(typeof n!="function")throw new Error;return this.each(Yp(this._id,n))}function Kp(n){typeof n!="function"&&(n=lu(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var s=e[r],a=s.length,o=i[r]=[],c,l=0;l<a;++l)(c=s[l])&&n.call(c,c.__data__,l,s)&&o.push(c);return new zn(i,this._parents,this._name,this._id)}function Zp(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,i=e.length,r=t.length,s=Math.min(i,r),a=new Array(i),o=0;o<s;++o)for(var c=e[o],l=t[o],u=c.length,f=a[o]=new Array(u),h,g=0;g<u;++g)(h=c[g]||l[g])&&(f[g]=h);for(;o<i;++o)a[o]=e[o];return new zn(a,this._parents,this._name,this._id)}function Jp(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function Qp(n,e,t){var i,r,s=Jp(e)?Wo:bn;return function(){var a=s(this,n),o=a.on;o!==i&&(r=(i=o).copy()).on(e,t),a.on=r}}function em(n,e){var t=this._id;return arguments.length<2?cn(this.node(),t).on.on(n):this.each(Qp(t,n,e))}function tm(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function nm(){return this.on("end.remove",tm(this._id))}function im(n){var e=this._name,t=this._id;typeof n!="function"&&(n=zo(n));for(var i=this._groups,r=i.length,s=new Array(r),a=0;a<r;++a)for(var o=i[a],c=o.length,l=s[a]=new Array(c),u,f,h=0;h<c;++h)(u=o[h])&&(f=n.call(u,u.__data__,h,o))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,Us(l[h],e,t,h,l,cn(u,t)));return new zn(s,this._parents,e,t)}function rm(n){var e=this._name,t=this._id;typeof n!="function"&&(n=ou(n));for(var i=this._groups,r=i.length,s=[],a=[],o=0;o<r;++o)for(var c=i[o],l=c.length,u,f=0;f<l;++f)if(u=c[f]){for(var h=n.call(u,u.__data__,f,c),g,v=cn(u,t),S=0,p=h.length;S<p;++S)(g=h[S])&&Us(g,e,t,S,h,v);s.push(h),a.push(u)}return new zn(s,a,e,t)}var sm=Er.prototype.constructor;function am(){return new sm(this._groups,this._parents)}function om(n,e){var t,i,r;return function(){var s=Yi(this,n),a=(this.style.removeProperty(n),Yi(this,n));return s===a?null:s===t&&a===i?r:r=e(t=s,i=a)}}function Pu(n){return function(){this.style.removeProperty(n)}}function lm(n,e,t){var i,r=t+"",s;return function(){var a=Yi(this,n);return a===r?null:a===i?s:s=e(i=a,t)}}function cm(n,e,t){var i,r,s;return function(){var a=Yi(this,n),o=t(this),c=o+"";return o==null&&(c=o=(this.style.removeProperty(n),Yi(this,n))),a===c?null:a===i&&c===r?s:(r=c,s=e(i=a,o))}}function um(n,e){var t,i,r,s="style."+e,a="end."+s,o;return function(){var c=bn(this,n),l=c.on,u=c.value[s]==null?o||(o=Pu(e)):void 0;(l!==t||r!==u)&&(i=(t=l).copy()).on(a,r=u),c.on=i}}function hm(n,e,t){var i=(n+="")=="transform"?hp:Cu;return e==null?this.styleTween(n,om(n,i)).on("end.style."+n,Pu(n)):typeof e=="function"?this.styleTween(n,cm(n,i,Xo(this,"style."+n,e))).each(um(this._id,n)):this.styleTween(n,lm(n,i,e),t).on("end.style."+n,null)}function dm(n,e,t){return function(i){this.style.setProperty(n,e.call(this,i),t)}}function fm(n,e,t){var i,r;function s(){var a=e.apply(this,arguments);return a!==r&&(i=(r=a)&&dm(n,a,t)),i}return s._value=e,s}function pm(n,e,t){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,fm(n,e,t??""))}function mm(n){return function(){this.textContent=n}}function gm(n){return function(){var e=n(this);this.textContent=e??""}}function _m(n){return this.tween("text",typeof n=="function"?gm(Xo(this,"text",n)):mm(n==null?"":n+""))}function xm(n){return function(e){this.textContent=n.call(this,e)}}function vm(n){var e,t;function i(){var r=n.apply(this,arguments);return r!==t&&(e=(t=r)&&xm(r)),e}return i._value=n,i}function Mm(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,vm(n))}function Sm(){for(var n=this._name,e=this._id,t=Nu(),i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,c,l=0;l<o;++l)if(c=a[l]){var u=cn(c,e);Us(c,n,t,l,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new zn(i,this._parents,n,t)}function ym(){var n,e,t=this,i=t._id,r=t.size();return new Promise(function(s,a){var o={value:a},c={value:function(){--r===0&&s()}};t.each(function(){var l=bn(this,i),u=l.on;u!==n&&(e=(n=u).copy(),e._.cancel.push(o),e._.interrupt.push(o),e._.end.push(c)),l.on=e}),r===0&&s()})}var Em=0;function zn(n,e,t,i){this._groups=n,this._parents=e,this._name=t,this._id=i}function Nu(){return++Em}var wn=Er.prototype;zn.prototype={constructor:zn,select:im,selectAll:rm,selectChild:wn.selectChild,selectChildren:wn.selectChildren,filter:Kp,merge:Zp,selection:am,transition:Sm,call:wn.call,nodes:wn.nodes,node:wn.node,size:wn.size,empty:wn.empty,each:wn.each,on:em,attr:Ip,attrTween:zp,style:hm,styleTween:pm,text:_m,textTween:Mm,remove:nm,tween:wp,delay:Hp,duration:Xp,ease:jp,easeVarying:$p,end:ym,[Symbol.iterator]:wn[Symbol.iterator]};function bm(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Tm={time:null,delay:0,duration:250,ease:bm};function Am(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function wm(n){var e,t;n instanceof zn?(e=n._id,n=n._name):(e=Nu(),(t=Tm).time=Ho(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var a=i[s],o=a.length,c,l=0;l<o;++l)(c=a[l])&&Us(c,n,e,l,a,t||Am(c,e));return new zn(i,this._parents,n,e)}Er.prototype.interrupt=bp;Er.prototype.transition=wm;const Fr=n=>()=>n;function Rm(n,{sourceEvent:e,target:t,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Un(n,e,t){this.k=n,this.x=e,this.y=t}Un.prototype={constructor:Un,scale:function(n){return n===1?this:new Un(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Un(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ki=new Un(1,0,0);Un.prototype;function js(n){n.stopImmediatePropagation()}function ir(n){n.preventDefault(),n.stopImmediatePropagation()}function Cm(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function Pm(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function Fl(){return this.__zoom||ki}function Nm(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function Dm(){return navigator.maxTouchPoints||"ontouchstart"in this}function Lm(n,e,t){var i=n.invertX(e[0][0])-t[0][0],r=n.invertX(e[1][0])-t[1][0],s=n.invertY(e[0][1])-t[0][1],a=n.invertY(e[1][1])-t[1][1];return n.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),a>s?(s+a)/2:Math.min(0,s)||Math.max(0,a))}function Im(){var n=Cm,e=Pm,t=Lm,i=Nm,r=Dm,s=[0,1/0],a=[[-1/0,-1/0],[1/0,1/0]],o=250,c=gp,l=br("start","zoom","end"),u,f,h,g=500,v=150,S=0,p=10;function d(T){T.property("__zoom",Fl).on("wheel.zoom",x,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",U).filter(r).on("touchstart.zoom",I).on("touchmove.zoom",F).on("touchend.zoom touchcancel.zoom",q).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}d.transform=function(T,N,D,O){var W=T.selection?T.selection():T;W.property("__zoom",Fl),T!==W?w(T,N,D,O):W.interrupt().each(function(){b(this,arguments).event(O).start().zoom(null,typeof N=="function"?N.apply(this,arguments):N).end()})},d.scaleBy=function(T,N,D,O){d.scaleTo(T,function(){var W=this.__zoom.k,$=typeof N=="function"?N.apply(this,arguments):N;return W*$},D,O)},d.scaleTo=function(T,N,D,O){d.transform(T,function(){var W=e.apply(this,arguments),$=this.__zoom,ee=D==null?M(W):typeof D=="function"?D.apply(this,arguments):D,te=$.invert(ee),oe=typeof N=="function"?N.apply(this,arguments):N;return t(A(E($,oe),ee,te),W,a)},D,O)},d.translateBy=function(T,N,D,O){d.transform(T,function(){return t(this.__zoom.translate(typeof N=="function"?N.apply(this,arguments):N,typeof D=="function"?D.apply(this,arguments):D),e.apply(this,arguments),a)},null,O)},d.translateTo=function(T,N,D,O,W){d.transform(T,function(){var $=e.apply(this,arguments),ee=this.__zoom,te=O==null?M($):typeof O=="function"?O.apply(this,arguments):O;return t(ki.translate(te[0],te[1]).scale(ee.k).translate(typeof N=="function"?-N.apply(this,arguments):-N,typeof D=="function"?-D.apply(this,arguments):-D),$,a)},O,W)};function E(T,N){return N=Math.max(s[0],Math.min(s[1],N)),N===T.k?T:new Un(N,T.x,T.y)}function A(T,N,D){var O=N[0]-D[0]*T.k,W=N[1]-D[1]*T.k;return O===T.x&&W===T.y?T:new Un(T.k,O,W)}function M(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function w(T,N,D,O){T.on("start.zoom",function(){b(this,arguments).event(O).start()}).on("interrupt.zoom end.zoom",function(){b(this,arguments).event(O).end()}).tween("zoom",function(){var W=this,$=arguments,ee=b(W,$).event(O),te=e.apply(W,$),oe=D==null?M(te):typeof D=="function"?D.apply(W,$):D,Se=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),Ce=W.__zoom,Te=typeof N=="function"?N.apply(W,$):N,J=c(Ce.invert(oe).concat(Se/Ce.k),Te.invert(oe).concat(Se/Te.k));return function(ae){if(ae===1)ae=Te;else{var ie=J(ae),be=Se/ie[2];ae=new Un(be,oe[0]-ie[0]*be,oe[1]-ie[1]*be)}ee.zoom(null,ae)}})}function b(T,N,D){return!D&&T.__zooming||new P(T,N)}function P(T,N){this.that=T,this.args=N,this.active=0,this.sourceEvent=null,this.extent=e.apply(T,N),this.taps=0}P.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,N){return this.mouse&&T!=="mouse"&&(this.mouse[1]=N.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=N.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=N.invert(this.touch1[0])),this.that.__zoom=N,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var N=Ut(this.that).datum();l.call(T,this.that,new Rm(T,{sourceEvent:this.sourceEvent,target:d,transform:this.that.__zoom,dispatch:l}),N)}};function x(T,...N){if(!n.apply(this,arguments))return;var D=b(this,N).event(T),O=this.__zoom,W=Math.max(s[0],Math.min(s[1],O.k*Math.pow(2,i.apply(this,arguments)))),$=Ln(T);if(D.wheel)(D.mouse[0][0]!==$[0]||D.mouse[0][1]!==$[1])&&(D.mouse[1]=O.invert(D.mouse[0]=$)),clearTimeout(D.wheel);else{if(O.k===W)return;D.mouse=[$,O.invert($)],ds(this),D.start()}ir(T),D.wheel=setTimeout(ee,v),D.zoom("mouse",t(A(E(O,W),D.mouse[0],D.mouse[1]),D.extent,a));function ee(){D.wheel=null,D.end()}}function R(T,...N){if(h||!n.apply(this,arguments))return;var D=T.currentTarget,O=b(this,N,!0).event(T),W=Ut(T.view).on("mousemove.zoom",oe,!0).on("mouseup.zoom",Se,!0),$=Ln(T,D),ee=T.clientX,te=T.clientY;xu(T.view),js(T),O.mouse=[$,this.__zoom.invert($)],ds(this),O.start();function oe(Ce){if(ir(Ce),!O.moved){var Te=Ce.clientX-ee,J=Ce.clientY-te;O.moved=Te*Te+J*J>S}O.event(Ce).zoom("mouse",t(A(O.that.__zoom,O.mouse[0]=Ln(Ce,D),O.mouse[1]),O.extent,a))}function Se(Ce){W.on("mousemove.zoom mouseup.zoom",null),vu(Ce.view,O.moved),ir(Ce),O.event(Ce).end()}}function U(T,...N){if(n.apply(this,arguments)){var D=this.__zoom,O=Ln(T.changedTouches?T.changedTouches[0]:T,this),W=D.invert(O),$=D.k*(T.shiftKey?.5:2),ee=t(A(E(D,$),O,W),e.apply(this,N),a);ir(T),o>0?Ut(this).transition().duration(o).call(w,ee,O,T):Ut(this).call(d.transform,ee,O,T)}}function I(T,...N){if(n.apply(this,arguments)){var D=T.touches,O=D.length,W=b(this,N,T.changedTouches.length===O).event(T),$,ee,te,oe;for(js(T),ee=0;ee<O;++ee)te=D[ee],oe=Ln(te,this),oe=[oe,this.__zoom.invert(oe),te.identifier],W.touch0?!W.touch1&&W.touch0[2]!==oe[2]&&(W.touch1=oe,W.taps=0):(W.touch0=oe,$=!0,W.taps=1+!!u);u&&(u=clearTimeout(u)),$&&(W.taps<2&&(f=oe[0],u=setTimeout(function(){u=null},g)),ds(this),W.start())}}function F(T,...N){if(this.__zooming){var D=b(this,N).event(T),O=T.changedTouches,W=O.length,$,ee,te,oe;for(ir(T),$=0;$<W;++$)ee=O[$],te=Ln(ee,this),D.touch0&&D.touch0[2]===ee.identifier?D.touch0[0]=te:D.touch1&&D.touch1[2]===ee.identifier&&(D.touch1[0]=te);if(ee=D.that.__zoom,D.touch1){var Se=D.touch0[0],Ce=D.touch0[1],Te=D.touch1[0],J=D.touch1[1],ae=(ae=Te[0]-Se[0])*ae+(ae=Te[1]-Se[1])*ae,ie=(ie=J[0]-Ce[0])*ie+(ie=J[1]-Ce[1])*ie;ee=E(ee,Math.sqrt(ae/ie)),te=[(Se[0]+Te[0])/2,(Se[1]+Te[1])/2],oe=[(Ce[0]+J[0])/2,(Ce[1]+J[1])/2]}else if(D.touch0)te=D.touch0[0],oe=D.touch0[1];else return;D.zoom("touch",t(A(ee,te,oe),D.extent,a))}}function q(T,...N){if(this.__zooming){var D=b(this,N).event(T),O=T.changedTouches,W=O.length,$,ee;for(js(T),h&&clearTimeout(h),h=setTimeout(function(){h=null},g),$=0;$<W;++$)ee=O[$],D.touch0&&D.touch0[2]===ee.identifier?delete D.touch0:D.touch1&&D.touch1[2]===ee.identifier&&delete D.touch1;if(D.touch1&&!D.touch0&&(D.touch0=D.touch1,delete D.touch1),D.touch0)D.touch0[1]=this.__zoom.invert(D.touch0[0]);else if(D.end(),D.taps===2&&(ee=Ln(ee,this),Math.hypot(f[0]-ee[0],f[1]-ee[1])<p)){var te=Ut(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return d.wheelDelta=function(T){return arguments.length?(i=typeof T=="function"?T:Fr(+T),d):i},d.filter=function(T){return arguments.length?(n=typeof T=="function"?T:Fr(!!T),d):n},d.touchable=function(T){return arguments.length?(r=typeof T=="function"?T:Fr(!!T),d):r},d.extent=function(T){return arguments.length?(e=typeof T=="function"?T:Fr([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),d):e},d.scaleExtent=function(T){return arguments.length?(s[0]=+T[0],s[1]=+T[1],d):[s[0],s[1]]},d.translateExtent=function(T){return arguments.length?(a[0][0]=+T[0][0],a[1][0]=+T[1][0],a[0][1]=+T[0][1],a[1][1]=+T[1][1],d):[[a[0][0],a[0][1]],[a[1][0],a[1][1]]]},d.constrain=function(T){return arguments.length?(t=T,d):t},d.duration=function(T){return arguments.length?(o=+T,d):o},d.interpolate=function(T){return arguments.length?(c=T,d):c},d.on=function(){var T=l.on.apply(l,arguments);return T===l?d:T},d.clickDistance=function(T){return arguments.length?(S=(T=+T)*T,d):Math.sqrt(S)},d.tapDistance=function(T){return arguments.length?(p=+T,d):p},d}function Um(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return Du(this.cover(e,t),e,t,n)}function Du(n,e,t,i){if(isNaN(e)||isNaN(t))return n;var r,s=n._root,a={data:i},o=n._x0,c=n._y0,l=n._x1,u=n._y1,f,h,g,v,S,p,d,E;if(!s)return n._root=a,n;for(;s.length;)if((S=e>=(f=(o+l)/2))?o=f:l=f,(p=t>=(h=(c+u)/2))?c=h:u=h,r=s,!(s=s[d=p<<1|S]))return r[d]=a,n;if(g=+n._x.call(null,s.data),v=+n._y.call(null,s.data),e===g&&t===v)return a.next=s,r?r[d]=a:n._root=a,n;do r=r?r[d]=new Array(4):n._root=new Array(4),(S=e>=(f=(o+l)/2))?o=f:l=f,(p=t>=(h=(c+u)/2))?c=h:u=h;while((d=p<<1|S)===(E=(v>=h)<<1|g>=f));return r[E]=s,r[d]=a,n}function Fm(n){var e,t,i=n.length,r,s,a=new Array(i),o=new Array(i),c=1/0,l=1/0,u=-1/0,f=-1/0;for(t=0;t<i;++t)isNaN(r=+this._x.call(null,e=n[t]))||isNaN(s=+this._y.call(null,e))||(a[t]=r,o[t]=s,r<c&&(c=r),r>u&&(u=r),s<l&&(l=s),s>f&&(f=s));if(c>u||l>f)return this;for(this.cover(c,l).cover(u,f),t=0;t<i;++t)Du(this,a[t],o[t],n[t]);return this}function Om(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(t))r=(t=Math.floor(n))+1,s=(i=Math.floor(e))+1;else{for(var a=r-t||1,o=this._root,c,l;t>n||n>=r||i>e||e>=s;)switch(l=(e<i)<<1|n<t,c=new Array(4),c[l]=o,o=c,a*=2,l){case 0:r=t+a,s=i+a;break;case 1:t=r-a,s=i+a;break;case 2:r=t+a,i=s-a;break;case 3:t=r-a,i=s-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=i,this._x1=r,this._y1=s,this}function Bm(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function zm(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ft(n,e,t,i,r){this.node=n,this.x0=e,this.y0=t,this.x1=i,this.y1=r}function km(n,e,t){var i,r=this._x0,s=this._y0,a,o,c,l,u=this._x1,f=this._y1,h=[],g=this._root,v,S;for(g&&h.push(new Ft(g,r,s,u,f)),t==null?t=1/0:(r=n-t,s=e-t,u=n+t,f=e+t,t*=t);v=h.pop();)if(!(!(g=v.node)||(a=v.x0)>u||(o=v.y0)>f||(c=v.x1)<r||(l=v.y1)<s))if(g.length){var p=(a+c)/2,d=(o+l)/2;h.push(new Ft(g[3],p,d,c,l),new Ft(g[2],a,d,p,l),new Ft(g[1],p,o,c,d),new Ft(g[0],a,o,p,d)),(S=(e>=d)<<1|n>=p)&&(v=h[h.length-1],h[h.length-1]=h[h.length-1-S],h[h.length-1-S]=v)}else{var E=n-+this._x.call(null,g.data),A=e-+this._y.call(null,g.data),M=E*E+A*A;if(M<t){var w=Math.sqrt(t=M);r=n-w,s=e-w,u=n+w,f=e+w,i=g.data}}return i}function Gm(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var e,t=this._root,i,r,s,a=this._x0,o=this._y0,c=this._x1,l=this._y1,u,f,h,g,v,S,p,d;if(!t)return this;if(t.length)for(;;){if((v=u>=(h=(a+c)/2))?a=h:c=h,(S=f>=(g=(o+l)/2))?o=g:l=g,e=t,!(t=t[p=S<<1|v]))return this;if(!t.length)break;(e[p+1&3]||e[p+2&3]||e[p+3&3])&&(i=e,d=p)}for(;t.data!==n;)if(r=t,!(t=t.next))return this;return(s=t.next)&&delete t.next,r?(s?r.next=s:delete r.next,this):e?(s?e[p]=s:delete e[p],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(i?i[d]=t:this._root=t),this):(this._root=s,this)}function Hm(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function Vm(){return this._root}function Wm(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function Xm(n){var e=[],t,i=this._root,r,s,a,o,c;for(i&&e.push(new Ft(i,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(i=t.node,s=t.x0,a=t.y0,o=t.x1,c=t.y1)&&i.length){var l=(s+o)/2,u=(a+c)/2;(r=i[3])&&e.push(new Ft(r,l,u,o,c)),(r=i[2])&&e.push(new Ft(r,s,u,l,c)),(r=i[1])&&e.push(new Ft(r,l,a,o,u)),(r=i[0])&&e.push(new Ft(r,s,a,l,u))}return this}function qm(n){var e=[],t=[],i;for(this._root&&e.push(new Ft(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var s,a=i.x0,o=i.y0,c=i.x1,l=i.y1,u=(a+c)/2,f=(o+l)/2;(s=r[0])&&e.push(new Ft(s,a,o,u,f)),(s=r[1])&&e.push(new Ft(s,u,o,c,f)),(s=r[2])&&e.push(new Ft(s,a,f,u,l)),(s=r[3])&&e.push(new Ft(s,u,f,c,l))}t.push(i)}for(;i=t.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function jm(n){return n[0]}function Ym(n){return arguments.length?(this._x=n,this):this._x}function $m(n){return n[1]}function Km(n){return arguments.length?(this._y=n,this):this._y}function Lu(n,e,t){var i=new qo(e??jm,t??$m,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function qo(n,e,t,i,r,s){this._x=n,this._y=e,this._x0=t,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Ol(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Bt=Lu.prototype=qo.prototype;Bt.copy=function(){var n=new qo(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,i;if(!e)return n;if(!e.length)return n._root=Ol(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?t.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=Ol(i));return n};Bt.add=Um;Bt.addAll=Fm;Bt.cover=Om;Bt.data=Bm;Bt.extent=zm;Bt.find=km;Bt.remove=Gm;Bt.removeAll=Hm;Bt.root=Vm;Bt.size=Wm;Bt.visit=Xm;Bt.visitAfter=qm;Bt.x=Ym;Bt.y=Km;function pn(n){return function(){return n}}function Bl(n){return(n()-.5)*1e-6}function Zm(n){return n.x+n.vx}function Jm(n){return n.y+n.vy}function Iu(n){var e,t,i,r=1,s=1;typeof n!="function"&&(n=pn(n==null?1:+n));function a(){for(var l,u=e.length,f,h,g,v,S,p,d=0;d<s;++d)for(f=Lu(e,Zm,Jm).visitAfter(o),l=0;l<u;++l)h=e[l],S=t[h.index],p=S*S,g=h.x+h.vx,v=h.y+h.vy,f.visit(E);function E(A,M,w,b,P){var x=A.data,R=A.r,U=S+R;if(x){if(x.index>h.index){var I=g-x.x-x.vx,F=v-x.y-x.vy,q=I*I+F*F;q<U*U&&(I===0&&(I=Bl(i),q+=I*I),F===0&&(F=Bl(i),q+=F*F),q=(U-(q=Math.sqrt(q)))/q*r,h.vx+=(I*=q)*(U=(R*=R)/(p+R)),h.vy+=(F*=q)*U,x.vx-=I*(U=1-U),x.vy-=F*U)}return}return M>g+U||b<g-U||w>v+U||P<v-U}}function o(l){if(l.data)return l.r=t[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(e){var l,u=e.length,f;for(t=new Array(u),l=0;l<u;++l)f=e[l],t[f.index]=+n(f,l,e)}}return a.initialize=function(l,u){e=l,i=u,c()},a.iterations=function(l){return arguments.length?(s=+l,a):s},a.strength=function(l){return arguments.length?(r=+l,a):r},a.radius=function(l){return arguments.length?(n=typeof l=="function"?l:pn(+l),c(),a):n},a}const Qm=1664525,eg=1013904223,zl=4294967296;function tg(){let n=1;return()=>(n=(Qm*n+eg)%zl)/zl}var ng=10,ig=Math.PI*(3-Math.sqrt(5));function Uu(n){var e,t=1,i=.001,r=1-Math.pow(i,1/300),s=0,a=.6,o=new Map,c=Vo(f),l=br("tick","end"),u=tg();n==null&&(n=[]);function f(){h(),l.call("tick",e),t<i&&(c.stop(),l.call("end",e))}function h(S){var p,d=n.length,E;S===void 0&&(S=1);for(var A=0;A<S;++A)for(t+=(s-t)*r,o.forEach(function(M){M(t)}),p=0;p<d;++p)E=n[p],E.fx==null?E.x+=E.vx*=a:(E.x=E.fx,E.vx=0),E.fy==null?E.y+=E.vy*=a:(E.y=E.fy,E.vy=0);return e}function g(){for(var S=0,p=n.length,d;S<p;++S){if(d=n[S],d.index=S,d.fx!=null&&(d.x=d.fx),d.fy!=null&&(d.y=d.fy),isNaN(d.x)||isNaN(d.y)){var E=ng*Math.sqrt(.5+S),A=S*ig;d.x=E*Math.cos(A),d.y=E*Math.sin(A)}(isNaN(d.vx)||isNaN(d.vy))&&(d.vx=d.vy=0)}}function v(S){return S.initialize&&S.initialize(n,u),S}return g(),e={tick:h,restart:function(){return c.restart(f),e},stop:function(){return c.stop(),e},nodes:function(S){return arguments.length?(n=S,g(),o.forEach(v),e):n},alpha:function(S){return arguments.length?(t=+S,e):t},alphaMin:function(S){return arguments.length?(i=+S,e):i},alphaDecay:function(S){return arguments.length?(r=+S,e):+r},alphaTarget:function(S){return arguments.length?(s=+S,e):s},velocityDecay:function(S){return arguments.length?(a=1-S,e):1-a},randomSource:function(S){return arguments.length?(u=S,o.forEach(v),e):u},force:function(S,p){return arguments.length>1?(p==null?o.delete(S):o.set(S,v(p)),e):o.get(S)},find:function(S,p,d){var E=0,A=n.length,M,w,b,P,x;for(d==null?d=1/0:d*=d,E=0;E<A;++E)P=n[E],M=S-P.x,w=p-P.y,b=M*M+w*w,b<d&&(x=P,d=b);return x},on:function(S,p){return arguments.length>1?(l.on(S,p),e):l.on(S)}}}function ka(n){var e=pn(.1),t,i,r;typeof n!="function"&&(n=pn(n==null?0:+n));function s(o){for(var c=0,l=t.length,u;c<l;++c)u=t[c],u.vx+=(r[c]-u.x)*i[c]*o}function a(){if(t){var o,c=t.length;for(i=new Array(c),r=new Array(c),o=0;o<c;++o)i[o]=isNaN(r[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:pn(+o),a(),s):e},s.x=function(o){return arguments.length?(n=typeof o=="function"?o:pn(+o),a(),s):n},s}function Ga(n){var e=pn(.1),t,i,r;typeof n!="function"&&(n=pn(n==null?0:+n));function s(o){for(var c=0,l=t.length,u;c<l;++c)u=t[c],u.vy+=(r[c]-u.y)*i[c]*o}function a(){if(t){var o,c=t.length;for(i=new Array(c),r=new Array(c),o=0;o<c;++o)i[o]=isNaN(r[o]=+n(t[o],o,t))?0:+e(t[o],o,t)}}return s.initialize=function(o){t=o,a()},s.strength=function(o){return arguments.length?(e=typeof o=="function"?o:pn(+o),a(),s):e},s.y=function(o){return arguments.length?(n=typeof o=="function"?o:pn(+o),a(),s):n},s}const rg=["Descrição da Produção","Finalidade","ISSN / Título do periódico","Título dos Anais","Título da Obra","Nome do evento","Evento","Local","Cidade do evento","Cidade","Instituição promotora","Instituição Promotora/ Editora/ Gravadora","Nome da editora","Categoria","Natureza","Observação"].map(n=>n.toLowerCase());function sg(n){return n.replace(/^\((PAC|PTT)\)\s*/,"")}function ag(n,e){const t=n.replace(/\s+/g," ").trim();return t.length<=e?t:t.slice(0,e).replace(/\s+\S*$/,"")+"…"}function Fu(n,e){const t=n==null?void 0:n.producoes[e];if(!n||!t)return[];const i=[];for(const[r,s]of t){const a=n.itens[r],o=/doi/i.test(a)?"DOI":/^(\((PAC|PTT)\)\s*)?URL$/i.test(a)?"Endereço informado":null,c=s.trim();o&&/^https?:\/\/\S+$/i.test(c)&&!i.some(l=>l.url===c)&&i.push({rotulo:o,url:c})}return i}function Ha(n,e,t=3,i=150){const r=n==null?void 0:n.producoes[e];if(!n||!r)return[];const s=new Map;for(const[o,c]of r){const l=sg(n.itens[o]),u=l.toLowerCase();s.has(u)||s.set(u,{rotulo:l,valor:ag(c,i)})}const a=[];for(const o of rg){const c=s.get(o);if(c&&a.push(c),a.length===t)break}return a}function kl(n){return n&&/^\d{4}/.test(n)?n.slice(0,4):null}function Ou(n){const e=kl(n.inicio),t=kl(n.fim);return e?t?`${e}–${t}`:`${e}–hoje`:null}const og={"EM ANDAMENTO":"em andamento",CONCLUÍDO:"concluído",DESATIVADO:"desativado"};function Bu(n){return n?og[n]??n.toLowerCase():null}function lg(n){return[...new Set(n.fomento.map(e=>e.agencia))]}const cg={federal:"federal",estadual:"estadual",propria_ies:"da própria instituição",internacional:"internacional",outra:"não identificada"};function ug(n){return cg[n]??n}function jo(n,e){const t=e?Ou(e):null,i=e?Bu(e.situacao):null;return[n.sigla,i,t,`${n.n_producoes} produções`,e?`${e.n_membros} membros`:null].filter(Boolean).join(" · ")}function zu({projeto:n,tema:e,ficha:t}){return _.jsxs(_.Fragment,{children:[t&&t.responsaveis.length>0&&_.jsxs("div",{className:"atlas-tooltip-nota",children:["Responsável: ",t.responsaveis.join("; ")]}),t&&t.fomento.length>0&&_.jsxs("div",{className:"atlas-tooltip-nota",children:["Fomento:"," ",t.fomento.map(i=>`${i.agencia} (${ug(i.esfera)}${i.desde?`, desde ${i.desde}`:""})`).join("; ")]}),t&&t.fomento.length===0&&_.jsx("div",{className:"atlas-tooltip-nota",children:"Sem fomento registrado."}),_.jsxs("div",{className:"atlas-tooltip-nota",children:[e,n.subarea?` · ${n.subarea}`:""]})]})}const hg=420,dg=230;function ku(n,e){const t=n+14+hg>window.innerWidth,i=e+14+dg>window.innerHeight;return{left:t?n-14:n+14,top:i?e-14:e+14,transform:`translate(${t?"-100%":"0"}, ${i?"-100%":"0"})`}}function fg({x:n,y:e,p:t,tema:i,ficha:r}){const s=r?Ou(r):null,a=r?Bu(r.situacao):null,o=[t.sigla,a,s,`${t.n_producoes} produções`,r?`${r.n_membros} membros`:null].filter(Boolean).join(" · "),c=r?lg(r):[];return _.jsxs("div",{className:"atlas-tooltip atlas-tooltip-ficha",style:ku(n,e),children:[_.jsx("strong",{children:t.nome??"(sem título)"}),_.jsx("div",{className:"atlas-tooltip-nota",children:o}),(r==null?void 0:r.resumo)&&_.jsx("div",{className:"atlas-tooltip-resumo",children:r.resumo}),r&&(r.responsaveis.length>0||c.length>0)&&_.jsxs("div",{className:"atlas-tooltip-nota",children:[r.responsaveis.length>0&&_.jsxs(_.Fragment,{children:["Responsável: ",r.responsaveis.join("; ")]}),r.responsaveis.length>0&&c.length>0&&" · ",c.length>0&&_.jsxs(_.Fragment,{children:["Fomento: ",c.join(", ")]})]}),_.jsxs("div",{className:"atlas-tooltip-nota",children:[i,t.subarea?` · ${t.subarea}`:""]}),_.jsx("div",{className:"atlas-tooltip-dica",children:"clique para fixar e ler a descrição completa"})]})}function pg({x:n,y:e,pr:t,marca:i,destaques:r,projetoNome:s,responsaveis:a}){const o=t.autores.map(c=>c.nome);return _.jsxs("div",{className:"atlas-tooltip atlas-tooltip-ficha",style:ku(n,e),children:[_.jsxs("strong",{children:[i,t.nome??"sem título registrado"]}),_.jsxs("div",{className:"atlas-tooltip-nota",children:[nu[t.classe]??t.classe," · ",t.tipo," — ",t.subtipo,t.ano?` · ${t.ano}`:""]}),o.length>0&&_.jsxs("div",{className:"atlas-tooltip-nota",children:["Autoria: ",o.slice(0,4).join("; "),o.length>4?` e mais ${o.length-4}`:""]}),r.map(c=>_.jsxs("div",{className:"atlas-tooltip-resumo",children:[_.jsxs("span",{className:"atlas-tooltip-nota",children:[c.rotulo,": "]}),c.valor]},c.rotulo)),s&&_.jsxs("div",{className:"atlas-tooltip-projeto",children:[_.jsx("span",{className:"atlas-tooltip-nota",children:"Projeto: "}),s,a.length>0&&_.jsxs("span",{className:"atlas-tooltip-nota",children:[" · Responsável: ",a.join("; ")]})]}),_.jsx("div",{className:"atlas-tooltip-dica",children:"clique para fixar este cartão"})]})}const Ys=384;let Gl=20;function Or(n,e,t){return Math.max(e,Math.min(t,n))}function Gu({ancora:n,larguraArea:e,titulo:t,acoes:i,ariaLabel:r,onFechar:s,children:a}){const o=se.useRef(null),c=se.useRef(null),[l,u]=se.useState(()=>++Gl),[f,h]=se.useState(()=>n==="canto"?{left:Math.max(4,e-Ys-8),top:8}:{left:n.x+16+Ys<=e?n.x+16:Math.max(4,n.x-16-Ys),top:Math.max(4,n.y-24)});se.useLayoutEffect(()=>{const p=o.current,d=p==null?void 0:p.offsetParent;!p||!d||h(E=>({left:Or(E.left,0,Math.max(0,d.scrollWidth-p.offsetWidth)),top:Or(E.top,0,Math.max(0,d.clientHeight-p.offsetHeight))}))},[]);function g(p){if(p.target.closest("button, a"))return;const d=o.current;if(!d)return;p.currentTarget.setPointerCapture(p.pointerId);const E=d.getBoundingClientRect();c.current={dx:p.clientX-E.left,dy:p.clientY-E.top}}function v(p){const d=o.current,E=d==null?void 0:d.offsetParent;if(!c.current||!d||!E)return;const A=E.getBoundingClientRect();h({left:Or(p.clientX-A.left+E.scrollLeft-c.current.dx,0,Math.max(0,E.scrollWidth-d.offsetWidth)),top:Or(p.clientY-A.top-c.current.dy,0,Math.max(0,E.clientHeight-d.offsetHeight))})}function S(p){var d,E;c.current=null,(E=(d=p.currentTarget).hasPointerCapture)!=null&&E.call(d,p.pointerId)&&p.currentTarget.releasePointerCapture(p.pointerId)}return _.jsxs("div",{ref:o,className:"atlas-cartao",style:{left:f.left,top:f.top,zIndex:l},role:"dialog","aria-label":r,onPointerDown:()=>u(++Gl),children:[_.jsxs("div",{className:"atlas-cartao-cab",onPointerDown:g,onPointerMove:v,onPointerUp:S,onPointerCancel:S,title:"Arraste para mover",children:[_.jsxs("div",{className:"atlas-cartao-barra",children:[_.jsx("span",{className:"atlas-cartao-alca","aria-hidden":"true",children:"⠿"}),_.jsx("div",{className:"atlas-cartao-acoes",children:i}),_.jsx("button",{type:"button",className:"atlas-cartao-fechar",onClick:s,"aria-label":"Fechar",children:"✕"})]}),_.jsx("div",{className:"atlas-cartao-titulo",children:t})]}),a]})}const mg="/panoramapqmus-site/assets/s_sucupira-CHwyyuAs.svg",At={fill:"none",stroke:"currentColor",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"};function gg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"9",cy:"9",r:"6.2",fill:"none",stroke:"currentColor",strokeWidth:"0.8",strokeDasharray:"1.5 1.5"}),_.jsx("circle",{cx:"9",cy:"9",r:"2.4",fill:"currentColor"}),_.jsx("circle",{cx:"9",cy:"2.8",r:"1.5",fill:"currentColor"}),_.jsx("circle",{cx:"14.4",cy:"12.1",r:"1.5",fill:"currentColor"}),_.jsx("circle",{cx:"3.6",cy:"12.1",r:"1.5",fill:"currentColor"})]})}function Hu({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"3",cy:"4.5",r:"1.1",fill:"currentColor"}),_.jsx("circle",{cx:"3",cy:"9",r:"1.1",fill:"currentColor"}),_.jsx("circle",{cx:"3",cy:"13.5",r:"1.1",fill:"currentColor"}),_.jsx("path",{d:"M6.6 4.5h9M6.6 9h9M6.6 13.5h6",...At})]})}function Vu({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"9",cy:"9",r:"6.6",...At}),_.jsx("ellipse",{cx:"9",cy:"9",rx:"2.9",ry:"6.6",...At}),_.jsx("path",{d:"M2.6 9h12.8M3.7 5.6h10.6M3.7 12.4h10.6",...At})]})}function Wu({tamanho:n=20}){return _.jsx("img",{src:mg,alt:"",height:n,style:{display:"block",height:n,width:"auto"}})}function _g({tamanho:n=18}){return _.jsx("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:_.jsx("path",{d:"M2.5 3.5h13l-5 6v4.5l-3 1.5V9.5z",...At})})}function xg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("path",{d:"M9 5.2 4.6 12.4M9 5.2l4.4 7.2M5.6 13.4h6.8",...At}),_.jsx("circle",{cx:"9",cy:"4.4",r:"2",fill:"currentColor"}),_.jsx("circle",{cx:"4.2",cy:"13.4",r:"2",fill:"currentColor"}),_.jsx("circle",{cx:"13.8",cy:"13.4",r:"2",fill:"currentColor"})]})}function vg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("path",{d:"M9 2.5 15.5 6 9 9.5 2.5 6z",...At}),_.jsx("path",{d:"m2.5 9.2 6.5 3.5 6.5-3.5M2.5 12.4 9 15.9l6.5-3.5",...At})]})}function Mg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"5.2",cy:"5.2",r:"2.6",fill:"currentColor"}),_.jsx("circle",{cx:"5.2",cy:"5.2",r:"3.9",fill:"none",stroke:"currentColor",strokeWidth:"0.9"}),_.jsx("path",{d:"M10.6 5.2h5M3 13.2h2.6M8 13.2h7.5",...At})]})}function Sg({tamanho:n=18}){return _.jsx("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:_.jsx("path",{d:"M2.5 6.5v-4h4M11.5 2.5h4v4M15.5 11.5v4h-4M6.5 15.5h-4v-4",...At})})}function yg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("rect",{x:"2.5",y:"3.5",width:"13",height:"11",rx:"1.2",...At}),_.jsx("path",{d:"M2.5 7.5h13M7 7.5v7",...At})]})}function Eg({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"9",cy:"9",r:"6.6",...At}),_.jsx("path",{d:"M9 8.2v4",...At}),_.jsx("circle",{cx:"9",cy:"5.6",r:"0.9",fill:"currentColor"})]})}function bg({tamanho:n=18}){return _.jsx("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:_.jsx("path",{d:"M9 3.5v11M3.5 9h11",...At})})}function Tg({tamanho:n=18}){return _.jsx("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:_.jsx("path",{d:"M3.5 9h11",...At})})}function Ag({tamanho:n=18}){return _.jsxs("svg",{width:n,height:n,viewBox:"0 0 18 18","aria-hidden":"true",focusable:"false",children:[_.jsx("circle",{cx:"7.8",cy:"7.8",r:"4.6",...At}),_.jsx("path",{d:"m11.4 11.4 4 4",...At})]})}function wg({projeto:n,tema:e,ficha:t,descricao:i,ancora:r,onProducoes:s,onFechar:a,larguraArea:o}){return _.jsxs(Gu,{ancora:r,larguraArea:o,ariaLabel:`Projeto: ${n.nome??""}`,titulo:_.jsx("strong",{children:n.nome??"(sem título)"}),onFechar:a,acoes:_.jsxs("button",{type:"button",className:"atlas-icone-acao destaque",onClick:s,title:`Ver as ${n.n_producoes} produções deste projeto no mapa e na lista`,"aria-label":`Ver as ${n.n_producoes} produções deste projeto`,children:[_.jsx(gg,{}),_.jsx("span",{className:"atlas-icone-n",children:n.n_producoes})]}),children:[_.jsx("div",{className:"atlas-tooltip-nota",children:jo(n,t)}),_.jsxs("div",{className:"atlas-cartao-corpo",tabIndex:0,"aria-label":"Descrição do projeto",children:[i??(t==null?void 0:t.resumo)??"Carregando…",!i&&(t==null?void 0:t.resumo)&&_.jsx("span",{className:"atlas-tooltip-nota",children:" (carregando a descrição completa…)"})]}),_.jsx(zu,{projeto:n,tema:e,ficha:t})]})}const $s=8;function Xu({pr:n,destaques:e,projeto:t,tema:i,ficha:r,descricao:s}){const a=n.autores.map(u=>u.nome),[o,c]=se.useState(!1),l=s??(r==null?void 0:r.resumo)??null;return _.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"atlas-tooltip-nota",children:[nu[n.classe]??n.classe," · ",n.tipo," — ",n.subtipo,n.ano?` · ${n.ano}`:""]}),_.jsxs("div",{className:"atlas-cartao-corpo atlas-cartao-rolagem",children:[a.length>0&&_.jsxs("p",{style:{margin:"0 0 0.35rem"},children:[_.jsx("strong",{children:"Autoria:"})," ",a.slice(0,$s).join("; "),a.length>$s?` e mais ${a.length-$s}`:""]}),e.length>0&&_.jsx("dl",{className:"cartao-destaques",children:e.map(u=>_.jsxs("div",{children:[_.jsx("dt",{children:u.rotulo}),_.jsx("dd",{children:u.valor})]},u.rotulo))}),e.length===0&&_.jsx("span",{className:"atlas-tooltip-nota",children:"Sem campos de detalhe na Plataforma para esta produção."}),_.jsxs("div",{className:"cartao-projeto",children:[_.jsx("div",{className:"cartao-projeto-rotulo",children:"Projeto"}),_.jsx("strong",{children:t.nome??"(sem título)"}),_.jsx("div",{className:"atlas-tooltip-nota",children:jo(t,r)}),_.jsx(zu,{projeto:t,tema:i,ficha:r}),l&&_.jsxs(_.Fragment,{children:[_.jsx("button",{type:"button",className:"atlas-cartao-alterna",onClick:()=>c(u=>!u),children:o?"recolher a descrição do projeto ▴":"mostrar a descrição do projeto ▾"}),o&&_.jsx("div",{className:"cartao-projeto-descricao",children:l})]})]})]})]})}function Rg({pr:n,marca:e,destaques:t,links:i,projeto:r,tema:s,ficha:a,descricao:o,ancora:c,larguraArea:l,detalheAberto:u,onDetalhe:f,onFechar:h}){return _.jsx(Gu,{ancora:c,larguraArea:l,ariaLabel:`Produção: ${n.nome??""}`,titulo:_.jsxs("strong",{children:[e,n.nome??"sem título registrado"]}),onFechar:h,acoes:_.jsxs(_.Fragment,{children:[n.link&&_.jsx("a",{className:"atlas-icone-acao",href:n.link,target:"_blank",rel:"noreferrer",title:"Abrir a página desta produção na Plataforma Sucupira","aria-label":"Abrir na Plataforma Sucupira",children:_.jsx(Wu,{})}),_.jsx("button",{type:"button",className:`atlas-icone-acao${u?" ativo":""}`,onClick:f,"aria-pressed":u,title:u?"Detalhe completo aberto no painel (clique para fechar)":"Ver o detalhe completo, no painel","aria-label":"Detalhe completo da produção",children:_.jsx(Hu,{})}),i.map(g=>_.jsx("a",{className:"atlas-icone-acao",href:g.url,target:"_blank",rel:"noreferrer",title:`${g.rotulo}: ${g.url}`,"aria-label":`${g.rotulo} (abre em outra aba)`,children:_.jsx(Vu,{})},g.url))]}),children:_.jsx(Xu,{pr:n,destaques:t,projeto:r,tema:s,ficha:a,descricao:o})})}const Va=3.6,qu=Va*Fh,Ks=150,Cg=2*qu+.6,Hl=Cg/1.75,Pg=2.399963229728653,Vl=2,Wl=2.2,Wa=22;function Ng(n,e){if(e<=Ks)return new Map(n);const t=new Map;for(const[r,s]of n)t.set(r,Math.max(1,Math.floor(s*Ks/e)));let i=[...t.values()].reduce((r,s)=>r+s,0);for(;i>Ks;){const r=[...t.entries()].sort((s,a)=>a[1]-s[1])[0];t.set(r[0],r[1]-1),i-=1}return t}function ju(n,e,t,i,r){const s=new Map;n.forEach((T,N)=>{const D=s.get(T);D?D.push(N):s.set(T,[N])});const a=Ng(new Map([...s].map(([T,N])=>[T,N.length])),n.length),c=[...s.keys()].sort((T,N)=>e(T)-e(N)||T.localeCompare(N)).map(T=>{const N=(s.get(T)??[]).slice(0,a.get(T)??0);return{g:T,mantidas:N,rb:Hl*Math.sqrt(N.length+.5)+qu+.6}}),l=n.length-c.reduce((T,N)=>T+N.mantidas.length,0);if(c.length===0)return{satelites:[],rotulos:[],extX:r,extY:r,omitidas:0};const u=c.length,f=(T,N,D)=>2*Math.asin(Math.min(1,(c[T].rb+c[N].rb+Vl)/(2*D))),h=T=>{let N=0;for(let D=0;D<u;D++)N+=f(D,(D+1)%u,T);return N},g=Math.max(...c.map(T=>T.rb));let v=r+Wl+g,S=v;if(u>1&&h(v)>2*Math.PI){let T=v*4;for(;h(T)>2*Math.PI;)T*=2;for(let N=0;N<40;N++){const D=(v+T)/2;h(D)>2*Math.PI?v=D:T=D}S=T}const p=u>1?2*Math.PI/h(S):1,d=[];let E=-Math.PI/2;c.forEach((T,N)=>{d.push(E),u>1&&(E+=f(N,(N+1)%u,S)*p)});const A=c.map(()=>NaN),M=c.map((T,N)=>d[N]),w=[],b=c.map((T,N)=>N).sort((T,N)=>c[N].rb-c[T].rb),P=50*Math.PI/180,x=2.5*Math.PI/180,R=.35;for(const T of b){const N=r+Wl+c[T].rb;let D={custo:1/0,d:S,a:d[T]};for(let O=-P;O<=P+1e-9;O+=x){const W=d[T]+O,$=Math.cos(W),ee=Math.sin(W),te=[];for(const Ce of w){const Te=A[Ce]*Math.cos(M[Ce]),J=A[Ce]*Math.sin(M[Ce]),ae=c[T].rb+c[Ce].rb+Vl,ie=$*Te+ee*J,be=ie*ie-(Te*Te+J*J)+ae*ae;be>0&&te.push([ie-Math.sqrt(be),ie+Math.sqrt(be)])}te.sort((Ce,Te)=>Ce[0]-Te[0]);let oe=N;for(const[Ce,Te]of te)oe>Ce&&oe<Te&&(oe=Te);const Se=oe+R*oe*Math.abs(O);Se<D.custo&&(D={custo:Se,d:oe,a:W})}A[T]=D.d,M[T]=D.a,w.push(T)}const U=[],I=[];let F=r,q=r;return c.forEach((T,N)=>{var J,ae;const D=M[N],O=t+A[N]*Math.cos(D),W=i+A[N]*Math.sin(D);T.mantidas.forEach((ie,be)=>{const Ie=Hl*Math.sqrt(be+.5),Ae=be*Pg+D;U.push({i:ie,x:O+Ie*Math.cos(Ae),y:W+Ie*Math.sin(Ae)})});const $=Math.cos(D),ee=Math.sin(D),te=A[N]+T.rb+1.5;I.push({grupo:T.g,n:((J=s.get(T.g))==null?void 0:J.length)??0,mostradas:T.mantidas.length,x:t+te*$,y:i+te*ee,ancora:$>.35?"start":$<-.35?"end":"middle"});const oe=Math.max(Math.min(((ae=T.g.split("||")[1])==null?void 0:ae.length)??12,Wa),8)*1.95,Se=Math.abs(te*$),Ce=Math.abs(te*ee),Te=$>.35||$<-.35?Se+oe:Se+oe/2;F=Math.max(F,Math.abs(O-t)+T.rb,Te),q=Math.max(q,Math.abs(W-i)+T.rb,Ce+6)}),{satelites:U,rotulos:I,extX:F,extY:q,omitidas:l}}function Dg(n,e){const t=Array.from({length:Math.max(1,n)},(r,s)=>`g||${"x".repeat(14)}${s%4}`),i=ju(t,r=>r.length,0,0,e);return{x:i.extX,y:i.extY}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="185",Wi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lg=0,Xl=1,Ig=2,fs=1,Ug=2,pr=3,ii=0,Vt=1,In=2,On=0,Xi=1,ql=2,jl=3,Yl=4,Fg=5,ui=100,Og=101,Bg=102,zg=103,kg=104,Gg=200,Hg=201,Vg=202,Wg=203,Xa=204,qa=205,Xg=206,qg=207,jg=208,Yg=209,$g=210,Kg=211,Zg=212,Jg=213,Qg=214,ja=0,Ya=1,$a=2,Ki=3,Ka=4,Za=5,Ja=6,Qa=7,Yu=0,e_=1,t_=2,xn=0,$u=1,Ku=2,Zu=3,Ju=4,Qu=5,eh=6,th=7,nh=300,_i=301,Zi=302,Zs=303,Js=304,Fs=306,eo=1e3,Fn=1001,to=1002,wt=1003,n_=1004,Br=1005,Lt=1006,Qs=1007,fi=1008,en=1009,ih=1010,rh=1011,Sr=1012,$o=1013,Sn=1014,mn=1015,kn=1016,Ko=1017,Zo=1018,yr=1020,sh=35902,ah=35899,oh=1021,lh=1022,ln=1023,Gn=1026,pi=1027,ch=1028,Jo=1029,xi=1030,Qo=1031,el=1033,ps=33776,ms=33777,gs=33778,_s=33779,no=35840,io=35841,ro=35842,so=35843,ao=36196,oo=37492,lo=37496,co=37488,uo=37489,As=37490,ho=37491,fo=37808,po=37809,mo=37810,go=37811,_o=37812,xo=37813,vo=37814,Mo=37815,So=37816,yo=37817,Eo=37818,bo=37819,To=37820,Ao=37821,wo=36492,Ro=36494,Co=36495,Po=36283,No=36284,ws=36285,Do=36286,i_=3200,$l=0,r_=1,Qn="",Jt="srgb",Rs="srgb-linear",Cs="linear",nt="srgb",bi=7680,Kl=519,s_=512,a_=513,o_=514,tl=515,l_=516,c_=517,nl=518,u_=519,Zl=35044,Jl="300 es",gn=2e3,Ps=2001;function h_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){const n=Ns("canvas");return n.style.display="block",n}const Ql={};function ec(...n){const e="THREE."+n.shift();console.log(e,...n)}function uh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ze(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function qi(...n){const e=n.join(" ");e in Ql||(Ql[e]=!0,Oe(...n))}function f_(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const p_={[ja]:Ya,[$a]:Ja,[Ka]:Qa,[Ki]:Za,[Ya]:ja,[Ja]:$a,[Qa]:Ka,[Za]:Ki};class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xs=Math.PI/180,Lo=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function je(n,e,t){return Math.max(e,Math.min(t,n))}function m_(n,e){return(n%e+e)%e}function ea(n,e,t){return(1-t)*n+t*e}function rr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const g_={DEG2RAD:xs},ul=class ul{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let ke=ul;class ri{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],g=s[a+1],v=s[a+2],S=s[a+3];if(f!==S||c!==h||l!==g||u!==v){let p=c*h+l*g+u*v+f*S;p<0&&(h=-h,g=-g,v=-v,S=-S,p=-p);let d=1-o;if(p<.9995){const E=Math.acos(p),A=Math.sin(E);d=Math.sin(d*E)/A,o=Math.sin(o*E)/A,c=c*d+h*o,l=l*d+g*o,u=u*d+v*o,f=f*d+S*o}else{c=c*d+h*o,l=l*d+g*o,u=u*d+v*o,f=f*d+S*o;const E=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=E,l*=E,u*=E,f*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[a],h=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+u*f+c*g-l*h,e[t+1]=c*v+u*h+l*f-o*g,e[t+2]=l*v+u*g+o*h-c*f,e[t+3]=u*v-o*f-c*h-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),f=o(s/2),h=c(i/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=h*u*f+l*g*v,this._y=l*g*f-h*u*v,this._z=l*u*v+h*g*f,this._w=l*u*f-h*g*v;break;case"YXZ":this._x=h*u*f+l*g*v,this._y=l*g*f-h*u*v,this._z=l*u*v-h*g*f,this._w=l*u*f+h*g*v;break;case"ZXY":this._x=h*u*f-l*g*v,this._y=l*g*f+h*u*v,this._z=l*u*v+h*g*f,this._w=l*u*f-h*g*v;break;case"ZYX":this._x=h*u*f-l*g*v,this._y=l*g*f+h*u*v,this._z=l*u*v-h*g*f,this._w=l*u*f+h*g*v;break;case"YZX":this._x=h*u*f+l*g*v,this._y=l*g*f+h*u*v,this._z=l*u*v-h*g*f,this._w=l*u*f-h*g*v;break;case"XZY":this._x=h*u*f-l*g*v,this._y=l*g*f-h*u*v,this._z=l*u*v+h*g*f,this._w=l*u*f+h*g*v;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(i>o&&i>f){const g=2*Math.sqrt(1+i-o-f);this._w=(u-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>f){const g=2*Math.sqrt(1+o-i-f);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+f-i-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+c*l+a*f-o*u,this.y=i+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ta.copy(this).projectOnVector(e),this.sub(ta)}reflect(e){return this.sub(ta.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let X=hl;const ta=new X,tc=new ri,dl=class dl{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],f=i[7],h=i[2],g=i[5],v=i[8],S=r[0],p=r[3],d=r[6],E=r[1],A=r[4],M=r[7],w=r[2],b=r[5],P=r[8];return s[0]=a*S+o*E+c*w,s[3]=a*p+o*A+c*b,s[6]=a*d+o*M+c*P,s[1]=l*S+u*E+f*w,s[4]=l*p+u*A+f*b,s[7]=l*d+u*M+f*P,s[2]=h*S+g*E+v*w,s[5]=h*p+g*A+v*b,s[8]=h*d+g*M+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*s,g=l*s-a*c,v=t*f+i*h+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*l-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=g*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(na.makeScale(e,t)),this}rotate(e){return qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(na.makeRotation(-e)),this}translate(e,t){return qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dl.prototype.isMatrix3=!0;let ze=dl;const na=new ze,nc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function __(){const n={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qn?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rs]:{primaries:e,whitePoint:i,transfer:Cs,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),n}const $e=__();function Bn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class x_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ti===void 0&&(Ti=Ns("canvas")),Ti.width=e.width,Ti.height=e.height;const r=Ti.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ti}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bn(t[i]/255)*255):t[i]=Bn(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let v_=0;class il{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ia(r[a].image)):s.push(ia(r[a]))}else s=ia(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ia(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?x_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let M_=0;const ra=new X;class Ot extends si{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=Fn,r=Fn,s=Lt,a=fi,o=ln,c=en,l=Ot.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Ar(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=nh;Ot.DEFAULT_ANISOTROPY=1;const fl=class fl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],g=c[5],v=c[9],S=c[2],p=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+p)<.1&&Math.abs(l+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,M=(g+1)/2,w=(d+1)/2,b=(u+h)/4,P=(f+S)/4,x=(v+p)/4;return A>M&&A>w?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=b/i,s=P/i):M>w?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=x/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=x/s),this.set(i,r,s,t),this}let E=Math.sqrt((p-v)*(p-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(f-S)/E,this.z=(h-u)/E,this.w=Math.acos((l+g+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fl.prototype.isVector4=!0;let _t=fl;class S_ extends si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ot(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new il(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends S_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hh extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y_ extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wt,this.minFilter=wt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ds=class Ds{constructor(e,t,i,r,s,a,o,c,l,u,f,h,g,v,S,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,f,h,g,v,S,p)}set(e,t,i,r,s,a,o,c,l,u,f,h,g,v,S,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=g,d[7]=v,d[11]=S,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ds().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,g=a*f,v=o*u,S=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=g+v*l,t[5]=h-S*l,t[9]=-o*c,t[2]=S-h*l,t[6]=v+g*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,g=c*f,v=l*u,S=l*f;t[0]=h+S*o,t[4]=v*o-g,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=g*o-v,t[6]=S+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,g=c*f,v=l*u,S=l*f;t[0]=h-S*o,t[4]=-a*f,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,g=a*f,v=o*u,S=o*f;t[0]=c*u,t[4]=v*l-g,t[8]=h*l+S,t[1]=c*f,t[5]=S*l+h,t[9]=g*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*l,v=o*c,S=o*l;t[0]=c*u,t[4]=S-h*f,t[8]=v*f+g,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=g*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*c,g=a*l,v=o*c,S=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+S,t[5]=a*u,t[9]=g*f-v,t[2]=v*f-g,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E_,e,b_)}lookAt(e,t,i){const r=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Xn.crossVectors(i,qt),Xn.lengthSq()===0&&(Math.abs(i.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Xn.crossVectors(i,qt)),Xn.normalize(),zr.crossVectors(qt,Xn),r[0]=Xn.x,r[4]=zr.x,r[8]=qt.x,r[1]=Xn.y,r[5]=zr.y,r[9]=qt.y,r[2]=Xn.z,r[6]=zr.z,r[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],f=i[5],h=i[9],g=i[13],v=i[2],S=i[6],p=i[10],d=i[14],E=i[3],A=i[7],M=i[11],w=i[15],b=r[0],P=r[4],x=r[8],R=r[12],U=r[1],I=r[5],F=r[9],q=r[13],T=r[2],N=r[6],D=r[10],O=r[14],W=r[3],$=r[7],ee=r[11],te=r[15];return s[0]=a*b+o*U+c*T+l*W,s[4]=a*P+o*I+c*N+l*$,s[8]=a*x+o*F+c*D+l*ee,s[12]=a*R+o*q+c*O+l*te,s[1]=u*b+f*U+h*T+g*W,s[5]=u*P+f*I+h*N+g*$,s[9]=u*x+f*F+h*D+g*ee,s[13]=u*R+f*q+h*O+g*te,s[2]=v*b+S*U+p*T+d*W,s[6]=v*P+S*I+p*N+d*$,s[10]=v*x+S*F+p*D+d*ee,s[14]=v*R+S*q+p*O+d*te,s[3]=E*b+A*U+M*T+w*W,s[7]=E*P+A*I+M*N+w*$,s[11]=E*x+A*F+M*D+w*ee,s[15]=E*R+A*q+M*O+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],g=e[14],v=e[3],S=e[7],p=e[11],d=e[15],E=c*g-l*h,A=o*g-l*f,M=o*h-c*f,w=a*g-l*u,b=a*h-c*u,P=a*f-o*u;return t*(S*E-p*A+d*M)-i*(v*E-p*w+d*b)+r*(v*A-S*w+d*P)-s*(v*M-S*b+p*P)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],g=e[11],v=e[12],S=e[13],p=e[14],d=e[15],E=t*o-i*a,A=t*c-r*a,M=t*l-s*a,w=i*c-r*o,b=i*l-s*o,P=r*l-s*c,x=u*S-f*v,R=u*p-h*v,U=u*d-g*v,I=f*p-h*S,F=f*d-g*S,q=h*d-g*p,T=E*q-A*F+M*I+w*U-b*R+P*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=(o*q-c*F+l*I)*N,e[1]=(r*F-i*q-s*I)*N,e[2]=(S*P-p*b+d*w)*N,e[3]=(h*b-f*P-g*w)*N,e[4]=(c*U-a*q-l*R)*N,e[5]=(t*q-r*U+s*R)*N,e[6]=(p*M-v*P-d*A)*N,e[7]=(u*P-h*M+g*A)*N,e[8]=(a*F-o*U+l*x)*N,e[9]=(i*U-t*F-s*x)*N,e[10]=(v*b-S*M+d*E)*N,e[11]=(f*M-u*b-g*E)*N,e[12]=(o*R-a*I-c*x)*N,e[13]=(t*I-i*R+r*x)*N,e[14]=(S*A-v*w-p*E)*N,e[15]=(u*w-f*A+h*E)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,h=s*l,g=s*u,v=s*f,S=a*u,p=a*f,d=o*f,E=c*l,A=c*u,M=c*f,w=i.x,b=i.y,P=i.z;return r[0]=(1-(S+d))*w,r[1]=(g+M)*w,r[2]=(v-A)*w,r[3]=0,r[4]=(g-M)*b,r[5]=(1-(h+d))*b,r[6]=(p+E)*b,r[7]=0,r[8]=(v+A)*P,r[9]=(p-E)*P,r[10]=(1-(h+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ai.set(r[0],r[1],r[2]).length();const o=Ai.set(r[4],r[5],r[6]).length(),c=Ai.set(r[8],r[9],r[10]).length();s<0&&(a=-a),nn.copy(this);const l=1/a,u=1/o,f=1/c;return nn.elements[0]*=l,nn.elements[1]*=l,nn.elements[2]*=l,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=gn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),g=(i+r)/(i-r);let v,S;if(c)v=s/(a-s),S=a*s/(a-s);else if(o===gn)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===Ps)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=gn,c=!1){const l=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),g=-(i+r)/(i-r);let v,S;if(c)v=1/(a-s),S=a/(a-s);else if(o===gn)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===Ps)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ds.prototype.isMatrix4=!0;let Mt=Ds;const Ai=new X,nn=new Mt,E_=new X(0,0,0),b_=new X(1,1,1),Xn=new X,zr=new X,qt=new X,rc=new Mt,sc=new ri;class vi{constructor(e=0,t=0,i=0,r=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class rl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let T_=0;const ac=new X,wi=new ri,Rn=new Mt,kr=new X,sr=new X,A_=new X,w_=new ri,oc=new X(1,0,0),lc=new X(0,1,0),cc=new X(0,0,1),uc={type:"added"},R_={type:"removed"},Ri={type:"childadded",child:null},sa={type:"childremoved",child:null};class Wt extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new X,t=new vi,i=new ri,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.multiply(wi),this}rotateOnWorldAxis(e,t){return wi.setFromAxisAngle(e,t),this.quaternion.premultiply(wi),this}rotateX(e){return this.rotateOnAxis(oc,e)}rotateY(e){return this.rotateOnAxis(lc,e)}rotateZ(e){return this.rotateOnAxis(cc,e)}translateOnAxis(e,t){return ac.copy(e).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(oc,e)}translateY(e){return this.translateOnAxis(lc,e)}translateZ(e){return this.translateOnAxis(cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(sr,kr,this.up):Rn.lookAt(kr,sr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),wi.setFromRotationMatrix(Rn),this.quaternion.premultiply(wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(R_),sa.child=e,this.dispatchEvent(sa),sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,A_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,w_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new X(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Gr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C_={type:"move"};class aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const p=t.getJointPose(S,i),d=this._getHandJoint(l,S);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),g=.02,v=.005;l.inputState.pinching&&h>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class tt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=$e.workingColorSpace){if(e=m_(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=oa(a,s,e+1/3),this.g=oa(a,s,e),this.b=oa(a,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,t=Jt){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const i=dh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return $e.workingToColorSpace(Dt.copy(this),e),Math.round(je(Dt.r*255,0,255))*65536+Math.round(je(Dt.g*255,0,255))*256+Math.round(je(Dt.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Jt){$e.workingToColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Hr);const i=ea(qn.h,Hr.h,t),r=ea(qn.s,Hr.s,t),s=ea(qn.l,Hr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new tt;tt.NAMES=dh;class P_ extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const rn=new X,Cn=new X,la=new X,Pn=new X,Ci=new X,Pi=new X,hc=new X,ca=new X,ua=new X,ha=new X,da=new _t,fa=new _t,pa=new _t;class on{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),rn.subVectors(e,t),r.cross(rn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){rn.subVectors(r,t),Cn.subVectors(i,t),la.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Cn),c=rn.dot(la),l=Cn.dot(Cn),u=Cn.dot(la),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,g=(l*c-o*u)*h,v=(a*u-o*c)*h;return s.set(1-g-v,v,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,Pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Pn.x),c.addScaledVector(a,Pn.y),c.addScaledVector(o,Pn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return da.setScalar(0),fa.setScalar(0),pa.setScalar(0),da.fromBufferAttribute(e,t),fa.fromBufferAttribute(e,i),pa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(da,s.x),a.addScaledVector(fa,s.y),a.addScaledVector(pa,s.z),a}static isFrontFacing(e,t,i,r){return rn.subVectors(i,t),Cn.subVectors(e,t),rn.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ci.subVectors(r,i),Pi.subVectors(s,i),ca.subVectors(e,i);const c=Ci.dot(ca),l=Pi.dot(ca);if(c<=0&&l<=0)return t.copy(i);ua.subVectors(e,r);const u=Ci.dot(ua),f=Pi.dot(ua);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Ci,a);ha.subVectors(e,s);const g=Ci.dot(ha),v=Pi.dot(ha);if(v>=0&&g<=v)return t.copy(s);const S=g*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(Pi,o);const p=u*v-g*f;if(p<=0&&f-u>=0&&g-v>=0)return hc.subVectors(s,r),o=(f-u)/(f-u+(g-v)),t.copy(r).addScaledVector(hc,o);const d=1/(p+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(Ci,a).addScaledVector(Pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wr{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(s,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Wr.subVectors(this.max,ar),Ni.subVectors(e.a,ar),Di.subVectors(e.b,ar),Li.subVectors(e.c,ar),jn.subVectors(Di,Ni),Yn.subVectors(Li,Di),ai.subVectors(Ni,Li);let t=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-ai.z,ai.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,ai.z,0,-ai.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-ai.y,ai.x,0];return!ma(t,Ni,Di,Li,Wr)||(t=[1,0,0,0,1,0,0,0,1],!ma(t,Ni,Di,Li,Wr))?!1:(Xr.crossVectors(jn,Yn),t=[Xr.x,Xr.y,Xr.z],ma(t,Ni,Di,Li,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new X,new X,new X,new X,new X,new X,new X,new X],sn=new X,Vr=new wr,Ni=new X,Di=new X,Li=new X,jn=new X,Yn=new X,ai=new X,ar=new X,Wr=new X,Xr=new X,oi=new X;function ma(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),c=e.dot(oi),l=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const St=new X,qr=new ke;let N_=0;class Mn extends si{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:N_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=rr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zl&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fh extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ph extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class tn extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const D_=new wr,or=new X,ga=new X;class sl{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):D_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(ga)),this.expandByPoint(or.copy(e.center).sub(ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let L_=0;const Zt=new Mt,_a=new Wt,Ii=new X,jt=new wr,lr=new wr,Tt=new X;class Tn extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h_(e)?ph:fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return _a.lookAt(e),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(jt.min,lr.min),jt.expandByPoint(Tt),Tt.addVectors(jt.max,lr.max),jt.expandByPoint(Tt)):(jt.expandByPoint(lr.min),jt.expandByPoint(lr.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Tt.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(e,l),Tt.add(Ii)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new X,c[x]=new X;const l=new X,u=new X,f=new X,h=new ke,g=new ke,v=new ke,S=new X,p=new X;function d(x,R,U){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,U),h.fromBufferAttribute(s,x),g.fromBufferAttribute(s,R),v.fromBufferAttribute(s,U),u.sub(l),f.sub(l),g.sub(h),v.sub(h);const I=1/(g.x*v.y-v.x*g.y);isFinite(I)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(I),p.copy(f).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(I),o[x].add(S),o[R].add(S),o[U].add(S),c[x].add(p),c[R].add(p),c[U].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let x=0,R=E.length;x<R;++x){const U=E[x],I=U.start,F=U.count;for(let q=I,T=I+F;q<T;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new X,M=new X,w=new X,b=new X;function P(x){w.fromBufferAttribute(r,x),b.copy(w);const R=o[x];A.copy(R),A.sub(w.multiplyScalar(w.dot(R))).normalize(),M.crossVectors(b,R);const I=M.dot(c[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,I)}for(let x=0,R=E.length;x<R;++x){const U=E[x],I=U.start,F=U.count;for(let q=I,T=I+F;q<T;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,c=new X,l=new X,u=new X,f=new X;if(e)for(let h=0,g=e.count;h<g;h+=3){const v=e.getX(h+0),S=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let g=0,v=0;for(let S=0,p=c.length;S<p;S++){o.isInterleavedBufferAttribute?g=c[S]*o.data.stride+o.offset:g=c[S]*u;for(let d=0;d<u;d++)h[v++]=l[g++]}return new Mn(h,u,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],g=e(h,i);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const g=l[f];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,g=f.length;h<g;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let I_=0;class Os extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=Xi,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=qa,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xi&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xa&&(i.blendSrc=this.blendSrc),this.blendDst!==qa&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new X,xa=new X,jr=new X,$n=new X,va=new X,Yr=new X,Ma=new X;class al{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xa.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(xa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(jr),o=$n.dot(this.direction),c=-$n.dot(jr),l=$n.lengthSq(),u=Math.abs(1-a*a);let f,h,g,v;if(u>0)if(f=a*c-o,h=a*o-c,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,g=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-c),s),g=-f*f+h*(h+2*c)+l):h<=v?(f=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+l):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-c),s),g=-f*f+h*(h+2*c)+l);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),g=-f*f+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xa).addScaledVector(jr,h),g}intersectSphere(e,t){Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,s){va.subVectors(t,e),Yr.subVectors(i,e),Ma.crossVectors(va,Yr);let a=this.direction.dot(Ma),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$n.subVectors(this.origin,e);const c=o*this.direction.dot(Yr.crossVectors($n,Yr));if(c<0)return null;const l=o*this.direction.dot(va.cross($n));if(l<0||c+l>a)return null;const u=-o*$n.dot(Ma);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ol extends Os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dc=new Mt,li=new al,$r=new sl,fc=new X,Kr=new X,Zr=new X,Jr=new X,Sa=new X,Qr=new X,pc=new X,es=new X;class yn extends Wt{constructor(e=new Tn,t=new ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Qr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Sa.fromBufferAttribute(f,e),a?Qr.addScaledVector(Sa,u):Qr.addScaledVector(Sa.sub(t),u))}t.add(Qr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),li.copy(e.ray).recast(e.near),!($r.containsPoint(li.origin)===!1&&(li.intersectSphere($r,fc)===null||li.origin.distanceToSquared(fc)>(e.far-e.near)**2))&&(dc.copy(s).invert(),li.copy(e.ray).applyMatrix4(dc),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,li)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const p=h[v],d=a[p.materialIndex],E=Math.max(p.start,g.start),A=Math.min(o.count,Math.min(p.start+p.count,g.start+g.count));for(let M=E,w=A;M<w;M+=3){const b=o.getX(M),P=o.getX(M+1),x=o.getX(M+2);r=ts(this,d,e,i,l,u,f,b,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(o.count,g.start+g.count);for(let p=v,d=S;p<d;p+=3){const E=o.getX(p),A=o.getX(p+1),M=o.getX(p+2);r=ts(this,a,e,i,l,u,f,E,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const p=h[v],d=a[p.materialIndex],E=Math.max(p.start,g.start),A=Math.min(c.count,Math.min(p.start+p.count,g.start+g.count));for(let M=E,w=A;M<w;M+=3){const b=M,P=M+1,x=M+2;r=ts(this,d,e,i,l,u,f,b,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),S=Math.min(c.count,g.start+g.count);for(let p=v,d=S;p<d;p+=3){const E=p,A=p+1,M=p+2;r=ts(this,a,e,i,l,u,f,E,A,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function U_(n,e,t,i,r,s,a,o){let c;if(e.side===Vt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===ii,o),c===null)return null;es.copy(o),es.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(es);return l<t.near||l>t.far?null:{distance:l,point:es.clone(),object:n}}function ts(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Kr),n.getVertexPosition(c,Zr),n.getVertexPosition(l,Jr);const u=U_(n,e,t,i,Kr,Zr,Jr,pc);if(u){const f=new X;on.getBarycoord(pc,Kr,Zr,Jr,f),r&&(u.uv=on.getInterpolatedAttribute(r,o,c,l,f,new ke)),s&&(u.uv1=on.getInterpolatedAttribute(s,o,c,l,f,new ke)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,l,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new X,materialIndex:0};on.getNormal(Kr,Zr,Jr,h.normal),u.face=h,u.barycoord=f}return u}class F_ extends Ot{constructor(e=null,t=1,i=1,r,s,a,o,c,l=wt,u=wt,f,h){super(null,a,o,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ya=new X,O_=new X,B_=new ze;class Jn{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ya.subVectors(i,t).cross(O_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(ya),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||B_.getNormalMatrix(e),r=this.coplanarPoint(ya).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new sl,z_=new ke(.5,.5),ns=new X;class mh{constructor(e=new Jn,t=new Jn,i=new Jn,r=new Jn,s=new Jn,a=new Jn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],h=s[6],g=s[7],v=s[8],S=s[9],p=s[10],d=s[11],E=s[12],A=s[13],M=s[14],w=s[15];if(r[0].setComponents(l-a,g-u,d-v,w-E).normalize(),r[1].setComponents(l+a,g+u,d+v,w+E).normalize(),r[2].setComponents(l+o,g+f,d+S,w+A).normalize(),r[3].setComponents(l-o,g-f,d-S,w-A).normalize(),i)r[4].setComponents(c,h,p,M).normalize(),r[5].setComponents(l-c,g-h,d-p,w-M).normalize();else if(r[4].setComponents(l-c,g-h,d-p,w-M).normalize(),t===gn)r[5].setComponents(l+c,g+h,d+p,w+M).normalize();else if(t===Ps)r[5].setComponents(c,h,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=z_.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ns.x=r.normal.x>0?e.max.x:e.min.x,ns.y=r.normal.y>0?e.max.y:e.min.y,ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gh extends Ot{constructor(e=[],t=_i,i,r,s,a,o,c,l,u){super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ji extends Ot{constructor(e,t,i=Sn,r,s,a,o=wt,c=wt,l,u=Gn,f=1){if(u!==Gn&&u!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new il(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class k_ extends Ji{constructor(e,t=Sn,i=_i,r,s,a=wt,o=wt,c,l=Gn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _h extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends Tn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,g=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(u,3)),this.setAttribute("uv",new tn(f,2));function v(S,p,d,E,A,M,w,b,P,x,R){const U=M/P,I=w/x,F=M/2,q=w/2,T=b/2,N=P+1,D=x+1;let O=0,W=0;const $=new X;for(let ee=0;ee<D;ee++){const te=ee*I-q;for(let oe=0;oe<N;oe++){const Se=oe*U-F;$[S]=Se*E,$[p]=te*A,$[d]=T,l.push($.x,$.y,$.z),$[S]=0,$[p]=0,$[d]=b>0?1:-1,u.push($.x,$.y,$.z),f.push(oe/P),f.push(1-ee/x),O+=1}}for(let ee=0;ee<x;ee++)for(let te=0;te<P;te++){const oe=h+te+N*ee,Se=h+te+N*(ee+1),Ce=h+(te+1)+N*(ee+1),Te=h+(te+1)+N*ee;c.push(oe,Se,Te),c.push(Se,Ce,Te),W+=6}o.addGroup(g,W,R),g+=W,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bs extends Tn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,f=e/o,h=t/c,g=[],v=[],S=[],p=[];for(let d=0;d<u;d++){const E=d*h-a;for(let A=0;A<l;A++){const M=A*f-s;v.push(M,-E,0),S.push(0,0,1),p.push(A/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<o;E++){const A=E+l*d,M=E+l*(d+1),w=E+1+l*(d+1),b=E+1+l*d;g.push(A,M,b),g.push(M,w,b)}this.setIndex(g),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ll extends Tn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new X,h=new X,g=[],v=[],S=[],p=[];for(let d=0;d<=i;d++){const E=[],A=d/i,M=a+A*o,w=e*Math.cos(M),b=Math.sqrt(e*e-w*w);let P=0;d===0&&a===0?P=.5/t:d===i&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){const R=x/t,U=r+R*s;f.x=-b*Math.cos(U),f.y=w,f.z=b*Math.sin(U),v.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),p.push(R+P,1-A),E.push(l++)}u.push(E)}for(let d=0;d<i;d++)for(let E=0;E<t;E++){const A=u[d][E+1],M=u[d][E],w=u[d+1][E],b=u[d+1][E+1];(d!==0||a>0)&&g.push(A,M,b),(d!==i-1||c<Math.PI)&&g.push(M,w,b)}this.setIndex(g),this.setAttribute("position",new tn(v,3)),this.setAttribute("normal",new tn(S,3)),this.setAttribute("uv",new tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(mc(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(mc(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function It(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const r in i)e[r]=i[r]}return e}function mc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function G_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const H_={clone:Qi,merge:It};var V_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends Os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=G_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new tt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new X().fromArray(r.value);break;case"v4":this.uniforms[i].value=new _t().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ze().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class X_ extends En{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class q_ extends Os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends Os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Y_ extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const is=new X,rs=new ri,hn=new X;class vh extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(is,rs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,rs,hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(is,rs,hn),hn.x===1&&hn.y===1&&hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(is,rs,hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new X,gc=new ke,_c=new ke;class Qt extends vh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,gc,_c),t.subVectors(_c,gc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mh extends vh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $_ extends Y_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ui=-90,Fi=1;class K_ extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qt(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const s=new Qt(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const a=new Qt(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new Qt(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const c=new Qt(Ui,Fi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(Ui,Fi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,g),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Z_ extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const xc=new Mt;class J_{constructor(e,t,i=0,r=1/0){this.ray=new al(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new rl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xc),this}intersectObject(e,t=!0,i=[]){return Io(e,this,i,t),i.sort(vc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Io(e[r],this,i,t);return i.sort(vc),i}}function vc(n,e){return n.distance-e.distance}function Io(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Io(s[a],e,t,!0)}}class Mc{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const pl=class pl{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};pl.prototype.isMatrix2=!0;let Sc=pl;class Q_ extends si{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function yc(n,e,t,i){const r=e0(i);switch(t){case oh:return n*e;case ch:return n*e/r.components*r.byteLength;case Jo:return n*e/r.components*r.byteLength;case xi:return n*e*2/r.components*r.byteLength;case Qo:return n*e*2/r.components*r.byteLength;case lh:return n*e*3/r.components*r.byteLength;case ln:return n*e*4/r.components*r.byteLength;case el:return n*e*4/r.components*r.byteLength;case ps:case ms:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gs:case _s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case io:case so:return Math.max(n,16)*Math.max(e,8)/4;case no:case ro:return Math.max(n,8)*Math.max(e,8)/2;case ao:case oo:case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lo:case As:case ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case po:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case go:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case So:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case To:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wo:case Ro:case Co:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Po:case No:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ws:case Do:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e0(n){switch(n){case en:case ih:return{byteLength:1,components:1};case Sr:case rh:case kn:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case Sn:case $o:case mn:return{byteLength:4,components:1};case sh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function t0(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=n.HALF_FLOAT:g=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=n.SHORT;else if(l instanceof Uint32Array)g=n.UNSIGNED_INT;else if(l instanceof Int32Array)g=n.INT;else if(l instanceof Int8Array)g=n.BYTE;else if(l instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){const u=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,u);else{f.sort((g,v)=>g.start-v.start);let h=0;for(let g=1;g<f.length;g++){const v=f[h],S=f[g];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++h,f[h]=S)}f.length=h+1;for(let g=0,v=f.length;g<v;g++){const S=f[g];n.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,u0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,T0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,A0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ex=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_x=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Tx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$x=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_v=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:r0,alphamap_pars_fragment:s0,alphatest_fragment:a0,alphatest_pars_fragment:o0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:u0,batching_vertex:h0,begin_vertex:d0,beginnormal_vertex:f0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:_0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:y0,color_pars_vertex:E0,color_vertex:b0,common:T0,cube_uv_reflection_fragment:A0,defaultnormal_vertex:w0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:N0,colorspace_fragment:D0,colorspace_pars_fragment:L0,envmap_fragment:I0,envmap_common_pars_fragment:U0,envmap_pars_fragment:F0,envmap_pars_vertex:O0,envmap_physical_pars_fragment:Y0,envmap_vertex:B0,fog_vertex:z0,fog_pars_vertex:k0,fog_fragment:G0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:j0,lights_toon_fragment:$0,lights_toon_pars_fragment:K0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,lightprobes_pars_fragment:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:hx,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:gx,morphnormal_vertex:_x,morphtarget_pars_vertex:xx,morphtarget_vertex:vx,normal_fragment_begin:Mx,normal_fragment_maps:Sx,normal_pars_fragment:yx,normal_pars_vertex:Ex,normal_vertex:bx,normalmap_pars_fragment:Tx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Rx,iridescence_pars_fragment:Cx,opaque_fragment:Px,packing:Nx,premultiplied_alpha_fragment:Dx,project_vertex:Lx,dithering_fragment:Ix,dithering_pars_fragment:Ux,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:zx,shadowmap_vertex:kx,shadowmask_pars_fragment:Gx,skinbase_vertex:Hx,skinning_pars_vertex:Vx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:qx,specularmap_pars_fragment:jx,tonemapping_fragment:Yx,tonemapping_pars_fragment:$x,transmission_fragment:Kx,transmission_pars_fragment:Zx,uv_pars_fragment:Jx,uv_pars_vertex:Qx,uv_vertex:ev,worldpos_vertex:tv,background_vert:nv,background_frag:iv,backgroundCube_vert:rv,backgroundCube_frag:sv,cube_vert:av,cube_frag:ov,depth_vert:lv,depth_frag:cv,distance_vert:uv,distance_frag:hv,equirect_vert:dv,equirect_frag:fv,linedashed_vert:pv,linedashed_frag:mv,meshbasic_vert:gv,meshbasic_frag:_v,meshlambert_vert:xv,meshlambert_frag:vv,meshmatcap_vert:Mv,meshmatcap_frag:Sv,meshnormal_vert:yv,meshnormal_frag:Ev,meshphong_vert:bv,meshphong_frag:Tv,meshphysical_vert:Av,meshphysical_frag:wv,meshtoon_vert:Rv,meshtoon_frag:Cv,points_vert:Pv,points_frag:Nv,shadow_vert:Dv,shadow_frag:Lv,sprite_vert:Iv,sprite_frag:Uv},ge={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},fn={basic:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},envMapIntensity:{value:1}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:It([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:It([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:It([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new tt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:It([ge.points,ge.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:It([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:It([ge.common,ge.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:It([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:It([ge.sprite,ge.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:It([ge.common,ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:It([ge.lights,ge.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};fn.physical={uniforms:It([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const ss={r:0,b:0,g:0},Fv=new Mt,yh=new ze;yh.set(-1,0,0,0,1,0,0,0,1);function Ov(n,e,t,i,r,s){const a=new tt(0);let o=r===!0?0:1,c,l,u=null,f=0,h=null;function g(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){const M=E.backgroundBlurriness>0;A=e.get(A,M)}return A}function v(E){let A=!1;const M=g(E);M===null?p(a,o):M&&M.isColor&&(p(M,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(E,A){const M=g(A);M&&(M.isCubeTexture||M.mapping===Fs)?(l===void 0&&(l=new yn(new Rr(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Qi(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yh),l.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new yn(new Bs(2,2),new En({name:"BackgroundMaterial",uniforms:Qi(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=$e.getTransfer(M.colorSpace)!==nt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,A){E.getRGB(ss,xh(n)),t.buffers.color.setClear(ss.r,ss.g,ss.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,p(a,o)},render:v,addToRenderList:S,dispose:d}}function Bv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(I,F,q,T,N){let D=!1;const O=f(I,T,q,F);s!==O&&(s=O,l(s.object)),D=g(I,T,q,N),D&&v(I,T,q,N),N!==null&&e.update(N,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,M(I,F,q,T),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return n.createVertexArray()}function l(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,F,q,T){const N=T.wireframe===!0;let D=i[F.id];D===void 0&&(D={},i[F.id]=D);const O=I.isInstancedMesh===!0?I.id:0;let W=D[O];W===void 0&&(W={},D[O]=W);let $=W[q.id];$===void 0&&($={},W[q.id]=$);let ee=$[N];return ee===void 0&&(ee=h(c()),$[N]=ee),ee}function h(I){const F=[],q=[],T=[];for(let N=0;N<t;N++)F[N]=0,q[N]=0,T[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:q,attributeDivisors:T,object:I,attributes:{},index:null}}function g(I,F,q,T){const N=s.attributes,D=F.attributes;let O=0;const W=q.getAttributes();for(const $ in W)if(W[$].location>=0){const te=N[$];let oe=D[$];if(oe===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;O++}return s.attributesNum!==O||s.index!==T}function v(I,F,q,T){const N={},D=F.attributes;let O=0;const W=q.getAttributes();for(const $ in W)if(W[$].location>=0){let te=D[$];te===void 0&&($==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),$==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),N[$]=oe,O++}s.attributes=N,s.attributesNum=O,s.index=T}function S(){const I=s.newAttributes;for(let F=0,q=I.length;F<q;F++)I[F]=0}function p(I){d(I,0)}function d(I,F){const q=s.newAttributes,T=s.enabledAttributes,N=s.attributeDivisors;q[I]=1,T[I]===0&&(n.enableVertexAttribArray(I),T[I]=1),N[I]!==F&&(n.vertexAttribDivisor(I,F),N[I]=F)}function E(){const I=s.newAttributes,F=s.enabledAttributes;for(let q=0,T=F.length;q<T;q++)F[q]!==I[q]&&(n.disableVertexAttribArray(q),F[q]=0)}function A(I,F,q,T,N,D,O){O===!0?n.vertexAttribIPointer(I,F,q,N,D):n.vertexAttribPointer(I,F,q,T,N,D)}function M(I,F,q,T){S();const N=T.attributes,D=q.getAttributes(),O=F.defaultAttributeValues;for(const W in D){const $=D[W];if($.location>=0){let ee=N[W];if(ee===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(ee=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(ee=I.instanceColor)),ee!==void 0){const te=ee.normalized,oe=ee.itemSize,Se=e.get(ee);if(Se===void 0)continue;const Ce=Se.buffer,Te=Se.type,J=Se.bytesPerElement,ae=Te===n.INT||Te===n.UNSIGNED_INT||ee.gpuType===$o;if(ee.isInterleavedBufferAttribute){const ie=ee.data,be=ie.stride,Ie=ee.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<$.locationSize;Ae++)d($.location+Ae,ie.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<$.locationSize;Ae++)p($.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<$.locationSize;Ae++)A($.location+Ae,oe/$.locationSize,Te,te,be*J,(Ie+oe/$.locationSize*Ae)*J,ae)}else{if(ee.isInstancedBufferAttribute){for(let ie=0;ie<$.locationSize;ie++)d($.location+ie,ee.meshPerAttribute);I.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ie=0;ie<$.locationSize;ie++)p($.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ie=0;ie<$.locationSize;ie++)A($.location+ie,oe/$.locationSize,Te,te,oe*J,oe/$.locationSize*ie*J,ae)}}else if(O!==void 0){const te=O[W];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv($.location,te);break;case 3:n.vertexAttrib3fv($.location,te);break;case 4:n.vertexAttrib4fv($.location,te);break;default:n.vertexAttrib1fv($.location,te)}}}}E()}function w(){R();for(const I in i){const F=i[I];for(const q in F){const T=F[q];for(const N in T){const D=T[N];for(const O in D)u(D[O].object),delete D[O];delete T[N]}}delete i[I]}}function b(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const q in F){const T=F[q];for(const N in T){const D=T[N];for(const O in D)u(D[O].object),delete D[O];delete T[N]}}delete i[I.id]}function P(I){for(const F in i){const q=i[F];for(const T in q){const N=q[T];if(N[I.id]===void 0)continue;const D=N[I.id];for(const O in D)u(D[O].object),delete D[O];delete N[I.id]}}}function x(I){for(const F in i){const q=i[F],T=I.isInstancedMesh===!0?I.id:0,N=q[T];if(N!==void 0){for(const D in N){const O=N[D];for(const W in O)u(O[W].object),delete O[W];delete N[D]}delete q[T],Object.keys(q).length===0&&delete i[F]}}}function R(){U(),a=!0,s!==r&&(s=r,l(s.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:p,disableUnusedAttributes:E}}function zv(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let g=0;g<u;g++)h+=l[g];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function kv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==mn&&!x)}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Oe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:g,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:w,samples:b}}function Gv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Jn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const g=f.length!==0||h||i!==0||r;return r=h,i=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,g){const v=f.clippingPlanes,S=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,A=E*4;let M=d.clippingState||null;c.value=M,M=u(v,h,A,g);for(let w=0;w!==A;++w)M[w]=t[w];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,g,v){const S=f!==null?f.length:0;let p=null;if(S!==0){if(p=c.value,v!==!0||p===null){const d=g+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,M=g;A!==S;++A,M+=4)a.copy(f[A]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,p}}const ti=4,Ec=[.125,.215,.35,.446,.526,.582],hi=20,Hv=256,cr=new Mh,bc=new tt;let Ea=null,ba=0,Ta=0,Aa=!1;const Vv=new X;class Tc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Vv}=s;Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,ba,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,Oi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:kn,format:ln,colorSpace:Rs,depthBuffer:!1},r=Ac(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ac(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Wv(s)),this._blurMaterial=qv(s,e,t),this._ggxMaterial=Xv(s,e,t)}return r}_compileMaterial(e){const t=new yn(new Tn,e);this._renderer.compile(t,cr)}_sceneToCubeUV(e,t,i,r,s){const c=new Qt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,g=f.toneMapping;f.getClearColor(bc),f.toneMapping=xn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new Rr,new ol({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,p=S.material;let d=!1;const E=e.background;E?E.isColor&&(p.color.copy(E),e.background=null,d=!0):(p.color.copy(bc),d=!0);for(let A=0;A<6;A++){const M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[A],s.y,s.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[A],s.z)):(c.up.set(0,l[A],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[A]));const w=this._cubeSize;Oi(r,M*w,A>2?w:0,w,w),f.setRenderTarget(r),d&&f.render(S,c),f.render(e,c)}f.toneMapping=g,f.autoClear=h,e.background=E}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_i||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Oi(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,cr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,g=f*h,{_lodMax:v}=this,S=this._sizeLods[i],p=3*S*(i>v-ti?i-v+ti:0),d=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,Oi(s,p,d,3*S,2*S),r.setRenderTarget(s),r.render(o,cr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,Oi(e,p,d,3*S,2*S),r.setRenderTarget(e),r.render(o,cr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const h=l.uniforms,g=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*hi-1),S=s/v,p=isFinite(s)?1+Math.floor(u*S):hi;p>hi&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let E=0;for(let P=0;P<hi;++P){const x=P/S,R=Math.exp(-x*x/2);d.push(R),P===0?E+=R:P<p&&(E+=2*R)}for(let P=0;P<d.length;P++)d[P]=d[P]/E;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const M=this._sizeLods[r],w=3*M*(r>A-ti?r-A+ti:0),b=4*(this._cubeSize-M);Oi(t,w,b,3*M,2*M),c.setRenderTarget(t),c.render(f,cr)}}function Wv(n){const e=[],t=[],i=[];let r=n;const s=n-ti+1+Ec.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>n-ti?c=Ec[a-n+ti-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],g=6,v=6,S=3,p=2,d=1,E=new Float32Array(S*v*g),A=new Float32Array(p*v*g),M=new Float32Array(d*v*g);for(let b=0;b<g;b++){const P=b%3*2/3-1,x=b>2?0:-1,R=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];E.set(R,S*v*b),A.set(h,p*v*b);const U=[b,b,b,b,b,b];M.set(U,d*v*b)}const w=new Tn;w.setAttribute("position",new Mn(E,S)),w.setAttribute("uv",new Mn(A,p)),w.setAttribute("faceIndex",new Mn(M,d)),i.push(new yn(w,null)),r>ti&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Ac(n,e,t){const i=new vn(n,e,t);return i.texture.mapping=Fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oi(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Xv(n,e,t){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function qv(n,e,t){const i=new Float32Array(hi),r=new X(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function wc(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Rc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function zs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Eh extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new gh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:On});s.uniforms.tEquirect.value=t;const a=new yn(r,s),o=t.minFilter;return t.minFilter===fi&&(t.minFilter=Lt),new K_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function jv(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===Zs||g===Js)if(e.has(h)){const v=e.get(h).texture;return o(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const S=new Eh(v.height);return S.fromEquirectangularTexture(n,h),e.set(h,S),h.addEventListener("dispose",l),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const g=h.mapping,v=g===Zs||g===Js,S=g===_i||g===Zi;if(v||S){let p=t.get(h);const d=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Tc(n)),p=v?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const E=h.image;return v&&E&&E.height>0||S&&E&&c(E)?(i===null&&(i=new Tc(n)),p=v?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,g){return g===Zs?h.mapping=_i:g===Js&&(h.mapping=Zi),h}function c(h){let g=0;const v=6;for(let S=0;S<v;S++)h[S]!==void 0&&g++;return g===v}function l(h){const g=h.target;g.removeEventListener("dispose",l);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function u(h){const g=h.target;g.removeEventListener("dispose",u);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Yv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&qi("WebGLRenderer: "+i+" extension not supported."),r}}}function $v(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const g=s.get(h);g&&(e.remove(g),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER)}function l(f){const h=[],g=f.index,v=f.attributes.position;let S=0;if(v===void 0)return;if(g!==null){const E=g.array;S=g.version;for(let A=0,M=E.length;A<M;A+=3){const w=E[A+0],b=E[A+1],P=E[A+2];h.push(w,b,b,P,P,w)}}else{const E=v.array;S=v.version;for(let A=0,M=E.length/3-1;A<M;A+=3){const w=A+0,b=A+1,P=A+2;h.push(w,b,b,P,P,w)}}const p=new(v.count>=65535?ph:fh)(h,1);p.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const g=f.index;g!==null&&h.version<g.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Kv(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function l(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*a,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let S=0;for(let p=0;p<g;p++)S+=h[p];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Jv(n,e,t){const i=new WeakMap,r=new _t;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let R=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let A=0;g===!0&&(A=1),v===!0&&(A=2),S===!0&&(A=3);let M=o.attributes.position.count*A,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*w*4*f),P=new hh(b,M,w,f);P.type=mn,P.needsUpdate=!0;const x=A*4;for(let U=0;U<f;U++){const I=p[U],F=d[U],q=E[U],T=M*w*4*U;for(let N=0;N<I.count;N++){const D=N*x;g===!0&&(r.fromBufferAttribute(I,N),b[T+D+0]=r.x,b[T+D+1]=r.y,b[T+D+2]=r.z,b[T+D+3]=0),v===!0&&(r.fromBufferAttribute(F,N),b[T+D+4]=r.x,b[T+D+5]=r.y,b[T+D+6]=r.z,b[T+D+7]=0),S===!0&&(r.fromBufferAttribute(q,N),b[T+D+8]=r.x,b[T+D+9]=r.y,b[T+D+10]=r.z,b[T+D+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ke(M,w)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let S=0;S<l.length;S++)g+=l[S];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function Qv(n,e,t,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,f=l.geometry,h=e.get(l,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==u&&(g.update(),s.set(g,u))}return h}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const eM={[$u]:"LINEAR_TONE_MAPPING",[Ku]:"REINHARD_TONE_MAPPING",[Zu]:"CINEON_TONE_MAPPING",[Ju]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function tM(n,e,t,i,r,s){const a=new vn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ji(e,t):void 0}),o=new vn(e,t,{type:kn,depthBuffer:!1,stencilBuffer:!1}),c=new Tn;c.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tn([0,2,0,0,2,0],2));const l=new X_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new yn(c,l),f=new Mh(-1,1,1,-1,0,1);let h=null,g=null,v=!1,S,p=null,d=[],E=!1;this.setSize=function(A,M){a.setSize(A,M),o.setSize(A,M);for(let w=0;w<d.length;w++){const b=d[w];b.setSize&&b.setSize(A,M)}},this.setEffects=function(A){d=A,E=d.length>0&&d[0].isRenderPass===!0;const M=a.width,w=a.height;for(let b=0;b<d.length;b++){const P=d[b];P.setSize&&P.setSize(M,w)}},this.begin=function(A,M){if(v||A.toneMapping===xn&&d.length===0)return!1;if(p=M,M!==null){const w=M.width,b=M.height;(a.width!==w||a.height!==b)&&this.setSize(w,b)}return E===!1&&A.setRenderTarget(a),S=A.toneMapping,A.toneMapping=xn,!0},this.hasRenderPass=function(){return E},this.end=function(A,M){A.toneMapping=S,v=!0;let w=a,b=o;for(let P=0;P<d.length;P++){const x=d[P];if(x.enabled!==!1&&(x.render(A,b,w,M),x.needsSwap!==!1)){const R=w;w=b,b=R}}if(h!==A.outputColorSpace||g!==A.toneMapping){h=A.outputColorSpace,g=A.toneMapping,l.defines={},$e.getTransfer(h)===nt&&(l.defines.SRGB_TRANSFER="");const P=eM[g];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(p),A.render(u,f),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const bh=new Ot,Uo=new Ji(1,1),Th=new hh,Ah=new y_,wh=new gh,Cc=[],Pc=[],Nc=new Float32Array(16),Dc=new Float32Array(9),Lc=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cc[r];if(s===void 0&&(s=new Float32Array(r),Cc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ks(n,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function rM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function aM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Lc.set(i),n.uniformMatrix2fv(this.addr,!1,Lc),bt(t,i)}}function oM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Dc.set(i),n.uniformMatrix3fv(this.addr,!1,Dc),bt(t,i)}}function lM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),bt(t,i)}}function cM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function fM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function pM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function mM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function _M(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Uo.compareFunction=t.isReversedDepthBuffer()?nl:tl,s=Uo):s=bh,t.setTexture2D(e||s,r)}function xM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ah,r)}function vM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||wh,r)}function MM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Th,r)}function SM(n){switch(n){case 5126:return nM;case 35664:return iM;case 35665:return rM;case 35666:return sM;case 35674:return aM;case 35675:return oM;case 35676:return lM;case 5124:case 35670:return cM;case 35667:case 35671:return uM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return fM;case 36294:return pM;case 36295:return mM;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return _M;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return vM;case 36289:case 36303:case 36311:case 36292:return MM}}function yM(n,e){n.uniform1fv(this.addr,e)}function EM(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function bM(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function TM(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function AM(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function wM(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function RM(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function CM(n,e){n.uniform1iv(this.addr,e)}function PM(n,e){n.uniform2iv(this.addr,e)}function NM(n,e){n.uniform3iv(this.addr,e)}function DM(n,e){n.uniform4iv(this.addr,e)}function LM(n,e){n.uniform1uiv(this.addr,e)}function IM(n,e){n.uniform2uiv(this.addr,e)}function UM(n,e){n.uniform3uiv(this.addr,e)}function FM(n,e){n.uniform4uiv(this.addr,e)}function OM(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Uo:a=bh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function BM(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ah,s[a])}function zM(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||wh,s[a])}function kM(n,e,t){const i=this.cache,r=e.length,s=ks(t,r);Et(i,s)||(n.uniform1iv(this.addr,s),bt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Th,s[a])}function GM(n){switch(n){case 5126:return yM;case 35664:return EM;case 35665:return bM;case 35666:return TM;case 35674:return AM;case 35675:return wM;case 35676:return RM;case 5124:case 35670:return CM;case 35667:case 35671:return PM;case 35668:case 35672:return NM;case 35669:case 35673:return DM;case 5125:return LM;case 36294:return IM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}class HM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=SM(t.type)}}class VM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class WM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Ic(n,e){n.seq.push(e),n.map[e.id]=e}function XM(n,e,t){const i=n.name,r=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),a=wa.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ic(t,l===void 0?new HM(o,n,e):new VM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new WM(o),Ic(t,f)),t=f}}}class vs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);XM(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Uc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const qM=37297;let jM=0;function YM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Fc=new ze;function $M(n){$e._getMatrix(Fc,$e.workingColorSpace,n);const e=`mat3( ${Fc.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Cs:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+YM(n.getShaderSource(e),o)}else return s}function KM(n,e){const t=$M(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZM={[$u]:"Linear",[Ku]:"Reinhard",[Zu]:"Cineon",[Ju]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[Qu]:"Custom"};function JM(n,e){const t=ZM[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const as=new X;function QM(){$e.getLuminanceCoefficients(as);const n=as.x.toFixed(4),e=as.y.toFixed(4),t=as.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function tS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function Bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(n){return n.replace(iS,sS)}const rS=new Map;function sS(n,e){let t=We[e];if(t===void 0){const i=rS.get(e);if(i!==void 0)t=We[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Fo(t)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(n){return n.replace(aS,oS)}function oS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Gc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lS={[fs]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function cS(n){return lS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uS={[_i]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE_UV"};function hS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const dS={[Zi]:"ENVMAP_MODE_REFRACTION"};function fS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":dS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pS={[Yu]:"ENVMAP_BLENDING_MULTIPLY",[e_]:"ENVMAP_BLENDING_MIX",[t_]:"ENVMAP_BLENDING_ADD"};function mS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":pS[n.combine]||"ENVMAP_BLENDING_NONE"}function gS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _S(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cS(t),l=hS(t),u=fS(t),f=mS(t),h=gS(t),g=eS(t),v=tS(s),S=r.createProgram();let p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(p=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xn?"#define TONE_MAPPING":"",t.toneMapping!==xn?We.tonemapping_pars_fragment:"",t.toneMapping!==xn?JM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,KM("linearToOutputTexel",t.outputColorSpace),QM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=Fo(a),a=Bc(a,t),a=zc(a,t),o=Fo(o),o=Bc(o,t),o=zc(o,t),a=kc(a),o=kc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=E+p+a,M=E+d+o,w=Uc(r,r.VERTEX_SHADER,A),b=Uc(r,r.FRAGMENT_SHADER,M);r.attachShader(S,w),r.attachShader(S,b),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(I){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(S)||"",q=r.getShaderInfoLog(w)||"",T=r.getShaderInfoLog(b)||"",N=F.trim(),D=q.trim(),O=T.trim();let W=!0,$=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,w,b);else{const ee=Oc(r,w,"vertex"),te=Oc(r,b,"fragment");Ze("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+ee+`
`+te)}else N!==""?Oe("WebGLProgram: Program Info Log:",N):(D===""||O==="")&&($=!1);$&&(I.diagnostics={runnable:W,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:O,prefix:d}})}r.deleteShader(w),r.deleteShader(b),x=new vs(r,S),R=nS(r,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(S,qM)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=w,this.fragmentShader=b,this}let xS=0;class vS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new MS(e),t.set(e,i)),i}}class MS{constructor(e){this.id=xS++,this.code=e,this.usedTimes=0}}function SS(n){return n===xi||n===As||n===ws}function yS(n,e,t,i,r,s){const a=new rl,o=new vS,c=new Set,l=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,R,U,I,F,q){const T=I.fog,N=F.geometry,D=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||D,O),$=W&&W.mapping===Fs?W.image.height:null,ee=g[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const te=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,oe=te!==void 0?te.length:0;let Se=0;N.morphAttributes.position!==void 0&&(Se=1),N.morphAttributes.normal!==void 0&&(Se=2),N.morphAttributes.color!==void 0&&(Se=3);let Ce,Te,J,ae;if(ee){const we=fn[ee];Ce=we.vertexShader,Te=we.fragmentShader}else{Ce=x.vertexShader,Te=x.fragmentShader;const we=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,we,dt),J=we.id,ae=dt.id}const ie=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),Ie=F.isInstancedMesh===!0,Ae=F.isBatchedMesh===!0,Je=!!x.map,Ue=!!x.matcap,Qe=!!W,He=!!x.aoMap,Ye=!!x.lightMap,Be=!!x.bumpMap&&x.wireframe===!1,st=!!x.normalMap,ut=!!x.displacementMap,ft=!!x.emissiveMap,lt=!!x.metalnessMap,ht=!!x.roughnessMap,k=x.anisotropy>0,pt=x.clearcoat>0,Ke=x.dispersion>0,C=x.iridescence>0,m=x.sheen>0,L=x.transmission>0,B=k&&!!x.anisotropyMap,G=pt&&!!x.clearcoatMap,Q=pt&&!!x.clearcoatNormalMap,le=pt&&!!x.clearcoatRoughnessMap,V=C&&!!x.iridescenceMap,K=C&&!!x.iridescenceThicknessMap,ue=m&&!!x.sheenColorMap,_e=m&&!!x.sheenRoughnessMap,he=!!x.specularMap,ce=!!x.specularColorMap,Re=!!x.specularIntensityMap,de=L&&!!x.transmissionMap,Fe=L&&!!x.thicknessMap,z=!!x.gradientMap,pe=!!x.alphaMap,ne=x.alphaTest>0,me=!!x.alphaHash,xe=!!x.extensions;let re=xn;x.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(re=n.toneMapping);const Pe={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:Ce,fragmentShader:Te,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&F._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&F.instanceColor!==null,instancingMorph:Ie&&F.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Je,matcap:Ue,envMap:Qe,envMapMode:Qe&&W.mapping,envMapCubeUVHeight:$,aoMap:He,lightMap:Ye,bumpMap:Be,normalMap:st,displacementMap:ut,emissiveMap:ft,normalMapObjectSpace:st&&x.normalMapType===r_,normalMapTangentSpace:st&&x.normalMapType===$l,packedNormalMap:st&&x.normalMapType===$l&&SS(x.normalMap.format),metalnessMap:lt,roughnessMap:ht,anisotropy:k,anisotropyMap:B,clearcoat:pt,clearcoatMap:G,clearcoatNormalMap:Q,clearcoatRoughnessMap:le,dispersion:Ke,iridescence:C,iridescenceMap:V,iridescenceThicknessMap:K,sheen:m,sheenColorMap:ue,sheenRoughnessMap:_e,specularMap:he,specularColorMap:ce,specularIntensityMap:Re,transmission:L,transmissionMap:de,thicknessMap:Fe,gradientMap:z,opaque:x.transparent===!1&&x.blending===Xi&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:ne,alphaHash:me,combine:x.combine,mapUv:Je&&v(x.map.channel),aoMapUv:He&&v(x.aoMap.channel),lightMapUv:Ye&&v(x.lightMap.channel),bumpMapUv:Be&&v(x.bumpMap.channel),normalMapUv:st&&v(x.normalMap.channel),displacementMapUv:ut&&v(x.displacementMap.channel),emissiveMapUv:ft&&v(x.emissiveMap.channel),metalnessMapUv:lt&&v(x.metalnessMap.channel),roughnessMapUv:ht&&v(x.roughnessMap.channel),anisotropyMapUv:B&&v(x.anisotropyMap.channel),clearcoatMapUv:G&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(x.sheenRoughnessMap.channel),specularMapUv:he&&v(x.specularMap.channel),specularColorMapUv:ce&&v(x.specularColorMap.channel),specularIntensityMapUv:Re&&v(x.specularIntensityMap.channel),transmissionMapUv:de&&v(x.transmissionMap.channel),thicknessMapUv:Fe&&v(x.thicknessMap.channel),alphaMapUv:pe&&v(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(st||k),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(Je||pe),fog:!!T,useFog:x.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&st===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Je&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===nt,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===nt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function p(x){const R=[];if(x.shaderID?R.push(x.shaderID):(R.push(x.customVertexShaderID),R.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)R.push(U),R.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(d(R,x),E(R,x),R.push(n.outputColorSpace)),R.push(x.customProgramCacheKey),R.join()}function d(x,R){x.push(R.precision),x.push(R.outputColorSpace),x.push(R.envMapMode),x.push(R.envMapCubeUVHeight),x.push(R.mapUv),x.push(R.alphaMapUv),x.push(R.lightMapUv),x.push(R.aoMapUv),x.push(R.bumpMapUv),x.push(R.normalMapUv),x.push(R.displacementMapUv),x.push(R.emissiveMapUv),x.push(R.metalnessMapUv),x.push(R.roughnessMapUv),x.push(R.anisotropyMapUv),x.push(R.clearcoatMapUv),x.push(R.clearcoatNormalMapUv),x.push(R.clearcoatRoughnessMapUv),x.push(R.iridescenceMapUv),x.push(R.iridescenceThicknessMapUv),x.push(R.sheenColorMapUv),x.push(R.sheenRoughnessMapUv),x.push(R.specularMapUv),x.push(R.specularColorMapUv),x.push(R.specularIntensityMapUv),x.push(R.transmissionMapUv),x.push(R.thicknessMapUv),x.push(R.combine),x.push(R.fogExp2),x.push(R.sizeAttenuation),x.push(R.morphTargetsCount),x.push(R.morphAttributeCount),x.push(R.numDirLights),x.push(R.numPointLights),x.push(R.numSpotLights),x.push(R.numSpotLightMaps),x.push(R.numHemiLights),x.push(R.numRectAreaLights),x.push(R.numDirLightShadows),x.push(R.numPointLightShadows),x.push(R.numSpotLightShadows),x.push(R.numSpotLightShadowsWithMaps),x.push(R.numLightProbes),x.push(R.shadowMapType),x.push(R.toneMapping),x.push(R.numClippingPlanes),x.push(R.numClipIntersection),x.push(R.depthPacking)}function E(x,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const R=g[x.type];let U;if(R){const I=fn[R];U=H_.clone(I.uniforms)}else U=x.uniforms;return U}function M(x,R){let U=u.get(R);return U!==void 0?++U.usedTimes:(U=new _S(n,R,x,r),l.push(U),u.set(R,U)),U}function w(x){if(--x.usedTimes===0){const R=l.indexOf(x);l[R]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:p,getUniforms:A,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:l,dispose:P}}function ES(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function bS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function o(h,g,v,S,p,d){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:g,material:v,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:p,group:d},n[e]=E):(E.id=h.id,E.object=h,E.geometry=g,E.material=v,E.materialVariant=a(h),E.groupOrder=S,E.renderOrder=h.renderOrder,E.z=p,E.group=d),e++,E}function c(h,g,v,S,p,d){const E=o(h,g,v,S,p,d);v.transmission>0?i.push(E):v.transparent===!0?r.push(E):t.push(E)}function l(h,g,v,S,p,d){const E=o(h,g,v,S,p,d);v.transmission>0?i.unshift(E):v.transparent===!0?r.unshift(E):t.unshift(E)}function u(h,g,v){t.length>1&&t.sort(h||bS),i.length>1&&i.sort(g||Hc),r.length>1&&r.sort(g||Hc),v&&(t.reverse(),i.reverse(),r.reverse())}function f(){for(let h=e,g=n.length;h<g;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:f,sort:u}}function TS(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Vc,n.set(i,[a])):r>=s.length?(a=new Vc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function AS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new tt};break;case"SpotLight":t={position:new X,direction:new X,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function wS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RS=0;function CS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PS(n){const e=new AS,t=wS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new X);const r=new X,s=new Mt,a=new Mt;function o(l){let u=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let g=0,v=0,S=0,p=0,d=0,E=0,A=0,M=0,w=0,b=0,P=0;l.sort(CS);for(let R=0,U=l.length;R<U;R++){const I=l[R],F=I.color,q=I.intensity,T=I.distance;let N=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xi?N=I.shadow.map.texture:N=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*q,f+=F.g*q,h+=F.b*q;else if(I.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(I.sh.coefficients[D],q);P++}else if(I.isDirectionalLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const O=I.shadow,W=t.get(I);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,i.directionalShadow[g]=W,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=I.shadow.matrix,E++}i.directional[g]=D,g++}else if(I.isSpotLight){const D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(F).multiplyScalar(q),D.distance=T,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,i.spot[S]=D;const O=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,O.updateMatrices(I),I.castShadow&&b++),i.spotLightMatrix[S]=O.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,i.spotShadow[S]=W,i.spotShadowMap[S]=N,M++}S++}else if(I.isRectAreaLight){const D=e.get(I);D.color.copy(F).multiplyScalar(q),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=D,p++}else if(I.isPointLight){const D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){const O=I.shadow,W=t.get(I);W.shadowIntensity=O.intensity,W.shadowBias=O.bias,W.shadowNormalBias=O.normalBias,W.shadowRadius=O.radius,W.shadowMapSize=O.mapSize,W.shadowCameraNear=O.camera.near,W.shadowCameraFar=O.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=N,i.pointShadowMatrix[v]=I.shadow.matrix,A++}i.point[v]=D,v++}else if(I.isHemisphereLight){const D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(q),D.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[d]=D,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==S||x.rectAreaLength!==p||x.hemiLength!==d||x.numDirectionalShadows!==E||x.numPointShadows!==A||x.numSpotShadows!==M||x.numSpotMaps!==w||x.numLightProbes!==P)&&(i.directional.length=g,i.spot.length=S,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,x.directionalLength=g,x.pointLength=v,x.spotLength=S,x.rectAreaLength=p,x.hemiLength=d,x.numDirectionalShadows=E,x.numPointShadows=A,x.numSpotShadows=M,x.numSpotMaps=w,x.numLightProbes=P,i.version=RS++)}function c(l,u){let f=0,h=0,g=0,v=0,S=0;const p=u.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const A=l[d];if(A.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(A.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(A.isRectAreaLight){const M=i.rectArea[v];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(p),S++}}}return{setup:o,setupView:c,state:i}}function Wc(n){const e=new PS(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function c(h){r.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function NS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wc(n),e.set(r,[o])):s>=a.length?(o=new Wc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IS=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],US=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Xc=new Mt,ur=new X,Ra=new X;function FS(n,e,t){let i=new mh;const r=new ke,s=new ke,a=new _t,o=new q_,c=new j_,l={},u=t.maxTextureSize,f={[ii]:Vt,[Vt]:ii,[In]:In},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:DS,fragmentShader:LS}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const v=new Tn;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new yn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fs;let d=this.type;this.render=function(b,P,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===Ug&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fs);const R=n.getRenderTarget(),U=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),F=n.state;F.setBlending(On),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const q=d!==this.type;q&&P.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(N=>N.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,N=b.length;T<N;T++){const D=b[T],O=D.shadow;if(O===void 0){Oe("WebGLShadowMap:",D,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const W=O.getFrameExtents();r.multiply(W),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,O.mapSize.y=s.y));const $=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=$,O.map===null||q===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===pr){if(D.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new vn(r.x,r.y,{format:xi,type:kn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),O.map.texture.name=D.name+".shadowMap",O.map.depthTexture=new Ji(r.x,r.y,mn),O.map.depthTexture.name=D.name+".shadowMapDepth",O.map.depthTexture.format=Gn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wt,O.map.depthTexture.magFilter=wt}else D.isPointLight?(O.map=new Eh(r.x),O.map.depthTexture=new k_(r.x,Sn)):(O.map=new vn(r.x,r.y),O.map.depthTexture=new Ji(r.x,r.y,Sn)),O.map.depthTexture.name=D.name+".shadowMap",O.map.depthTexture.format=Gn,this.type===fs?(O.map.depthTexture.compareFunction=$?nl:tl,O.map.depthTexture.minFilter=Lt,O.map.depthTexture.magFilter=Lt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wt,O.map.depthTexture.magFilter=wt);O.camera.updateProjectionMatrix()}const ee=O.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<ee;te++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,te),n.clear();else{te===0&&(n.setRenderTarget(O.map),n.clear());const oe=O.getViewport(te);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),F.viewport(a)}if(D.isPointLight){const oe=O.camera,Se=O.matrix,Ce=D.distance||oe.far;Ce!==oe.far&&(oe.far=Ce,oe.updateProjectionMatrix()),ur.setFromMatrixPosition(D.matrixWorld),oe.position.copy(ur),Ra.copy(oe.position),Ra.add(IS[te]),oe.up.copy(US[te]),oe.lookAt(Ra),oe.updateMatrixWorld(),Se.makeTranslation(-ur.x,-ur.y,-ur.z),Xc.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xc,oe.coordinateSystem,oe.reversedDepth)}else O.updateMatrices(D);i=O.getFrustum(),M(P,x,O.camera,D,this.type)}O.isPointLightShadow!==!0&&this.type===pr&&E(O,x),O.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(R,U,I)};function E(b,P){const x=e.update(S);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vn(r.x,r.y,{format:xi,type:kn})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,x,h,S,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,x,g,S,null)}function A(b,P,x,R){let U=null;const I=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)U=I;else if(U=x.isPointLight===!0?c:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const F=U.uuid,q=P.uuid;let T=l[F];T===void 0&&(T={},l[F]=T);let N=T[q];N===void 0&&(N=U.clone(),T[q]=N,P.addEventListener("dispose",w)),U=N}if(U.visible=P.visible,U.wireframe=P.wireframe,R===pr?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:f[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,x.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const F=n.properties.get(U);F.light=x}return U}function M(b,P,x,R,U){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===pr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);const q=e.update(b),T=b.material;if(Array.isArray(T)){const N=q.groups;for(let D=0,O=N.length;D<O;D++){const W=N[D],$=T[W.materialIndex];if($&&$.visible){const ee=A(b,$,R,U);b.onBeforeShadow(n,b,P,x,q,ee,W),n.renderBufferDirect(x,null,q,ee,b,W),b.onAfterShadow(n,b,P,x,q,ee,W)}}}else if(T.visible){const N=A(b,T,R,U);b.onBeforeShadow(n,b,P,x,q,N,null),n.renderBufferDirect(x,null,q,N,b,null),b.onAfterShadow(n,b,P,x,q,N,null)}}const F=b.children;for(let q=0,T=F.length;q<T;q++)M(F[q],P,x,R,U)}function w(b){b.target.removeEventListener("dispose",w);for(const x in l){const R=l[x],U=b.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function OS(n,e){function t(){let z=!1;const pe=new _t;let ne=null;const me=new _t(0,0,0,0);return{setMask:function(xe){ne!==xe&&!z&&(n.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){z=xe},setClear:function(xe,re,Pe,we,dt){dt===!0&&(xe*=we,re*=we,Pe*=we),pe.set(xe,re,Pe,we),me.equals(pe)===!1&&(n.clearColor(xe,re,Pe,we),me.copy(pe))},reset:function(){z=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let z=!1,pe=!1,ne=null,me=null,xe=null;return{setReversed:function(re){if(pe!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),pe=re;const we=xe;xe=null,this.setClear(we)}},getReversed:function(){return pe},setTest:function(re){re?ie(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(re){ne!==re&&!z&&(n.depthMask(re),ne=re)},setFunc:function(re){if(pe&&(re=p_[re]),me!==re){switch(re){case ja:n.depthFunc(n.NEVER);break;case Ya:n.depthFunc(n.ALWAYS);break;case $a:n.depthFunc(n.LESS);break;case Ki:n.depthFunc(n.LEQUAL);break;case Ka:n.depthFunc(n.EQUAL);break;case Za:n.depthFunc(n.GEQUAL);break;case Ja:n.depthFunc(n.GREATER);break;case Qa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=re}},setLocked:function(re){z=re},setClear:function(re){xe!==re&&(xe=re,pe&&(re=1-re),n.clearDepth(re))},reset:function(){z=!1,ne=null,me=null,xe=null,pe=!1}}}function r(){let z=!1,pe=null,ne=null,me=null,xe=null,re=null,Pe=null,we=null,dt=null;return{setTest:function(Ve){z||(Ve?ie(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(Ve){pe!==Ve&&!z&&(n.stencilMask(Ve),pe=Ve)},setFunc:function(Ve,Rt,$t){(ne!==Ve||me!==Rt||xe!==$t)&&(n.stencilFunc(Ve,Rt,$t),ne=Ve,me=Rt,xe=$t)},setOp:function(Ve,Rt,$t){(re!==Ve||Pe!==Rt||we!==$t)&&(n.stencilOp(Ve,Rt,$t),re=Ve,Pe=Rt,we=$t)},setLocked:function(Ve){z=Ve},setClear:function(Ve){dt!==Ve&&(n.clearStencil(Ve),dt=Ve)},reset:function(){z=!1,pe=null,ne=null,me=null,xe=null,re=null,Pe=null,we=null,dt=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},h={},g=new WeakMap,v=[],S=null,p=!1,d=null,E=null,A=null,M=null,w=null,b=null,P=null,x=new tt(0,0,0),R=0,U=!1,I=null,F=null,q=null,T=null,N=null;const D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,W=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),O=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),O=W>=2);let ee=null,te={};const oe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),Ce=new _t().fromArray(oe),Te=new _t().fromArray(Se);function J(z,pe,ne,me){const xe=new Uint8Array(4),re=n.createTexture();n.bindTexture(z,re),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ne;Pe++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(pe+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return re}const ae={};ae[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),a.setFunc(Ki),Be(!1),st(Xl),ie(n.CULL_FACE),He(On);function ie(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function be(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Ie(z,pe){return h[z]!==pe?(n.bindFramebuffer(z,pe),h[z]=pe,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=pe),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ae(z,pe){let ne=v,me=!1;if(z){ne=g.get(pe),ne===void 0&&(ne=[],g.set(pe,ne));const xe=z.textures;if(ne.length!==xe.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Pe=xe.length;re<Pe;re++)ne[re]=n.COLOR_ATTACHMENT0+re;ne.length=xe.length,me=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,me=!0);me&&n.drawBuffers(ne)}function Je(z){return S!==z?(n.useProgram(z),S=z,!0):!1}const Ue={[ui]:n.FUNC_ADD,[Og]:n.FUNC_SUBTRACT,[Bg]:n.FUNC_REVERSE_SUBTRACT};Ue[zg]=n.MIN,Ue[kg]=n.MAX;const Qe={[Gg]:n.ZERO,[Hg]:n.ONE,[Vg]:n.SRC_COLOR,[Xa]:n.SRC_ALPHA,[$g]:n.SRC_ALPHA_SATURATE,[jg]:n.DST_COLOR,[Xg]:n.DST_ALPHA,[Wg]:n.ONE_MINUS_SRC_COLOR,[qa]:n.ONE_MINUS_SRC_ALPHA,[Yg]:n.ONE_MINUS_DST_COLOR,[qg]:n.ONE_MINUS_DST_ALPHA,[Kg]:n.CONSTANT_COLOR,[Zg]:n.ONE_MINUS_CONSTANT_COLOR,[Jg]:n.CONSTANT_ALPHA,[Qg]:n.ONE_MINUS_CONSTANT_ALPHA};function He(z,pe,ne,me,xe,re,Pe,we,dt,Ve){if(z===On){p===!0&&(be(n.BLEND),p=!1);return}if(p===!1&&(ie(n.BLEND),p=!0),z!==Fg){if(z!==d||Ve!==U){if((E!==ui||w!==ui)&&(n.blendEquation(n.FUNC_ADD),E=ui,w=ui),Ve)switch(z){case Xi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFunc(n.ONE,n.ONE);break;case jl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",z);break}else switch(z){case Xi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ql:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jl:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",z);break}A=null,M=null,b=null,P=null,x.set(0,0,0),R=0,d=z,U=Ve}return}xe=xe||pe,re=re||ne,Pe=Pe||me,(pe!==E||xe!==w)&&(n.blendEquationSeparate(Ue[pe],Ue[xe]),E=pe,w=xe),(ne!==A||me!==M||re!==b||Pe!==P)&&(n.blendFuncSeparate(Qe[ne],Qe[me],Qe[re],Qe[Pe]),A=ne,M=me,b=re,P=Pe),(we.equals(x)===!1||dt!==R)&&(n.blendColor(we.r,we.g,we.b,dt),x.copy(we),R=dt),d=z,U=!1}function Ye(z,pe){z.side===In?be(n.CULL_FACE):ie(n.CULL_FACE);let ne=z.side===Vt;pe&&(ne=!ne),Be(ne),z.blending===Xi&&z.transparent===!1?He(On):He(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const me=z.stencilWrite;o.setTest(me),me&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(z){I!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),I=z)}function st(z){z!==Lg?(ie(n.CULL_FACE),z!==F&&(z===Xl?n.cullFace(n.BACK):z===Ig?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),F=z}function ut(z){z!==q&&(O&&n.lineWidth(z),q=z)}function ft(z,pe,ne){z?(ie(n.POLYGON_OFFSET_FILL),(T!==pe||N!==ne)&&(T=pe,N=ne,a.getReversed()&&(pe=-pe),n.polygonOffset(pe,ne))):be(n.POLYGON_OFFSET_FILL)}function lt(z){z?ie(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function ht(z){z===void 0&&(z=n.TEXTURE0+D-1),ee!==z&&(n.activeTexture(z),ee=z)}function k(z,pe,ne){ne===void 0&&(ee===null?ne=n.TEXTURE0+D-1:ne=ee);let me=te[ne];me===void 0&&(me={type:void 0,texture:void 0},te[ne]=me),(me.type!==z||me.texture!==pe)&&(ee!==ne&&(n.activeTexture(ne),ee=ne),n.bindTexture(z,pe||ae[z]),me.type=z,me.texture=pe)}function pt(){const z=te[ee];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ke(){try{n.compressedTexImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function m(){try{n.texSubImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function L(){try{n.texSubImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function B(){try{n.compressedTexSubImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function G(){try{n.compressedTexSubImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function Q(){try{n.texStorage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function le(){try{n.texStorage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function V(){try{n.texImage2D(...arguments)}catch(z){Ze("WebGLState:",z)}}function K(){try{n.texImage3D(...arguments)}catch(z){Ze("WebGLState:",z)}}function ue(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function _e(z,pe){f[z]!==pe&&(n.pixelStorei(z,pe),f[z]=pe)}function he(z){Ce.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ce.copy(z))}function ce(z){Te.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Te.copy(z))}function Re(z,pe){let ne=l.get(pe);ne===void 0&&(ne=new WeakMap,l.set(pe,ne));let me=ne.get(z);me===void 0&&(me=n.getUniformBlockIndex(pe,z.name),ne.set(z,me))}function de(z,pe){const me=l.get(pe).get(z);c.get(pe)!==me&&(n.uniformBlockBinding(pe,me,z.__bindingPointIndex),c.set(pe,me))}function Fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},ee=null,te={},h={},g=new WeakMap,v=[],S=null,p=!1,d=null,E=null,A=null,M=null,w=null,b=null,P=null,x=new tt(0,0,0),R=0,U=!1,I=null,F=null,q=null,T=null,N=null,Ce.set(0,0,n.canvas.width,n.canvas.height),Te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:be,bindFramebuffer:Ie,drawBuffers:Ae,useProgram:Je,setBlending:He,setMaterial:Ye,setFlipSided:Be,setCullFace:st,setLineWidth:ut,setPolygonOffset:ft,setScissorTest:lt,activeTexture:ht,bindTexture:k,unbindTexture:pt,compressedTexImage2D:Ke,compressedTexImage3D:C,texImage2D:V,texImage3D:K,pixelStorei:_e,getParameter:ue,updateUBOMapping:Re,uniformBlockBinding:de,texStorage2D:Q,texStorage3D:le,texSubImage2D:m,texSubImage3D:L,compressedTexSubImage2D:B,compressedTexSubImage3D:G,scissor:he,viewport:ce,reset:Fe}}function BS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,u=new WeakMap,f=new Set;let h;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,m){return v?new OffscreenCanvas(C,m):Ns("canvas")}function p(C,m,L){let B=1;const G=Ke(C);if((G.width>L||G.height>L)&&(B=L/Math.max(G.width,G.height)),B<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(B*G.width),le=Math.floor(B*G.height);h===void 0&&(h=S(Q,le));const V=m?S(Q,le):h;return V.width=Q,V.height=le,V.getContext("2d").drawImage(C,0,0,Q,le),Oe("WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+Q+"x"+le+")."),V}else return"data"in C&&Oe("WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),C;return C}function d(C){return C.generateMipmaps}function E(C){n.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,m,L,B,G,Q=!1){if(C!==null){if(n[C]!==void 0)return n[C];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;B&&(le=e.get("EXT_texture_norm16"),le||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=m;if(m===n.RED&&(L===n.FLOAT&&(V=n.R32F),L===n.HALF_FLOAT&&(V=n.R16F),L===n.UNSIGNED_BYTE&&(V=n.R8),L===n.UNSIGNED_SHORT&&le&&(V=le.R16_EXT),L===n.SHORT&&le&&(V=le.R16_SNORM_EXT)),m===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.R8UI),L===n.UNSIGNED_SHORT&&(V=n.R16UI),L===n.UNSIGNED_INT&&(V=n.R32UI),L===n.BYTE&&(V=n.R8I),L===n.SHORT&&(V=n.R16I),L===n.INT&&(V=n.R32I)),m===n.RG&&(L===n.FLOAT&&(V=n.RG32F),L===n.HALF_FLOAT&&(V=n.RG16F),L===n.UNSIGNED_BYTE&&(V=n.RG8),L===n.UNSIGNED_SHORT&&le&&(V=le.RG16_EXT),L===n.SHORT&&le&&(V=le.RG16_SNORM_EXT)),m===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RG8UI),L===n.UNSIGNED_SHORT&&(V=n.RG16UI),L===n.UNSIGNED_INT&&(V=n.RG32UI),L===n.BYTE&&(V=n.RG8I),L===n.SHORT&&(V=n.RG16I),L===n.INT&&(V=n.RG32I)),m===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGB8UI),L===n.UNSIGNED_SHORT&&(V=n.RGB16UI),L===n.UNSIGNED_INT&&(V=n.RGB32UI),L===n.BYTE&&(V=n.RGB8I),L===n.SHORT&&(V=n.RGB16I),L===n.INT&&(V=n.RGB32I)),m===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),L===n.UNSIGNED_INT&&(V=n.RGBA32UI),L===n.BYTE&&(V=n.RGBA8I),L===n.SHORT&&(V=n.RGBA16I),L===n.INT&&(V=n.RGBA32I)),m===n.RGB&&(L===n.UNSIGNED_SHORT&&le&&(V=le.RGB16_EXT),L===n.SHORT&&le&&(V=le.RGB16_SNORM_EXT),L===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(V=n.R11F_G11F_B10F)),m===n.RGBA){const K=Q?Cs:$e.getTransfer(G);L===n.FLOAT&&(V=n.RGBA32F),L===n.HALF_FLOAT&&(V=n.RGBA16F),L===n.UNSIGNED_BYTE&&(V=K===nt?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT&&le&&(V=le.RGBA16_EXT),L===n.SHORT&&le&&(V=le.RGBA16_SNORM_EXT),L===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function w(C,m){let L;return C?m===null||m===Sn||m===yr?L=n.DEPTH24_STENCIL8:m===mn?L=n.DEPTH32F_STENCIL8:m===Sr&&(L=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Sn||m===yr?L=n.DEPTH_COMPONENT24:m===mn?L=n.DEPTH_COMPONENT32F:m===Sr&&(L=n.DEPTH_COMPONENT16),L}function b(C,m){return d(C)===!0||C.isFramebufferTexture&&C.minFilter!==wt&&C.minFilter!==Lt?Math.log2(Math.max(m.width,m.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?m.mipmaps.length:1}function P(C){const m=C.target;m.removeEventListener("dispose",P),R(m),m.isVideoTexture&&u.delete(m),m.isHTMLTexture&&f.delete(m)}function x(C){const m=C.target;m.removeEventListener("dispose",x),I(m)}function R(C){const m=i.get(C);if(m.__webglInit===void 0)return;const L=C.source,B=g.get(L);if(B){const G=B[m.__cacheKey];G.usedTimes--,G.usedTimes===0&&U(C),Object.keys(B).length===0&&g.delete(L)}i.remove(C)}function U(C){const m=i.get(C);n.deleteTexture(m.__webglTexture);const L=C.source,B=g.get(L);delete B[m.__cacheKey],a.memory.textures--}function I(C){const m=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(m.__webglFramebuffer[B]))for(let G=0;G<m.__webglFramebuffer[B].length;G++)n.deleteFramebuffer(m.__webglFramebuffer[B][G]);else n.deleteFramebuffer(m.__webglFramebuffer[B]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[B])}else{if(Array.isArray(m.__webglFramebuffer))for(let B=0;B<m.__webglFramebuffer.length;B++)n.deleteFramebuffer(m.__webglFramebuffer[B]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let B=0;B<m.__webglColorRenderbuffer.length;B++)m.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[B]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const L=C.textures;for(let B=0,G=L.length;B<G;B++){const Q=i.get(L[B]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(L[B])}i.remove(C)}let F=0;function q(){F=0}function T(){return F}function N(C){F=C}function D(){const C=F;return C>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),F+=1,C}function O(C){const m=[];return m.push(C.wrapS),m.push(C.wrapT),m.push(C.wrapR||0),m.push(C.magFilter),m.push(C.minFilter),m.push(C.anisotropy),m.push(C.internalFormat),m.push(C.format),m.push(C.type),m.push(C.generateMipmaps),m.push(C.premultiplyAlpha),m.push(C.flipY),m.push(C.unpackAlignment),m.push(C.colorSpace),m.join()}function W(C,m){const L=i.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&L.__version!==C.version){const B=C.image;if(B===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(L,C,m);return}}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+m)}function $(C,m){const L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){be(L,C,m);return}else C.isExternalTexture&&(L.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+m)}function ee(C,m){const L=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&L.__version!==C.version){be(L,C,m);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+m)}function te(C,m){const L=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&L.__version!==C.version){Ie(L,C,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+m)}const oe={[eo]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[to]:n.MIRRORED_REPEAT},Se={[wt]:n.NEAREST,[n_]:n.NEAREST_MIPMAP_NEAREST,[Br]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[Qs]:n.LINEAR_MIPMAP_NEAREST,[fi]:n.LINEAR_MIPMAP_LINEAR},Ce={[s_]:n.NEVER,[u_]:n.ALWAYS,[a_]:n.LESS,[tl]:n.LEQUAL,[o_]:n.EQUAL,[nl]:n.GEQUAL,[l_]:n.GREATER,[c_]:n.NOTEQUAL};function Te(C,m){if(m.type===mn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Lt||m.magFilter===Qs||m.magFilter===Br||m.magFilter===fi||m.minFilter===Lt||m.minFilter===Qs||m.minFilter===Br||m.minFilter===fi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,oe[m.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,oe[m.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,oe[m.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Se[m.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Se[m.minFilter]),m.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Ce[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===wt||m.minFilter!==Br&&m.minFilter!==fi||m.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function J(C,m){let L=!1;C.__webglInit===void 0&&(C.__webglInit=!0,m.addEventListener("dispose",P));const B=m.source;let G=g.get(B);G===void 0&&(G={},g.set(B,G));const Q=O(m);if(Q!==C.__cacheKey){G[Q]===void 0&&(G[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,L=!0),G[Q].usedTimes++;const le=G[C.__cacheKey];le!==void 0&&(G[C.__cacheKey].usedTimes--,le.usedTimes===0&&U(m)),C.__cacheKey=Q,C.__webglTexture=G[Q].texture}return L}function ae(C,m,L){return Math.floor(Math.floor(C/L)/m)}function ie(C,m,L,B){const Q=C.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,L,B,m.data);else{Q.sort((_e,he)=>_e.start-he.start);let le=0;for(let _e=1;_e<Q.length;_e++){const he=Q[le],ce=Q[_e],Re=he.start+he.count,de=ae(ce.start,m.width,4),Fe=ae(he.start,m.width,4);ce.start<=Re+1&&de===Fe&&ae(ce.start+ce.count-1,m.width,4)===de?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++le,Q[le]=ce)}Q.length=le+1;const V=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let _e=0,he=Q.length;_e<he;_e++){const ce=Q[_e],Re=Math.floor(ce.start/4),de=Math.ceil(ce.count/4),Fe=Re%m.width,z=Math.floor(Re/m.width),pe=de,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Fe,z,pe,ne,L,B,m.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,V),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function be(C,m,L){let B=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(B=n.TEXTURE_3D);const G=J(C,m),Q=m.source;t.bindTexture(B,C.__webglTexture,n.TEXTURE0+L);const le=i.get(Q);if(Q.version!==le.__version||G===!0){if(t.activeTexture(n.TEXTURE0+L),(typeof ImageBitmap<"u"&&m.image instanceof ImageBitmap)===!1){const ne=$e.getPrimaries($e.workingColorSpace),me=m.colorSpace===Qn?null:$e.getPrimaries(m.colorSpace),xe=m.colorSpace===Qn||ne===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment);let K=p(m.image,!1,r.maxTextureSize);K=pt(m,K);const ue=s.convert(m.format,m.colorSpace),_e=s.convert(m.type);let he=M(m.internalFormat,ue,_e,m.normalized,m.colorSpace,m.isVideoTexture);Te(B,m);let ce;const Re=m.mipmaps,de=m.isVideoTexture!==!0,Fe=le.__version===void 0||G===!0,z=Q.dataReady,pe=b(m,K);if(m.isDepthTexture)he=w(m.format===pi,m.type),Fe&&(de?t.texStorage2D(n.TEXTURE_2D,1,he,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,he,K.width,K.height,0,ue,_e,null));else if(m.isDataTexture)if(Re.length>0){de&&Fe&&t.texStorage2D(n.TEXTURE_2D,pe,he,Re[0].width,Re[0].height);for(let ne=0,me=Re.length;ne<me;ne++)ce=Re[ne],de?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,_e,ce.data):t.texImage2D(n.TEXTURE_2D,ne,he,ce.width,ce.height,0,ue,_e,ce.data);m.generateMipmaps=!1}else de?(Fe&&t.texStorage2D(n.TEXTURE_2D,pe,he,K.width,K.height),z&&ie(m,K,ue,_e)):t.texImage2D(n.TEXTURE_2D,0,he,K.width,K.height,0,ue,_e,K.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){de&&Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,he,Re[0].width,Re[0].height,K.depth);for(let ne=0,me=Re.length;ne<me;ne++)if(ce=Re[ne],m.format!==ln)if(ue!==null)if(de){if(z)if(m.layerUpdates.size>0){const xe=yc(ce.width,ce.height,m.format,m.type);for(const re of m.layerUpdates){const Pe=ce.data.subarray(re*xe/ce.data.BYTES_PER_ELEMENT,(re+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,re,ce.width,ce.height,1,ue,Pe)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,K.depth,ue,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,he,ce.width,ce.height,K.depth,0,ce.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ce.width,ce.height,K.depth,ue,_e,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,he,ce.width,ce.height,K.depth,0,ue,_e,ce.data)}else{de&&Fe&&t.texStorage2D(n.TEXTURE_2D,pe,he,Re[0].width,Re[0].height);for(let ne=0,me=Re.length;ne<me;ne++)ce=Re[ne],m.format!==ln?ue!==null?de?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,he,ce.width,ce.height,0,ce.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ce.width,ce.height,ue,_e,ce.data):t.texImage2D(n.TEXTURE_2D,ne,he,ce.width,ce.height,0,ue,_e,ce.data)}else if(m.isDataArrayTexture)if(de){if(Fe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,he,K.width,K.height,K.depth),z)if(m.layerUpdates.size>0){const ne=yc(K.width,K.height,m.format,m.type);for(const me of m.layerUpdates){const xe=K.data.subarray(me*ne/K.data.BYTES_PER_ELEMENT,(me+1)*ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,K.width,K.height,1,ue,_e,xe)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,_e,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,he,K.width,K.height,K.depth,0,ue,_e,K.data);else if(m.isData3DTexture)de?(Fe&&t.texStorage3D(n.TEXTURE_3D,pe,he,K.width,K.height,K.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,_e,K.data)):t.texImage3D(n.TEXTURE_3D,0,he,K.width,K.height,K.depth,0,ue,_e,K.data);else if(m.isFramebufferTexture){if(Fe)if(de)t.texStorage2D(n.TEXTURE_2D,pe,he,K.width,K.height);else{let ne=K.width,me=K.height;for(let xe=0;xe<pe;xe++)t.texImage2D(n.TEXTURE_2D,xe,he,ne,me,0,ue,_e,null),ne>>=1,me>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),f.add(m),ne.onpaint=me=>{const xe=me.changedElements;for(const re of f)xe.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{const xe=n.RGBA,re=n.RGBA,Pe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,re,Pe,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Re.length>0){if(de&&Fe){const ne=Ke(Re[0]);t.texStorage2D(n.TEXTURE_2D,pe,he,ne.width,ne.height)}for(let ne=0,me=Re.length;ne<me;ne++)ce=Re[ne],de?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue,_e,ce):t.texImage2D(n.TEXTURE_2D,ne,he,ue,_e,ce);m.generateMipmaps=!1}else if(de){if(Fe){const ne=Ke(K);t.texStorage2D(n.TEXTURE_2D,pe,he,ne.width,ne.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,_e,K)}else t.texImage2D(n.TEXTURE_2D,0,he,ue,_e,K);d(m)&&E(B),le.__version=Q.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function Ie(C,m,L){if(m.image.length!==6)return;const B=J(C,m),G=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+L);const Q=i.get(G);if(G.version!==Q.__version||B===!0){t.activeTexture(n.TEXTURE0+L);const le=$e.getPrimaries($e.workingColorSpace),V=m.colorSpace===Qn?null:$e.getPrimaries(m.colorSpace),K=m.colorSpace===Qn||le===V?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const ue=m.isCompressedTexture||m.image[0].isCompressedTexture,_e=m.image[0]&&m.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!ue&&!_e?he[re]=p(m.image[re],!0,r.maxCubemapSize):he[re]=_e?m.image[re].image:m.image[re],he[re]=pt(m,he[re]);const ce=he[0],Re=s.convert(m.format,m.colorSpace),de=s.convert(m.type),Fe=M(m.internalFormat,Re,de,m.normalized,m.colorSpace),z=m.isVideoTexture!==!0,pe=Q.__version===void 0||B===!0,ne=G.dataReady;let me=b(m,ce);Te(n.TEXTURE_CUBE_MAP,m);let xe;if(ue){z&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Fe,ce.width,ce.height);for(let re=0;re<6;re++){xe=he[re].mipmaps;for(let Pe=0;Pe<xe.length;Pe++){const we=xe[Pe];m.format!==ln?Re!==null?z?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,we.width,we.height,0,we.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,we.width,we.height,Re,de,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,Fe,we.width,we.height,0,Re,de,we.data)}}}else{if(xe=m.mipmaps,z&&pe){xe.length>0&&me++;const re=Ke(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Fe,re.width,re.height)}for(let re=0;re<6;re++)if(_e){z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,Re,de,he[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,he[re].width,he[re].height,0,Re,de,he[re].data);for(let Pe=0;Pe<xe.length;Pe++){const dt=xe[Pe].image[re].image;z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,dt.width,dt.height,Re,de,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,dt.width,dt.height,0,Re,de,dt.data)}}else{z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Re,de,he[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Fe,Re,de,he[re]);for(let Pe=0;Pe<xe.length;Pe++){const we=xe[Pe];z?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Re,de,we.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,Fe,Re,de,we.image[re])}}}d(m)&&E(n.TEXTURE_CUBE_MAP),Q.__version=G.version,m.onUpdate&&m.onUpdate(m)}C.__version=m.version}function Ae(C,m,L,B,G,Q){const le=s.convert(L.format,L.colorSpace),V=s.convert(L.type),K=M(L.internalFormat,le,V,L.normalized,L.colorSpace),ue=i.get(m),_e=i.get(L);if(_e.__renderTarget=m,!ue.__hasExternalTextures){const he=Math.max(1,m.width>>Q),ce=Math.max(1,m.height>>Q);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,Q,K,he,ce,m.depth,0,le,V,null):t.texImage2D(G,Q,K,he,ce,0,le,V,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ht(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,G,_e.__webglTexture,0,lt(m)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,G,_e.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(C,m,L){if(n.bindRenderbuffer(n.RENDERBUFFER,C),m.depthBuffer){const B=m.depthTexture,G=B&&B.isDepthTexture?B.type:null,Q=w(m.stencilBuffer,G),le=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(m),Q,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(m),Q,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,Q,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,C)}else{const B=m.textures;for(let G=0;G<B.length;G++){const Q=B[G],le=s.convert(Q.format,Q.colorSpace),V=s.convert(Q.type),K=M(Q.internalFormat,le,V,Q.normalized,Q.colorSpace);ht(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt(m),K,m.width,m.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,lt(m),K,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,K,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(C,m,L){const B=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const G=i.get(m.depthTexture);if(G.__renderTarget=m,(!G.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),B){if(G.__webglInit===void 0&&(G.__webglInit=!0,m.depthTexture.addEventListener("dispose",P)),G.__webglTexture===void 0){G.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Te(n.TEXTURE_CUBE_MAP,m.depthTexture);const ue=s.convert(m.depthTexture.format),_e=s.convert(m.depthTexture.type);let he;m.depthTexture.format===Gn?he=n.DEPTH_COMPONENT24:m.depthTexture.format===pi&&(he=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,m.width,m.height,0,ue,_e,null)}}else W(m.depthTexture,0);const Q=G.__webglTexture,le=lt(m),V=B?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,K=m.depthTexture.format===pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Gn)ht(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,V,Q,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,K,V,Q,0);else if(m.depthTexture.format===pi)ht(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,V,Q,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,K,V,Q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(C){const m=i.get(C),L=C.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==C.depthTexture){const B=C.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),B){const G=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,B.removeEventListener("dispose",G)};B.addEventListener("dispose",G),m.__depthDisposeCallback=G}m.__boundDepthTexture=B}if(C.depthTexture&&!m.__autoAllocateDepthBuffer)if(L)for(let B=0;B<6;B++)Ue(m.__webglFramebuffer[B],C,B);else{const B=C.texture.mipmaps;B&&B.length>0?Ue(m.__webglFramebuffer[0],C,0):Ue(m.__webglFramebuffer,C,0)}else if(L){m.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[B]),m.__webglDepthbuffer[B]===void 0)m.__webglDepthbuffer[B]=n.createRenderbuffer(),Je(m.__webglDepthbuffer[B],C,!1);else{const G=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=m.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Q)}}else{const B=C.texture.mipmaps;if(B&&B.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Je(m.__webglDepthbuffer,C,!1);else{const G=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,m,L){const B=i.get(C);m!==void 0&&Ae(B.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Qe(C)}function Ye(C){const m=C.texture,L=i.get(C),B=i.get(m);C.addEventListener("dispose",x);const G=C.textures,Q=C.isWebGLCubeRenderTarget===!0,le=G.length>1;if(le||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=m.version,a.memory.textures++),Q){L.__webglFramebuffer=[];for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer[V]=[];for(let K=0;K<m.mipmaps.length;K++)L.__webglFramebuffer[V][K]=n.createFramebuffer()}else L.__webglFramebuffer[V]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){L.__webglFramebuffer=[];for(let V=0;V<m.mipmaps.length;V++)L.__webglFramebuffer[V]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(le)for(let V=0,K=G.length;V<K;V++){const ue=i.get(G[V]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ht(C)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let V=0;V<G.length;V++){const K=G[V];L.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[V]);const ue=s.convert(K.format,K.colorSpace),_e=s.convert(K.type),he=M(K.internalFormat,ue,_e,K.normalized,K.colorSpace,C.isXRRenderTarget===!0),ce=lt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,L.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(L.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Te(n.TEXTURE_CUBE_MAP,m);for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)Ae(L.__webglFramebuffer[V][K],C,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,K);else Ae(L.__webglFramebuffer[V],C,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);d(m)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let V=0,K=G.length;V<K;V++){const ue=G[V],_e=i.get(ue);let he=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,_e.__webglTexture),Te(he,ue),Ae(L.__webglFramebuffer,C,ue,n.COLOR_ATTACHMENT0+V,he,0),d(ue)&&E(he)}t.unbindTexture()}else{let V=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(V=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(V,B.__webglTexture),Te(V,m),m.mipmaps&&m.mipmaps.length>0)for(let K=0;K<m.mipmaps.length;K++)Ae(L.__webglFramebuffer[K],C,m,n.COLOR_ATTACHMENT0,V,K);else Ae(L.__webglFramebuffer,C,m,n.COLOR_ATTACHMENT0,V,0);d(m)&&E(V),t.unbindTexture()}C.depthBuffer&&Qe(C)}function Be(C){const m=C.textures;for(let L=0,B=m.length;L<B;L++){const G=m[L];if(d(G)){const Q=A(C),le=i.get(G).__webglTexture;t.bindTexture(Q,le),E(Q),t.unbindTexture()}}}const st=[],ut=[];function ft(C){if(C.samples>0){if(ht(C)===!1){const m=C.textures,L=C.width,B=C.height;let G=n.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(C),V=m.length>1;if(V)for(let ue=0;ue<m.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const K=C.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<m.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),V){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const _e=i.get(m[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,L,B,0,0,L,B,G,n.NEAREST),c===!0&&(st.length=0,ut.length=0,st.push(n.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(Q),ut.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ue=0;ue<m.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const _e=i.get(m[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const m=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function lt(C){return Math.min(r.maxSamples,C.samples)}function ht(C){const m=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function k(C){const m=a.render.frame;u.get(C)!==m&&(u.set(C,m),C.update())}function pt(C,m){const L=C.colorSpace,B=C.format,G=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||L!==Rs&&L!==Qn&&($e.getTransfer(L)===nt?(B!==ln||G!==en)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",L)),m}function Ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=q,this.getTextureUnits=T,this.setTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=te,this.rebindTextures=He,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zS(n,e){function t(i,r=Qn){let s;const a=$e.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===Ko)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ah)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ih)return n.BYTE;if(i===rh)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===$o)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===kn)return n.HALF_FLOAT;if(i===oh)return n.ALPHA;if(i===lh)return n.RGB;if(i===ln)return n.RGBA;if(i===Gn)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===ch)return n.RED;if(i===Jo)return n.RED_INTEGER;if(i===xi)return n.RG;if(i===Qo)return n.RG_INTEGER;if(i===el)return n.RGBA_INTEGER;if(i===ps||i===ms||i===gs||i===_s)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ms)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_s)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===no||i===io||i===ro||i===so)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===no)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===io)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===so)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ao||i===oo||i===lo||i===co||i===uo||i===As||i===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ao||i===oo)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===co)return s.COMPRESSED_R11_EAC;if(i===uo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===As)return s.COMPRESSED_RG11_EAC;if(i===ho)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fo||i===po||i===mo||i===go||i===_o||i===xo||i===vo||i===Mo||i===So||i===yo||i===Eo||i===bo||i===To||i===Ao)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===po)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===go)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===So)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bo)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===To)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ao)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wo||i===Ro||i===Co)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wo)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Co)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Po||i===No||i===ws||i===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Po)return s.COMPRESSED_RED_RGTC1_EXT;if(i===No)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ws)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new _h(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new En({vertexShader:kS,fragmentShader:GS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yn(new Bs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VS extends si{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,g=null,v=null;const S=typeof XRWebGLBinding<"u",p=new HS,d={},E=t.getContextAttributes();let A=null,M=null;const w=[],b=[],P=new ke;let x=null;const R=new Qt;R.viewport=new _t;const U=new Qt;U.viewport=new _t;const I=[R,U],F=new Z_;let q=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=w[J];return ae===void 0&&(ae=new aa,w[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=w[J];return ae===void 0&&(ae=new aa,w[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=w[J];return ae===void 0&&(ae=new aa,w[J]=ae),ae.getHandSpace()};function N(J){const ae=b.indexOf(J.inputSource);if(ae===-1)return;const ie=w[ae];ie!==void 0&&(ie.update(J.inputSource,J.frame,l||a),ie.dispatchEvent({type:J.type,data:J.inputSource}))}function D(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",O);for(let J=0;J<w.length;J++){const ae=b[J];ae!==null&&(b[J]=null,w[J].disconnect(ae))}q=null,T=null,p.reset();for(const J in d)delete d[J];e.setRenderTarget(A),g=null,h=null,f=null,r=null,M=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",D),r.addEventListener("inputsourceschange",O),E.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,be=null,Ie=null;E.depth&&(Ie=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=E.stencil?pi:Gn,be=E.stencil?yr:Sn);const Ae={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new vn(h.textureWidth,h.textureHeight,{format:ln,type:en,depthTexture:new Ji(h.textureWidth,h.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ie={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ie),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new vn(g.framebufferWidth,g.framebufferHeight,{format:ln,type:en,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(J){for(let ae=0;ae<J.removed.length;ae++){const ie=J.removed[ae],be=b.indexOf(ie);be>=0&&(b[be]=null,w[be].disconnect(ie))}for(let ae=0;ae<J.added.length;ae++){const ie=J.added[ae];let be=b.indexOf(ie);if(be===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=b.length){b.push(ie),be=Ae;break}else if(b[Ae]===null){b[Ae]=ie,be=Ae;break}if(be===-1)break}const Ie=w[be];Ie&&Ie.connect(ie)}}const W=new X,$=new X;function ee(J,ae,ie){W.setFromMatrixPosition(ae.matrixWorld),$.setFromMatrixPosition(ie.matrixWorld);const be=W.distanceTo($),Ie=ae.projectionMatrix.elements,Ae=ie.projectionMatrix.elements,Je=Ie[14]/(Ie[10]-1),Ue=Ie[14]/(Ie[10]+1),Qe=(Ie[9]+1)/Ie[5],He=(Ie[9]-1)/Ie[5],Ye=(Ie[8]-1)/Ie[0],Be=(Ae[8]+1)/Ae[0],st=Je*Ye,ut=Je*Be,ft=be/(-Ye+Be),lt=ft*-Ye;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(lt),J.translateZ(ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ie[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const ht=Je+ft,k=Ue+ft,pt=st-lt,Ke=ut+(be-lt),C=Qe*Ue/k*ht,m=He*Ue/k*ht;J.projectionMatrix.makePerspective(pt,Ke,C,m,ht,k),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function te(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ae=J.near,ie=J.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(ie=p.depthFar)),F.near=U.near=R.near=ae,F.far=U.far=R.far=ie,(q!==F.near||T!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),q=F.near,T=F.far),F.layers.mask=J.layers.mask|6,R.layers.mask=F.layers.mask&-5,U.layers.mask=F.layers.mask&-3;const be=J.parent,Ie=F.cameras;te(F,be);for(let Ae=0;Ae<Ie.length;Ae++)te(Ie[Ae],be);Ie.length===2?ee(F,R,U):F.projectionMatrix.copy(R.projectionMatrix),oe(J,F,be)};function oe(J,ae,ie){ie===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(ie.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Lo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return d[J]};let Se=null;function Ce(J,ae){if(u=ae.getViewerPose(l||a),v=ae,u!==null){const ie=u.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let be=!1;ie.length!==F.cameras.length&&(F.cameras.length=0,be=!0);for(let Ue=0;Ue<ie.length;Ue++){const Qe=ie[Ue];let He=null;if(g!==null)He=g.getViewport(Qe);else{const Be=f.getViewSubImage(h,Qe);He=Be.viewport,Ue===0&&(e.setRenderTargetTextures(M,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(M))}let Ye=I[Ue];Ye===void 0&&(Ye=new Qt,Ye.layers.enable(Ue),Ye.viewport=new _t,I[Ue]=Ye),Ye.matrix.fromArray(Qe.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Qe.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(He.x,He.y,He.width,He.height),Ue===0&&(F.matrix.copy(Ye.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),be===!0&&F.cameras.push(Ye)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const Ue=f.getDepthInformation(ie[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,r.renderState)}if(Ie&&Ie.includes("camera-access")&&S){e.state.unbindTexture(),f=i.getBinding();for(let Ue=0;Ue<ie.length;Ue++){const Qe=ie[Ue].camera;if(Qe){let He=d[Qe];He||(He=new _h,d[Qe]=He);const Ye=f.getCameraImage(Qe);He.sourceTexture=Ye}}}}for(let ie=0;ie<w.length;ie++){const be=b[ie],Ie=w[ie];be!==null&&Ie!==void 0&&Ie.update(be,ae,l||a)}Se&&Se(J,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Te=new Sh;Te.setAnimationLoop(Ce),this.setAnimationLoop=function(J){Se=J},this.dispose=function(){}}}const WS=new Mt,Rh=new ze;Rh.set(-1,0,0,0,1,0,0,0,1);function XS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,xh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,E,A,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(p,d):d.isMeshLambertMaterial?(s(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&g(p,d,M)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),S(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,E,A):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Vt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Vt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=e.get(d),A=E.envMap,M=E.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(WS.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rh),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function g(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function S(p,d){const E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,w){const b=w.program;i.uniformBlockBinding(M,b)}function l(M,w){let b=r[M.id];b===void 0&&(p(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",E));const P=w.program;i.updateUBOMapping(M,P);const x=e.render.frame;s[M.id]!==x&&(h(M),s[M.id]=x)}function u(M){const w=f();M.__bindingPointIndex=w;const b=n.createBuffer(),P=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const w=r[M.id],b=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,R=b.length;x<R;x++){const U=b[x];if(Array.isArray(U))for(let I=0,F=U.length;I<F;I++)g(U[I],x,I,P);else g(U,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(M,w,b,P){if(S(M,w,b,P)===!0){const x=M.__offset,R=M.value;if(Array.isArray(R)){let U=0;for(let I=0;I<R.length;I++){const F=R[I],q=d(F);v(F,M.__data,U),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(R,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function v(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function S(M,w,b,P){const x=M.value,R=w+"_"+b;if(P[R]===void 0)return typeof x=="number"||typeof x=="boolean"?P[R]=x:ArrayBuffer.isView(x)?P[R]=x.slice():P[R]=x.clone(),!0;{const U=P[R];if(typeof x=="number"||typeof x=="boolean"){if(U!==x)return P[R]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(U.equals(x)===!1)return U.copy(x),!0}}return!1}function p(M){const w=M.uniforms;let b=0;const P=16;for(let R=0,U=w.length;R<U;R++){const I=Array.isArray(w[R])?w[R]:[w[R]];for(let F=0,q=I.length;F<q;F++){const T=I[F],N=Array.isArray(T.value)?T.value:[T.value];for(let D=0,O=N.length;D<O;D++){const W=N[D],$=d(W),ee=b%P,te=ee%$.boundary,oe=ee+te;b+=te,oe!==0&&P-oe<$.storage&&(b+=P-oe),T.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=b,b+=$.storage}}}const x=b%P;return x>0&&(b+=P-x),M.__size=b,M.__cache={},this}function d(M){const w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",M),w}function E(M){const w=M.target;w.removeEventListener("dispose",E);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function A(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:A}}const jS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let dn=null;function YS(){return dn===null&&(dn=new F_(jS,16,16,xi,kn),dn.name="DFG_LUT",dn.minFilter=Lt,dn.magFilter=Lt,dn.wrapS=Fn,dn.wrapT=Fn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}class $S{constructor(e={}){const{canvas:t=d_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:g=en}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=g,p=new Set([el,Qo,Jo]),d=new Set([en,Sn,Sr,yr,Ko,Zo]),E=new Uint32Array(4),A=new Int32Array(4),M=new X;let w=null,b=null;const P=[],x=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let I=!1,F=null,q=null,T=null,N=null;this._outputColorSpace=Jt;let D=0,O=0,W=null,$=-1,ee=null;const te=new _t,oe=new _t;let Se=null;const Ce=new tt(0);let Te=0,J=t.width,ae=t.height,ie=1,be=null,Ie=null;const Ae=new _t(0,0,J,ae),Je=new _t(0,0,J,ae);let Ue=!1;const Qe=new mh;let He=!1,Ye=!1;const Be=new Mt,st=new X,ut=new _t,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function ht(){return W===null?ie:1}let k=i;function pt(y,H){return t.getContext(y,H)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yo}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),k===null){const H="webgl2";if(k=pt(H,y),k===null)throw pt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(y){throw Ze("WebGLRenderer: "+y.message),y}let Ke,C,m,L,B,G,Q,le,V,K,ue,_e,he,ce,Re,de,Fe,z,pe,ne,me,xe,re;function Pe(){Ke=new Yv(k),Ke.init(),me=new zS(k,Ke),C=new kv(k,Ke,e,me),m=new OS(k,Ke),C.reversedDepthBuffer&&h&&m.buffers.depth.setReversed(!0),q=k.createFramebuffer(),T=k.createFramebuffer(),N=k.createFramebuffer(),L=new Zv(k),B=new ES,G=new BS(k,Ke,m,B,C,me,L),Q=new jv(U),le=new t0(k),xe=new Bv(k,le),V=new $v(k,le,L,xe),K=new Qv(k,V,le,xe,L),z=new Jv(k,C,G),Re=new Gv(B),ue=new yS(U,Q,Ke,C,xe,Re),_e=new XS(U,B),he=new TS,ce=new NS(Ke),Fe=new Ov(U,Q,m,K,v,c),de=new FS(U,K,C),re=new qS(k,L,C,m),pe=new zv(k,Ke,L),ne=new Kv(k,Ke,L),L.programs=ue.programs,U.capabilities=C,U.extensions=Ke,U.properties=B,U.renderLists=he,U.shadowMap=de,U.state=m,U.info=L}Pe(),S!==en&&(R=new tM(S,t.width,t.height,o,r,s));const we=new VS(U,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const y=Ke.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ke.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(y){y!==void 0&&(ie=y,this.setSize(J,ae,!1))},this.getSize=function(y){return y.set(J,ae)},this.setSize=function(y,H,Z=!0){if(we.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=y,ae=H,t.width=Math.floor(y*ie),t.height=Math.floor(H*ie),Z===!0&&(t.style.width=y+"px",t.style.height=H+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,y,H)},this.getDrawingBufferSize=function(y){return y.set(J*ie,ae*ie).floor()},this.setDrawingBufferSize=function(y,H,Z){J=y,ae=H,ie=Z,t.width=Math.floor(y*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,y,H)},this.setEffects=function(y){if(S===en){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let H=0;H<y.length;H++)if(y[H].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(te)},this.getViewport=function(y){return y.copy(Ae)},this.setViewport=function(y,H,Z,j){y.isVector4?Ae.set(y.x,y.y,y.z,y.w):Ae.set(y,H,Z,j),m.viewport(te.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(y){return y.copy(Je)},this.setScissor=function(y,H,Z,j){y.isVector4?Je.set(y.x,y.y,y.z,y.w):Je.set(y,H,Z,j),m.scissor(oe.copy(Je).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(y){m.setScissorTest(Ue=y)},this.setOpaqueSort=function(y){be=y},this.setTransparentSort=function(y){Ie=y},this.getClearColor=function(y){return y.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(y=!0,H=!0,Z=!0){let j=0;if(y){let Y=!1;if(W!==null){const Me=W.texture.format;Y=p.has(Me)}if(Y){const Me=W.texture.type,Ee=d.has(Me),ve=Fe.getClearColor(),Ne=Fe.getClearAlpha(),De=ve.r,Ge=ve.g,Xe=ve.b;Ee?(E[0]=De,E[1]=Ge,E[2]=Xe,E[3]=Ne,k.clearBufferuiv(k.COLOR,0,E)):(A[0]=De,A[1]=Ge,A[2]=Xe,A[3]=Ne,k.clearBufferiv(k.COLOR,0,A))}else j|=k.COLOR_BUFFER_BIT}H&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),Fe.dispose(),he.dispose(),ce.dispose(),B.dispose(),Q.dispose(),K.dispose(),xe.dispose(),re.dispose(),ue.dispose(),we.dispose(),we.removeEventListener("sessionstart",qe),we.removeEventListener("sessionend",mt),Ct.stop()};function dt(y){y.preventDefault(),ec("WebGLRenderer: Context Lost."),I=!0}function Ve(){ec("WebGLRenderer: Context Restored."),I=!1;const y=L.autoReset,H=de.enabled,Z=de.autoUpdate,j=de.needsUpdate,Y=de.type;Pe(),L.autoReset=y,de.enabled=H,de.autoUpdate=Z,de.needsUpdate=j,de.type=Y}function Rt(y){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $t(y){const H=y.target;H.removeEventListener("dispose",$t),Gs(H)}function Gs(y){Hs(y),B.remove(y)}function Hs(y){const H=B.get(y).programs;H!==void 0&&(H.forEach(function(Z){ue.releaseProgram(Z)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,H,Z,j,Y,Me){H===null&&(H=ft);const Ee=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=Dh(y,H,Z,j,Y);m.setMaterial(j,Ee);let Ne=Z.index,De=1;if(j.wireframe===!0){if(Ne=V.getWireframeAttribute(Z),Ne===void 0)return;De=2}const Ge=Z.drawRange,Xe=Z.attributes.position;let Le=Ge.start*De,it=(Ge.start+Ge.count)*De;Me!==null&&(Le=Math.max(Le,Me.start*De),it=Math.min(it,(Me.start+Me.count)*De)),Ne!==null?(Le=Math.max(Le,0),it=Math.min(it,Ne.count)):Xe!=null&&(Le=Math.max(Le,0),it=Math.min(it,Xe.count));const xt=it-Le;if(xt<0||xt===1/0)return;xe.setup(Y,j,ve,Z,Ne);let gt,at=pe;if(Ne!==null&&(gt=le.get(Ne),at=ne,at.setIndex(gt)),Y.isMesh)j.wireframe===!0?(m.setLineWidth(j.wireframeLinewidth*ht()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(Y.isLine){let Pt=j.linewidth;Pt===void 0&&(Pt=1),m.setLineWidth(Pt*ht()),Y.isLineSegments?at.setMode(k.LINES):Y.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else Y.isPoints?at.setMode(k.POINTS):Y.isSprite&&at.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(Ke.get("WEBGL_multi_draw"))at.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Pt=Y._multiDrawStarts,ye=Y._multiDrawCounts,Xt=Y._multiDrawCount,et=Ne?le.get(Ne).bytesPerElement:1,Kt=B.get(j).currentProgram.getUniforms();for(let un=0;un<Xt;un++)Kt.setValue(k,"_gl_DrawID",un),at.render(Pt[un]/et,ye[un])}else if(Y.isInstancedMesh)at.renderInstances(Le,xt,Y.count);else if(Z.isInstancedBufferGeometry){const Pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ye=Math.min(Z.instanceCount,Pt);at.renderInstances(Le,xt,ye)}else at.render(Le,xt)};function Vs(y,H,Z){y.transparent===!0&&y.side===In&&y.forceSinglePass===!1?(y.side=Vt,y.needsUpdate=!0,Cr(y,H,Z),y.side=ii,y.needsUpdate=!0,Cr(y,H,Z),y.side=In):Cr(y,H,Z)}this.compile=function(y,H,Z=null){Z===null&&(Z=y),b=ce.get(Z),b.init(H),x.push(b),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),y!==Z&&y.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights();const j=new Set;return y.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){const ve=Me[Ee];Vs(ve,Z,Y),j.add(ve)}else Vs(Me,Z,Y),j.add(Me)}),b=x.pop(),j},this.compileAsync=function(y,H,Z=null){const j=this.compile(y,H,Z);return new Promise(Y=>{function Me(){if(j.forEach(function(Ee){B.get(Ee).currentProgram.isReady()&&j.delete(Ee)}),j.size===0){Y(y);return}setTimeout(Me,10)}Ke.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Mi=null;function fe(y){Mi&&Mi(y)}function qe(){Ct.stop()}function mt(){Ct.start()}const Ct=new Sh;Ct.setAnimationLoop(fe),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(y){Mi=y,we.setAnimationLoop(y),y===null?Ct.stop():Ct.start()},we.addEventListener("sessionstart",qe),we.addEventListener("sessionend",mt),this.render=function(y,H){if(H!==void 0&&H.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(y,H);const Z=we.enabled===!0&&we.isPresenting===!0,j=R!==null&&(W===null||Z)&&R.begin(U,W);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(H),H=we.getCamera()),y.isScene===!0&&y.onBeforeRender(U,y,H,W),b=ce.get(y,x.length),b.init(H),b.state.textureUnits=G.getTextureUnits(),x.push(b),Be.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Qe.setFromProjectionMatrix(Be,gn,H.reversedDepth),Ye=this.localClippingEnabled,He=Re.init(this.clippingPlanes,Ye),w=he.get(y,P.length),w.init(),P.push(w),we.enabled===!0&&we.isPresenting===!0){const Ee=U.xr.getDepthSensingMesh();Ee!==null&&zt(Ee,H,-1/0,U.sortObjects)}zt(y,H,0,U.sortObjects),w.finish(),U.sortObjects===!0&&w.sort(be,Ie,H.reversedDepth),lt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,lt&&Fe.addToRenderList(w,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&Re.beginShadows();const Y=b.state.shadowsArray;if(de.render(Y,y,H),He===!0&&Re.endShadows(),(j&&R.hasRenderPass())===!1){const Ee=w.opaque,ve=w.transmissive;if(b.setupLights(),H.isArrayCamera){const Ne=H.cameras;if(ve.length>0)for(let De=0,Ge=Ne.length;De<Ge;De++){const Xe=Ne[De];tr(Ee,ve,y,Xe)}lt&&Fe.render(y);for(let De=0,Ge=Ne.length;De<Ge;De++){const Xe=Ne[De];An(w,y,Xe,Xe.viewport)}}else ve.length>0&&tr(Ee,ve,y,H),lt&&Fe.render(y),An(w,y,H)}W!==null&&O===0&&(G.updateMultisampleRenderTarget(W),G.updateRenderTargetMipmap(W)),j&&R.end(U),y.isScene===!0&&y.onAfterRender(U,y,H),xe.resetDefaultState(),$=-1,ee=null,x.pop(),x.length>0?(b=x[x.length-1],G.setTextureUnits(b.state.textureUnits),He===!0&&Re.setGlobalState(U.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?w=P[P.length-1]:w=null,F!==null&&F.renderEnd()};function zt(y,H,Z,j){if(y.visible===!1)return;if(y.layers.test(H.layers)){if(y.isGroup)Z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(H);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Qe.intersectsSprite(y)){j&&ut.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Be);const Ee=K.update(y),ve=y.material;ve.visible&&w.push(y,Ee,ve,Z,ut.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Qe.intersectsObject(y))){const Ee=K.update(y),ve=y.material;if(j&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ut.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ut.copy(Ee.boundingSphere.center)),ut.applyMatrix4(y.matrixWorld).applyMatrix4(Be)),Array.isArray(ve)){const Ne=Ee.groups;for(let De=0,Ge=Ne.length;De<Ge;De++){const Xe=Ne[De],Le=ve[Xe.materialIndex];Le&&Le.visible&&w.push(y,Ee,Le,Z,ut.z,Xe)}}else ve.visible&&w.push(y,Ee,ve,Z,ut.z,null)}}const Me=y.children;for(let Ee=0,ve=Me.length;Ee<ve;Ee++)zt(Me[Ee],H,Z,j)}function An(y,H,Z,j){const{opaque:Y,transmissive:Me,transparent:Ee}=y;b.setupLightsView(Z),He===!0&&Re.setGlobalState(U.clippingPlanes,Z),j&&m.viewport(te.copy(j)),Y.length>0&&Si(Y,H,Z),Me.length>0&&Si(Me,H,Z),Ee.length>0&&Si(Ee,H,Z),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function tr(y,H,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[j.id]===void 0){const Le=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[j.id]=new vn(1,1,{generateMipmaps:!0,type:Le?kn:en,minFilter:fi,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const Me=b.state.transmissionRenderTarget[j.id],Ee=j.viewport||te;Me.setSize(Ee.z*U.transmissionResolutionScale,Ee.w*U.transmissionResolutionScale);const ve=U.getRenderTarget(),Ne=U.getActiveCubeFace(),De=U.getActiveMipmapLevel();U.setRenderTarget(Me),U.getClearColor(Ce),Te=U.getClearAlpha(),Te<1&&U.setClearColor(16777215,.5),U.clear(),lt&&Fe.render(Z);const Ge=U.toneMapping;U.toneMapping=xn;const Xe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),b.setupLightsView(j),He===!0&&Re.setGlobalState(U.clippingPlanes,j),Si(y,Z,j),G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let it=0,xt=H.length;it<xt;it++){const gt=H[it],{object:at,geometry:Pt,material:ye,group:Xt}=gt;if(ye.side===In&&at.layers.test(j.layers)){const et=ye.side;ye.side=Vt,ye.needsUpdate=!0,ml(at,Z,j,Pt,ye,Xt),ye.side=et,ye.needsUpdate=!0,Le=!0}}Le===!0&&(G.updateMultisampleRenderTarget(Me),G.updateRenderTargetMipmap(Me))}U.setRenderTarget(ve,Ne,De),U.setClearColor(Ce,Te),Xe!==void 0&&(j.viewport=Xe),U.toneMapping=Ge}function Si(y,H,Z){const j=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Me=y.length;Y<Me;Y++){const Ee=y[Y],{object:ve,geometry:Ne,group:De}=Ee;let Ge=Ee.material;Ge.allowOverride===!0&&j!==null&&(Ge=j),ve.layers.test(Z.layers)&&ml(ve,H,Z,Ne,Ge,De)}}function ml(y,H,Z,j,Y,Me){y.onBeforeRender(U,H,Z,j,Y,Me),y.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Y.onBeforeRender(U,H,Z,j,y,Me),Y.transparent===!0&&Y.side===In&&Y.forceSinglePass===!1?(Y.side=Vt,Y.needsUpdate=!0,U.renderBufferDirect(Z,H,j,Y,y,Me),Y.side=ii,Y.needsUpdate=!0,U.renderBufferDirect(Z,H,j,Y,y,Me),Y.side=In):U.renderBufferDirect(Z,H,j,Y,y,Me),y.onAfterRender(U,H,Z,j,Y,Me)}function Cr(y,H,Z){H.isScene!==!0&&(H=ft);const j=B.get(y),Y=b.state.lights,Me=b.state.shadowsArray,Ee=Y.state.version,ve=ue.getParameters(y,Y.state,Me,H,Z,b.state.lightProbeGridArray),Ne=ue.getProgramCacheKey(ve);let De=j.programs;j.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;const Ge=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;j.envMap=Q.get(y.envMap||j.environment,Ge),j.envMapRotation=j.environment!==null&&y.envMap===null?H.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",$t),De=new Map,j.programs=De);let Xe=De.get(Ne);if(Xe!==void 0){if(j.currentProgram===Xe&&j.lightsStateVersion===Ee)return _l(y,ve),Xe}else ve.uniforms=ue.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,Z,ve),y.onBeforeCompile(ve,U),Xe=ue.acquireProgram(ve,Ne),De.set(Ne,Xe),j.uniforms=ve.uniforms;const Le=j.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=Re.uniform),_l(y,ve),j.needsLights=Ih(y),j.lightsStateVersion=Ee,j.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.lightProbeGrid=b.state.lightProbeGridArray.length>0,j.currentProgram=Xe,j.uniformsList=null,Xe}function gl(y){if(y.uniformsList===null){const H=y.currentProgram.getUniforms();y.uniformsList=vs.seqWithValue(H.seq,y.uniforms)}return y.uniformsList}function _l(y,H){const Z=B.get(y);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Nh(y,H){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let Z=0,j=y.length;Z<j;Z++){const Y=y[Z];if(Y.texture!==null&&Y.boundingBox.containsPoint(M))return Y}return null}function Dh(y,H,Z,j,Y){H.isScene!==!0&&(H=ft),G.resetTextureUnits();const Me=H.fog,Ee=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,ve=W===null?U.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:$e.workingColorSpace,Ne=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,De=Q.get(j.envMap||Ee,Ne),Ge=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Xe=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Le=!!Z.morphAttributes.position,it=!!Z.morphAttributes.normal,xt=!!Z.morphAttributes.color;let gt=xn;j.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(gt=U.toneMapping);const at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=at!==void 0?at.length:0,ye=B.get(j),Xt=b.state.lights;if(He===!0&&(Ye===!0||y!==ee)){const ct=y===ee&&j.id===$;Re.setState(j,y,ct)}let et=!1;j.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Xt.state.version||ye.outputColorSpace!==ve||Y.isBatchedMesh&&ye.batching===!1||!Y.isBatchedMesh&&ye.batching===!0||Y.isBatchedMesh&&ye.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ye.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ye.instancing===!1||!Y.isInstancedMesh&&ye.instancing===!0||Y.isSkinnedMesh&&ye.skinning===!1||!Y.isSkinnedMesh&&ye.skinning===!0||Y.isInstancedMesh&&ye.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ye.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ye.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ye.instancingMorph===!1&&Y.morphTexture!==null||ye.envMap!==De||j.fog===!0&&ye.fog!==Me||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Re.numPlanes||ye.numIntersection!==Re.numIntersection)||ye.vertexAlphas!==Ge||ye.vertexTangents!==Xe||ye.morphTargets!==Le||ye.morphNormals!==it||ye.morphColors!==xt||ye.toneMapping!==gt||ye.morphTargetsCount!==Pt||!!ye.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=j.version);let Kt=ye.currentProgram;et===!0&&(Kt=Cr(j,H,Y),F&&j.isNodeMaterial&&F.onUpdateProgram(j,Kt,ye));let un=!1,Hn=!1,yi=!1;const ot=Kt.getUniforms(),vt=ye.uniforms;if(m.useProgram(Kt.program)&&(un=!0,Hn=!0,yi=!0),j.id!==$&&($=j.id,Hn=!0),ye.needsLights){const ct=Nh(b.state.lightProbeGridArray,Y);ye.lightProbeGrid!==ct&&(ye.lightProbeGrid=ct,Hn=!0)}if(un||ee!==y){m.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ot.setValue(k,"projectionMatrix",y.projectionMatrix),ot.setValue(k,"viewMatrix",y.matrixWorldInverse);const Wn=ot.map.cameraPosition;Wn!==void 0&&Wn.setValue(k,st.setFromMatrixPosition(y.matrixWorld)),C.logarithmicDepthBuffer&&ot.setValue(k,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ot.setValue(k,"isOrthographic",y.isOrthographicCamera===!0),ee!==y&&(ee=y,Hn=!0,yi=!0)}if(ye.needsLights&&(Xt.state.directionalShadowMap.length>0&&ot.setValue(k,"directionalShadowMap",Xt.state.directionalShadowMap,G),Xt.state.spotShadowMap.length>0&&ot.setValue(k,"spotShadowMap",Xt.state.spotShadowMap,G),Xt.state.pointShadowMap.length>0&&ot.setValue(k,"pointShadowMap",Xt.state.pointShadowMap,G)),Y.isSkinnedMesh){ot.setOptional(k,Y,"bindMatrix"),ot.setOptional(k,Y,"bindMatrixInverse");const ct=Y.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(k,"boneTexture",ct.boneTexture,G))}Y.isBatchedMesh&&(ot.setOptional(k,Y,"batchingTexture"),ot.setValue(k,"batchingTexture",Y._matricesTexture,G),ot.setOptional(k,Y,"batchingIdTexture"),ot.setValue(k,"batchingIdTexture",Y._indirectTexture,G),ot.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ot.setValue(k,"batchingColorTexture",Y._colorsTexture,G));const Vn=Z.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&z.update(Y,Z,Kt),(Hn||ye.receiveShadow!==Y.receiveShadow)&&(ye.receiveShadow=Y.receiveShadow,ot.setValue(k,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(vt.envMapIntensity.value=H.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=YS()),Hn){if(ot.setValue(k,"toneMappingExposure",U.toneMappingExposure),ye.needsLights&&Lh(vt,yi),Me&&j.fog===!0&&_e.refreshFogUniforms(vt,Me),_e.refreshMaterialUniforms(vt,j,ie,ae,b.state.transmissionRenderTarget[y.id]),ye.needsLights&&ye.lightProbeGrid){const ct=ye.lightProbeGrid;vt.probesSH.value=ct.texture,vt.probesMin.value.copy(ct.boundingBox.min),vt.probesMax.value.copy(ct.boundingBox.max),vt.probesResolution.value.copy(ct.resolution)}vs.upload(k,gl(ye),vt,G)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vs.upload(k,gl(ye),vt,G),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ot.setValue(k,"center",Y.center),ot.setValue(k,"modelViewMatrix",Y.modelViewMatrix),ot.setValue(k,"normalMatrix",Y.normalMatrix),ot.setValue(k,"modelMatrix",Y.matrixWorld),j.uniformsGroups!==void 0){const ct=j.uniformsGroups;for(let Wn=0,Ei=ct.length;Wn<Ei;Wn++){const xl=ct[Wn];re.update(xl,Kt),re.bind(xl,Kt)}}return Kt}function Lh(y,H){y.ambientLightColor.needsUpdate=H,y.lightProbe.needsUpdate=H,y.directionalLights.needsUpdate=H,y.directionalLightShadows.needsUpdate=H,y.pointLights.needsUpdate=H,y.pointLightShadows.needsUpdate=H,y.spotLights.needsUpdate=H,y.spotLightShadows.needsUpdate=H,y.rectAreaLights.needsUpdate=H,y.hemisphereLights.needsUpdate=H}function Ih(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,H,Z){const j=B.get(y);j.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),B.get(y.texture).__webglTexture=H,B.get(y.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,H){const Z=B.get(y);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(y,H=0,Z=0){W=y,D=H,O=Z;let j=null,Y=!1,Me=!1;if(y){const ve=B.get(y);if(ve.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(k.FRAMEBUFFER,ve.__webglFramebuffer),te.copy(y.viewport),oe.copy(y.scissor),Se=y.scissorTest,m.viewport(te),m.scissor(oe),m.setScissorTest(Se),$=-1;return}else if(ve.__webglFramebuffer===void 0)G.setupRenderTarget(y);else if(ve.__hasExternalTextures)G.rebindTextures(y,B.get(y.texture).__webglTexture,B.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ge=y.depthTexture;if(ve.__boundDepthTexture!==Ge){if(Ge!==null&&B.has(Ge)&&(y.width!==Ge.image.width||y.height!==Ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(y)}}const Ne=y.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const De=B.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[H])?j=De[H][Z]:j=De[H],Y=!0):y.samples>0&&G.useMultisampledRTT(y)===!1?j=B.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?j=De[Z]:j=De,te.copy(y.viewport),oe.copy(y.scissor),Se=y.scissorTest}else te.copy(Ae).multiplyScalar(ie).floor(),oe.copy(Je).multiplyScalar(ie).floor(),Se=Ue;if(Z!==0&&(j=q),m.bindFramebuffer(k.FRAMEBUFFER,j)&&m.drawBuffers(y,j),m.viewport(te),m.scissor(oe),m.setScissorTest(Se),Y){const ve=B.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,ve.__webglTexture,Z)}else if(Me){const ve=H;for(let Ne=0;Ne<y.textures.length;Ne++){const De=B.get(y.textures[Ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ne,De.__webglTexture,Z,ve)}}else if(y!==null&&Z!==0){const ve=B.get(y.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ve.__webglTexture,Z)}$=-1},this.readRenderTargetPixels=function(y,H,Z,j,Y,Me,Ee,ve=0){if(!(y&&y.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=B.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne){m.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const De=y.textures[ve],Ge=De.format,Xe=De.type;if(y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(Ge)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(Xe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=y.width-j&&Z>=0&&Z<=y.height-Y&&k.readPixels(H,Z,j,Y,me.convert(Ge),me.convert(Xe),Me)}finally{const De=W!==null?B.get(W).__webglFramebuffer:null;m.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(y,H,Z,j,Y,Me,Ee,ve=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=B.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ne=Ne[Ee]),Ne)if(H>=0&&H<=y.width-j&&Z>=0&&Z<=y.height-Y){m.bindFramebuffer(k.FRAMEBUFFER,Ne);const De=y.textures[ve],Ge=De.format,Xe=De.type;if(y.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve),!C.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Le),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(H,Z,j,Y,me.convert(Ge),me.convert(Xe),0);const it=W!==null?B.get(W).__webglFramebuffer:null;m.bindFramebuffer(k.FRAMEBUFFER,it);const xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await f_(k,xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Le),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(Le),k.deleteSync(xt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,H=null,Z=0){const j=Math.pow(2,-Z),Y=Math.floor(y.image.width*j),Me=Math.floor(y.image.height*j),Ee=H!==null?H.x:0,ve=H!==null?H.y:0;G.setTexture2D(y,0),k.copyTexSubImage2D(k.TEXTURE_2D,Z,0,0,Ee,ve,Y,Me),m.unbindTexture()},this.copyTextureToTexture=function(y,H,Z=null,j=null,Y=0,Me=0){let Ee,ve,Ne,De,Ge,Xe,Le,it,xt;const gt=y.isCompressedTexture?y.mipmaps[Me]:y.image;if(Z!==null)Ee=Z.max.x-Z.min.x,ve=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,De=Z.min.x,Ge=Z.min.y,Xe=Z.isBox3?Z.min.z:0;else{const vt=Math.pow(2,-Y);Ee=Math.floor(gt.width*vt),ve=Math.floor(gt.height*vt),y.isDataArrayTexture?Ne=gt.depth:y.isData3DTexture?Ne=Math.floor(gt.depth*vt):Ne=1,De=0,Ge=0,Xe=0}j!==null?(Le=j.x,it=j.y,xt=j.z):(Le=0,it=0,xt=0);const at=me.convert(H.format),Pt=me.convert(H.type);let ye;H.isData3DTexture?(G.setTexture3D(H,0),ye=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(G.setTexture2DArray(H,0),ye=k.TEXTURE_2D_ARRAY):(G.setTexture2D(H,0),ye=k.TEXTURE_2D),m.activeTexture(k.TEXTURE0),m.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),m.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),m.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);const Xt=m.getParameter(k.UNPACK_ROW_LENGTH),et=m.getParameter(k.UNPACK_IMAGE_HEIGHT),Kt=m.getParameter(k.UNPACK_SKIP_PIXELS),un=m.getParameter(k.UNPACK_SKIP_ROWS),Hn=m.getParameter(k.UNPACK_SKIP_IMAGES);m.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),m.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),m.pixelStorei(k.UNPACK_SKIP_PIXELS,De),m.pixelStorei(k.UNPACK_SKIP_ROWS,Ge),m.pixelStorei(k.UNPACK_SKIP_IMAGES,Xe);const yi=y.isDataArrayTexture||y.isData3DTexture,ot=H.isDataArrayTexture||H.isData3DTexture;if(y.isDepthTexture){const vt=B.get(y),Vn=B.get(H),ct=B.get(vt.__renderTarget),Wn=B.get(Vn.__renderTarget);m.bindFramebuffer(k.READ_FRAMEBUFFER,ct.__webglFramebuffer),m.bindFramebuffer(k.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Ei=0;Ei<Ne;Ei++)yi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,B.get(y).__webglTexture,Y,Xe+Ei),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,B.get(H).__webglTexture,Me,xt+Ei)),k.blitFramebuffer(De,Ge,Ee,ve,Le,it,Ee,ve,k.DEPTH_BUFFER_BIT,k.NEAREST);m.bindFramebuffer(k.READ_FRAMEBUFFER,null),m.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||y.isRenderTargetTexture||B.has(y)){const vt=B.get(y),Vn=B.get(H);m.bindFramebuffer(k.READ_FRAMEBUFFER,T),m.bindFramebuffer(k.DRAW_FRAMEBUFFER,N);for(let ct=0;ct<Ne;ct++)yi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vt.__webglTexture,Y,Xe+ct):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,Y),ot?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vn.__webglTexture,Me,xt+ct):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vn.__webglTexture,Me),Y!==0?k.blitFramebuffer(De,Ge,Ee,ve,Le,it,Ee,ve,k.COLOR_BUFFER_BIT,k.NEAREST):ot?k.copyTexSubImage3D(ye,Me,Le,it,xt+ct,De,Ge,Ee,ve):k.copyTexSubImage2D(ye,Me,Le,it,De,Ge,Ee,ve);m.bindFramebuffer(k.READ_FRAMEBUFFER,null),m.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ot?y.isDataTexture||y.isData3DTexture?k.texSubImage3D(ye,Me,Le,it,xt,Ee,ve,Ne,at,Pt,gt.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(ye,Me,Le,it,xt,Ee,ve,Ne,at,gt.data):k.texSubImage3D(ye,Me,Le,it,xt,Ee,ve,Ne,at,Pt,gt):y.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,Le,it,Ee,ve,at,Pt,gt.data):y.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,Le,it,gt.width,gt.height,at,gt.data):k.texSubImage2D(k.TEXTURE_2D,Me,Le,it,Ee,ve,at,Pt,gt);m.pixelStorei(k.UNPACK_ROW_LENGTH,Xt),m.pixelStorei(k.UNPACK_IMAGE_HEIGHT,et),m.pixelStorei(k.UNPACK_SKIP_PIXELS,Kt),m.pixelStorei(k.UNPACK_SKIP_ROWS,un),m.pixelStorei(k.UNPACK_SKIP_IMAGES,Hn),Me===0&&H.generateMipmaps&&k.generateMipmap(ye),m.unbindTexture()},this.initRenderTarget=function(y){B.get(y).__webglFramebuffer===void 0&&G.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?G.setTextureCube(y,0):y.isData3DTexture?G.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?G.setTexture2DArray(y,0):G.setTexture2D(y,0),m.unbindTexture()},this.resetState=function(){D=0,O=0,W=null,m.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const qc={type:"change"},cl={type:"start"},Ch={type:"end"},os=new al,jc=new Jn,KS=Math.cos(70*g_.DEG2RAD),yt=new X,Gt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ca=1e-6;class ZS extends Q_{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new ri,this._lastTargetPosition=new X,this._quat=new ri().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mc,this._sphericalDelta=new Mc,this._scale=1,this._panOffset=new X,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new X,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QS.bind(this),this._onPointerDown=JS.bind(this),this._onPointerUp=ey.bind(this),this._onContextMenu=oy.bind(this),this._onMouseWheel=iy.bind(this),this._onKeyDown=ry.bind(this),this._onTouchStart=sy.bind(this),this._onTouchMove=ay.bind(this),this._onMouseDown=ty.bind(this),this._onMouseMove=ny.bind(this),this._interceptControlDown=ly.bind(this),this._interceptControlUp=cy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qc),this.update(),this.state=rt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;yt.copy(t).sub(this.target),yt.applyQuaternion(this._quat),this._spherical.setFromVector3(yt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Gt:i>Math.PI&&(i-=Gt),r<-Math.PI?r+=Gt:r>Math.PI&&(r-=Gt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(yt.setFromSpherical(this._spherical),yt.applyQuaternion(this._quatInverse),t.copy(this.target).add(yt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=yt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new X(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new X(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=yt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(os.origin.copy(this.object.position),os.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(os.direction))<KS?this.object.lookAt(this.target):(jc.setFromNormalAndCoplanarPoint(this.object.up,this.target),os.intersectPlane(jc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ca||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ca||this._lastTargetPosition.distanceToSquared(this.target)>Ca?(this.dispatchEvent(qc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gt/60*this.autoRotateSpeed*e:Gt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yt.setFromMatrixColumn(t,0),yt.multiplyScalar(-e),this._panOffset.add(yt)}_panUp(e,t){this.screenSpacePanning===!0?yt.setFromMatrixColumn(t,1):(yt.setFromMatrixColumn(t,0),yt.crossVectors(this.object.up,yt)),yt.multiplyScalar(e),this._panOffset.add(yt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;yt.copy(r).sub(this.target);let s=yt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Gt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function JS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function QS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ey(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ch),this.state=rt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ty(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=rt.DOLLY;break;case Wi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}break;case Wi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(cl)}function ny(n){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function iy(n){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(n.preventDefault(),this.dispatchEvent(cl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ch))}function ry(n){this.enabled!==!1&&this._handleKeyDown(n)}function sy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=rt.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=rt.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(cl)}function ay(n){switch(this._trackPointer(n),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=rt.NONE}}function oy(n){this.enabled!==!1&&n.preventDefault()}function ly(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Yc(n){return Math.min(Math.max(.09+Math.sqrt(n)*.028,.09),.32)}function $c(n){const e=ni(n);return/^#/.test(e)?e:10066329}const uy=13684944,hy=1.35,dy=1.3;function fy({projetos:n,destacadoDe:e,algumFiltroAtivo:t,projetoAbertoId:i,largura:r,altura:s,onSelecionar:a,onHover:o,onHoverFim:c}){const l=se.useRef(null),u=se.useRef(null),f=se.useRef({largura:r,altura:s});return f.current={largura:r,altura:s},se.useEffect(()=>{const h=l.current;if(!h)return;const{largura:g,altura:v}=f.current,S=new P_,p=new Qt(50,g/v,.1,100);p.position.set(0,0,13*dy);const d=new $S({antialias:!0,alpha:!0});d.setSize(g,v),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.appendChild(d.domElement);const E=new ZS(p,d.domElement);E.enableDamping=!0,E.dampingFactor=.08,E.minDistance=3,E.maxDistance=60,S.add(new $_(16777215,1));const A=new ll(1,12,10),M={scene:S,camera:p,renderer:d,controls:E,raycaster:new J_,meshes:new Map,geometria:A};u.current=M;let w=!0;function b(){w&&(E.update(),d.render(S,p),requestAnimationFrame(b))}return b(),()=>{w=!1,E.dispose();for(const P of M.meshes.values())P.material.dispose();A.dispose(),d.dispose(),h.removeChild(d.domElement),u.current=null}},[]),se.useEffect(()=>{const h=u.current;h&&(h.camera.aspect=r/s,h.camera.updateProjectionMatrix(),h.renderer.setSize(r,s))},[r,s]),se.useEffect(()=>{const h=u.current;if(!h||n.length===0)return;for(const d of h.meshes.values())h.scene.remove(d),d.material.dispose();h.meshes.clear();const g=["x3d","y3d","z3d"].map(d=>{const E=n.map(A=>A[d]);return[Math.min(...E),Math.max(...E)]}),v=g.map(([d,E])=>(d+E)/2),S=Math.max(...g.map(([d,E])=>E-d),1e-6),p=10*hy/S;for(const d of n){const E=new ol({color:$c(d.sigla),transparent:!0}),A=new yn(h.geometria,E);A.position.set((d.x3d-v[0])*p,(d.y3d-v[1])*p,(d.z3d-v[2])*p);const M=Yc(d.n_producoes);A.scale.setScalar(M),A.userData.id=d.id,h.scene.add(A),h.meshes.set(d.id,A)}},[n]),se.useEffect(()=>{const h=u.current;if(h)for(const g of n){const v=h.meshes.get(g.id);if(!v)continue;const S=t&&!e(g),p=v.material;p.color.set(S?uy:$c(g.sigla)),p.opacity=S?.2:.9;const d=g.id===i;v.scale.setScalar(Yc(g.n_producoes)*(d?1.7:1))}}),se.useEffect(()=>{const h=u.current,g=l.current;if(!h||!g)return;function v(A){const M=g.getBoundingClientRect(),w=new ke((A.clientX-M.left)/M.width*2-1,-((A.clientY-M.top)/M.height)*2+1);h.raycaster.setFromCamera(w,h.camera);const b=h.raycaster.intersectObjects([...h.meshes.values()]);if(b.length===0)return null;const P=b[0].object.userData.id;return n.find(x=>x.id===P)??null}let S=!1;function p(){S=!1}function d(A){A.buttons!==0&&(S=!0);const M=v(A);M?o(M,A.clientX,A.clientY):c()}function E(A){if(S)return;const M=v(A);M&&a(M,A.detail)}return g.addEventListener("pointerdown",p),g.addEventListener("mousemove",d),g.addEventListener("click",E),()=>{g.removeEventListener("pointerdown",p),g.removeEventListener("mousemove",d),g.removeEventListener("click",E)}},[n,o,c,a]),_.jsx("div",{ref:l,style:{width:r,height:s,touchAction:"none"}})}const hr={top:24,right:24,bottom:36,left:24};function py(n,e){return{W:n,H:e,iw:Math.max(1,n-hr.left-hr.right),ih:Math.max(1,e-hr.top-hr.bottom),M:hr}}function ei(n,e,t){return Math.max(e,Math.min(t,n))}function ls(n){return ei(2.5+Math.sqrt(n)*1.1,2.5,9)}const my=7,gy=22;function _y(n,e){n.x!==void 0&&(n.x=ei(n.x,e.M.left+n.r,e.W-e.M.right-n.r)),n.y!==void 0&&(n.y=ei(n.y,e.M.top+n.r,e.H-e.M.bottom-n.r))}const xy=-15*Math.PI/180,Kc=Math.cos(xy);function vy(n,e){let t=1/0,i=-1/0,r=1/0,s=-1/0;for(const{lon:f,lat:h}of n)t=Math.min(t,f),i=Math.max(i,f),r=Math.min(r,h),s=Math.max(s,h);const a=(i-t)*Kc||1,o=s-r||1,c=Math.min(e.iw/a,e.ih/o),l=(e.iw-a*c)/2,u=(e.ih-o*c)/2;return{x:f=>e.M.left+l+(f-t)*Kc*c,y:f=>e.M.top+u+(s-f)*c}}function My(n,e){const t=vy(n.map(s=>({lon:s.lon,lat:s.lat})),e),i=n.map(s=>{const a=t.x(s.lon),o=t.y(s.lat);return{chave:s.chave,alvoX:a,alvoY:o,r:Math.sqrt(s.n)*3.4+10,x:a,y:o}}),r=Uu(i).force("x",ka(s=>s.alvoX).strength(.35)).force("y",Ga(s=>s.alvoY).strength(.35)).force("collide",Iu(s=>s.r)).stop();for(let s=0;s<300;s++)r.tick();return new Map(i.map(s=>[s.chave,{x:s.x??s.alvoX,y:s.y??s.alvoY}]))}function Sy(n,e,t){const i=new Map(n.filter(s=>s.lat!==null&&s.lon!==null).map(s=>[s.sigla,s])),r=new Map;for(const s of e){const a=i.get(s.sigla);if(!a)continue;const o=t==="uf"?a.uf:a.regiao,c=r.get(o)??{n:0,somaLat:0,somaLon:0,contagem:0};c.n+=s.n,c.somaLat+=a.lat,c.somaLon+=a.lon,c.contagem+=1,r.set(o,c)}return[...r.entries()].map(([s,a])=>({chave:s,n:a.n,lat:a.somaLat/a.contagem,lon:a.somaLon/a.contagem}))}const yy="var(--color-border)",Ey="#b9b7ae",by=se.forwardRef(function({dados:e,programas:t,organizarPor:i,dimensao:r,agruparLocalidade:s,destacadoDe:a,intensidadeDe:o,algumFiltroAtivo:c,projetoAberto:l,producoesVisiveis:u,producaoSel:f,filtroProd:h,esquema:g,fichas:v,descricoes:S,detalhes:p,temaPorCluster:d,onSelecionarProjeto:E,onAlternarProjeto:A,onSelecionarProducao:M,onToqueFundo:w},b){var pt,Ke,C;const P=ru(),[x,R]=td(),U=Math.max(320,R.largura||760),I=Math.max(240,R.altura||680),F=se.useMemo(()=>py(U,I),[U,I]),[q,T]=se.useState(null),[N,D]=se.useState(ki),[O,W]=se.useState(null),[$,ee]=se.useState(null),[te,oe]=se.useState(null),[Se,Ce]=se.useState(null),Te=se.useRef(null),J=se.useRef(null),ae=se.useRef(null),ie=se.useRef(!1),be=se.useRef(!1),Ie=se.useRef(null),Ae=se.useRef(null),Je=se.useRef(new Map);se.useEffect(()=>{const m=J.current;if(!m)return;const L=Im().scaleExtent([1,14]).translateExtent([[0,0],[F.W,F.H]]).filter(B=>{var Q,le;const G=B;return G.type==="dblclick"&&((le=(Q=G.target)==null?void 0:Q.closest)!=null&&le.call(Q,"[data-alvo-projeto]"))?!1:(!G.ctrlKey||G.type==="wheel")&&!G.button}).on("zoom",B=>D(B.transform));return Ut(m).call(L),ae.current=L,()=>{Ut(m).on(".zoom",null),ae.current=null}},[e,q!==null,F]),se.useEffect(()=>{const m=e.projetos.map(de=>de.x),L=e.projetos.map(de=>de.y),B=Math.min(...m),G=Math.max(...m),Q=Math.min(...L),le=Math.max(...L),V=Math.min(F.iw/(G-B||1),F.ih/(le-Q||1)),K=(F.iw-(G-B)*V)/2,ue=(F.ih-(le-Q)*V)/2,_e=de=>F.M.left+K+(de-B)*V,he=de=>F.M.top+ue+(le-de)*V,ce=e.projetos.map(de=>{const Fe=_e(de.x),z=he(de.y);return{id:de.id,sigla:de.sigla,r:ls(de.n_producoes),temaX:Fe,temaY:z,alvoX:Fe,alvoY:z,x:Fe,y:z}});Je.current=new Map(ce.map(de=>[de.id,de])),T(new Map(ce.map(de=>[de.id,{x:de.x,y:de.y}])));const Re=Uu(ce).force("x",ka(de=>de.alvoX).strength(.2)).force("y",Ga(de=>de.alvoY).strength(.2)).force("collide",Iu(de=>de.r+1)).alpha(.9).on("tick",()=>{for(const de of Re.nodes())_y(de,F);T(new Map(Re.nodes().map(de=>[de.id,{x:de.x??de.alvoX,y:de.y??de.alvoY}])))});return Ae.current=Re,()=>{Re.stop(),Ae.current=null}},[e,F]),se.useEffect(()=>{if(!(!q||!Ae.current)){if(i==="tema")for(const m of Je.current.values())m.alvoX=m.temaX,m.alvoY=m.temaY,m.x=m.temaX,m.y=m.temaY;else{let m=function(V){if(s==="instituicao")return V.sigla;const K=L.get(V.sigla);return K?s==="uf"?K.uf:K.regiao:""};if(!t)return;const L=new Map(t.map(V=>[V.sigla,V])),B=new Map;for(const V of e.projetos)B.set(V.sigla,(B.get(V.sigla)??0)+1);const G=[...B.entries()].map(([V,K])=>({sigla:V,n:K})),Q=s==="instituicao"?G.flatMap(V=>{const K=L.get(V.sigla);return K&&K.lat!==null&&K.lon!==null?[{chave:V.sigla,n:V.n,lat:K.lat,lon:K.lon}]:[]}):Sy(t,G,s),le=My(Q,F);for(const V of Je.current.values()){const K=le.get(m(V)),ue=ei((K==null?void 0:K.x)??F.W/2,F.M.left+V.r,F.W-F.M.right-V.r),_e=ei((K==null?void 0:K.y)??F.H/2,F.M.top+V.r,F.H-F.M.bottom-V.r);V.alvoX=ue,V.alvoY=_e,V.x=ue,V.y=_e}}Ae.current.force("x",ka(m=>m.alvoX).strength(.2)).force("y",Ga(m=>m.alvoY).strength(.2)).alpha(1).restart()}},[i,s,q!==null,t,F]);const Ue=se.useMemo(()=>{if(!l||!u||!q)return null;const m=q.get(l.id);return m?ju(u.map(L=>g.chaves(L).subtipo),g.ordemSubtipo,m.x,m.y,ls(l.n_producoes)):null},[l,u,q,g]);function Qe(m,L,B,G){document.hidden?Ut(m).call(L.transform,B):Ut(m).transition().duration(G).call(L.transform,B)}function He(m,L){const B=J.current,G=ae.current,Q=q==null?void 0:q.get(m.id);if(!B||!G||!Q)return;const le=L??Dg((u==null?void 0:u.length)??m.n_producoes,ls(m.n_producoes)),V=ei(Math.min((F.W/2-14)/le.x,(F.H/2-14)/le.y),1.6,8);be.current=!0,Qe(B,G,ki.translate(F.W/2-V*Q.x,F.H/2-V*Q.y).scale(V),650)}function Ye(){const m=J.current,L=ae.current;!m||!L||!be.current||(be.current=!1,Qe(m,L,ki,450))}se.useImperativeHandle(b,()=>({focarProjeto:He,reenquadrar(){var B;for(const G of Je.current.values())G.x=G.alvoX,G.y=G.alvoY;(B=Ae.current)==null||B.alpha(.9).restart();const m=J.current,L=ae.current;m&&L&&(be.current=!1,Qe(m,L,ki,450))},zoomPor(m){const L=J.current,B=ae.current;!L||!B||Ut(L).transition().duration(220).call(B.scaleBy,m)}}),[q,F,u]);const Be=Ue==null?void 0:Ue.extX,st=Ue==null?void 0:Ue.extY;se.useEffect(()=>{l&&Be!==void 0&&st!==void 0&&be.current&&He(l,{x:Be,y:st})},[l==null?void 0:l.id,Be,st]),se.useEffect(()=>{l?He(l):Ye()},[l==null?void 0:l.id]);function ut(m,L,B){var Q;if((l==null?void 0:l.id)===m.id){A(m);return}if((te==null?void 0:te.p.id)===m.id){oe(null);return}const G=(Q=Te.current)==null?void 0:Q.getBoundingClientRect();oe({p:m,ancora:G&&L!==void 0&&B!==void 0?{x:L-G.left,y:B-G.top}:"canto"}),W(null)}function ft(m,L,B){var Q;if((Se==null?void 0:Se.pr.id_producao)===m.id_producao){Ce(null);return}const G=(Q=Te.current)==null?void 0:Q.getBoundingClientRect();Ce({pr:m,ancora:G?{x:L-G.left,y:B-G.top}:"canto"}),ee(null)}function lt(m,L){!m||P||Ut(m).call(Wf().on("start",B=>{var Q;B.sourceEvent.stopPropagation(),ie.current=!1,(Q=Ae.current)==null||Q.alphaTarget(.35).restart();const G=Je.current.get(L);G&&(G.fx=G.x,G.fy=G.y)}).on("drag",B=>{ie.current=!0;const G=Je.current.get(L);G&&(G.fx=ei(B.x,F.M.left+G.r,F.W-F.M.right-G.r),G.fy=ei(B.y,F.M.top+G.r,F.H-F.M.bottom-G.r))}).on("end",()=>{var G;(G=Ae.current)==null||G.alphaTarget(0);const B=Je.current.get(L);B&&(B.fx=null,B.fy=null)}))}function ht(m){const L=Ie.current;if(Ie.current=null,P){if(L&&Math.hypot(m.clientX-L.x,m.clientY-L.y)>10)return;const B=J.current;if(!B||!q)return;const G=B.getBoundingClientRect(),[Q,le]=N.invert([m.clientX-G.left,m.clientY-G.top]),V=gy/N.k;let K=null;if(Ue&&u)for(const _e of Ue.satelites){const he=u[_e.i];if(!he)continue;const ce=Math.hypot(_e.x-Q,_e.y-le);ce<=V&&(K===null||ce<K.d)&&(K={d:ce,tipo:"producao",id:he.id_producao})}for(const _e of e.projetos){const he=q.get(_e.id);if(!he)continue;const ce=Math.hypot(he.x-Q,he.y-le);ce<=V&&(K===null||ce<K.d)&&(K={d:ce,tipo:"projeto",id:_e.id})}const ue=K;if(ue===null)w();else if(ue.tipo==="producao")M(ue.id);else{const _e=e.projetos.find(he=>he.id===ue.id);_e&&A(_e)}return}m.target===m.currentTarget&&te&&!l&&oe(null)}if(q===null)return _.jsx("div",{className:"atlas-canvas",ref:x,children:_.jsx("div",{className:"loading",children:"Carregando o mapa…"})});const k=_.jsxs("div",{ref:Te,className:"atlas-area",children:[r==="3d"?_.jsx(fy,{projetos:e.projetos,destacadoDe:a,algumFiltroAtivo:c,projetoAbertoId:(l==null?void 0:l.id)??null,largura:U,altura:I,onSelecionar:(m,L)=>P?A(m):L>=2?E(m):ut(m),onHover:(m,L,B)=>W({p:m,x:L,y:B}),onHoverFim:()=>W(null)}):_.jsx("svg",{ref:J,width:U,height:I,role:"img","aria-label":"Atlas de projetos, posição por semelhança temática ou por localidade, cor por instituição",style:{touchAction:"none",display:"block",userSelect:"none"},onPointerDown:m=>{P&&(Ie.current={x:m.clientX,y:m.clientY})},onClick:ht,children:_.jsxs("g",{transform:`translate(${N.x},${N.y}) scale(${N.k})`,children:[e.projetos.map(m=>{const L=c&&!a(m),B=L?null:(o==null?void 0:o(m))??null,G=L?yy:B!==null?Oh(ni(m.sigla),Ey,.75*(1-B)):ni(m.sigla),Q=q.get(m.id);if(!Q)return null;const le=(l==null?void 0:l.id)===m.id;return _.jsxs("g",{children:[_.jsx("circle",{cx:Q.x,cy:Q.y,r:ls(m.n_producoes),fill:G,opacity:L?.15:l&&!le?.3:B!==null?.4+.5*B:.85,stroke:le?"var(--color-text)":"none",strokeWidth:le?2:0}),!L&&!P&&_.jsx("circle",{ref:V=>lt(V,m.id),cx:Q.x,cy:Q.y,r:my,fill:"transparent",onMouseEnter:V=>W({p:m,x:V.clientX,y:V.clientY}),onMouseMove:V=>W({p:m,x:V.clientX,y:V.clientY}),onMouseLeave:()=>W(null),"data-alvo-projeto":"",onClick:V=>{if(ie.current){ie.current=!1;return}if(V.detail>=2){E(m);return}ut(m,V.clientX,V.clientY)},style:{cursor:"grab"}})]},m.id)}),Ue&&u&&Ue.rotulos.map(m=>{const L=g.rotuloSubtipo(m.grupo);return _.jsxs("text",{x:m.x,y:m.y,textAnchor:m.ancora,dominantBaseline:"central",style:{fontSize:3.4,fontWeight:700,fill:L.cor,stroke:"var(--color-surface)",strokeWidth:1.1,paintOrder:"stroke",pointerEvents:"none"},children:[_.jsx("tspan",{x:m.x,dy:"-0.6em",children:L.rotulo.length>Wa?`${L.rotulo.slice(0,Wa-1).trimEnd()}…`:L.rotulo}),_.jsx("tspan",{x:m.x,dy:"1.2em",children:m.mostradas<m.n?`${m.mostradas} de ${m.n}`:m.n})]},`rot-${m.grupo}`)}),Ue&&u&&Ue.satelites.map(m=>{const L=u[m.i],B=f===L.id_producao||(Se==null?void 0:Se.pr.id_producao)===L.id_producao,G=!tu(g,L,h);return _.jsx("g",{opacity:G?.16:1,children:_.jsx(Bh,{marca:g.marca(L),cx:m.x,cy:m.y,r:B?Va*1.35:Va,anel:l?ni(l.sigla):void 0,realce:B,onMouseEnter:P?void 0:Q=>ee({pr:L,x:Q.clientX,y:Q.clientY}),onMouseMove:P?void 0:Q=>ee({pr:L,x:Q.clientX,y:Q.clientY}),onMouseLeave:P?void 0:()=>ee(null),onClick:P?void 0:Q=>ft(L,Q.clientX,Q.clientY)})},L.id_producao)})]})}),O&&O.p.id!==(te==null?void 0:te.p.id)&&!P&&_.jsx(fg,{x:O.x,y:O.y,p:O.p,tema:d.get(O.p.cluster)??"—",ficha:(v==null?void 0:v[O.p.id])??null}),$&&$.pr.id_producao!==(Se==null?void 0:Se.pr.id_producao)&&!P&&_.jsx(pg,{x:$.x,y:$.y,pr:$.pr,marca:_.jsx(Na,{marca:g.marca($.pr),sigla:l==null?void 0:l.sigla}),destaques:Ha(p[(l==null?void 0:l.sigla)??""],$.pr.id_producao),projetoNome:(l==null?void 0:l.nome)??null,responsaveis:l?((pt=v==null?void 0:v[l.id])==null?void 0:pt.responsaveis)??[]:[]}),Se&&l&&_.jsx(Rg,{pr:Se.pr,marca:_.jsx(Na,{marca:g.marca(Se.pr),sigla:l.sigla}),destaques:Ha(p[l.sigla],Se.pr.id_producao,4,260),links:Fu(p[l.sigla],Se.pr.id_producao),projeto:l,tema:d.get(l.cluster)??"—",ficha:(v==null?void 0:v[l.id])??null,descricao:(S==null?void 0:S[l.id])??null,ancora:Se.ancora,larguraArea:((Ke=Te.current)==null?void 0:Ke.clientWidth)??U,detalheAberto:f===Se.pr.id_producao,onDetalhe:()=>M(f===Se.pr.id_producao?null:Se.pr.id_producao),onFechar:()=>Ce(null)},Se.pr.id_producao),te&&!l&&_.jsx(wg,{projeto:te.p,tema:d.get(te.p.cluster)??"—",ficha:(v==null?void 0:v[te.p.id])??null,descricao:(S==null?void 0:S[te.p.id])??null,ancora:te.ancora,onProducoes:()=>E(te.p),onFechar:()=>oe(null),larguraArea:((C=Te.current)==null?void 0:C.clientWidth)??U})]});return _.jsx("div",{className:"atlas-canvas",ref:x,children:k})}),Ty={anppom:"Subárea — 1º nível (ANPPOM)",hdbscan:"Cluster (HDBSCAN)",topicos:"Tópico (LDA)",coautoria:"Comunidade (rede)"},Ay={anppom:"Subáreas",hdbscan:"Clusters (HDBSCAN)",topicos:"Tópicos (LDA)",coautoria:"Comunidades (rede de colaboração)"},wy={anppom:"Área (ANPPOM)",hdbscan:"Cluster",topicos:"Tópico",coautoria:"Comunidade"},Ry={anppom:"Subáreas temáticas (2º nível)",hdbscan:"Palavras-chave (TF-IDF)",topicos:"Termos do tópico",coautoria:"Palavras-chave (TF-IDF, calculada depois)"},Oo={anppom:"ANPPOM (leitura)",hdbscan:"HDBSCAN (não supervisionado)",topicos:"Tópicos (LDA)",coautoria:"Coautoria (rede)"},Cy={anppom:"leitura, sem conferência humana projeto a projeto",hdbscan:"densidade, com ruído à mostra",topicos:"co-ocorrência de palavra (LDA)",coautoria:"pessoa compartilhada, não o texto"},Py={hdbscan:$h,topicos:Yh,coautoria:jh};function Bi(n,e,t){return n!==null&&e.includes(n)?n:t}const Ny=["anppom","hdbscan","topicos","coautoria"],Dy=["tema","localidade"],Ly=["2d","3d"],Iy=["regiao","uf","instituicao"],Uy=["aderencia","discreto"],Fy=[{limiar:35,pares:0,precisao:null},{limiar:30,pares:0,precisao:null},{limiar:25,pares:0,precisao:null},{limiar:20,pares:0,precisao:null}],Oy=1,Zc=15,By=80,zy=["filtros","metodo","sobre","camadas","legenda"];function ky(){var Mi;const[n,e]=Uh(),t=Bi(n.get("metodo"),Ny,"anppom"),i=Bi(n.get("camada"),Dy,"tema"),r=Bi(n.get("dim"),Ly,"2d"),s=Bi(n.get("agrupar"),Iy,"instituicao"),a=Bi(n.get("peso"),Uy,"aderencia"),o=Bi(n.get("painel"),zy,"filtros"),c=n.has("painel"),l=n.get("projeto"),u=n.get("producao"),f=se.useCallback((fe,qe)=>{e(mt=>{const Ct=new URLSearchParams(mt);for(const[zt,An]of Object.entries(fe))An===null?Ct.delete(zt):Ct.set(zt,An);return Ct},{replace:qe})},[e]),[h,g]=se.useState(null),[v,S]=se.useState({}),[p,d]=se.useState(!1),[E,A]=se.useState(null),[M,w]=se.useState(null),[b,P]=se.useState("subarea"),[x,R]=se.useState(null),[U,I]=se.useState(Oy),[F,q]=se.useState(()=>new Set),[T,N]=se.useState(()=>new Set),[D,O]=se.useState(()=>new Set),[W,$]=se.useState(null),[ee,te]=se.useState(!1),[oe,Se]=se.useState(null),[Ce,Te]=se.useState(null),[J,ae]=se.useState(null),[ie,be]=se.useState(null),[Ie,Ae]=se.useState({}),[Je,Ue]=se.useState(!1),[Qe,He]=se.useState(null),Be=(t==="anppom"?h:v[t]??null)??h;se.useEffect(()=>{Hh().then(g).catch(fe=>w(String(fe))),Vh().then(A).catch(()=>{}),Wh().then(ae).catch(()=>{}),Xh().then(be).catch(()=>{}),qh().then(R).catch(()=>{})},[]),se.useEffect(()=>{t==="anppom"||v[t]||p||(d(!0),Py[t]().then(fe=>S(qe=>({...qe,[t]:fe}))).catch(fe=>w(String(fe))).finally(()=>d(!1)))},[t,v,p]);const st=se.useCallback(fe=>{Ie[fe.sigla]||Kh(fe.sigla).then(qe=>Ae(mt=>({...mt,[fe.sigla]:qe}))).catch(()=>{}),!W&&!ee&&(te(!0),Zh().then($).catch(()=>$({})).finally(()=>te(!1))),oe||Jh().then(Se).catch(()=>Se({})),Ce||Qh().then(Te).catch(()=>Te({}))},[Ie,W,ee,oe,Ce]),ut=se.useCallback(fe=>{He(null),st(fe),f({projeto:fe.id,producao:null,painel:null},!1)},[st,f]),ft=se.useCallback(()=>{He(null),f({projeto:null,producao:null,painel:null},!0)},[f]),lt=se.useCallback(fe=>{f({producao:fe},fe===null)},[f]),ht=se.useCallback(fe=>{f({painel:fe,projeto:null,producao:null},!1)},[f]),k=se.useCallback(()=>{f({painel:null,projeto:null,producao:null},!0)},[f]),pt=se.useMemo(()=>Be?[...Be.clusters].sort((fe,qe)=>qe.n_projetos-fe.n_projetos):[],[Be]),Ke=pt.filter(fe=>F.has(fe.cluster)),C=(Mi=x==null?void 0:x.alcances)!=null&&Mi.length?x.alcances:Fy,m=C[Math.min(U,C.length-1)].limiar,L=se.useMemo(()=>x?new Map(x.projetos.map(fe=>[fe.id,fe.a])):null,[x]),B=se.useMemo(()=>x&&h?new Map(h.clusters.map(fe=>[fe.cluster,x.areas.indexOf(fe.tema??"")])):null,[x,h]),G=t==="anppom"&&L!==null&&B!==null,Q=G&&a==="aderencia",le=se.useCallback(fe=>{if(!Q||F.size===0||!L||!B)return null;const qe=L.get(fe.id);if(!qe)return 0;let mt=0;for(const Ct of F){const zt=B.get(Ct);zt!==void 0&&zt>=0&&(mt=Math.max(mt,qe[zt]))}return mt},[Q,F,L,B]),V=se.useCallback(fe=>{if(D.size>0&&!D.has(fe.sigla))return!1;if(F.size>0){const qe=le(fe);if(qe!==null?qe<m:!F.has(fe.cluster))return!1}return!(T.size>0&&(!fe.subarea||!T.has(fe.subarea)))},[D,F,T,le,m]),K=se.useCallback(fe=>{const qe=le(fe);return qe===null||qe<m?null:Math.max(0,Math.min(1,(qe-Zc)/(By-Zc)))},[le,m]),ue=D.size>0||F.size>0||T.size>0,_e=Be&&ue?Be.projetos.filter(V).length:(Be==null?void 0:Be.projetos.length)??0;function he(fe,qe){const mt=new Set(fe);return mt.has(qe)?mt.delete(qe):mt.add(qe),mt}function ce(fe){O(qe=>he(qe,fe))}function Re(fe){q(qe=>{const mt=he(qe,fe);if(qe.has(fe)&&!mt.has(fe)){const Ct=pt.find(zt=>zt.cluster===fe);if(Ct){const zt=new Set(Ct.subareas);N(An=>{const tr=new Set([...An].filter(Si=>!zt.has(Si)));return tr.size===An.size?An:tr})}}return mt})}function de(fe){N(qe=>he(qe,fe))}function Fe(){O(new Set),q(new Set),N(new Set)}function z(fe){q(new Set),N(new Set),He(null),f({metodo:fe==="anppom"?null:fe,projeto:null,producao:null},!0)}function pe(fe){f({peso:fe==="aderencia"?null:fe},!0)}function ne(fe){f({camada:fe==="tema"?null:fe},!0)}function me(fe){f(fe==="3d"?{dim:"3d",camada:null}:{dim:null,camada:i==="tema"?null:i},!0)}function xe(fe){f({agrupar:fe==="instituicao"?null:fe},!0)}const re=se.useMemo(()=>{if(!Be)return[];const fe=new Map;for(const qe of Be.projetos)fe.set(qe.sigla,(fe.get(qe.sigla)??0)+1);return[...fe.entries()].map(([qe,mt])=>({sigla:qe,n:mt})).sort((qe,mt)=>mt.n-qe.n)},[Be]),Pe=se.useMemo(()=>Be?[...new Set(Be.projetos.map(fe=>fe.sigla))].sort():[],[Be]),we=se.useMemo(()=>new Map(pt.map(fe=>[fe.cluster,fe.tema])),[pt]),dt=se.useMemo(()=>zh(ie),[ie]),Ve=se.useMemo(()=>!l||!Be?null:Be.projetos.find(fe=>fe.id===l)??null,[l,Be]);se.useEffect(()=>{Ve&&st(Ve)},[Ve==null?void 0:Ve.id]);const Rt=Ve?(W==null?void 0:W[Ve.id])??null:null,$t=se.useMemo(()=>Rt&&Je?Rt.filter(fe=>fe.classe==="nucleo"):Rt,[Rt,Je]),Gs=u,Hs=se.useCallback(fe=>{(Ve==null?void 0:Ve.id)===fe.id?ft():ut(fe)},[Ve,ft,ut]);return{error:M,dados:Be,atlasCarregado:Be!==null,programas:E,fichas:J,esquema:dt,detalhes:Ie,carregandoAlternativo:p,membrosPorProjeto:oe,descricoesPorProjeto:Ce,carregandoProducoes:ee,metodo:t,organizarPor:i,dimensao:r,agruparLocalidade:s,modo:b,setModo:P,mudarMetodo:z,modoPeso:a,mudarModoPeso:pe,pesoDisponivel:G,pesoAtivo:Q,aderencia:x,alcances:C,alcance:U,setAlcance:I,limiarAlcance:m,pesoDe:le,intensidadeDe:K,mudarOrganizarPor:ne,mudarDimensao:me,mudarAgrupar:xe,instituicoes:re,siglasOrdenadasAlfabeto:Pe,clustersOrdenados:pt,temasAtivos:Ke,temaPorCluster:we,siglasSel:D,temasSel:F,subareas2Sel:T,alternarSigla:ce,alternarTema:Re,alternarSubarea2:de,limparFiltros:Fe,algumFiltroAtivo:ue,contagemFiltrada:_e,destacadoDe:V,projetoAberto:Ve,producoesAbertas:Rt,producoesVisiveis:$t,producaoSel:Gs,selecionarProjeto:ut,alternarProjeto:Hs,fecharProjeto:ft,selecionarProducao:lt,apenasNucleo:Je,setApenasNucleo:Ue,filtroProd:Qe,setFiltroProd:He,painel:Ve?"ficha":c?o:null,abrirPainel:ht,fecharPainel:k}}function Jc(n){return n.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}const Gy=6,Hy={anppom:"ANPPOM",hdbscan:"HDBSCAN",topicos:"Tópicos",coautoria:"Coautoria"},Pa='Método sem revisão humana e sem a taxonomia da ANPPOM: os grupos são descobertos pelo próprio dado. O aviso completo está em "Sobre este mapa".',Vy={anppom:"Subárea ANPPOM por leitura do título e do resumo (zero-shot por embedding), sem conferência humana projeto a projeto — casos de fronteira podem estar na subárea vizinha.",hdbscan:Pa,topicos:Pa,coautoria:Pa};function Wy({metodo:n,carregando:e,onMetodo:t}){return _.jsxs("div",{className:"atlas-metodo-conteudo",children:[_.jsx("div",{className:"atlas-metodo-lista",role:"radiogroup","aria-label":"Método de clusterização",children:Object.keys(Oo).map(i=>_.jsxs("button",{type:"button",role:"radio","aria-checked":n===i,className:`atlas-metodo-opcao${n===i?" ativo":""}`,onClick:()=>t(i),children:[_.jsx("span",{className:"atlas-metodo-nome",children:Oo[i]}),_.jsx("span",{className:"atlas-metodo-selo",children:Cy[i]})]},i))}),e&&_.jsx("p",{className:"atlas-tooltip-nota",children:"carregando…"}),_.jsx("p",{className:"atlas-metodo-explica",children:Vy[n]})]})}function Xy({projetos:n,fichas:e,metodo:t,qtdFiltros:i,aberto:r,comPopover:s,filtros:a,metodos:o,onEscolher:c,onAlternar:l,onFecharPopover:u}){const[f,h]=se.useState(""),g=se.useRef(null);Bo(g,s&&r!==null,u);const v=se.useMemo(()=>{var d;const S=Jc(f.trim());if(S.length<2)return[];const p=[];for(const E of n)if([E.nome??"",E.sigla,...((d=e==null?void 0:e[E.id])==null?void 0:d.responsaveis)??[]].map(Jc).some(M=>M.includes(S))&&p.push(E),p.length>=Gy)break;return p},[f,n,e]);return _.jsxs("div",{className:"atlas-topo",ref:g,children:[_.jsxs("div",{className:`atlas-topo-barra atlas-flutua${r?" aberto":""}`,children:[_.jsxs("div",{className:"atlas-busca",children:[_.jsx("span",{className:"atlas-busca-icone","aria-hidden":"true",children:_.jsx(Ag,{tamanho:16})}),_.jsx("input",{type:"search",className:"campo-busca",value:f,onChange:S=>h(S.target.value),placeholder:"Buscar projeto, pessoa ou instituição","aria-label":"Buscar projeto, pessoa ou instituição no mapa"}),f&&_.jsx("button",{type:"button",className:"atlas-busca-limpar",onClick:()=>h(""),"aria-label":"Limpar a busca",children:"✕"}),v.length>0&&_.jsx("ul",{className:"atlas-busca-lista",children:v.map(S=>_.jsx("li",{children:_.jsxs("button",{type:"button",onClick:()=>{c(S),h("")},children:[_.jsx("span",{className:"legenda-marca",style:{background:ni(S.sigla)}}),_.jsx("span",{className:"atlas-busca-titulo",children:S.nome??"(sem título)"}),_.jsxs("span",{className:"atlas-busca-meta",children:[S.sigla,S.ano?` · ${S.ano}`:""]})]})},S.id))}),f.trim().length>=2&&v.length===0&&_.jsx("p",{className:"atlas-busca-vazio",children:"Nada encontrado por título, instituição ou responsável."}),f.trim().length>0&&f.trim().length<2&&_.jsx("p",{className:"atlas-busca-vazio",children:"Digite ao menos duas letras."})]}),_.jsxs("button",{type:"button",className:`atlas-topo-botao${i>0?" com-filtro":""}${r==="filtros"?" ativo":""}`,"aria-expanded":r==="filtros","aria-haspopup":"dialog","aria-label":i>0?`Filtros (${i} ativos)`:"Filtros",onClick:()=>l("filtros"),children:[_.jsx(_g,{}),_.jsx("span",{className:"atlas-topo-rotulo",children:"Filtros"}),i>0&&_.jsx("span",{className:"atlas-topo-contador",children:i})]}),_.jsxs("button",{type:"button",className:`atlas-topo-botao${r==="metodo"?" ativo":""}`,"aria-expanded":r==="metodo","aria-haspopup":"dialog","aria-label":`Método de clusterização: ${Oo[t]}`,onClick:()=>l("metodo"),children:[_.jsx(xg,{}),_.jsx("span",{className:"atlas-topo-rotulo",children:Hy[t]})]})]}),s&&r==="filtros"&&_.jsx("div",{className:"flutuante-painel",role:"dialog","aria-label":"Filtrar pontos do mapa",children:a}),s&&r==="metodo"&&_.jsxs("div",{className:"flutuante-painel",role:"dialog","aria-label":"Método de clusterização",children:[_.jsxs("header",{className:"flutuante-cab",children:[_.jsx("strong",{children:"Método de clusterização"}),_.jsx("button",{type:"button",className:"painel-fechar",onClick:u,"aria-label":"Fechar",children:"✕"})]}),o]})]})}function qy({organizarPor:n,dimensao:e,agruparLocalidade:t,onOrganizar:i,onDimensao:r,onAgrupar:s}){return _.jsxs("div",{className:"atlas-camadas-conteudo",children:[_.jsxs("div",{className:"atlas-camada-grupo",children:[_.jsx("span",{className:"atlas-camada-rotulo",id:"rot-camada",children:"Posição dos pontos"}),_.jsxs("div",{className:"segmented",role:"group","aria-labelledby":"rot-camada",children:[_.jsx("button",{type:"button",className:n==="tema"?"ativo":"","aria-pressed":n==="tema",onClick:()=>i("tema"),children:"Tema"}),_.jsx("button",{type:"button",className:n==="localidade"?"ativo":"","aria-pressed":n==="localidade",disabled:e==="3d",onClick:()=>i("localidade"),children:"Localidade"})]}),e==="3d"&&_.jsx("span",{className:"chart-nota",style:{margin:0},children:"Localidade só existe em 2D — a geografia em 3D ainda não foi feita (ver o plano)."})]}),n==="localidade"&&e==="2d"&&_.jsxs("div",{className:"atlas-camada-grupo",children:[_.jsx("span",{className:"atlas-camada-rotulo",id:"rot-agrupar",children:"Agrupar geografia por"}),_.jsx("div",{className:"segmented",role:"group","aria-labelledby":"rot-agrupar",children:["regiao","uf","instituicao"].map(a=>_.jsx("button",{type:"button",className:t===a?"ativo":"","aria-pressed":t===a,onClick:()=>s(a),children:a==="regiao"?"Região":a==="uf"?"UF":"Instituição"},a))})]}),_.jsxs("div",{className:"atlas-camada-grupo",children:[_.jsx("span",{className:"atlas-camada-rotulo",id:"rot-dim",children:"Dimensão"}),_.jsxs("div",{className:"segmented",role:"group","aria-labelledby":"rot-dim",children:[_.jsx("button",{type:"button",className:e==="2d"?"ativo":"","aria-pressed":e==="2d",onClick:()=>r("2d"),children:"2D"}),_.jsx("button",{type:"button",className:e==="3d"?"ativo":"","aria-pressed":e==="3d",disabled:n==="localidade",onClick:()=>r("3d"),children:"3D"})]}),n==="localidade"&&_.jsx("span",{className:"chart-nota",style:{margin:0},children:"3D só existe com a posição por Tema — a geografia em 3D ainda não existe. Volte a Tema para usar o 3D."})]})]})}function jy({aberto:n,comPopover:e,conteudo:t,onAlternar:i,onFecharPopover:r,onZoom:s,onReenquadrar:a,onSobre:o}){const c=se.useRef(null);return Bo(c,e&&n,r),_.jsxs("div",{className:"atlas-lateral",ref:c,children:[_.jsxs("div",{className:`atlas-lateral-pilha atlas-flutua${n?" aberto":""}`,role:"toolbar","aria-label":"Controles do mapa","aria-orientation":"vertical",children:[_.jsx("button",{type:"button",className:`atlas-icone-botao${n?" ativo":""}`,"aria-expanded":n,"aria-haspopup":"dialog","aria-label":"Camadas do mapa",title:"Camadas: posição dos pontos e dimensão",onClick:i,children:_.jsx(vg,{})}),_.jsx("button",{type:"button",className:"atlas-icone-botao so-desktop","aria-label":"Aproximar",title:"Aproximar",onClick:()=>s(1.5),children:_.jsx(bg,{})}),_.jsx("button",{type:"button",className:"atlas-icone-botao so-desktop","aria-label":"Afastar",title:"Afastar",onClick:()=>s(1/1.5),children:_.jsx(Tg,{})}),_.jsx("button",{type:"button",className:"atlas-icone-botao","aria-label":"Reenquadrar tudo",title:"Reenquadrar tudo",onClick:a,children:_.jsx(Sg,{})}),_.jsx("a",{className:"atlas-icone-botao",href:"#atlas-tabelas","aria-label":"Ver as tabelas abaixo do mapa",title:"Ver as tabelas abaixo do mapa",children:_.jsx(yg,{})}),_.jsx("button",{type:"button",className:"atlas-icone-botao","aria-label":"Sobre este mapa",title:"Sobre este mapa",onClick:o,children:_.jsx(Eg,{})})]}),e&&n&&_.jsxs("div",{className:"flutuante-painel",role:"dialog","aria-label":"Camadas do mapa",children:[_.jsxs("header",{className:"flutuante-cab",children:[_.jsx("strong",{children:"Camadas"}),_.jsx("button",{type:"button",className:"painel-fechar",onClick:r,"aria-label":"Fechar",children:"✕"})]}),t]})]})}function Ph({dica:n,rotulo:e="Mais informações"}){const t=ru(),[i,r]=se.useState(!1),s=se.useRef(null);return se.useEffect(()=>{if(!i)return;const a=o=>{var c;(c=s.current)!=null&&c.contains(o.target)||r(!1)};return document.addEventListener("pointerdown",a),()=>document.removeEventListener("pointerdown",a)},[i]),_.jsxs("span",{className:"dica-toque",ref:s,children:[_.jsx("button",{type:"button",className:"dica-toque-botao","aria-expanded":i,"aria-label":e,onMouseEnter:t?void 0:()=>r(!0),onMouseLeave:t?void 0:()=>r(!1),onFocus:t?void 0:()=>r(!0),onBlur:t?void 0:()=>r(!1),onClick:()=>{t&&r(a=>!a)},children:"?"}),i&&_.jsx("span",{role:"tooltip",className:"dica-toque-balao",children:n})]})}const Yy=["só o principal","+ relacionadas fortes","+ relacionadas","+ vínculos fracos"],$y=["principal","+ fortes","+ relac.","+ fracas"],Ky="Aderência não é probabilidade: é o grau, na escala de A a I do autor, previsto para o par projeto × área (rótulo por leitura + similaridade do resumo com descrições de cada área). Acima de ~35% só aparece a área principal do projeto; a informação nova está entre 20% e 35%, onde ficam as áreas relacionadas — daí o controle andar em poucos passos, e não de 0 a 100.";function Zy({nomes:n,aderencia:e,alcance:t,onAlcance:i,contagem:r,total:s}){const a=e.alcances,o=a[Math.min(t,a.length-1)],c=Yy[t]??`corte ≥ ${o.limiar}%`,l=n.length<=2?n.join(" + "):`${n[0]} + ${n.length-1}`;return _.jsxs("div",{className:"atlas-alcance",role:"group","aria-label":"Alcance da aderência",children:[_.jsxs("div",{className:"atlas-alcance-topo",children:[_.jsxs("span",{className:"atlas-alcance-titulo",children:["Aderência a ",_.jsx("strong",{children:l})]}),_.jsx(Ph,{rotulo:"Como ler a aderência",dica:Ky})]}),_.jsx("input",{className:"atlas-alcance-range",type:"range",min:0,max:a.length-1,step:1,value:Math.min(t,a.length-1),onChange:u=>i(Number(u.target.value)),"aria-label":"Alcance: do só o principal aos vínculos fracos","aria-valuetext":`${c}, aderência de ${o.limiar}% ou mais`}),_.jsx("div",{className:"atlas-alcance-marcas","aria-hidden":"true",children:a.map((u,f)=>_.jsx("span",{className:f===t?"ativo":"",children:$y[f]??`≥ ${u.limiar}%`},u.limiar))}),_.jsxs("div",{className:"atlas-alcance-resumo",children:[_.jsx("strong",{children:c})," · aderência ≥ ",o.limiar,"% · ",r," de ",s," projetos",o.precisao!==null&&_.jsxs(_.Fragment,{children:[" ","· ",Math.round(o.precisao*100),"% dos pares mostrados foram julgados relevantes",_.jsxs("span",{className:"atlas-alcance-base",children:[" (em ",e.validacao.casos," casos julgados)"]})]})]})]})}function Jy({aderencia:n,a:e,limiar:t}){const i=n.areas.map((r,s)=>({nome:r,v:e[s]??0})).sort((r,s)=>s.v-r.v);return _.jsxs("div",{className:"atlas-perfil",children:[_.jsxs("div",{className:"atlas-perfil-cab",children:[_.jsx("strong",{children:"Aderência às áreas"}),_.jsx(Ph,{rotulo:"O que é a aderência",dica:`${n.aviso} Nos ${n.validacao.casos} casos julgados, o grupo principal acertou em ${Math.round(n.validacao.principal*100)}% e a separação entre áreas relevantes e irrelevantes em ${Math.round(n.validacao.relevante_irrelevante*100)}% dos pares.`})]}),_.jsx("ul",{className:"atlas-perfil-lista",children:i.map((r,s)=>_.jsxs("li",{className:r.v>=t?"acima":"",children:[_.jsxs("span",{className:"atlas-perfil-nome",children:[_.jsx("span",{className:"atlas-perfil-texto",title:r.nome,children:r.nome}),s===0&&_.jsx("span",{className:"atlas-perfil-tag",children:"principal"})]}),_.jsx("span",{className:"atlas-perfil-barra","aria-hidden":"true",children:_.jsx("span",{style:{width:`${Math.max(2,r.v)}%`}})}),_.jsxs("span",{className:"atlas-perfil-valor",children:[r.v,"%"]})]},r.nome))}),_.jsx("p",{className:"atlas-perfil-nota",children:'Não é probabilidade; ver "Sobre este mapa".'})]})}function Qy({metodo:n,instituicoes:e,clustersOrdenados:t,temasAtivos:i,siglasSel:r,temasSel:s,subareas2Sel:a,algumFiltroAtivo:o,modoPeso:c,pesoDisponivel:l,onModoPeso:u,aderencia:f,alcance:h,onAlcance:g,contagem:v,total:S,onSigla:p,onTema:d,onSubarea2:E,onLimpar:A}){return _.jsxs("div",{className:"atlas-filtros",children:[o&&_.jsx("div",{className:"atlas-filtros-contagem",children:_.jsx("button",{type:"button",className:"chip",onClick:A,children:"Limpar filtros"})}),_.jsxs("details",{open:!0,className:"atlas-sidebar-secao",children:[_.jsxs("summary",{children:["Instituição",r.size>0?` (${r.size})`:""]}),_.jsx("div",{className:"atlas-checkbox-lista",children:e.map(({sigla:M,n:w})=>_.jsxs("label",{className:"atlas-checkbox",children:[_.jsx("input",{type:"checkbox",checked:r.has(M),onChange:()=>p(M)}),_.jsx("span",{className:"legenda-marca",style:{background:ni(M)}}),M," (",w,")"]},M))})]}),_.jsxs("details",{open:!0,className:"atlas-sidebar-secao",children:[_.jsxs("summary",{children:[Ty[n],s.size>0?` (${s.size})`:""]}),n==="anppom"&&_.jsxs("div",{className:"atlas-filtros-peso",children:[_.jsxs("div",{className:"segmented",role:"group","aria-label":"Como as subáreas marcadas pintam o mapa",children:[_.jsx("button",{type:"button",className:c==="discreto"?"ativo":"","aria-pressed":c==="discreto",onClick:()=>u("discreto"),children:"Discretas"}),_.jsx("button",{type:"button",className:c==="aderencia"?"ativo":"","aria-pressed":c==="aderencia",disabled:!l,onClick:()=>u("aderencia"),children:"Por aderência"})]}),_.jsx("span",{className:"chart-nota",style:{margin:0},children:c==="aderencia"&&l?s.size>0?"Os pontos acendem conforme o quanto o texto do projeto pertence às subáreas marcadas.":"Marque uma ou mais subáreas: os pontos acendem conforme o quanto o texto do projeto pertence a elas.":"Discretas: o projeto está ou não na subárea. Por aderência: o quanto ele pertence."}),c==="aderencia"&&l&&f&&s.size>0&&_.jsx(Zy,{nomes:t.filter(M=>s.has(M.cluster)).map(M=>M.tema),aderencia:f,alcance:h,onAlcance:g,contagem:v,total:S})]}),_.jsx("div",{className:"atlas-checkbox-lista",children:t.map(M=>_.jsxs("label",{className:"atlas-checkbox",children:[_.jsx("input",{type:"checkbox",checked:s.has(M.cluster),onChange:()=>d(M.cluster)}),M.tema," (",M.n_projetos,")"]},M.cluster))})]}),n==="anppom"&&_.jsxs("details",{className:"atlas-sidebar-secao",children:[_.jsxs("summary",{children:["Subárea — 2º nível",a.size>0?` (${a.size})`:""]}),i.length===0?_.jsx("p",{className:"chart-nota",style:{margin:"0.5rem 0"},children:"Marque uma subárea de 1º nível pra ver as de 2º nível."}):i.map(M=>_.jsxs("div",{className:"atlas-sidebar-subgrupo",children:[_.jsx("div",{className:"atlas-sidebar-subgrupo-titulo",children:M.tema}),_.jsx("div",{className:"atlas-checkbox-lista",children:M.subareas.map(w=>_.jsxs("label",{className:"atlas-checkbox",children:[_.jsx("input",{type:"checkbox",checked:a.has(w),onChange:()=>E(w)}),w]},w))})]},M.cluster))]})]})}function eE({projeto:n,producoes:e,membros:t,descricao:i,carregando:r,producaoSel:s,onProducao:a,esquema:o,filtro:c,totalGeral:l}){return _.jsxs("div",{className:"atlas-painel-conteudo",children:[i&&_.jsxs("div",{className:"atlas-painel-descricao",children:[_.jsx("strong",{children:"Descrição"}),_.jsx("p",{children:i})]}),t&&t.length>0&&_.jsxs("div",{className:"atlas-painel-membros",children:[_.jsxs("strong",{children:["Membros (",t.length,")"]}),_.jsx("ul",{className:"atlas-painel-lista",children:t.map((u,f)=>_.jsxs("li",{children:[u.nome,_.jsxs("span",{className:"atlas-tooltip-nota",children:[" ","— ",u.papel??"papel não informado",u.principal?" · responsável":""]})]},f))})]}),_.jsxs("div",{className:"atlas-painel-producoes",children:[_.jsxs("strong",{children:["Produções",e?l!==void 0&&l!==e.length?` (${e.length} de ${l})`:` (${e.length})`:""]}),r&&_.jsx("p",{className:"chart-nota",children:"Carregando produções…"}),!r&&e&&e.length===0&&_.jsx("p",{className:"chart-nota",children:"Nenhuma produção vinculada a este projeto nesta base."}),!r&&e&&e.length>0&&_.jsx("ul",{className:"atlas-painel-lista",children:e.map(u=>_.jsx(kh,{p:u,sigla:n.sigla,marca:_.jsx(Na,{marca:o.marca(u),sigla:n.sigla}),apagado:!tu(o,u,c),aberta:s===u.id_producao,destaque:s===u.id_producao,onAlternar:()=>a(s===u.id_producao?null:u.id_producao)},u.id_producao))})]})]})}function tE({aberto:n,projeto:e,tema:t,ficha:i,detalhes:r,descricao:s,membros:a,producoes:o,producoesAbertas:c,carregando:l,producaoSel:u,esquema:f,filtro:h,apenasNucleo:g,onApenasNucleo:v,onSelecionarProducao:S,onFechar:p,aderencia:d,limiarAlcance:E}){var P;if(!n||!e)return null;const A=u&&o?o.find(x=>x.id_producao===u)??null:null,M=(i==null?void 0:i[e.id])??null,w=r[e.sigla],b=_.jsxs(_.Fragment,{children:[_.jsx("strong",{children:e.nome??"(sem título)"}),_.jsx("div",{className:"atlas-tooltip-nota",children:jo(e,M)}),_.jsxs("div",{className:"atlas-tooltip-nota",children:[t,e.subarea?` · ${e.subarea}`:""]})]});return _.jsx(zi,{aberto:!0,ariaLabel:`Projeto: ${e.nome??""}`,titulo:A?_.jsx("strong",{children:A.nome??"sem título registrado"}):b,onFechar:p,onVoltar:A?()=>S(null):void 0,rotuloVoltar:"Produções",acoes:A?_.jsxs(_.Fragment,{children:[A.link&&_.jsx("a",{className:"atlas-icone-acao",href:A.link,target:"_blank",rel:"noreferrer",title:"Abrir a página desta produção na Plataforma Sucupira","aria-label":"Abrir na Plataforma Sucupira",children:_.jsx(Wu,{})}),Fu(w,A.id_producao).map(x=>_.jsx("a",{className:"atlas-icone-acao",href:x.url,target:"_blank",rel:"noreferrer",title:`${x.rotulo}: ${x.url}`,"aria-label":`${x.rotulo} (abre em outra aba)`,children:_.jsx(Vu,{})},x.url)),_.jsx("button",{type:"button",className:"atlas-icone-acao",onClick:()=>S(null),title:"Voltar ao projeto, com a produção destacada na lista","aria-label":"Voltar ao projeto",children:_.jsx(Hu,{})})]}):c?_.jsxs("div",{className:"atlas-foco-modo",role:"group","aria-label":"Quais produções mostrar",children:[_.jsxs("button",{type:"button",className:`chip${g?"":" ativo"}`,"aria-pressed":!g,onClick:()=>v(!1),children:["Todas (",c.length,")"]}),_.jsxs("button",{type:"button",className:`chip${g?" ativo":""}`,"aria-pressed":g,onClick:()=>v(!0),children:["Só núcleo (",c.filter(x=>x.classe==="nucleo").length,")"]})]}):void 0,children:A?_.jsx(Xu,{pr:A,destaques:Ha(w,A.id_producao,6,300),projeto:e,tema:t,ficha:M,descricao:(s==null?void 0:s[e.id])??null}):_.jsxs(_.Fragment,{children:[d&&_.jsx(Jy,{aderencia:d,a:((P=d.projetos.find(x=>x.id===e.id))==null?void 0:P.a)??[],limiar:E}),_.jsx(eE,{projeto:e,producoes:o,membros:(a==null?void 0:a[e.id])??null,descricao:(s==null?void 0:s[e.id])??null,carregando:l,producaoSel:u,onProducao:S,esquema:f,filtro:h,totalGeral:c==null?void 0:c.length})]})})}function nE({viewBox:n,preserveAspectRatio:e="xMidYMid meet",larguraMinima:t,rotulo:i,className:r,children:s}){return _.jsx("svg",{viewBox:n,preserveAspectRatio:e,className:r,style:{display:"block",width:"100%",height:"auto"},role:i?"img":void 0,"aria-label":i,"aria-hidden":i?void 0:!0,focusable:"false","data-largura-minima":t,children:s})}function iE(n,e,t=11){return t*n/e}const Qc=340,eu=300;function rE(){const n=iE(Qc,eu,11),e=44,t=58,i=24;return _.jsxs(nE,{viewBox:`0 0 ${Qc} 116`,larguraMinima:eu,rotulo:"Anatomia da marca de produção",children:[_.jsx("circle",{cx:e,cy:t,r:i*1.25,fill:"none",stroke:"var(--color-accent)",strokeWidth:4}),_.jsx("circle",{cx:e,cy:t,r:i,fill:"var(--serie-4)",stroke:"var(--color-accent)",strokeWidth:5}),_.jsx("text",{x:e,y:t+1,textAnchor:"middle",dominantBaseline:"central",fontSize:i*.9,fill:"var(--color-text)",children:"?"}),_.jsxs("g",{fontSize:n,fill:"var(--color-text-muted)",children:[_.jsx("line",{x1:e+30,y1:t-20,x2:112,y2:12,stroke:"var(--color-border)",strokeWidth:1}),_.jsx("text",{x:116,y:16,children:"anel = instituição"}),_.jsx("line",{x1:e+25,y1:t-8,x2:112,y2:40,stroke:"var(--color-border)",strokeWidth:1}),_.jsx("text",{x:116,y:44,children:"borda = tipo"}),_.jsx("line",{x1:e+25,y1:t+6,x2:112,y2:68,stroke:"var(--color-border)",strokeWidth:1}),_.jsx("text",{x:116,y:72,children:"miolo = família do subtipo"}),_.jsx("line",{x1:e+8,y1:t+26,x2:112,y2:96,stroke:"var(--color-border)",strokeWidth:1}),_.jsx("text",{x:116,y:100,children:"ícone = subtipo exato"})]})]})}function sE({siglas:n,producoes:e,esquema:t,filtro:i,onFiltro:r}){return _.jsxs("div",{className:"atlas-legenda-corpo",children:[_.jsxs("p",{className:"atlas-legenda-minima",children:["círculo = um projeto (tamanho = nº de produções) · ",_.jsx("strong",{children:"cor = instituição"})," · anel da marca = instituição · borda = tipo"]}),_.jsx(rE,{}),_.jsx("div",{className:"legenda",children:n.map(s=>_.jsxs("span",{className:"legenda-item",children:[_.jsx("span",{className:"legenda-marca",style:{background:ni(s)}}),s]},s))}),e&&e.length>0&&_.jsx(Gh,{esquema:t,producoes:e,filtro:i,onFiltro:r})]})}function aE({aberta:n,comPopover:e,filtroAtivo:t,onAlternar:i,onFechar:r,conteudo:s}){const a=se.useRef(null);return Bo(a,e&&n,r),_.jsxs("div",{className:"atlas-legenda",ref:a,children:[e&&n&&_.jsxs("div",{className:"flutuante-painel",role:"dialog","aria-label":"Chave do mapa",children:[_.jsxs("header",{className:"flutuante-cab",children:[_.jsx("strong",{children:"Chave do mapa"}),_.jsx("button",{type:"button",className:"painel-fechar",onClick:r,"aria-label":"Fechar",children:"✕"})]}),s]}),_.jsxs("button",{type:"button",className:`atlas-legenda-botao atlas-flutua${n?" aberto ativo":""}`,"aria-expanded":n,"aria-haspopup":"dialog",onClick:i,children:[_.jsx(Mg,{}),_.jsx("span",{children:"Legenda"}),t&&_.jsx("span",{className:"atlas-legenda-ponto",role:"img","aria-label":"filtro de produções ativo"})]})]})}function oE({metodo:n,dimensao:e,organizarPor:t,avisoRotulo:i,totalProjetos:r,totalProgramas:s,aderencia:a}){return _.jsxs("div",{className:"atlas-sobre",children:[_.jsxs("p",{children:[r," projetos de pesquisa dos ",s,' programas, um ponto por projeto. Organize por semelhança de assunto (embeddings da descrição, reduzidos a duas dimensões por UMAP) ou por onde fica o programa; classificados em 9 subáreas — as 8 oficiais da ANPPOM (2025) mais Musicoterapia, destacada de "Demais Subáreas e Interfaces" como categoria própria.']}),_.jsx("h3",{children:"Como os pontos foram classificados"}),_.jsxs("p",{children:[n==="anppom"?_.jsxs(_.Fragment,{children:[_.jsx("strong",{children:"A classificação por subárea é feita por leitura, não por palavra-chave."})," ",i," Cada projeto foi classificado a partir do título e do resumo completo, não por comparação estatística de vocabulário — um ajuste anterior baseado só em similaridade de embedding confundia sistematicamente Performance Musical com Composição e Sonologia. Ainda é automático, sem conferência humana projeto a projeto; alguns casos de fronteira podem estar na subárea vizinha."]}):_.jsxs(_.Fragment,{children:[_.jsx("strong",{children:"Este método não usa a taxonomia da ANPPOM."})," ",i]})," ","O título de cada projeto é público, qualquer que seja o tamanho do cluster, e o painel do projeto mostra a descrição, os membros e as produções com a autoria (transparência total, decisão registrada no PLANO). Cada ponto identifica programa, ano, tema, título e nº de produções."]}),a&&_.jsxs(_.Fragment,{children:[_.jsx("h3",{children:"Aderência × grupos discretos"}),_.jsxs("p",{children:["Por padrão, marcar uma subárea em Filtros mostra o ",_.jsx("strong",{children:"quanto"})," o texto de cada projeto pertence a ela — não só quem está no grupo. O matiz continua sendo a instituição, e a aderência vira saturação e opacidade. O controle de ",_.jsx("em",{children:"alcance"}),', no mesmo painel, decide até onde ir: do só o principal aos vínculos fracos. A ficha do projeto mostra o perfil completo (as 9 áreas). Em Filtros, "Discretas" volta ao modo antigo, em que o projeto está ou não no grupo (',_.jsx("code",{children:"?peso=discreto"})," na URL)."]}),_.jsxs("p",{children:[_.jsx("strong",{children:"Aderência não é probabilidade."})," É o grau, na escala de A (muito alto) a I (sem relevância) que o autor usou para julgar ",a.validacao.casos," projetos às cegas, previsto para os demais por um modelo pequeno que combina o rótulo por leitura (o grupo principal) com a similaridade entre o resumo e descrições de cada área (as áreas relacionadas). Validado deixando um caso de fora por vez, nesses"," ",a.validacao.casos," casos: o grupo principal acerta em"," ",Math.round(a.validacao.principal*100),"% e a separação entre áreas relevantes e irrelevantes em ",Math.round(a.validacao.relevante_irrelevante*100),"% dos pares. Com tão poucos casos a margem é de uns 10 pontos, e o modelo ",_.jsx("strong",{children:"não distingue graus intermediários"}),': o que ele diz bem é "relevante ou não". Os julgamentos continuam sendo ampliados. Disponível no método ANPPOM.']})]}),_.jsx("h3",{children:"Como ler a posição"}),_.jsxs("p",{children:[n==="coautoria"?_.jsxs(_.Fragment,{children:["No modo Tema, X/Y vêm do layout de força do próprio grafo de colaboração (",_.jsx("code",{children:"spring_layout"}),') — pontos próximos estão perto na REDE (compartilham gente com quem compartilha gente), não perto em conteúdo. Sem aresta nenhuma, um ponto "sem colaboração registrada" não participa desse layout — fica numa margem à parte, não porque o tema seja diferente, mas porque não há vizinho de rede.']}):_.jsxs(_.Fragment,{children:["No modo Tema, X/Y não são grandezas — vêm do UMAP, uma projeção 2D do espaço de embeddings dos resumos (modelo multilíngue"," ",_.jsx("code",{children:"paraphrase-multilingual-MiniLM-L12-v2"}),"). Pontos próximos têm vocabulário e temática acadêmica parecidos; a distância exata não tem unidade nem significado isolado, só a proximidade relativa importa."]})," ","No modo Localidade a posição já não é UMAP nem rede: é a geografia real, desamontoada só o suficiente para não sobrepor — em 3 níveis encadeados (Região/UF/Instituição, no menu Camadas), do centroide mais agregado ao mais fino, sempre a partir da coordenada real da sede de cada programa."]}),_.jsxs("p",{children:["O tamanho do ponto é sempre nº de produções no quadriênio, e a cor é sempre a instituição.",e==="3d"&&_.jsxs(_.Fragment,{children:[" ",_.jsx("strong",{children:"Em 3D"}),' a posição vem de uma redução independente da 2D (mesmo método, terceira dimensão própria) — não é a mesma nuvem "com profundidade", é outra projeção. Arraste para girar, roda do mouse dá zoom.']})]}),_.jsx("h3",{children:"A cor e a marca"}),_.jsxs("p",{children:[_.jsx("strong",{children:"A cor é sempre por instituição"})," — extraída do logo de cada uma, não de uma paleta arbitrária. Com 20 instituições, cores vizinhas ainda podem ficar parecidas para quem tem daltonismo: por isso a legenda nomeia cada uma, clicar isola, e cada marca de produção leva um ",_.jsx("strong",{children:"anel externo"})," na cor do programa dela. Nunca confie só na cor."]}),_.jsxs("p",{children:["As marcas de produção (as bolinhas ao redor do projeto aberto) têm três camadas: a"," ",_.jsx("strong",{children:"borda"})," é o tipo (bibliográfica, artístico-cultural, técnica); o"," ",_.jsx("strong",{children:"miolo"})," agrupa o subtipo por família; o ",_.jsx("strong",{children:"ícone"})," identifica o subtipo exato. Tudo vem de ",_.jsx("code",{children:"esquema_producao.json"})," — a cor agrupa, o ícone é que identifica."]}),_.jsx("h3",{children:"Como mexer"}),_.jsxs("p",{children:["Roda do mouse e pinça dão zoom; arrastar o fundo move o mapa.",t==="localidade"&&" A posição geográfica é desamontoada por força — arrastar um ponto move só ele, e o resto se reacomoda."," ","Passe o mouse sobre um ponto para ver o título, o resumo, o responsável e o fomento;"," ",_.jsx("strong",{children:"clicar"})," no ponto fixa o cartão do projeto (dá para rolar e ler a descrição inteira) e o ícone de ",_.jsx("em",{children:"produções"})," abre a lista no painel. No celular, o toque abre a folha da ficha: arraste a alça para subir, toque no fundo do mapa para fechar. Esc ou o botão voltar do sistema também fecham."]})]})}const lE={anppom:"Subáreas",hdbscan:"Clusters",topicos:"Tópicos",coautoria:"Comunidades"};function pE(){var P;const n=ky(),e=se.useRef(null),t=su(),[i,r]=se.useState(null),[s,a]=se.useState(!1),o=se.useCallback(()=>r(null),[]),c=se.useCallback(()=>a(!1),[]);if(n.error)return _.jsxs("div",{className:"error",children:["Erro ao carregar dados: ",n.error]});if(!n.dados)return _.jsx("div",{className:"loading",children:"Carregando…"});const l=n.dados,u=((P=n.programas)==null?void 0:P.length)??n.siglasOrdenadasAlfabeto.length,f=n.siglasSel.size+n.temasSel.size+n.subareas2Sel.size,h=x=>t?n.painel===x:x==="legenda"?s:i===x,g=x=>{t?n.painel===x?n.fecharPainel():n.abrirPainel(x):x==="legenda"?a(R=>!R):r(R=>R===x?null:x)},v=()=>{r(null),n.abrirPainel("sobre")},S=x=>{r(null),n.selecionarProjeto(x)},p=n.painel!==null&&(t||n.painel==="ficha"||n.painel==="sobre"),d=_.jsx(qy,{organizarPor:n.organizarPor,dimensao:n.dimensao,agruparLocalidade:n.agruparLocalidade,onOrganizar:n.mudarOrganizarPor,onDimensao:n.mudarDimensao,onAgrupar:n.mudarAgrupar}),E=_.jsx(Wy,{metodo:n.metodo,carregando:n.carregandoAlternativo,onMetodo:n.mudarMetodo}),A=n.algumFiltroAtivo?`${n.contagemFiltrada} de ${l.projetos.length} projetos`:`${l.projetos.length} projetos · ${u} programas`,M=_.jsx(Qy,{metodo:n.metodo,instituicoes:n.instituicoes,clustersOrdenados:n.clustersOrdenados,temasAtivos:n.temasAtivos,siglasSel:n.siglasSel,temasSel:n.temasSel,subareas2Sel:n.subareas2Sel,algumFiltroAtivo:n.algumFiltroAtivo,modoPeso:n.modoPeso,pesoDisponivel:n.pesoDisponivel,onModoPeso:n.mudarModoPeso,aderencia:n.aderencia,alcance:n.alcance,onAlcance:n.setAlcance,contagem:n.contagemFiltrada,total:l.projetos.length,onSigla:n.alternarSigla,onTema:n.alternarTema,onSubarea2:n.alternarSubarea2,onLimpar:n.limparFiltros}),w=_.jsx(sE,{siglas:n.siglasOrdenadasAlfabeto,producoes:n.producoesVisiveis,esquema:n.esquema,filtro:n.filtroProd,onFiltro:n.setFiltroProd}),b=h("filtros")?"filtros":h("metodo")?"metodo":null;return _.jsxs("div",{className:"atlas-rota",children:[_.jsxs("div",{className:`atlas-mapa${p?" com-painel":""}`,children:[_.jsx(by,{ref:e,dados:l,programas:n.programas,organizarPor:n.organizarPor,dimensao:n.dimensao,agruparLocalidade:n.agruparLocalidade,destacadoDe:n.destacadoDe,intensidadeDe:n.intensidadeDe,algumFiltroAtivo:n.algumFiltroAtivo,projetoAberto:n.projetoAberto,producoesVisiveis:n.producoesVisiveis,producaoSel:n.producaoSel,filtroProd:n.filtroProd,esquema:n.esquema,fichas:n.fichas,descricoes:n.descricoesPorProjeto,detalhes:n.detalhes,temaPorCluster:n.temaPorCluster,onSelecionarProjeto:n.selecionarProjeto,onAlternarProjeto:n.alternarProjeto,onSelecionarProducao:n.selecionarProducao,onToqueFundo:n.fecharPainel}),_.jsx(Xy,{projetos:l.projetos,fichas:n.fichas,metodo:n.metodo,qtdFiltros:f,aberto:b,comPopover:!t,filtros:_.jsxs(_.Fragment,{children:[_.jsxs("header",{className:"flutuante-cab",children:[_.jsxs("div",{children:[_.jsx("strong",{children:"Filtrar pontos do mapa"}),_.jsx("div",{className:"atlas-tooltip-nota",children:A})]}),_.jsx("button",{type:"button",className:"painel-fechar",onClick:o,"aria-label":"Fechar",children:"✕"})]}),M]}),metodos:E,onEscolher:S,onAlternar:g,onFecharPopover:o}),_.jsx(jy,{aberto:h("camadas"),comPopover:!t,conteudo:d,onAlternar:()=>g("camadas"),onFecharPopover:o,onZoom:x=>{var R;return(R=e.current)==null?void 0:R.zoomPor(x)},onReenquadrar:()=>{var x;return(x=e.current)==null?void 0:x.reenquadrar()},onSobre:v}),_.jsx(aE,{aberta:h("legenda"),comPopover:!t,filtroAtivo:n.filtroProd!==null,onAlternar:()=>g("legenda"),onFechar:c,conteudo:w}),_.jsx(tE,{aberto:n.painel==="ficha",projeto:n.projetoAberto,tema:n.projetoAberto?n.temaPorCluster.get(n.projetoAberto.cluster)??"—":"",ficha:n.fichas,detalhes:n.detalhes,descricao:n.descricoesPorProjeto,membros:n.membrosPorProjeto,producoes:n.producoesVisiveis,producoesAbertas:n.producoesAbertas,carregando:n.carregandoProducoes,producaoSel:n.producaoSel,esquema:n.esquema,filtro:n.filtroProd,apenasNucleo:n.apenasNucleo,onApenasNucleo:n.setApenasNucleo,onSelecionarProducao:n.selecionarProducao,onFechar:n.fecharPainel,aderencia:n.aderencia,limiarAlcance:n.pesoAtivo?n.limiarAlcance:101}),t&&_.jsxs(_.Fragment,{children:[_.jsx(zi,{aberto:n.painel==="filtros",ariaLabel:"Filtrar pontos do mapa",titulo:_.jsxs(_.Fragment,{children:[_.jsx("strong",{children:"Filtrar pontos do mapa"}),_.jsx("div",{className:"atlas-tooltip-nota",children:A})]}),onFechar:n.fecharPainel,alturaInicial:"meia",children:M}),_.jsx(zi,{aberto:n.painel==="metodo",ariaLabel:"Método de clusterização",titulo:_.jsx("strong",{children:"Método de clusterização"}),onFechar:n.fecharPainel,alturaInicial:"meia",children:E}),_.jsx(zi,{aberto:n.painel==="camadas",ariaLabel:"Camadas do mapa",titulo:_.jsx("strong",{children:"Camadas"}),onFechar:n.fecharPainel,alturaInicial:"meia",children:d}),_.jsx(zi,{aberto:n.painel==="legenda",ariaLabel:"Chave do mapa",titulo:_.jsx("strong",{children:"Chave do mapa"}),onFechar:n.fecharPainel,alturaInicial:"meia",children:w})]}),_.jsx(zi,{aberto:n.painel==="sobre",ariaLabel:"Sobre este mapa",titulo:_.jsx("strong",{children:"Sobre este mapa"}),onFechar:n.fecharPainel,alturaInicial:"cheia",children:_.jsx(oE,{metodo:n.metodo,dimensao:n.dimensao,organizarPor:n.organizarPor,avisoRotulo:l.aviso_rotulo,totalProjetos:l.projetos.length,totalProgramas:u,aderencia:n.aderencia})})]}),_.jsxs("section",{className:"atlas-tabelas",id:"atlas-tabelas",children:[_.jsx("div",{className:"atlas-tabelas-cab",children:_.jsxs("div",{className:"segmented",role:"group","aria-label":"Tabela de referência",children:[_.jsx("button",{type:"button",className:n.modo==="subarea"?"ativo":"","aria-pressed":n.modo==="subarea",onClick:()=>n.setModo("subarea"),children:lE[n.metodo]}),_.jsx("button",{type:"button",className:n.modo==="instituicao"?"ativo":"","aria-pressed":n.modo==="instituicao",onClick:()=>n.setModo("instituicao"),children:"Instituições"})]})}),n.modo==="subarea"?_.jsxs(_.Fragment,{children:[_.jsx("h2",{children:Ay[n.metodo]}),_.jsx("div",{className:"tabela-rolavel",children:_.jsxs("table",{className:"tabela-dados",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:wy[n.metodo]}),_.jsx("th",{className:"num",children:"Projetos"}),_.jsx("th",{children:Ry[n.metodo]})]})}),_.jsx("tbody",{children:n.clustersOrdenados.map(x=>_.jsx(cE,{c:x},x.cluster))})]})})]}):_.jsxs(_.Fragment,{children:[_.jsx("h2",{children:"Instituições"}),_.jsx("div",{className:"tabela-rolavel",children:_.jsxs("table",{className:"tabela-dados",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"Instituição"}),_.jsx("th",{className:"num",children:"Projetos"})]})}),_.jsx("tbody",{children:n.instituicoes.map(({sigla:x,n:R})=>_.jsxs("tr",{children:[_.jsxs("td",{className:"forte",children:[_.jsx("span",{className:"legenda-marca",style:{background:ni(x)}})," ",x]}),_.jsx("td",{className:"num",children:R})]},x))})]})})]})]})]})}function cE({c:n}){return _.jsxs("tr",{children:[_.jsx("td",{className:"forte",children:n.tema}),_.jsx("td",{className:"num",children:n.n_projetos}),_.jsx("td",{children:n.subareas.join(", ")})]})}export{pE as default};
