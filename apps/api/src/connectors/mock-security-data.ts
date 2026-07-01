import {
  AiRecommendation,
  Incident,
  IntegrationConnector,
  ProtectedAsset,
  SecurityAlert,
  Vulnerability,
} from "@atlas360/shared"

export const mockAlerts: SecurityAlert[] = [
  {
    id: "alt-1001",
    organizationId: "org-atlas-demo",
    title: "PowerShell encoded command detected on finance endpoint",
    severity: "critical",
    source: "wazuh",
    status: "investigating",
    assetName: "fin-wks-023",
    detectedAt: "2026-07-01T14:28:00.000Z",
  },
  {
    id: "alt-1002",
    organizationId: "org-atlas-demo",
    title: "Impossible travel sign-in pattern",
    severity: "high",
    source: "opensearch",
    status: "open",
    assetName: "m365-identity",
    detectedAt: "2026-07-01T13:55:00.000Z",
  },
]

export const mockAssets: ProtectedAsset[] = [
  {
    id: "ast-001",
    organizationId: "org-atlas-demo",
    hostname: "edge-fw-01",
    owner: "Infraestructura",
    os: "FortiOS 7.4",
    exposure: "internet",
    agentStatus: "healthy",
    lastSeenAt: "2026-07-01T15:20:00.000Z",
  },
  {
    id: "ast-002",
    organizationId: "org-atlas-demo",
    hostname: "erp-db-02",
    owner: "Operaciones",
    os: "Ubuntu Server 24.04",
    exposure: "restricted",
    agentStatus: "warning",
    lastSeenAt: "2026-07-01T14:58:00.000Z",
  },
]

export const mockVulnerabilities: Vulnerability[] = [
  {
    id: "vul-2026-001",
    organizationId: "org-atlas-demo",
    cve: "CVE-2026-23864",
    title: "Unpatched framework denial of service exposure",
    severity: "high",
    cvss: 7.5,
    affectedAssets: 8,
    status: "remediating",
    discoveredAt: "2026-06-29T09:00:00.000Z",
  },
  {
    id: "vul-2026-002",
    organizationId: "org-atlas-demo",
    cve: "CVE-2025-66478",
    title: "Critical RSC protocol patch missing on legacy app",
    severity: "critical",
    cvss: 10,
    affectedAssets: 2,
    status: "open",
    discoveredAt: "2026-06-30T11:10:00.000Z",
  },
]

export const mockIncidents: Incident[] = [
  {
    id: "inc-7781",
    organizationId: "org-atlas-demo",
    title: "Credential stuffing against customer portal",
    severity: "high",
    assignee: "Camila Rojas",
    status: "contained",
    updatedAt: "2026-07-01T12:46:00.000Z",
  },
  {
    id: "inc-7782",
    organizationId: "org-atlas-demo",
    title: "Suspicious mailbox forwarding rule",
    severity: "medium",
    assignee: "Diego Morales",
    status: "triage",
    updatedAt: "2026-07-01T10:15:00.000Z",
  },
]

export const mockIntegrations: IntegrationConnector[] = [
  {
    id: "wazuh",
    name: "Wazuh",
    status: "mock",
    lastSyncAt: "2026-07-01T15:15:00.000Z",
    capabilities: ["alerts", "assets"],
  },
  {
    id: "opensearch",
    name: "OpenSearch",
    status: "mock",
    lastSyncAt: "2026-07-01T15:12:00.000Z",
    capabilities: ["search", "alerts"],
  },
  {
    id: "openvas",
    name: "OpenVAS / Greenbone",
    status: "mock",
    lastSyncAt: "2026-07-01T14:42:00.000Z",
    capabilities: ["vulnerabilities"],
  },
  {
    id: "gophish",
    name: "GoPhish",
    status: "mock",
    lastSyncAt: "2026-07-01T13:20:00.000Z",
    capabilities: ["phishing"],
  },
  {
    id: "n8n",
    name: "n8n",
    status: "mock",
    lastSyncAt: "2026-07-01T12:30:00.000Z",
    capabilities: ["workflows", "incidents"],
  },
]

export const mockRecommendations: AiRecommendation[] = [
  {
    id: "rec-001",
    title: "Priorizar parcheo de aplicaciones Next.js expuestas a internet",
    priority: "urgent",
    rationale:
      "Dos activos productivos mantienen vulnerabilidades críticas con explotación remota posible.",
    estimatedImpact: "Reduce riesgo de compromiso inicial en 28 puntos.",
  },
  {
    id: "rec-002",
    title: "Forzar MFA resistente a phishing para administradores",
    priority: "high",
    rationale:
      "El cumplimiento MFA global es alto, pero 3 cuentas privilegiadas siguen usando OTP.",
    estimatedImpact: "Disminuye riesgo de apropiación de cuentas críticas.",
  },
]
