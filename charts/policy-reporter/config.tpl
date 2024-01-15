targets:
  loki:
    {{- include "target.loki" .Values.target.loki | nindent 4 }}
    {{- if and .Values.target.loki .Values.target.loki.channels }}
    channels:
      {{- range .Values.target.loki.channels }}
      -
      {{- include "target.loki" . | nindent 8 }}
      {{- end }}
    {{- end }}

  elasticsearch:
    {{- include "target.elasticsearch" .Values.target.elasticsearch | nindent 4 }}
    {{- if and .Values.target.elasticsearch .Values.target.elasticsearch.channels }}
    channels:
      {{- range .Values.target.elasticsearch.channels }}
      -
      {{- include "target.elasticsearch" . | nindent 8 }}
      {{- end }}
    {{- end }}

  slack:
    {{- include "target.slack" .Values.target.slack | nindent 4 }}
    {{- if and .Values.target.slack .Values.target.slack.channels }}
    channels:
      {{- range .Values.target.slack.channels }}
      -
      {{- include "target.slack" . | nindent 8 }}
      {{- end }}
    {{- end }}

  discord:
    {{- include "target.webhook" .Values.target.discord | nindent 4 }}
    {{- if and .Values.target.discord .Values.target.discord.channels }}
    channels:
      {{- range .Values.target.discord.channels }}
      -
      {{- include "target.webhook" . | nindent 8 }}
      {{- end }}
    {{- end }}

  teams:
    {{- include "target.webhook" .Values.target.teams | nindent 4 }}
    {{- if and .Values.target.teams .Values.target.teams.channels }}
    channels:
      {{- range .Values.target.teams.channels }}
      -
      {{- include "target.webhook" . | nindent 8 }}
      {{- end }}
    {{- end }}

  webhook:
    {{- include "target.webhook" .Values.target.webhook | nindent 4 }}
    {{- if and .Values.target.webhook .Values.target.webhook.channels }}
    channels:
      {{- range .Values.target.webhook.channels }}
      -
      {{- include "target.webhook" . | nindent 8 }}
      {{- end }}
    {{- end }}

  telegram:
    {{- include "target.telegram" .Values.target.telegram | nindent 4 }}
    {{- if and .Values.target.telegram .Values.target.telegram.channels }}
    channels:
      {{- range .Values.target.telegram.channels }}
      -
      {{- include "target.telegram" . | nindent 8 }}
      {{- end }}
    {{- end }}

  googleChat:
    {{- include "target.webhook" .Values.target.googleChat | nindent 4 }}
    {{- if and .Values.target.webhook .Values.target.googleChat.channels }}
    channels:
      {{- range .Values.target.googleChat.channels }}
      -
      {{- include "target.webhook" . | nindent 8 }}
      {{- end }}
    {{- end }}

  s3:
    {{- include "target.s3" .Values.target.s3 | nindent 4 }}
    {{- if and .Values.target.s3 .Values.target.s3.channels }}
    channels:
      {{- range .Values.target.s3.channels }}
      -
      {{- include "target.s3" . | nindent 8 }}
      {{- end }}
    {{- end }}

  kinesis:
    {{- include "target.kinesis" .Values.target.kinesis | nindent 4 }}
    {{- if and .Values.target.kinesis .Values.target.kinesis.channels }}
    channels:
      {{- range .Values.target.kinesis.channels }}
      -
      {{- include "target.kinesis" . | nindent 8 }}
      {{- end }}
    {{- end }}

  securityHub:
    {{- include "target.securityhub" .Values.target.securityHub | nindent 4 }}
    {{- if and .Values.target.securityHub .Values.target.securityHub.channels }}
    channels:
      {{- range .Values.target.securityHub.channels }}
      -
      {{- include "target.securityhub" . | nindent 8 }}
      {{- end }}
    {{- end }}

  gcs:
    {{- include "target.gcs" .Values.target.gcs | nindent 4 }}
    {{- if and .Values.target.gcs .Values.target.gcs.channels }}
    channels:
      {{- range .Values.target.gcs.channels }}
      -
      {{- include "target.gcs" . | nindent 8 }}
      {{- end }}
    {{- end }}

{{- with .Values.policyPriorities }}
priorityMap:
  {{- toYaml . | nindent 2 }}
{{- end }}

worker: {{ .Values.worker }}

metrics:
  mode: {{ .Values.metrics.mode }}
  {{- with .Values.metrics.filter }}
  filter:
    {{- toYaml . | nindent 4 }}
  {{- end }}
  {{- with .Values.metrics.customLabels }}
  customLabels:
    {{- toYaml . | nindent 4 }}
  {{- end }}

reportFilter:
  namespaces:
    {{- with .Values.reportFilter.namespaces.include }}
    include:
      {{- toYaml . | nindent 6 }}
    {{- end }}
    {{- with .Values.reportFilter.namespaces.exclude }}
    exclude:
      {{- toYaml . | nindent 6 }}
    {{- end }}
  clusterReports:
    disabled: {{ .Values.reportFilter.clusterReports.disabled }}

leaderElection:
  enabled: {{ or .Values.leaderElection.enabled (gt (int .Values.replicaCount) 1) }}
  releaseOnCancel: {{ .Values.leaderElection.releaseOnCancel }}
  leaseDuration: {{ .Values.leaderElection.leaseDuration }}
  renewDeadline: {{ .Values.leaderElection.renewDeadline }}
  retryPeriod: {{ .Values.leaderElection.retryPeriod }}

{{- with .Values.redis }}
redis:
  {{- toYaml . | nindent 2 }}
{{- end }}

logging:
  encoding: {{ .Values.logging.encoding }}
  logLevel: {{ include "policyreporter.logLevel" . }}
  development: {{ .Values.logging.development }}

api:
  logging: {{ .Values.api.logging }}
  basicAuth:
    username: {{ .Values.global.basicAuth.username }}
    password: {{ .Values.global.basicAuth.password }}
    secretRef: {{ .Values.global.basicAuth.secretRef }}

database:
  type: {{ .Values.database.type }}
  database: {{ .Values.database.database }}
  username: {{ .Values.database.username }}
  password: {{ .Values.database.password }}
  host: {{ .Values.database.host }}
  enableSSL: {{ .Values.database.enableSSL }}
  dsn: {{ .Values.database.dsn }}
  secretRef: {{ .Values.database.secretRef }}
  mountedSecret: {{ .Values.database.mountedSecret }}
