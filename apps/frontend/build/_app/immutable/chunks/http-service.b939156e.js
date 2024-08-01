var bt=Object.defineProperty;var vt=(e,t,r)=>t in e?bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Le=(e,t,r)=>(vt(e,typeof t!="symbol"?t+"":t,r),r);function re(e,t){for(let r in e)t(e[r],r)}function M(e,t){e.forEach(t)}function R(e,t){if(!e)throw Error(t)}function Ft(e,t){let r=N(e).meta||{};C={id:N(e).id,parent:C,value:e,template:r.template||ce(),sidRoot:r.sidRoot||C&&C.sidRoot,meta:r};try{return t()}finally{C=G(C)}}function K({node:e=[],from:t,source:r,parent:a=t||r,to:n,target:i,child:s=n||i,scope:c={},meta:p={},family:m={type:"regular"},regional:u}={}){let g=ue(a),h=ue(m.links),o=ue(m.owners),d=[];M(e,f=>f&&U(d,f));let l={id:$t(),seq:d,next:ue(s),meta:p,scope:c,family:{type:m.type||"crosslink",links:h,owners:o}};return M(h,f=>U(Re(f),l)),M(o,f=>U(je(f),l)),M(g,f=>U(f.next,l)),u&&C&&ie(pe(C),[l]),l}function J(e,t,r){let a,n=F,i=null,s=_;if(e.target&&(t=e.params,r=e.defer,a=e.meta,n="page"in e?e.page:n,e.stack&&(i=e.stack),s=X(e)||s,e=e.target),s&&_&&s!==_&&(_=null),Array.isArray(e))for(let d=0;d<e.length;d++)Q("pure",n,N(e[d]),i,t[d],s,a);else Q("pure",n,N(e),i,t,s,a);if(r&&!ge)return;let c,p,m,u,g,h,o={isRoot:ge,currentPage:F,scope:_,isWatch:be,isPure:ve};ge=0;e:for(;u=Ct();){let{idx:d,stack:l,type:f}=u;m=l.node,F=g=l.page,_=X(l),g?h=g.reg:_&&(h=_.reg);let y=!!g,b=!!_,x={fail:0,scope:m.scope};c=p=0;for(let S=d;S<m.seq.length&&!c;S++){let v=m.seq[S];if(v.order){let{priority:k,barrierID:w}=v.order,$=w?g?`${g.fullID}_${w}`:w:0;if(S!==d||f!==k){w?Ce.has($)||(Ce.add($),Oe(S,l,k,w)):Oe(S,l,k);continue e}w&&Ce.delete($)}switch(v.type){case"mov":{let w,$=v.data;switch($.from){case Y:w=pe(l);break;case"a":case"b":w=l[$.from];break;case"value":w=$.store;break;case"store":if(h&&!h[$.store.id])if(y){let Ne=dt(g,$.store.id);l.page=g=Ne,Ne?h=Ne.reg:b?(oe(_,$.store,0,1,$.softRead),h=_.reg):h=void 0}else b&&oe(_,$.store,0,1,$.softRead);w=me(h&&h[$.store.id]||$.store)}switch($.to){case Y:l.value=w;break;case"a":case"b":l[$.to]=w;break;case"store":qt(g,_,m,$.target).current=w}break}case"compute":let k=v.data;if(k.fn){be=j(m,"op")==="watch",ve=k.pure;let w=k.safe?(0,k.fn)(pe(l),x.scope,l):It(x,k.fn,l);k.filter?p=!w:l.value=w,be=o.isWatch,ve=o.isPure}}c=x.fail||p}if(!c){let S=pe(l),v=X(l);if(M(m.next,k=>{Q("child",g,k,l,S,v)}),v){j(m,"needFxCounter")&&Q("child",g,v.fxCount,l,S,v),j(m,"storeChange")&&Q("child",g,v.storeChange,l,S,v),j(m,"warnSerialize")&&Q("child",g,v.warnSerializeNode,l,S,v);let k=v.additionalLinks[m.id];k&&M(k,w=>{Q("child",g,w,l,S,v)})}}}ge=o.isRoot,F=o.currentPage,_=X(o)}function Ye(e,t="combine"){let r=t+"(",a="",n=0;return re(e,i=>{n<25&&(i!=null&&(r+=a,r+=B(i)?Te(i).fullName:i.toString()),n+=1,a=", ")}),r+")"}function Ze(e,t){let r,a,n=e;if(t){let i=Te(t);e.length===0?(r=i.path,a=i.fullName):(r=i.path.concat([e]),a=i.fullName.length===0?e:i.fullName+"/"+e)}else r=e.length===0?[]:[e],a=e;return{shortName:n,fullName:a,path:r}}function de(e,t){let r=t?e:e[0];st(r);let a=r.or,n=r.and;if(n){let i=t?n:n[0];if(P(i)&&"and"in i){let s=de(n,t);e=s[0],a={...a,...s[1]}}else e=n}return[e,a]}function q(e,...t){let r=ce();if(r){let a=r.handlers[e];if(a)return a(r,...t)}}function W(e,t){let r=le({or:t,and:typeof e=="string"?{name:e}:e}),a=(s,...c)=>(ne(!j(a,"derived"),"call of derived event","createEvent"),ne(!ve,"unit call from pure function","operators like sample"),F?((p,m,u,g)=>{let h=F,o=null;if(m)for(o=F;o&&o.template!==m;)o=G(o);Qe(o);let d=p.create(u,g);return Qe(h),d})(a,n,s,c):a.create(s,c)),n=ce(),i=Object.assign(a,{graphite:K({meta:pt(r.actualOp||"event",a,r),regional:1}),create:s=>(J({target:a,params:s,scope:_}),s),watch:s=>ft(a,s),map:s=>Me(a,ae,s,[D()]),filter:s=>Me(a,"filter",s.fn?s:s.fn,[D(Pe,1)]),filterMap:s=>Me(a,"filterMap",s,[D(),E(c=>!O(c),1)]),prepend(s){let c=W("* → "+a.shortName,{parent:G(a)});return q("eventPrepend",N(c)),ee(c,a,[D()],"prepend",s),ut(a,c),c}});return r!=null&&r.domain&&r.domain.hooks.event(i),H(i,"id",i.graphite.id),it(i.graphite),i}function We(e,t,r,a){return we(r,t,"first argument"),R(A(a),"second argument should be a function"),ne(!j(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`),M(Array.isArray(r)?r:[r],n=>{e.off(n),Se(e).set(n,ct(mt(n,e,"on",At,a)))}),e}function $e(e,t){let r=le(t),a=Z(e),n=W({named:"updates",derived:1});q("storeBase",a);let i=a.id,s={subscribers:new Map,updates:n,defaultState:e,stateRef:a,getState(){let o,d=a;if(F){let l=F;for(;l&&!l.reg[i];)l=G(l);l&&(o=l)}return!o&&_&&(oe(_,a,1),o=_),o&&(d=o.reg[i]),me(d)},setState:o=>J({target:s,params:o,defer:1,scope:_}),reset:(...o)=>(M(o,d=>We(s,".reset",d,()=>s.defaultState)),s),on:(o,d)=>We(s,".on",o,d),off(o){let d=Se(s).get(o);return d&&(d(),Se(s).delete(o)),s},map(o,d){let l,f;P(o)&&(l=o,o=o.fn),ne(O(d),"second argument of store.map","updateFilter");let y=s.getState();ce()?f=null:O(y)||(f=o(y,d));let b=$e(f,{name:`${s.shortName} → *`,derived:1,and:l}),x=mt(s,b,ae,Ie,o);return _e(z(b),{type:ae,fn:o,from:a}),z(b).noInit=1,q("storeMap",a,x),b},watch(o,d){if(!d||!B(o)){let l=ft(s,o);return q("storeWatch",a,o)||o(s.getState()),l}return R(A(d),"second argument should be a function"),o.watch(l=>d(s.getState(),l))}},c=pt("store",s,r),p=s.defaultConfig.updateFilter;s.graphite=K({scope:{state:a,fn:p},node:[E((o,d,l)=>(l.scope&&!l.scope.reg[a.id]&&(l.b=1),o)),L(a),E((o,d,{a:l,b:f})=>!O(o)&&(o!==l||f),1),p&&D(Ie,1),I({from:Y,target:a})],child:n,meta:{...c,defaultState:e},regional:1}),H(s,"id",s.graphite.id),H(s,"rootStateRefId",i);let m=j(s,"serialize"),u=j(s,"derived"),g=m==="ignore",h=j(s,"sid");return h&&(H(s,"storeChange",1),a.sid=h),h||g||u||H(s,"warnSerialize",1),R(u||!O(e),"current state can't be undefined, use null instead"),ie(s,[n]),r!=null&&r.domain&&r.domain.hooks.store(s),u||(s.reinit=W({named:"reinit"}),s.reset(s.reinit)),a.meta=s.graphite.meta,it(s.graphite),s}function et(...e){let t,r,a;[e,a]=de(e);let n,i,s,c=e[e.length-1];if(A(c)?(r=e.slice(0,-1),t=c):r=e,r.length===1){let p=r[0];T(p)||(n=p,i=1)}if(!i&&(n=r,t)){s=1;let p=t;t=m=>p(...m)}return R(P(n),"shape should be an object"),Ut(Array.isArray(n),!s,n,a,t)}function tt(){let e={};return e.req=new Promise((t,r)=>{e.rs=t,e.rj=r}),e.req.catch(()=>{}),e}function V(e,t={}){let r=le(A(e)?{handler:e}:e,t),a=W(A(e)?{handler:e}:e,{...t,actualOp:"effect"}),n=N(a);H(n,"op",a.kind="effect"),a.use=o=>(R(A(o),".use argument should be a function"),u.scope.handler=o,a),a.use.getCurrent=()=>u.scope.handler;let i=a.finally=W({named:"finally",derived:1}),s=a.done=i.filterMap({named:"done",fn({status:o,params:d,result:l}){if(o==="done")return{params:d,result:l}}}),c=a.fail=i.filterMap({named:"fail",fn({status:o,params:d,error:l}){if(o==="fail")return{params:d,error:l}}}),p=a.doneData=s.map({named:"doneData",fn:({result:o})=>o}),m=a.failData=c.map({named:"failData",fn:({error:o})=>o}),u=K({scope:{handler:a.defaultConfig.handler||(()=>R(0,`no handler used in ${a.getType()}`))},node:[E((o,d,l)=>{let f=d.handler,y=X(l);if(y){let b=y.handlers.unitMap.get(a)||y.handlers.sidMap[a.sid];b&&(f=b)}return o.handler=f,o},0,1),E(({params:o,req:d,handler:l,args:f=[o]},y,b)=>{let x=gt(b),S=xe(o,d,1,i,b,x),v=xe(o,d,0,i,b,x),[k,w]=ht(l,v,f);k&&(P(w)&&A(w.then)?w.then(S,v):S(w))},0,1)],meta:{op:"fx",fx:"runner"}});n.scope.runner=u,U(n.seq,E((o,{runner:d},l)=>{let f=G(l)?{params:o,req:{rs(y){},rj(y){}}}:o;return l.meta||(l.meta={fxID:Rt()}),J({target:d,params:f,defer:1,scope:X(l),meta:l.meta}),f.params},0,1)),a.create=o=>{let d=tt(),l={params:o,req:d};if(_&&!be){let f=_;d.req.finally(()=>{Mt(f)}).catch(()=>{})}return J({target:a,params:l,scope:_}),d.req};let g=a.inFlight=$e(0,{serialize:"ignore",named:(j(a,"name")||a.graphite.id)+".inFlight"}).on(a,o=>o+1).on(i,o=>o-1).map({fn:o=>o,named:"inFlight"});H(i,"needFxCounter","dec"),H(a,"needFxCounter",1);let h=a.pending=g.map({fn:o=>o>0,named:"pending"});return ie(a,[i,s,c,p,m,h,g]),r!=null&&r.domain&&r.domain.hooks.effect(a),a}function Bt(e){let t;[e,t]=de(e,1);let{source:r,effect:a,mapParams:n}=e,i=V(e,t);H(i,"attached",1);let s,{runner:c}=N(i).scope,p=E((u,g,h)=>{let o,{params:d,req:l,handler:f}=u,y=i.finally,b=gt(h),x=xe(d,l,0,y,h,b),S=h.a,v=ke(f),k=1;if(n?[k,o]=ht(n,x,[d,S]):o=r&&v?S:d,k){if(!v)return u.args=[S,o],1;J({target:f,params:{params:o,req:{rs:xe(d,l,1,y,h,b),rj:x}},page:h.page,defer:1,meta:h.meta})}},1,1);if(r){let u;T(r)?(u=r,ie(u,[i])):(u=et(r),ie(i,[u])),s=[L(z(u)),p]}else s=[p];c.seq.splice(1,0,...s),i.use(a);let m=G(a);return m&&(Object.assign(Te(i),Ze(i.shortName,m)),i.defaultConfig.parent=m),ut(a,i,"effect"),i}function St(e,t){we(e,"merge","first argument");let r=W({name:Ye(e,"merge"),derived:1,and:t});return ee(e,r,[],"merge"),r}function rt(e,t){let r=0;return M(Tt,a=>{a in e&&(R(e[a]!=null,yt(t,a)),r=1)}),r}function Lt(...e){let t,r,a,n,[[i,s,c],p]=de(e),m=1;return O(s)&&P(i)&&rt(i,"sample")&&(s=i.clock,c=i.fn,m=!i.greedy,n=i.filter,t=i.target,r=i.name,a=i.sid,i=i.source),Be("sample",s,i,n,t,c,r,p,m,1,0,a)}function Wt(...e){let[[t,r],a]=de(e);return r||(r=t,t=r.source),rt(r,"guard"),Be("guard",r.clock,t,r.filter,r.target,null,r.name,a,!r.greedy,0,1)}function Jt(...e){let t,r,a="split",[[n,i],s]=de(e),c=!i;c&&(t=n.cases,i=n.match,r=n.clock,n=n.source);let p=T(i),m=!B(i)&&A(i),u=!p&&!m&&P(i);R(B(n),"source must be a unit"),t||(t={}),c?re(t,(l,f)=>ot(a,l,`cases.${f}`)):(R(u,"match should be an object"),re(i,(l,f)=>t[f]=W({derived:1,named:`cases.${f}`,and:s})),t.__=W({derived:1,named:"cases.__",and:s}));let g,h=new Set([].concat(n,r||[],Object.values(t))),o=Object.keys(p||m?t:i);if(p||m)p&&h.add(i),g=[p&&L(z(i),0,1),se({safe:p,filter:1,pure:!p,fn(l,f,y){let b=String(p?y.a:i(l));ze(f,Je(o,b)?b:"__",l,y)}})];else if(u){let l=Z({});l.type="shape";let f,y=[];re(i,(b,x)=>{if(B(b)){f=1,U(y,x),h.add(b);let S=ee(b,[],[L(l),E((v,k,{a:w})=>w[x]=v)]);if(T(b)){l.current[x]=b.getState();let v=z(b);_e(l,{from:v,field:x,type:"field"}),q("splitMatchStore",v,S)}}}),f&&q("splitBase",l),g=[f&&L(l,0,1),D((b,x,S)=>{for(let v=0;v<o.length;v++){let k=o[v];if(Je(y,k)?S.a[k]:i[k](b))return void ze(x,k,b,S)}ze(x,"__",b,S)},1)]}else R(0,"expect match to be unit, function or object");let d=K({meta:{op:a},parent:r?[]:n,scope:t,node:g,family:{owners:Array.from(h)},regional:1});if(r&&Be(a,r,n,null,d,null,a,s,0,0,0),!c)return t}function Gt(e,{scope:t,safe:r}={}){R(t||_||r,"scopeBind cannot be called outside of forked .watch");let a=t||_;return ke(e)?n=>{let i=tt();return J({target:e,params:{params:n,req:i},scope:a}),i.req}:n=>(J({target:e,params:n,scope:a}),n)}let kt=typeof Symbol<"u"&&Symbol.observable||"@@observable",ae="map",Y="stack",N=e=>e.graphite||e,Re=e=>e.family.owners,je=e=>e.family.links,z=e=>e.stateRef,pe=e=>e.value,Se=e=>e.subscribers,G=e=>e.parent,X=e=>e.scope,j=(e,t)=>N(e).meta[t],H=(e,t,r)=>N(e).meta[t]=r,Te=e=>e.compositeName,B=e=>(A(e)||P(e))&&"kind"in e;const he=e=>t=>B(t)&&t.kind===e;let T=he("store"),wt=he("event"),ke=he("effect"),at=he("domain"),_t=he("scope");var Kt={__proto__:null,unit:B,store:T,event:wt,effect:ke,domain:at,scope:_t,attached:e=>ke(e)&&j(e,"attached")==1};let Je=(e,t)=>e.includes(t),ye=(e,t)=>{let r=e.indexOf(t);r!==-1&&e.splice(r,1)},U=(e,t)=>e.push(t),ne=(e,t,r)=>!e&&console.error(`${t} is deprecated${r?`, use ${r} instead`:""}`);const Ae=()=>{let e=0;return()=>""+ ++e};let xt=Ae(),nt=Ae(),$t=Ae(),Rt=Ae(),C=null,it=e=>{},ce=()=>C&&C.template,jt=e=>(e&&C&&C.sidRoot&&(e=`${C.sidRoot}|${e}`),e),ie=(e,t)=>{let r=N(e);M(t,a=>{let n=N(a);r.family.type!=="domain"&&(n.family.type="crosslink"),U(Re(n),r),U(je(r),n)})},ue=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(N),P=e=>typeof e=="object"&&e!==null,A=e=>typeof e=="function",O=e=>e===void 0,st=e=>R(P(e)||A(e),"expect first argument be an object");const Ge=(e,t,r,a)=>R(!(!P(e)&&!A(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${a}`);let we=(e,t,r)=>{Array.isArray(e)?M(e,(a,n)=>Ge(a,t,`${n} item of ${r}`,"")):Ge(e,t,r," or array of units")},ot=(e,t,r="target")=>M(ue(t),a=>ne(!j(a,"derived"),`${e}: derived unit in "${r}"`,"createEvent/createStore")),Ie=(e,{fn:t},{a:r})=>t(e,r),At=(e,{fn:t},{a:r})=>t(r,e),Pe=(e,{fn:t})=>t(e);const lt=(e,t,r,a)=>{let n={id:nt(),type:e,data:t};return r&&(n.order={priority:r},a&&(n.order.barrierID=++Nt)),n};let Nt=0,I=({from:e="store",store:t,target:r,to:a=r?"store":Y,batch:n,priority:i})=>lt("mov",{from:e,store:t,to:a,target:r},i,n),se=({fn:e,batch:t,priority:r,safe:a=0,filter:n=0,pure:i=0})=>lt("compute",{fn:e,safe:a,filter:n,pure:i},r,t),He=({fn:e})=>se({fn:e,priority:"effect"}),E=(e,t,r)=>se({fn:e,safe:1,filter:t,priority:r&&"effect"}),L=(e,t,r)=>I({store:e,to:t?Y:"a",priority:r&&"sampler",batch:1}),D=(e=Pe,t)=>se({fn:e,pure:1,filter:t}),Qt={mov:I,compute:se,filter:({fn:e,pure:t})=>se({fn:e,filter:1,pure:t}),run:He},Z=e=>({id:nt(),current:e}),me=({current:e})=>e,_e=(e,t)=>{e.before||(e.before=[]),U(e.before,t)},te=null;const De=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||Ue(e.v.type)>Ue(t.v.type))&&(r=e,e=t,t=r),r=De(e.r,t),e.r=e.l,e.l=r,e},Fe=[];let Ke=0;for(;Ke<6;)U(Fe,{first:null,last:null,size:0}),Ke+=1;const Ct=()=>{for(let e=0;e<6;e++){let t=Fe[e];if(t.size>0){if(e===3||e===4){t.size-=1;let a=te.v;return te=De(te.l,te.r),a}t.size===1&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},Q=(e,t,r,a,n,i,s)=>Oe(0,{a:null,b:null,node:r,parent:a,value:n,page:t,scope:i,meta:s},e),Oe=(e,t,r,a=0)=>{let n=Ue(r),i=Fe[n],s={v:{idx:e,stack:t,type:r,id:a},l:null,r:null};n===3||n===4?te=De(te,s):(i.size===0?i.first=s:i.last.r=s,i.last=s),i.size+=1},Ue=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Ce=new Set;let _,ge=1,be=0,ve=0,F=null,Mt=e=>{_=e},Qe=e=>{F=e};const dt=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=G(e);if(e)return e}return null};let qt=(e,t,r,a,n)=>{let i=dt(e,a.id);return i?i.reg[a.id]:t?(oe(t,a,n),t.reg[a.id]):a};const zt=e=>e;let oe=(e,t,r,a,n)=>{var i;let s=e.reg;if(s[t.id])return;let c=t.sid,p=t==null||(i=t.meta)===null||i===void 0?void 0:i.serialize,m=e.fromSerialize&&p!=="ignore"&&(p==null?void 0:p.read)||zt,u={id:t.id,current:t.current,meta:t.meta};if(u.id in e.values.idMap)u.current=e.values.idMap[u.id];else if(c&&c in e.values.sidMap&&!(c in e.sidIdMap))u.current=m(e.values.sidMap[c]);else if(t.before&&!n){let g=0,h=r||!t.noInit||a;M(t.before,o=>{switch(o.type){case ae:{let d=o.from;if(d||o.fn){d&&oe(e,d,r,a);let l=d&&s[d.id].current;h&&(u.current=o.fn?o.fn(l):l)}break}case"field":g||(g=1,u.current=Array.isArray(u.current)?[...u.current]:{...u.current}),oe(e,o.from,r,a),h&&(u.current[o.field]=s[s[o.from.id].id].current)}})}c&&(e.sidIdMap[c]=t.id),s[t.id]=u};const It=(e,t,r)=>{try{return t(pe(r),e.scope,r)}catch(a){console.error(a),e.fail=1,e.failReason=a}};let le=(e,t={})=>(P(e)&&(le(e.or,t),re(e,(r,a)=>{O(r)||a==="or"||a==="and"||(t[a]=r)}),le(e.and,t)),t);const Ve=(e,t)=>{ye(e.next,t),ye(Re(e),t),ye(je(e),t)},Ee=(e,t,r)=>{let a;e.next.length=0,e.seq.length=0,e.scope=null;let n=je(e);for(;a=n.pop();)Ve(a,e),(t||r&&j(e,"op")!=="sample"||a.family.type==="crosslink")&&Ee(a,t,j(a,"op")!=="on"&&r);for(n=Re(e);a=n.pop();)Ve(a,e),r&&a.family.type==="crosslink"&&Ee(a,t,j(a,"op")!=="on"&&r)},fe=e=>e.clear();let Ot=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),T(e))fe(Se(e));else if(at(e)){r=1;let a=e.history;fe(a.events),fe(a.effects),fe(a.stores),fe(a.domains)}Ee(N(e),!!t,r)},ct=e=>{let t=()=>Ot(e);return t.unsubscribe=t,t},ee=(e,t,r,a,n)=>K({node:r,parent:e,child:t,scope:{fn:n},meta:{op:a},family:{owners:[e,t],links:t},regional:1}),ft=(e,t)=>(R(A(t),".watch argument should be a function"),ct(K({scope:{fn:t},node:[He({fn:Pe})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),ut=(e,t,r="event")=>{G(e)&&G(e).hooks[r](t)},pt=(e,t,r)=>{let a=le(r),n=e==="domain",i=xt(),{sid:s=null,named:c=null,domain:p=null,parent:m=p}=a,u=c||a.name||(n?"":i),g=Ze(u,m),h={op:t.kind=e,name:t.shortName=u,sid:t.sid=jt(s),named:c,unitId:t.id=i,serialize:a.serialize,derived:a.derived,config:a};if(t.parent=m,t.compositeName=g,t.defaultConfig=a,t.thru=o=>(ne(0,"thru","js pipe"),o(t)),t.getType=()=>g.fullName,!n){t.subscribe=d=>(st(d),t.watch(A(d)?d:l=>d.next&&d.next(l))),t[kt]=()=>t;let o=ce();o&&(h.nativeTemplate=o)}return h};const Me=(e,t,r,a)=>{let n;P(r)&&(n=r,r=r.fn);let i=W({name:`${e.shortName} → *`,derived:1,and:n});return ee(e,i,a,t,r),i},mt=(e,t,r,a,n)=>{let i=z(t),s=I({store:i,to:"a",priority:"read"});r===ae&&(s.data.softRead=1);let c=[s,D(a)];return q("storeOnMap",i,c,T(e)&&z(e)),ee(e,t,c,r,n)},Ut=(e,t,r,a,n)=>{let i=e?l=>[...l]:l=>({...l}),s=e?[]:{},c=i(s),p=Z(c),m=Z(1);p.type=e?"list":"shape",p.noInit=1,q("combineBase",p,m);let u=$e(c,{name:Ye(r),derived:1,and:a}),g=z(u);g.noInit=1,H(u,"isCombine",1);let h=L(p);h.order={priority:"barrier"};let o=I({store:g,to:"b",priority:"read"});o.data.softRead=1;let d=[E((l,f,y)=>(y.scope&&!y.scope.reg[p.id]&&(y.c=1),l)),h,I({store:m,to:"b"}),E((l,{key:f},y)=>{if(y.c||l!==y.a[f])return t&&y.b&&(y.a=i(y.a)),y.a[f]=l,1},1),I({from:"a",target:p}),I({from:"value",store:0,target:m}),I({from:"value",store:1,target:m,priority:"barrier",batch:1}),L(p,1),n&&D(),o];return re(r,(l,f)=>{if(!T(l))return R(!B(l)&&!O(l),`combine expects a store in a field ${f}`),void(c[f]=s[f]=l);s[f]=l.defaultState,c[f]=l.getState();let y=ee(l,u,d,"combine",n);y.scope.key=f;let b=z(l);_e(p,{type:"field",field:f,from:b}),q("combineField",b,y)}),u.defaultShape=r,_e(g,{type:ae,from:p,fn:n}),ce()||(u.defaultState=n?g.current=n(c):s),u};let ht=(e,t,r)=>{try{return[1,e(...r)]}catch(a){return t(a),[0,null]}},gt=e=>{let t=X(e),r={ref:t};return t&&U(t.activeEffects,r),r},xe=(e,t,r,a,n,i)=>s=>{i.ref&&ye(i.ref.activeEffects,i),J({target:[a,Et],params:[r?{status:"done",params:e,result:s}:{status:"fail",params:e,error:s},{value:s,fn:r?t.rs:t.rj}],defer:1,page:n.page,scope:i.ref,meta:n.meta})};const Et=K({node:[He({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),Tt=["source","clock","target"],yt=(e,t)=>e+`: ${t} should be defined`;let Be=(e,t,r,a,n,i,s,c,p,m,u,g)=>{let h=!!n;R(!O(r)||!O(t),yt(e,"either source or clock"));let o=0;O(r)?o=1:B(r)||(r=et(r)),O(t)?t=r:(we(t,e,"clock"),Array.isArray(t)&&(t=St(t))),o&&(r=t),c||s||(s=r.shortName);let d="none";(u||a)&&(B(a)?d="unit":(R(A(a),"`filter` should be function or unit"),d="fn")),n?(we(n,e,"target"),ot(e,n)):d==="none"&&m&&T(r)&&T(t)?n=$e(i?i(me(z(r)),me(z(t))):me(z(r)),{name:s,sid:g,or:c}):(n=W({name:s,derived:1,or:c}),q("sampleTarget",N(n)));let l=Z(),f=[];if(d==="unit"){let[S,v]=Xe(a,n,t,l,e);f=[...qe(v),...qe(S)]}let[y,b]=Xe(r,n,t,l,e),x=ee(t,n,[q("sampleSourceLoader"),I({from:Y,target:l}),...qe(b),L(y,1,p),...f,L(l),d==="fn"&&D((S,v,{a:k})=>a(S,k),1),i&&D(Ie),q("sampleSourceUpward",h)],e,i);return ie(r,[x]),Object.assign(x.meta,c,{joint:1}),n};const qe=e=>[L(e),E((t,r,{a})=>a,1)],Xe=(e,t,r,a,n)=>{let i=T(e),s=i?z(e):Z(),c=Z(i);return i||K({parent:e,node:[I({from:Y,target:s}),I({from:"value",store:1,target:c})],family:{owners:[e,t,r],links:t},meta:{op:n},regional:1}),q("sampleSource",c,s,a),[s,c]},ze=(e,t,r,a)=>{let n=e[t];n&&J({target:n,params:Array.isArray(n)?n.map(()=>r):r,defer:1,stack:a})};class Pt{constructor(t){Le(this,"_overriddenHeaders",{"Content-Type":"application/json"});this.baseUrl=t}_buildUrl(t,r){const a=new URLSearchParams;return r&&Object.entries(r).forEach(([n,i])=>{a.append(encodeURIComponent(n),encodeURIComponent(i))}),new URL(this.baseUrl+t+a.toString()).toString()}async _buildResponse(t){const r=await t,a=await r.json();return r.ok?{data:a,status:r.status}:Promise.reject(a)}async get(t,r){return this._buildResponse(fetch(this._buildUrl(t,r),{method:"GET",headers:this._overriddenHeaders}))}async delete(t,r){return this._buildResponse(fetch(this._buildUrl(t,r),{method:"DELETE",headers:this._overriddenHeaders}))}async post(t,r,a){return this._buildResponse(fetch(this._buildUrl(t,a),{method:"POST",headers:this._overriddenHeaders,body:JSON.stringify(r)}))}async put(t,r,a){return this._buildResponse(fetch(this._buildUrl(t,a),{method:"PUT",headers:this._overriddenHeaders,body:JSON.stringify(r)}))}async patch(t,r,a){return this._buildResponse(fetch(this._buildUrl(t,a),{method:"PATCH",headers:this._overriddenHeaders,body:JSON.stringify(r)}))}setToken(t){this._overriddenHeaders.Authorization=`Bearer ${t}`}}class Ht{constructor(t){this.httpService=t}setAuthCredentials(){return V(t=>{this.httpService.setToken(t)})}get(t,r){return V(async()=>(await this.httpService.get(t,r)).data)}delete(t,r){return V(async()=>(await this.httpService.delete(t,r)).data)}post(t,r){return V(async a=>(await this.httpService.post(t,a,r)).data)}put(t,r){return V(async a=>(await this.httpService.put(t,a,r)).data)}patch(t,r){return V(async a=>(await this.httpService.patch(t,a,r)).data)}}const Vt=new Ht(new Pt("http://localhost:3000"));export{Wt as $,Gt as N,Qt as T,K as a,Ft as b,Bt as c,Vt as h,Jt as j,et as m,Kt as n,$e as p,W as u,Ot as v,Lt as x,V as y};