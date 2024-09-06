package listener

import (
	"sync"

	"github.com/kyverno/policy-reporter/pkg/crd/api/policyreport/v1alpha2"
	"github.com/kyverno/policy-reporter/pkg/helper"
	"github.com/kyverno/policy-reporter/pkg/report"
	"github.com/kyverno/policy-reporter/pkg/target"
)

const SendSyncResults = "send_sync_results_listener"

func NewSendSyncResultsListener(targets *target.Collection) report.SyncResultsListener {
	return func(rep v1alpha2.ReportInterface) {
		clients := targets.SyncClients()
		if len(clients) == 0 {
			return
		}

		wg := &sync.WaitGroup{}
		wg.Add(len(clients))

		for _, t := range clients {
			go func(target target.Client, re v1alpha2.ReportInterface) {
				defer wg.Done()

				filtered := helper.Filter(re.GetResults(), func(result v1alpha2.PolicyReportResult) bool {
					return target.Validate(re, result)
				})

				target.BatchSend(re, filtered)
			}(t, rep)
		}

		wg.Wait()
	}
}
