window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {staticAssetsBase:"\u002Fpolicy-reporter\u002F_nuxt\u002Fstatic\u002F1663840278",layout:"default",error:m,state:{categories:{en:{"":[{slug:"index",title:"Introduction",to:"\u002F",category:c}],Guide:[{slug:"getting-started",title:"Getting started",category:b,to:"\u002Fguide\u002Fgetting-started"},{slug:"architecture",title:"Architecture",category:b,to:"\u002Fguide\u002Farchitecture"},{slug:"helm-chart-core",title:"Helm Chart",category:b,to:"\u002Fguide\u002Fhelm-chart-core"},{slug:"migration",title:"Migration Guide",category:b,to:"\u002Fguide\u002Fmigration"},{slug:"troubleshooting",title:"Troubleshooting",category:b,to:"\u002Fguide\u002Ftroubleshooting"}],"Policy Reporter":[{slug:"targets",title:"Targets",category:a,to:"\u002Fcore\u002Ftargets"},{slug:"email-reports",title:"E-Mail Reports",category:a,to:"\u002Fcore\u002Femail-reports"},{slug:"report-filter",title:"Report Filter",category:a,to:"\u002Fcore\u002Freport-filter"},{slug:"priority-mapping",title:"Priority Mapping",category:a,to:"\u002Fcore\u002Fpriority-mapping"},{slug:d,title:e,category:a,to:"\u002Fcore\u002Fapi-reference"},{slug:f,title:g,category:a,to:"\u002Fcore\u002Fdevelopment"},{slug:h,title:i,category:a,to:"\u002Fcore\u002Fconfig-reference"}],"Policy Reporter UI":[{slug:d,title:e,category:j,to:"\u002Fui\u002Fapi-reference"},{slug:f,title:g,category:j,to:n},{slug:h,title:i,category:j,to:"\u002Fui\u002Fconfig-reference"}],"Kyverno Plugin":[{slug:d,title:e,category:k,to:"\u002Fkyverno-plugin\u002Fapi-reference"},{slug:f,title:g,category:k,to:"\u002Fkyverno-plugin\u002Fdevelopment"},{slug:h,title:i,category:k,to:"\u002Fkyverno-plugin\u002Fconfig-reference"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"policy-reporter-2.13.0",date:"2022-09-20T08:50:51Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter\u003Cul\u003E\n\u003Cli\u003ENew \u003Ccode\u003Ecertificate\u003C\u002Fcode\u003E config for \u003Ccode\u003Eloki\u003C\u002Fcode\u003E, \u003Ccode\u003Eelasticsearch\u003C\u002Fcode\u003E, \u003Ccode\u003Eteams\u003C\u002Fcode\u003E, \u003Ccode\u003Ewebhook\u003C\u002Fcode\u003E and \u003Ccode\u003Eui\u003C\u002Fcode\u003E, to set the path to your custom certificate for the related client.\u003C\u002Fli\u003E\n\u003Cli\u003ENew \u003Ccode\u003EskipTLS\u003C\u002Fcode\u003E config for \u003Ccode\u003Eloki\u003C\u002Fcode\u003E, \u003Ccode\u003Eelasticsearch\u003C\u002Fcode\u003E, \u003Ccode\u003Eteams\u003C\u002Fcode\u003E, \u003Ccode\u003Ewebhook\u003C\u002Fcode\u003E and \u003Ccode\u003Eui\u003C\u002Fcode\u003E, to skip tls if needed for the given target.\u003C\u002Fli\u003E\n\u003Cli\u003ENew \u003Ccode\u003EsecretRef\u003C\u002Fcode\u003E for targets to reference a secret with the related \u003Ccode\u003Eusername\u003C\u002Fcode\u003E, \u003Ccode\u003Epassword\u003C\u002Fcode\u003E, \u003Ccode\u003Ewebhook\u003C\u002Fcode\u003E, \u003Ccode\u003Ehost\u003C\u002Fcode\u003E, \u003Ccode\u003EaccessKeyID\u003C\u002Fcode\u003E, \u003Ccode\u003EsecretAccessKey\u003C\u002Fcode\u003E information of the given target, instead of configure your credentials directly.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI\u003Cul\u003E\n\u003Cli\u003ENew value \u003Ccode\u003ErefreshInterval\u003C\u002Fcode\u003E to configure the default refresh interval for API polling. Set \u003Ccode\u003E0\u003C\u002Fcode\u003E to disable polling.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter Kyverno Plugin\u003Cul\u003E\n\u003Cli\u003EFix the creation of duplicated results for PolicyReportResults.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.12.0",date:"2022-09-07T16:57:09Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter\u003Cul\u003E\n\u003Cli\u003ENew Helm Chart value to add extra volumes to PolicyReporter deployment [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F186\"\u003E#186\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fpreved911\"\u003Epreved911\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003EHTTP Basic authentication for Elasticsearch targets with \u003Ccode\u003Eusername\u003C\u002Fcode\u003E and \u003Ccode\u003Epassword\u003C\u002Fcode\u003E configuration fields\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Ccode\u003Etarget.slack.customFields\u003C\u002Fcode\u003E map property for Slack pushes to add additional metadata to notifications like clustername\u003C\u002Fli\u003E\n\u003Cli\u003EAdd timestamp to Result REST APIs\u003C\u002Fli\u003E\n\u003Cli\u003EOverwrite the installation target namespace via the new \u003Ccode\u003Eglobal.namespace\u003C\u002Fcode\u003E value.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.11.3",date:"2022-08-26T17:07:27Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter\u003Cul\u003E\n\u003Cli\u003ENew \u003Ccode\u003EemailReports.smtp.secret\u003C\u002Fcode\u003E configuration to use an existing external secret to configure your SMTP connection\u003Cul\u003E\n\u003Cli\u003EYou can set all or a subset of the available keys in your secret: \u003Ccode\u003Ehost\u003C\u002Fcode\u003E, \u003Ccode\u003Eport\u003C\u002Fcode\u003E, \u003Ccode\u003Eusername\u003C\u002Fcode\u003E, \u003Ccode\u003Epassword\u003C\u002Fcode\u003E, \u003Ccode\u003Efrom\u003C\u002Fcode\u003E, \u003Ccode\u003Eencryption\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EKeys available in your secret have a higher priority as your Helm release values.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.11.2",date:"2022-08-25T14:31:00Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter\u003Cul\u003E\n\u003Cli\u003EAdd new Severity values \u003Ccode\u003Einfo\u003C\u002Fcode\u003E and \u003Ccode\u003Ecritical\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate PolicyReport ID generierung\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI\u003Cul\u003E\n\u003Cli\u003EFix Grouping by Policy and Categories\u003C\u002Fli\u003E\n\u003Cli\u003EFix ReverseProxy RequestHost\u003C\u002Fli\u003E\n\u003Cli\u003ENew configuration \u003Ccode\u003Eui.clusterName\u003C\u002Fcode\u003E which is used in the ClusterSelect, if you configure additional Clusters\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter Kyverno Plugin\u003Cul\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Etime\u003C\u002Fcode\u003E property to PolicyReportResults\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.11.1",date:"2022-08-17T13:00:17Z",body:"\u003Cul\u003E\n\u003Cli\u003EPolicy Reporter\u003Cul\u003E\n\u003Cli\u003EFix \u003Ccode\u003ECronJob\u003C\u002Fcode\u003E Resources by [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F178\"\u003E#157\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002FMaxRink\"\u003EMaxRink\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter UI\u003Cul\u003E\n\u003Cli\u003EFix API Proxy for APIs behind ReverseProxy (like NGINX Ingress)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.11.0",date:"2022-07-25T20:02:11Z",body:"\u003Ch1 id=\"2110\"\u003E2.11.0\u003C\u002Fh1\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EHigh Availability support with leaderelection for necessary features like target pushes, to avoid duplicated pushes by multiple instances\u003Cul\u003E\n\u003Cli\u003EAdd new \u003Ccode\u003Erole\u003C\u002Fcode\u003E and \u003Ccode\u003Erolebinding\u003C\u002Fcode\u003E to manage lease objects if leaderelection is enabled\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAdd redis configuration to the Helm Chart for external cache storage\u003C\u002Fli\u003E\n\u003Cli\u003EAdd PodDisruptionBudget for HA Deployments (replicaCount &gt; 1)\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003EskipTLS\u003C\u002Fcode\u003E configuration for MS Teams Webhook\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EHigh Availability support with leaderelection for necessary features like PolicyReport management for blocked resources\u003Cul\u003E\n\u003Cli\u003EAdd new \u003Ccode\u003Erole\u003C\u002Fcode\u003E and \u003Ccode\u003Erolebinding\u003C\u002Fcode\u003E to manage lease objects if leaderelection is enabled\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EAdd PodDisruptionBudget for HA Deployments (replicaCount &gt; 1)\u003C\u002Fli\u003E\n\u003Cli\u003EInternal refactoring for better CRD management\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd redis as possible log storage to support high availability deployments\u003C\u002Fli\u003E\n\u003Cli\u003EAdd PodDisruptionBudget for HA Deployments (replicaCount &gt; 1)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.10.3",date:"2022-07-21T18:09:31Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd new config \u003Ccode\u003Etarget.loki.path\u003C\u002Fcode\u003E to overwrite the deprected prom push API\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.10.2",date:"2022-07-20T09:59:14Z",body:"\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ENew option \u003Ccode\u003Eui.clusters\u003C\u002Fcode\u003E makes it possible to configure additional external Policy Reporter APIs (\u003Ca href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002Fhelm-chart-core#external-clusters\" target=\"_blank\"\u003Edetails\u003C\u002Fa\u003E)\u003C\u002Fli\u003E\n\u003Cli\u003EGeneral UI improvements for loading state and error handling\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.10.1",date:"2022-07-15T18:45:11Z",body:"\u003Cp\u003EPolicy Reporter watches for PolicyReport Resources. It creates Prometheus Metrics and can send rule validation events to different targets like Loki, Elasticsearch, Slack or Discord \u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.10.0",date:"2022-07-11T09:23:11Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EEmail Reports\u003Cul\u003E\n\u003Cli\u003ESend Summary Reports over SMTP to different E-Mails\u003C\u002Fli\u003E\n\u003Cli\u003ESupports channels and filters to send different subsets of Namespaces or Sources to dedicated E-Mails\u003C\u002Fli\u003E\n\u003Cli\u003EReports are generated and send over dedicated CronJobs, this makes it easy to send the reports as often as needed\u003C\u002Fli\u003E\n\u003Cli\u003ECurrently a basic summary and a more detailed violation report is available and can be separatly enabled and configured\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EMetrics\u003Cul\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Emetrics.mode\u003C\u002Fcode\u003E for less or custom metric values, to reduce cardinality\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003EMonitoring\u003Cul\u003E\n\u003Cli\u003EFix Source Column for result tables\u003C\u002Fli\u003E\n\u003Cli\u003EFix Warn counter for ClusterPolicyReport Details\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.9.5",date:"2022-06-30T07:55:39Z",body:"\u003Cp\u003EFix Policy Reporter Version in the Helm Chart values.yaml\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.9.4",date:"2022-06-29T09:52:17Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd \u003Ca target=\"_blank\" href=\"https:\u002F\u002Faws.amazon.com\u002Fkinesis\"\u003EAWS Kinesis\u003C\u002Fa\u003E compatible target\u003C\u002Fli\u003E\n\u003Cli\u003EAdd new Helm value \u003Ccode\u003Eprofiling.enabled\u003C\u002Fcode\u003E to enable pprof profiling, disabled by default\u003C\u002Fli\u003E\n\u003Cli\u003EImproved Informer handling\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.9.3",date:"2022-06-21T11:54:29Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix \u003Ccode\u003Egrafana.dashboards.value\u003C\u002Fcode\u003E type conversion [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fissues\u002F158\"\u003Efix #158\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.9.2",date:"2022-06-20T09:05:33Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Egrafana.dashboards.value\u003C\u002Fcode\u003E value to configure the ConfigMap label value for the Prometheus Operator by [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F157\"\u003E#157\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fstone-z\"\u003Estone-z\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.9.1",date:"2022-06-09T21:59:04Z",body:"\u003Ch1 id=\"291\"\u003E2.9.1\u003C\u002Fh1\u003E\n\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EName Configuration for Target (Channels) to customize UI Labels\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix table search on chip selection\u003C\u002Fli\u003E\n\u003Cli\u003EOrder labels\u003C\u002Fli\u003E\n\u003Cli\u003EReturn 404 Status Code for non existing URL paths\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch1 id=\"290\"\u003E2.9.0\u003C\u002Fh1\u003E\n\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ESQLite Improvement: Use batch insertion for PolicyReportResults\u003C\u002Fli\u003E\n\u003Cli\u003EPolicyReport Informer Update: Use typed informer to improve performance and memory usage\u003C\u002Fli\u003E\n\u003Cli\u003EDrop support for v1alpha1 of the PolicyReport CRD\u003C\u002Fli\u003E\n\u003Cli\u003EServerside Pagination for better Dashboard performance\u003C\u002Fli\u003E\n\u003Cli\u003EConcurrent PolicyReport processing\u003C\u002Fli\u003E\n\u003Cli\u003ENew configuration to use Redis as external result caching store (See the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F04-helm-chart-core\u002F#external-caching-storage\"\u003Edocs\u003C\u002Fa\u003E for details)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EServerside Pagination support\u003C\u002Fli\u003E\n\u003Cli\u003EDynamic Chart sizes\u003C\u002Fli\u003E\n\u003Cli\u003EPolicy Reporter Kyverno Plugin\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter Kyverno Plugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EGenerate Policy Reports for enforcement violations (see the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F04-helm-chart-core#enable-enforce-violation-policyreports-requires-kyverno--170\"\u003Edocs\u003C\u002Fa\u003E for details)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.9.0",date:"2022-06-04T09:56:33Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ESQLite Improvement: Use batch insertion for PolicyReportResults\u003C\u002Fli\u003E\n\u003Cli\u003EPolicyReport Informer Update: Use typed informer to improve performance and memory usage\u003C\u002Fli\u003E\n\u003Cli\u003EDrop support for v1alpha1 of the PolicyReport CRD\u003C\u002Fli\u003E\n\u003Cli\u003EServerside Pagination for better Dashboard performance\u003C\u002Fli\u003E\n\u003Cli\u003EConcurrent PolicyReport processing\u003C\u002Fli\u003E\n\u003Cli\u003ENew configuration to use Redis as external result caching store (See the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F04-helm-chart-core\u002F#external-caching-storage\"\u003Edocs\u003C\u002Fa\u003E for details)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EServerside Pagination support\u003C\u002Fli\u003E\n\u003Cli\u003EDynamic Chart sizes\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter Kyverno Plugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EGenerate Policy Reports for enforcement violations (see the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fguide\u002F04-helm-chart-core#enable-enforce-violation-policyreports-requires-kyverno--170\"\u003Edocs\u003C\u002Fa\u003E for details)\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.8.0",date:"2022-04-30T17:59:25Z",body:"\u003Cp\u003ENew \u003Ccode\u003Efilters\u003C\u002Fcode\u003E property for targets configuration\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Efilter results send to a configured target by exclude and include rules for namesapces, priorities and policies\u003C\u002Fli\u003E\n\u003Cli\u003Esupports wildcards for policies and namespaces\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ENew \u003Ccode\u003Echannels\u003C\u002Fcode\u003E property for targets configuration\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Echannels allow you to define multiple configurations of the same type of target. Thus, in combination with filters, you can route your notifications to different target configurations. Channels have the same configuration properties as the root target configuration.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee the \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fcore\u002F06-targets\"\u003EDocumentation\u003C\u002Fa\u003E for more details and examples.\u003C\u002Fp\u003E\n\u003Cp\u003ENew \u003Cstrong\u003Ewebhook\u003C\u002Fstrong\u003E target\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Ethis target is a simple way to send notifications to custom tools and APIs\u003C\u002Fli\u003E\n\u003Cli\u003Eresults are send as POST requests with a JSON representation of the result\u003C\u002Fli\u003E\n\u003Cli\u003Ethe headers properties allows you to send custom header with the request to allow for example authentication\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.7.1",date:"2022-03-27T12:55:46Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Resource APIVersion to the Results REST APIs\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.7.0",date:"2022-03-20T22:14:16Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EPolicyReport Filter:\u003Cul\u003E\n\u003Cli\u003EPolicyReporter CRD Filter by Namespaces\u003C\u002Fli\u003E\n\u003Cli\u003EDisable ClusterPolicyReport CRD processing\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003ESee \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fcore\u002F09-report-filter\"\u003EReport Filter\u003C\u002Fa\u003E Documentation for details\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.6.3",date:"2022-03-16T23:04:35Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix Debouncer has wrong reference to OldPolicyReport when a result was cached.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.2",date:"2022-03-12T10:53:54Z",body:"\u003Cul\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003EserviceMonitor.relabelings\u003C\u002Fcode\u003E and \u003Ccode\u003EserviceMonitor.metricRelabelings\u003C\u002Fcode\u003E for ServiceMonitor configuration in the \u003Ccode\u003Emonitoring\u003C\u002Fcode\u003E Subchart.\u003C\u002Fli\u003E\n\u003Cli\u003EAdd \u003Ccode\u003Ekyverno.serviceMonitor.relabelings\u003C\u002Fcode\u003E and \u003Ccode\u003Ekyverno.serviceMonitor.metricRelabelings\u003C\u002Fcode\u003E for the KyvernoPlugin ServiceMonitor configuration in the \u003Ccode\u003Emonitoring\u003C\u002Fcode\u003E Subchart.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.8\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.1",date:"2022-03-10T12:10:27Z",body:"\u003Cp\u003EUpdate Policy Reporter UI to v1.3.2\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003ESupport access over Subpaths, e.g. Rancher Reverse Proxy\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EUpdate Policy Reporter Monitoring to v2.1.0\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EFix Failing ClusterPolicyRules Columns of the PolicyReports Dashboard\u003C\u002Fli\u003E\n\u003Cli\u003EAdd Filter to the PolicyReports Dashboard\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.6.0",date:"2022-02-28T13:27:09Z",body:"\u003Cp\u003EAdd seccomp profile support [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F120\"\u003E#120\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Feddycharly\"\u003Eeddycharly\u003C\u002Fa\u003E]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.5.0",date:"2022-02-27T16:47:35Z",body:"\u003Cp\u003ENew Policy Reporter API to get a list of available resources\nNew Filter for Policies, Kinds, Categories and Results APIs\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.4.0",date:"2022-02-25T10:20:05Z",body:"\u003Cp\u003EAdd Support for custom Loki labels\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.3.0",date:"2022-02-22T12:35:05Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F115\"\u003E#115\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F98\"\u003E#98\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EAdd Support for linux\u002Fs390x [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-kyverno-plugin\u002Fpull\u002F13\"\u003E#13\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.2.6",date:"2022-02-17T14:10:56Z",body:"\u003Cp\u003EUse upper case on drop capabilities [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F113\"\u003E#113\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fskuethe\"\u003Eskuethe\u003C\u002Fa\u003E]\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.5",date:"2022-02-17T11:18:32Z",body:"\u003Cp\u003EPolicy Reporter\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter\u002Fpull\u002F110\"\u003E#110\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate Helm Chart with new component versions\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate dependencies\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter UI\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui\u002Fpull\u002F93\"\u003E#93\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate dependencies\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EPolicy Reporter KyvernoPlugin\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EUpdate Go  to 1.17.6 [\u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-kyverno-plugin\u002Fpull\u002F12\"\u003E#12\u003C\u002Fa\u003E by \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Frealshuting\"\u003Erealshuting\u003C\u002Fa\u003E]\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"policy-reporter-2.2.4",date:"2022-02-15T22:11:10Z",body:"\u003Cp\u003EFix PolicyReport Mapper - string casting\u003C\u002Fp\u003E\n"},{name:"policy-reporter-2.2.3",date:"2022-01-28T19:26:41Z",body:"\u003Cp\u003EFix Helm Chart uihost template function.\u003C\u002Fp\u003E\n"}],settings:{title:a,url:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter",defaultDir:c,defaultBranch:"main",filled:l,logo:{light:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-light.png",dark:"https:\u002F\u002Fkyverno.github.io\u002Fpolicy-reporter\u002Fimages\u002Flogo-dark.png"},github:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-docs",githubApi:"https:\u002F\u002Fapi.github.com\u002Frepos\u002Fkyverno\u002Fpolicy-reporter",menuTitle:a,category:c},menu:{open:o},i18n:{routeParams:{}}},serverRendered:l,routePath:n,config:{_app:{basePath:"\u002Fpolicy-reporter\u002F",assetsPath:"\u002Fpolicy-reporter\u002F_nuxt\u002F",cdnURL:m},content:{dbHash:"585376da"}},__i18n:{langs:{}},colorMode:{preference:p,value:p,unknown:l,forced:o}}}("Policy Reporter","Guide","","api-reference","API Reference","development","Local Development","config-reference","Config Reference","Policy Reporter UI","Kyverno Plugin",true,null,"\u002Fui\u002Fdevelopment",false,"system"));