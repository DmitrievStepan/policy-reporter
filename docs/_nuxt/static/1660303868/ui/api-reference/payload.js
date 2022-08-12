__NUXT_JSONP__("/ui/api-reference", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ){return {data:[{document:{slug:"api-reference",description:"",title:"API Reference",position:20,category:"Policy Reporter UI",toc:[{id:af,depth:ag,text:ah},{id:ai,depth:L,text:aj},{id:ak,depth:L,text:al},{id:am,depth:L,text:an},{id:ao,depth:ag,text:ap},{id:aq,depth:L,text:ar},{id:as,depth:L,text:at}],body:{type:"root",children:[{type:b,tag:U,props:{},children:[{type:a,value:"Reference of all available HTTP endpoints provided by the Policy Reporter UI."}]},{type:a,value:f},{type:b,tag:au,props:{id:af},children:[{type:b,tag:u,props:{href:"#core-apis",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:M,props:{id:ai},children:[{type:b,tag:u,props:{href:"#push-api",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:aj}]},{type:a,value:X},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:b,tag:o,props:{},children:[{type:a,value:R}]},{type:b,tag:o,props:{},children:[{type:a,value:Y}]}]}]},{type:b,tag:S,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"POST"}]}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi\u002Fpush"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Receive a single PolicyReport result and store it in memory."}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:G}]},{type:a,value:Z},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]}]}]}]},{type:a,value:f},{type:b,tag:_,props:{id:"example"},children:[{type:b,tag:u,props:{href:"#example",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,aa]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:" -X POST -H "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"Content-type: application\u002Fjson\""}]},{type:a,value:" -d "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'{\"Message\":\"validation error: Running as root is not allowed. The fields spec.securityContext.runAsNonRoot, spec.containers[*].securityContext.runAsNonRoot, and spec.initContainers[*].securityContext.runAsNonRoot must be `true`. Rule check-containers[0] failed at path \u002Fspec\u002FsecurityContext\u002FrunAsNonRoot\u002F. Rule check-containers[1] failed at path \u002Fspec\u002Fcontainers\u002F0\u002FsecurityContext\u002F.\",\"Policy\":\"require-run-as-non-root\",\"Rule\":\"check-containers\",\"Priority\":\"warning\",\"Status\":\"fail\",\"Category\":\"Pod Security Standards (Restricted)\",\"Source\":\"Kyverno\",\"Scored\":true,\"CreationTimestamp\":\"2021-12-04T10:13:02Z\",\"Resource\":{\"APIVersion\":\"v1\",\"Kind\":\"Pod\",\"Name\":\"nginx2\",\"Namespace\":\"test\",\"UID\":\"ac4d11f3-0aa8-43f0-8056-98f4eae0d956\"}}'"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"http:\u002F\u002Flocalhost:8080\u002Fapi\u002Fpush\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:U,props:{},children:[{type:a,value:"Body JSON"}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Message\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Policy\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Rule\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Priority\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Status\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Category\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Source\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"Kyverno\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Scored\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"CreationTimestamp\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Resource\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"APIVersion\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Kind\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Name\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"Namespace\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"UID\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aG}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:M,props:{id:ak},children:[{type:b,tag:u,props:{href:"#results-api",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:al}]},{type:a,value:X},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:b,tag:o,props:{},children:[{type:a,value:R}]},{type:b,tag:o,props:{},children:[{type:a,value:Y}]}]}]},{type:b,tag:S,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi\u002Fresult-log"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Returns the logs of received results."}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:G}]},{type:a,value:Z},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]}]}]}]},{type:a,value:f},{type:b,tag:_,props:{id:"example-1"},children:[{type:b,tag:u,props:{href:"#example-1",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,aa]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"http:\u002F\u002Flocalhost:8080\u002Fapi\u002Fresult-log\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aI}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"policy\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"rule\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"priority\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"status\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"category\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"scored\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"resource\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"apiVersion\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"kind\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"name\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"namespace\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"uid\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aG}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"creationTimestamp\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:aB}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aJ}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:M,props:{id:am},children:[{type:b,tag:u,props:{href:"#config-api",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:an}]},{type:a,value:X},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:b,tag:o,props:{},children:[{type:a,value:R}]},{type:b,tag:o,props:{},children:[{type:a,value:Y}]}]}]},{type:b,tag:S,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi\u002Fconfig"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Returns configured plugins and the default displayMode."}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:G}]},{type:a,value:Z},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]}]}]}]},{type:a,value:f},{type:b,tag:_,props:{id:"example-2"},children:[{type:b,tag:u,props:{href:"#example-2",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:$}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,aa]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ac}]},{type:a,value:aH},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"http:\u002F\u002Flocalhost:8080\u002Fapi\u002Fconfig\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:G}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"views\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"dashboard\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"logs\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"kyvernoPolicies\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"kyvernoVerifyImages\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:n}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"displayMode\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"plugins\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aI}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"kyverno\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:I,props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:K},{type:b,tag:l,props:{},children:[{type:a,value:H}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,E]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ad}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:au,props:{id:ao},children:[{type:b,tag:u,props:{href:"#proxy-apis",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:M,props:{id:aq},children:[{type:b,tag:u,props:{href:"#policy-reporter",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:ar}]},{type:a,value:aM},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:b,tag:o,props:{},children:[{type:a,value:R}]}]}]},{type:b,tag:S,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi\u002Fv1\u002F*"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Proxy to the configured Policy Reporter host URL."}]}]}]}]},{type:a,value:f},{type:b,tag:U,props:{},children:[{type:a,value:aN},{type:b,tag:aO,props:{to:"\u002Fcore\u002F07-api-reference#v1-general-apis"},children:[{type:a,value:"Policy Reporter - API Reference"}]},{type:a,value:aP}]},{type:a,value:f},{type:b,tag:M,props:{id:as},children:[{type:b,tag:u,props:{href:"#kyverno-plugin",ariaHidden:n,tabIndex:v},children:[{type:b,tag:c,props:{className:[w,x]},children:[]}]},{type:a,value:at}]},{type:a,value:aM},{type:b,tag:N,props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:P}]},{type:b,tag:o,props:{},children:[{type:a,value:Q}]},{type:b,tag:o,props:{},children:[{type:a,value:R}]}]}]},{type:b,tag:S,props:{},children:[{type:b,tag:y,props:{},children:[{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:W}]}]},{type:b,tag:p,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"\u002Fapi\u002Fkyverno\u002F*"}]}]},{type:b,tag:p,props:{},children:[{type:a,value:"Proxy to the configured Policy Reporter Kyverno plugin host URL."}]}]}]}]},{type:a,value:f},{type:b,tag:U,props:{},children:[{type:a,value:aN},{type:b,tag:aO,props:{to:"\u002Fkyverno-plugin\u002F14-api-reference#v1-general-apis"},children:[{type:a,value:"Kyverno Plugin - API Reference"}]},{type:a,value:aP}]}]},dir:"\u002Fen\u002Fui",path:"\u002Fen\u002Fui\u002Fapi-reference",extension:".md",createdAt:aQ,updatedAt:aQ,to:"\u002Fui\u002Fapi-reference"},prev:{title:"Config Reference",path:"\u002Fen\u002Fcore\u002Fconfig-reference",to:"\u002Fcore\u002Fconfig-reference"},next:{title:"Local Development",path:"\u002Fen\u002Fui\u002Fdevelopment",to:"\u002Fui\u002Fdevelopment"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","property","operator",":","string",",","code"," ","true","th","td","\n      ","\n   ","{","}","a",-1,"icon","icon-link","tr","div","nuxt-content-highlight","pre","line-numbers","boolean","language-json","\n    ","200","500","ul","li","Response ",3,"h3","table","thead","Method","API","Description","tbody","\n         ","p","\"message\"","GET","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","Codes",", ","h4","Example","language-bash","function","curl","\"Error Message\"","\n  ","core-apis",2,"Core APIs","push-api","Push API","results-api","Results API","config-api","Config API","proxy-apis","Proxy APIs","policy-reporter","Policy Reporter","kyverno-plugin","Kyverno Plugin","h2","\"validation error: Running as root is not allowed. The fields spec.securityContext.runAsNonRoot, spec.containers[*].securityContext.runAsNonRoot, and spec.initContainers[*].securityContext.runAsNonRoot must be `true`. Rule check-containers[0] failed at path \u002Fspec\u002FsecurityContext\u002FrunAsNonRoot\u002F. Rule check-containers[1] failed at path \u002Fspec\u002Fcontainers\u002F0\u002FsecurityContext\u002F.\"","\"require-run-as-non-root\"","\"check-containers\"","\"warning\"","\"fail\"","\"Pod Security Standards (Restricted)\"","\"2021-12-04T10:13:02Z\"","\"v1\"","\"Pod\"","\"nginx2\"","\"test\"","\"ac4d11f3-0aa8-43f0-8056-98f4eae0d956\""," -X GET ","[","]","\"policyReports\"","\"clusterPolicyReports\"","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","See ","nuxt-link"," for all available endpoints.","2022-08-12T11:30:09.520Z")));