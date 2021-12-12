window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){return {staticAssetsBase:"\u002Fpolicy-reporter\u002F_nuxt\u002Fstatic\u002F1639352313",layout:"default",error:l,state:{categories:{en:{"":[{slug:"index",title:"Introduction",to:"\u002F",category:e}],Guide:[{slug:"02-getting-started",title:"Getting started",category:d,to:"\u002Fguide\u002F02-getting-started"},{slug:"03-architecture",title:"Architecture",category:d,to:"\u002Fguide\u002F03-architecture"},{slug:"04-helm-chart-core",title:"Helm Chart",category:d,to:"\u002Fguide\u002F04-helm-chart-core"},{slug:"05-migration",title:"Migration Guide",category:d,to:m}],"Policy Reporter":[{slug:"06-targets",title:"Targets",category:b,to:"\u002Fcore\u002F06-targets"},{slug:"07-api-reference",title:f,category:b,to:"\u002Fcore\u002F07-api-reference"},{slug:"08-priority-mapping",title:"Priority Mapping",category:b,to:"\u002Fcore\u002F08-priority-mapping"},{slug:"09-development",title:g,category:b,to:"\u002Fcore\u002F09-development"},{slug:"10-config-reference",title:h,category:b,to:"\u002Fcore\u002F10-config-reference"}],"Policy Reporter UI":[{slug:"11-api-reference",title:f,category:i,to:"\u002Fui\u002F11-api-reference"},{slug:"12-development",title:g,category:i,to:"\u002Fui\u002F12-development"},{slug:"13-config-reference",title:h,category:i,to:"\u002Fui\u002F13-config-reference"}],"Kyverno Plugin":[{slug:"14-api-reference",title:f,category:j,to:"\u002Fkyverno-plugin\u002F14-api-reference"},{slug:"15-development",title:g,category:j,to:"\u002Fkyverno-plugin\u002F15-development"},{slug:"16-config-reference",title:h,category:j,to:"\u002Fkyverno-plugin\u002F16-config-reference"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"policy-reporter-1.12.6",date:"2021-11-11T10:25:56Z",body:c},{name:"policy-reporter-1.12.5",date:"2021-10-21T20:46:20Z",body:c},{name:"policy-reporter-1.12.4",date:"2021-10-19T08:42:05Z",body:c},{name:"policy-reporter-1.12.3",date:"2021-10-18T20:31:15Z",body:c},{name:"policy-reporter-1.12.2",date:"2021-10-18T16:41:40Z",body:c},{name:"policy-reporter-1.12.0",date:"2021-10-13T20:32:17Z",body:a},{name:"policy-reporter-1.11.0",date:"2021-09-29T21:42:15Z",body:a},{name:"policy-reporter-1.10.1",date:"2021-09-29T16:44:20Z",body:a},{name:"policy-reporter-1.10.0",date:"2021-09-27T08:11:53Z",body:"\u003Cul\u003E\n\u003Cli\u003ECurrent and all new versions of all components are now hosted in the Github Container Registry alongside the Kyverno images\u003C\u002Fli\u003E\n\u003Cli\u003EUpdated the Go Verison of all Components to Go 1.17\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI Filters are now added as GET Parameters which makes filtering shareable over links\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"Image Registry Workflow",date:"2021-09-25T08:55:32Z",body:"\u003Cp\u003EHost Policy Reporter Images on GitHub Container Registry\u003C\u002Fp\u003E\n"},{name:"policy-reporter-1.9.4",date:"2021-09-16T20:27:02Z",body:a},{name:"policy-reporter-1.9.3",date:"2021-09-15T13:14:59Z",body:a},{name:"policy-reporter-1.9.2",date:"2021-09-09T19:58:51Z",body:"\u003Cul\u003E\n\u003Cli\u003EImplement NetworkPolicy for Policy Reporter and related Components [#68 by windowsrefund]\u003C\u002Fli\u003E\n\u003Cli\u003ECustomize liveness- and readinessProbe for Policy Reporter [#67 by windowsrefund]\u003C\u002Fli\u003E\n\u003Cli\u003EAdd additional egress rules to kyvernoPlugin and UI subchart with networkPolicy.egress\u003C\u002Fli\u003E\n\u003Cli\u003EConfigure the Kubernetes API Port for NetworkPolicy with networkPolicy.kubernetesApiPort\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-1.9.1",date:"2021-09-09T19:01:42Z",body:a},{name:"policy-reporter-1.9.0",date:"2021-09-08T22:14:57Z",body:a},{name:"policy-reporter-1.8.10",date:"2021-09-03T16:20:09Z",body:a},{name:"policy-reporter-1.8.9",date:"2021-08-30T13:33:13Z",body:a},{name:"policy-reporter-1.8.8",date:"2021-08-20T09:36:44Z",body:"\u003Cul\u003E\n\u003Cli\u003EUpdate Policy Reporter UI to 0.14.0\u003Cul\u003E\n\u003Cli\u003EColored Diagrams\u003C\u002Fli\u003E\n\u003Cli\u003ESupport SubPath Configuration\u003C\u002Fli\u003E\n\u003Cli\u003EValidation for Policy Selection\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003ERestart CRD Watches when no CRDs are found\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate Ingress Resource in the UI Subchart\u003Cul\u003E\n\u003Cli\u003ESupport for networking.k8s.io\u002Fv1, networking.k8s.io\u002Fv1beta1 and extensions\u002Fv1beta1 depending on the Kubernetes Version\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAllow to override namespace for serviceMonitor [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F57\"\u003E#57\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002FIssif\"\u003EIssif\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cimg width=\"1503\" alt=\"Bildschirmfoto 2021-08-20 um 10 57 06\" src=\"https:\u002F\u002Fuser-images.githubusercontent.com\u002F16627596\u002F130250751-8bad9bf5-d867-44b2-acf8-fcdb8f0efc28.png\"\u003E\n\n\u003Cimg width=\"1497\" alt=\"Bildschirmfoto 2021-08-20 um 16 42 57\" src=\"https:\u002F\u002Fuser-images.githubusercontent.com\u002F16627596\u002F130250964-1578bd49-deb4-4af0-9381-b6b8fe6cfad7.png\"\u003E\n\n"},{name:"policy-reporter-1.8.7",date:"2021-08-20T08:51:23Z",body:a},{name:"policy-reporter-1.8.6",date:"2021-08-09T18:53:43Z",body:a},{name:"policy-reporter-1.8.5",date:"2021-08-06T10:27:34Z",body:a},{name:"policy-reporter-1.8.4",date:"2021-07-23T08:19:40Z",body:void 0},{name:"policy-reporter-1.8.3",date:"2021-06-28T17:15:26Z",body:a},{name:"policy-reporter-1.8.2",date:"2021-06-27T13:22:42Z",body:a},{name:"policy-reporter-1.8.1",date:"2021-06-27T10:12:08Z",body:a},{name:"policy-reporter-1.7.3",date:"2021-06-10T10:21:45Z",body:a},{name:"policy-reporter-1.7.2",date:"2021-06-08T15:08:51Z",body:a},{name:"policy-reporter-1.7.1",date:"2021-05-31T11:49:09Z",body:a},{name:"policy-reporter-1.7.0",date:"2021-05-29T08:57:33Z",body:a},{name:"policy-reporter-1.6.2",date:"2021-05-27T07:49:26Z",body:a}],settings:{title:b,url:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter",defaultDir:e,defaultBranch:"main",filled:k,logo:{light:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-light.png",dark:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-dark.png"},github:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-docs",githubApi:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Fkyverno\u002Fpolicy-reporter",menuTitle:b,category:e},menu:{open:n},i18n:{routeParams:{}}},serverRendered:k,routePath:m,config:{_app:{basePath:"\u002Fpolicy-reporter\u002F",assetsPath:"\u002Fpolicy-reporter\u002F_nuxt\u002F",cdnURL:l},content:{dbHash:"404c0125"}},__i18n:{langs:{}},colorMode:{preference:o,value:o,unknown:k,forced:n}}}("\u003Cp\u003EK8s PolicyReporter watches for wgpolicyk8s.io\u002Fv1alpha1.PolicyReport resources. It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord \u003C\u002Fp\u003E\n","Policy Reporter","\u003Cp\u003EPolicy Reporter watches for PolicyReport Resources. It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord \u003C\u002Fp\u003E\n","Guide","","API Reference","Local Development","Config Reference","Policy Reporter UI","Kyverno Plugin",true,null,"\u002Fguide\u002F05-migration",false,"system"));