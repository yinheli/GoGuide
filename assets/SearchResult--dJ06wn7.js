import{u as Y,g as te,h as ae,i as B,j as se,P as le,t as ne,k as ie,l as F,m as S,n as ue,w as M,p as a,q as oe,R as j,s as re,v as ce,x as de,C as ge,y as pe,z as ve,A as he,B as me,D as ye,E as we,F as be,G as I,H as _,I as ke,J as R,K as Qe}from"./app-hvANtxrE.js";const fe=["/","/en/","/guide/","/en/guide/","/guide/concepts/golang/1-keywords.html","/guide/concepts/golang/2-datatype.html","/guide/concepts/golang/3-operator.html","/guide/concepts/golang/4-errorhandling.html","/guide/concepts/golang/5-map.html","/guide/concepts/golang/6-slice.html","/guide/concepts/golang/7-channel.html","/guide/concepts/golang/8-context.html","/guide/concepts/network/1-network.html","/guide/concepts/network/2-ip.html","/guide/concepts/network/3-tcp-udp.html","/guide/concepts/network/4-dns.html","/guide/concepts/network/5-arp.html","/guide/concepts/network/6-nat.html","/en/guide/concepts/golang/1-keywords.html","/en/guide/concepts/golang/2-datatype.html","/en/guide/concepts/golang/3-operator.html","/en/guide/concepts/golang/4-errorhandling.html","/en/guide/concepts/golang/5-map.html","/en/guide/concepts/golang/6-slice.html","/en/guide/concepts/golang/7-channel.html","/en/guide/concepts/golang/8-context.html","/en/guide/concepts/network/1-network.html","/en/guide/concepts/network/2-ip.html","/en/guide/concepts/network/3-tcp-udp.html","/en/guide/concepts/network/4-dns.html","/en/guide/concepts/network/5-arp.html","/en/guide/concepts/network/6-nat.html","/guide/concepts/database/SQL/1-database-basic.html","/guide/concepts/database/SQL/2-database-query.html","/guide/concepts/database/SQL/3-database-index.html","/guide/concepts/database/SQL/4-database-transaction.html","/guide/interview/golang/basic/1-basic.html","/guide/interview/golang/basic/2-medium.html","/en/guide/concepts/database/SQL/1-database-basic.html","/en/guide/concepts/database/SQL/2-database-query.html","/en/guide/concepts/database/SQL/3-database-index.html","/en/guide/concepts/database/SQL/4-database-transaction.html","/en/guide/interview/golang/basic/1-basic.html","/en/guide/interview/golang/basic/2-medium.html","/404.html","/guide/concepts/golang/","/guide/concepts/","/guide/concepts/network/","/en/guide/concepts/golang/","/en/guide/concepts/","/en/guide/concepts/network/","/guide/concepts/database/SQL/","/guide/concepts/database/","/guide/interview/golang/basic/","/guide/interview/golang/","/guide/interview/","/en/guide/concepts/database/SQL/","/en/guide/concepts/database/","/en/guide/interview/golang/basic/","/en/guide/interview/golang/","/en/guide/interview/"],He="SEARCH_PRO_QUERY_HISTORY",y=Y(He,[]),Se=()=>{const{queryHistoryCount:s}=R,l=s>0;return{enabled:l,queryHistory:y,addQueryHistory:n=>{l&&(y.value=Array.from(new Set([n,...y.value.slice(0,s-1)])))},removeQueryHistory:n=>{y.value=[...y.value.slice(0,n),...y.value.slice(n+1)]}}},P=s=>fe[s.id]+("anchor"in s?`#${s.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=R,w=Y(Re,[]),Le=()=>{const s=U>0;return{enabled:s,resultHistory:w,addResultHistory:l=>{if(s){const n={link:P(l),display:l.display};"header"in l&&(n.header=l.header),w.value=[n,...w.value.slice(0,U-1)]}},removeResultHistory:l=>{w.value=[...w.value.slice(0,l),...w.value.slice(l+1)]}}},xe=s=>{const l=ge(),n=B(),L=pe(),u=F(0),Q=S(()=>u.value>0),v=ve([]);return he(()=>{const{search:h,terminate:x}=me(),b=ke(c=>{const k=c.join(" "),{searchFilter:q=p=>p,splitWord:C,suggestionsFilter:O,...m}=l.value;k?(u.value+=1,h(c.join(" "),n.value,m).then(p=>q(p,k,n.value,L.value)).then(p=>{u.value-=1,v.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(v.value=[])})):v.value=[]},R.searchDelay-R.suggestDelay);M([s,n],([c])=>b(c),{immediate:!0}),ye(()=>{x()})}),{isSearching:Q,results:v}};var Ce=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:l}){const n=ae(),L=B(),u=se(le),{enabled:Q,addQueryHistory:v,queryHistory:h,removeQueryHistory:x}=Se(),{enabled:b,resultHistory:c,addResultHistory:k,removeResultHistory:q}=Le(),C=Q||b,O=ne(s,"queries"),{results:m,isSearching:p}=xe(O),i=ie({isQuery:!0,index:0}),d=F(0),g=F(0),T=S(()=>C&&(h.value.length>0||c.value.length>0)),D=S(()=>m.value.length>0),A=S(()=>m.value[d.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:h.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?h.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{d.value=d.value>0?d.value-1:m.value.length-1,g.value=A.value.contents.length-1},K=()=>{d.value=d.value<m.value.length-1?d.value+1:0,g.value=0},V=()=>{g.value<A.value.contents.length-1?g.value+=1:K()},N=()=>{g.value>0?g.value-=1:J()},E=e=>e.map(t=>Qe(t)?t:a(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=we[e.index]||"$content",[o,H=""]=be(t)?t[L.value].split("$content"):t.split("$content");return e.display.map(r=>a("div",E([o,...r,H])))}return e.display.map(t=>a("div",E(t)))},f=()=>{d.value=0,g.value=0,l("updateQuery",""),l("close")},X=()=>Q?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.queryHistory),h.value.map((e,t)=>a("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},e),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),x(t)}})]))])):null,Z=()=>b?a("ul",{class:"search-pro-result-list"},a("li",{class:"search-pro-result-list-item"},[a("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>a(j,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{f()}},()=>[a(I,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[e.header?a("div",{class:"content-header"},e.header):null,a("div",e.display.map(o=>E(o)).flat())]),a("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:o=>{o.preventDefault(),o.stopPropagation(),q(t)}})]))])):null;return ue("keydown",e=>{if(s.isFocusing){if(D.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=A.value.contents[g.value];v(s.queries.join(" ")),k(t),n.push(P(t)),f()}}else if(b){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(n.push(c.value[t].link),f())}}}}),M([d,g],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>a("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!D.value:!T.value}],id:"search-pro-results"},s.queries.length?p.value?a(oe,{hint:u.value.searching}):D.value?a("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},o)=>{const H=d.value===o;return a("li",{class:["search-pro-result-list-item",{active:H}]},[a("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((r,ee)=>{const $=H&&g.value===ee;return a(j,{to:P(r),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{v(s.queries.join(" ")),k(r),f()}},()=>[r.type==="text"?null:a(r.type==="title"?re:r.type==="heading"?ce:de,{class:"search-pro-result-type"}),a("div",{class:"search-pro-result-content"},[r.type==="text"&&r.header?a("div",{class:"content-header"},r.header):null,a("div",W(r))])])})])})):u.value.emptyResult:C?T.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{Ce as default};