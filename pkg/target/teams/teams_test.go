package teams_test

import (
	"encoding/json"
	"net/http"
	"testing"

	"github.com/stretchr/testify/assert"

	"github.com/kyverno/policy-reporter/pkg/fixtures"
	"github.com/kyverno/policy-reporter/pkg/target"
	"github.com/kyverno/policy-reporter/pkg/target/teams"
)

type testClient struct {
	callback   func(req *http.Request)
	statusCode int
}

func (c testClient) Do(req *http.Request) (*http.Response, error) {
	c.callback(req)

	return &http.Response{
		StatusCode: c.statusCode,
	}, nil
}

func Test_TeamsTarget(t *testing.T) {
	t.Run("Send Complete Result", func(t *testing.T) {
		callback := func(req *http.Request) {
			if contentType := req.Header.Get("Content-Type"); contentType != "application/json; charset=utf-8" {
				t.Errorf("Unexpected Content-Type: %s", contentType)
			}

			if agend := req.Header.Get("User-Agent"); agend != "Policy-Reporter" {
				t.Errorf("Unexpected Host: %s", agend)
			}

			if url := req.URL.String(); url != "http://hook.teams:80" {
				t.Errorf("Unexpected Host: %s", url)
			}

			payload := make(map[string]interface{})

			err := json.NewDecoder(req.Body).Decode(&payload)
			if err != nil {
				t.Fatal(err)
			}
		}

		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{callback, 200},
		})
		client.Send(fixtures.CompleteTargetSendResult)
	})

	t.Run("Send Minimal Result", func(t *testing.T) {
		callback := func(req *http.Request) {
			if contentType := req.Header.Get("Content-Type"); contentType != "application/json; charset=utf-8" {
				t.Errorf("Unexpected Content-Type: %s", contentType)
			}

			if agend := req.Header.Get("User-Agent"); agend != "Policy-Reporter" {
				t.Errorf("Unexpected Host: %s", agend)
			}

			if url := req.URL.String(); url != "http://hook.teams:80" {
				t.Errorf("Unexpected Host: %s", url)
			}

			payload := make(map[string]interface{})

			err := json.NewDecoder(req.Body).Decode(&payload)
			if err != nil {
				t.Fatal(err)
			}
		}

		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{callback, 200},
		})
		client.Send(fixtures.MinimalTargetSendResult)
	})
	t.Run("Send Minimal InfoResult", func(t *testing.T) {
		callback := func(req *http.Request) {
			payload := make(map[string]interface{})

			err := json.NewDecoder(req.Body).Decode(&payload)
			if err != nil {
				t.Fatal(err)
			}
		}

		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{callback, 200},
		})
		client.Send(fixtures.InfoSendResult)
	})
	t.Run("Send Minimal ErrorResult", func(t *testing.T) {
		callback := func(req *http.Request) {
			payload := make(map[string]interface{})

			err := json.NewDecoder(req.Body).Decode(&payload)
			if err != nil {
				t.Fatal(err)
			}
		}

		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{callback, 200},
		})
		client.Send(fixtures.ErrorSendResult)
	})
	t.Run("Send Minimal Debug Result", func(t *testing.T) {
		callback := func(req *http.Request) {
			if contentType := req.Header.Get("Content-Type"); contentType != "application/json; charset=utf-8" {
				t.Errorf("Unexpected Content-Type: %s", contentType)
			}

			if agend := req.Header.Get("User-Agent"); agend != "Policy-Reporter" {
				t.Errorf("Unexpected Host: %s", agend)
			}

			if url := req.URL.String(); url != "http://hook.teams:80" {
				t.Errorf("Unexpected Host: %s", url)
			}

			payload := make(map[string]interface{})

			err := json.NewDecoder(req.Body).Decode(&payload)
			if err != nil {
				t.Fatal(err)
			}
		}

		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{callback, 200},
		})
		client.Send(fixtures.DebugSendResult)
	})
	t.Run("Name", func(t *testing.T) {
		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{},
		})

		assert.Equal(t, "Teams", client.Name())
	})
	t.Run("SupportBatchSend", func(t *testing.T) {
		client := teams.NewClient(teams.Options{
			ClientOptions: target.ClientOptions{
				Name: "Teams",
			},
			Webhook:      "http://hook.teams:80",
			CustomFields: map[string]string{"Cluster": "Name"},
			HTTPClient:   testClient{},
		})

		assert.Equal(t, target.BatchSend, client.Type())
	})
}
