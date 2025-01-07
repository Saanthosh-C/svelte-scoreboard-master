var app=function(){"use strict";function n(){}function t(n){return n()}function e(){return Object.create(null)}function r(n){n.forEach(t)}function o(n){return"function"==typeof n}function a(n,t){return n!=n?t==t:n!==t||n&&"object"==typeof n||"function"==typeof n}function i(n,t){n.appendChild(t)}function l(n,t,e){n.insertBefore(t,e||null)}function c(n){n.parentNode.removeChild(n)}function s(n){return document.createElement(n)}function u(n){return document.createTextNode(n)}function p(){return u(" ")}function m(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function f(n,t,e){null==e?n.removeAttribute(t):n.setAttribute(t,e)}function d(n){return""===n?void 0:+n}function y(n,t){t=""+t,n.data!==t&&(n.data=t)}let $;function h(n){$=n}function v(){const n=$;return(t,e)=>{const r=n.$$.callbacks[t];if(r){const o=function(n,t){const e=document.createEvent("CustomEvent");return e.initCustomEvent(n,!1,!1,t),e}(t,e);r.slice().forEach(t=>{t.call(n,o)})}}}const g=[],b=Promise.resolve();let _=!1;const x=[],N=[],P=[];function C(n){N.push(n)}function k(){const n=new Set;do{for(;g.length;){const n=g.shift();h(n),w(n.$$)}for(;x.length;)x.shift()();for(;N.length;){const t=N.pop();n.has(t)||(t(),n.add(t))}}while(g.length);for(;P.length;)P.pop()();_=!1}function w(n){n.fragment&&(n.update(n.dirty),r(n.before_render),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_render.forEach(C))}let E;function S(){E={remaining:0,callbacks:[]}}function j(){E.remaining||r(E.callbacks)}function A(n){E.callbacks.push(n)}function D(n,e,a){const{fragment:i,on_mount:l,on_destroy:c,after_render:s}=n.$$;i.m(e,a),C(()=>{const e=l.map(t).filter(o);c?c.push(...e):r(e),n.$$.on_mount=[]}),s.forEach(C)}function L(n,t){n.$$.dirty||(g.push(n),_||(_=!0,b.then(k)),n.$$.dirty=e()),n.$$.dirty[t]=!0}function O(t,o,a,i,l,c){const s=$;h(t);const u=o.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:n,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(s?s.$$.context:[]),callbacks:e(),dirty:null};let m=!1;var f;p.ctx=a?a(t,u,(n,e)=>{p.ctx&&l(p.ctx[n],p.ctx[n]=e)&&(p.bound[n]&&p.bound[n](e),m&&L(t,n))}):u,p.update(),m=!0,r(p.before_render),p.fragment=i(p.ctx),o.target&&(o.hydrate?p.fragment.l((f=o.target,Array.from(f.childNodes))):p.fragment.c(),o.intro&&t.$$.fragment.i&&t.$$.fragment.i(),D(t,o.target,o.anchor),k()),h(s)}class B{$destroy(){var t,e;e=!0,(t=this).$$&&(r(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=n}$on(n,t){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(t),()=>{const n=e.indexOf(t);-1!==n&&e.splice(n,1)}}$set(){}}function M(t){var e;return{c(){(e=s("div")).innerHTML="<h1>Player Scoreboard</h1>",e.className="navbar bg-primary"},m(n,t){l(n,e,t)},p:n,i:n,o:n,d(n){n&&c(e)}}}class T extends B{constructor(n){super(),O(this,n,null,M,a,[])}}function q(n){var t;return{c(){t=u("+")},m(n,e){l(n,t,e)},d(n){n&&c(t)}}}function H(n){var t;return{c(){t=u("-")},m(n,e){l(n,t,e)},d(n){n&&c(t)}}}function J(n){var t,e,o,a,i,u;return{c(){(t=s("button")).textContent="+1",e=p(),(o=s("button")).textContent="-1",a=p(),i=s("input"),t.className="btn",o.className="btn btn-dark",f(i,"type","number"),u=[m(t,"click",n.addPoint),m(o,"click",n.removePoint),m(i,"input",n.input_input_handler)]},m(r,c){l(r,t,c),l(r,e,c),l(r,o,c),l(r,a,c),l(r,i,c),i.value=n.points},p(n,t){n.points&&(i.value=t.points)},d(n){n&&(c(t),c(e),c(o),c(a),c(i)),r(u)}}}function W(t){var e,o,a,f,d,$,h,v,g,b,_,x,N;function P(n){return n.showControls?H:q}var C=P(t),k=C(t),w=t.showControls&&J(t);return{c(){e=s("div"),o=s("h1"),a=u(t.name),f=p(),d=s("button"),k.c(),$=p(),(h=s("button")).textContent="x",v=p(),g=s("h3"),b=u("Points: "),_=u(t.points),x=p(),w&&w.c(),d.className="btn btn-sm",h.className="btn btn-danger btn-sm",o.className="svelte-1ekm9jl",g.className="svelte-1ekm9jl",e.className="card",N=[m(d,"click",t.toggleControls),m(h,"click",t.onDelete)]},m(n,t){l(n,e,t),i(e,o),i(o,a),i(o,f),i(o,d),k.m(d,null),i(o,$),i(o,h),i(e,v),i(e,g),i(g,b),i(g,_),i(e,x),w&&w.m(e,null)},p(n,t){n.name&&y(a,t.name),C!==(C=P(t))&&(k.d(1),(k=C(t))&&(k.c(),k.m(d,null))),n.points&&y(_,t.points),t.showControls?w?w.p(n,t):((w=J(t)).c(),w.m(e,null)):w&&(w.d(1),w=null)},i:n,o:n,d(n){n&&c(e),k.d(),w&&w.d(),r(N)}}}function z(n,t,e){const r=v();let{name:o,points:a}=t,i=!1;return n.$set=(n=>{"name"in n&&e("name",o=n.name),"points"in n&&e("points",a=n.points)}),{name:o,points:a,showControls:i,addPoint:()=>{const n=a+=1;return e("points",a),n},removePoint:()=>{const n=a-=1;return e("points",a),n},toggleControls:()=>{const n=i=!i;return e("showControls",i),n},onDelete:()=>r("removeplayer",o),input_input_handler:function(){a=d(this.value),e("points",a)}}}class F extends B{constructor(n){super(),O(this,n,z,W,a,["name","points"])}}function G(t){var e,o,a,u,d,y,$;return{c(){e=s("form"),o=s("input"),a=p(),u=s("input"),d=p(),y=s("input"),f(o,"type","text"),o.placeholder="Player Name",f(u,"type","number"),u.placeholder="Player Points",f(y,"type","submit"),y.className="btn btn-primary",y.value="Add Player",e.className="grid-3",$=[m(o,"input",t.input0_input_handler),m(u,"input",t.input1_input_handler),m(e,"submit",t.onSubmit)]},m(n,r){l(n,e,r),i(e,o),o.value=t.player.name,i(e,a),i(e,u),u.value=t.player.points,i(e,d),i(e,y)},p(n,t){n.player&&o.value!==t.player.name&&(o.value=t.player.name),n.player&&(u.value=t.player.points)},i:n,o:n,d(n){n&&c(e),r($)}}}function I(n,t,e){const r=v();let o={name:"",points:0};return{player:o,onSubmit:n=>{n.preventDefault(),r("addplayer",o),e("player",o={name:"",points:0})},input0_input_handler:function(){o.name=this.value,e("player",o)},input1_input_handler:function(){o.points=d(this.value),e("player",o)}}}class K extends B{constructor(n){super(),O(this,n,I,G,a,[])}}function Q(n,t,e){const r=Object.create(n);return r.player=t[e],r}function R(n){for(var t,e,r=n.players,o=[],a=0;a<r.length;a+=1)o[a]=V(Q(n,r,a));function i(n,t,e){o[n]&&(t&&A(()=>{o[n].d(t),o[n]=null}),o[n].o(e))}return{c(){for(var n=0;n<o.length;n+=1)o[n].c();t=u("")},m(n,r){for(var a=0;a<o.length;a+=1)o[a].m(n,r);l(n,t,r),e=!0},p(n,e){if(n.players||n.removePlayer){r=e.players;for(var a=0;a<r.length;a+=1){const i=Q(e,r,a);o[a]?(o[a].p(n,i),o[a].i(1)):(o[a]=V(i),o[a].c(),o[a].i(1),o[a].m(t.parentNode,t))}for(S();a<o.length;a+=1)i(a,1,1);j()}},i(n){if(!e){for(var t=0;t<r.length;t+=1)o[t].i();e=!0}},o(n){o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)i(n,0);e=!1},d(n){!function(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}(o,n),n&&c(t)}}}function U(t){var e;return{c(){(e=s("p")).textContent="No Players"},m(n,t){l(n,e,t)},p:n,i:n,o:n,d(n){n&&c(e)}}}function V(n){var t,e=new F({props:{name:n.player.name,points:n.player.points}});return e.$on("removeplayer",n.removePlayer),{c(){e.$$.fragment.c()},m(n,r){D(e,n,r),t=!0},p(n,t){var r={};n.players&&(r.name=t.player.name),n.players&&(r.points=t.player.points),e.$set(r)},i(n){t||(e.$$.fragment.i(n),t=!0)},o(n){e.$$.fragment.o(n),t=!1},d(n){e.$destroy(n)}}}function X(n){var t,e,r,o,a,u,m=new T({}),f=new K({});f.$on("addplayer",n.addPlayer);var d=[U,R],y=[];function $(n){return 0===n.players.length?0:1}return o=$(n),a=y[o]=d[o](n),{c(){m.$$.fragment.c(),t=p(),e=s("div"),f.$$.fragment.c(),r=p(),a.c(),e.className="container"},m(n,a){D(m,n,a),l(n,t,a),l(n,e,a),D(f,e,null),i(e,r),y[o].m(e,null),u=!0},p(n,t){var r=o;(o=$(t))===r?y[o].p(n,t):(S(),A(()=>{y[r].d(1),y[r]=null}),a.o(1),j(),(a=y[o])||(a=y[o]=d[o](t)).c(),a.i(1),a.m(e,null))},i(n){u||(m.$$.fragment.i(n),f.$$.fragment.i(n),a&&a.i(),u=!0)},o(n){m.$$.fragment.o(n),f.$$.fragment.o(n),a&&a.o(),u=!1},d(n){m.$destroy(n),n&&(c(t),c(e)),f.$destroy(),y[o].d()}}}function Y(n,t,e){let r=[{name:"John Doe",points:53},{name:"Sam Smith",points:45},{name:"Sara Wilson",points:34}];return{players:r,addPlayer:n=>{const t=n.detail;e("players",r=[...r,t])},removePlayer:n=>{e("players",r=r.filter(t=>t.name!==n.detail))}}}return new class extends B{constructor(n){super(),O(this,n,Y,X,a,[])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
