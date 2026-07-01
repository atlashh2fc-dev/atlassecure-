import type {
  AiRecommendation,
  DashboardSummary,
  Incident,
  IntegrationConnector,
  ProtectedAsset,
  SecurityAlert,
  Vulnerability,
} from "@atlas360/shared"

export const summary: DashboardSummary = {
  securityScore: 82,
  protectedAssets: 486,
  criticalAlerts: 4,
  openVulnerabilities: 37,
  phishingCampaigns: 3,
  recentIncidents: 7,
  riskyUsers: 12,
  mfaCompliance: 94,
  backupHealth: 91,
  generatedAt: "2026-07-01T15:30:00.000Z",
}

export const organizations = [
  {
    id: "org-atlas-demo",
    name: "Andes Retail Group",
    slug: "andes-retail",
    sector: "Retail",
    status: "Activo",
    score: 82,
    assets: 486,
    users: 1280,
    monthlyRisk: "-7%",
  },
  {
    id: "org-pacific-bank",
    name: "Pacific Bank",
    slug: "pacific-bank",
    sector: "Finanzas",
    status: "Onboarding",
    score: 76,
    assets: 214,
    users: 620,
    monthlyRisk: "-3%",
  },
  {
    id: "org-norte-energy",
    name: "Norte Energy",
    slug: "norte-energy",
    sector: "Energia",
    status: "Activo",
    score: 88,
    assets: 752,
    users: 1840,
    monthlyRisk: "-11%",
  },
]

export const assets: ProtectedAsset[] = [
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
  {
    id: "ast-003",
    organizationId: "org-atlas-demo",
    hostname: "fin-wks-023",
    owner: "Finanzas",
    os: "Windows 11 Enterprise",
    exposure: "internal",
    agentStatus: "healthy",
    lastSeenAt: "2026-07-01T15:12:00.000Z",
  },
]

export const users = [
  {
    id: "usr-001",
    name: "Mariana Soto",
    email: "mariana.soto@andesretail.example",
    role: "Cliente Admin",
    mfa: "FIDO2",
    risk: 12,
    status: "Activo",
  },
  {
    id: "usr-002",
    name: "Tomas Fuentes",
    email: "tomas.fuentes@andesretail.example",
    role: "Analista",
    mfa: "TOTP",
    risk: 18,
    status: "Activo",
  },
  {
    id: "usr-003",
    name: "Valentina Perez",
    email: "valentina.perez@andesretail.example",
    role: "Solo Lectura",
    mfa: "Pendiente",
    risk: 67,
    status: "Riesgo alto",
  },
]

export const alerts: SecurityAlert[] = [
  {
    id: "alt-1001",
    organizationId: "org-atlas-demo",
    title: "PowerShell encoded command detected",
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
  {
    id: "alt-1003",
    organizationId: "org-atlas-demo",
    title: "Suspicious outbound DNS tunneling",
    severity: "medium",
    source: "opensearch",
    status: "contained",
    assetName: "branch-pos-117",
    detectedAt: "2026-07-01T11:42:00.000Z",
  },
]

export const vulnerabilities: Vulnerability[] = [
  {
    id: "vul-2026-001",
    organizationId: "org-atlas-demo",
    cve: "CVE-2026-23864",
    title: "Framework DoS exposure on public portal",
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
    title: "Critical RSC protocol patch missing",
    severity: "critical",
    cvss: 10,
    affectedAssets: 2,
    status: "open",
    discoveredAt: "2026-06-30T11:10:00.000Z",
  },
  {
    id: "vul-2026-003",
    organizationId: "org-atlas-demo",
    cve: "CVE-2025-29927",
    title: "Middleware authorization bypass exposure",
    severity: "critical",
    cvss: 9.1,
    affectedAssets: 1,
    status: "open",
    discoveredAt: "2026-06-28T18:25:00.000Z",
  },
]

export const incidents: Incident[] = [
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

export const integrations: IntegrationConnector[] = [
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

export const recommendations: AiRecommendation[] = [
  {
    id: "rec-001",
    title: "Priorizar parcheo de aplicaciones Next.js expuestas",
    priority: "urgent",
    rationale:
      "Dos activos productivos mantienen vulnerabilidades críticas con explotación remota posible.",
    estimatedImpact: "Reduce riesgo de compromiso inicial en 28 puntos.",
  },
  {
    id: "rec-002",
    title: "Forzar MFA resistente a phishing para administradores",
    priority: "high",
    rationale: "Tres cuentas privilegiadas siguen usando factores OTP susceptibles a phishing.",
    estimatedImpact: "Disminuye riesgo de apropiación de cuentas críticas.",
  },
  {
    id: "rec-003",
    title: "Aislar segmentos POS con alertas DNS recurrentes",
    priority: "normal",
    rationale: "El mismo patrón de DNS anómalo se repitió en dos tiendas durante 48 horas.",
    estimatedImpact: "Limita movimiento lateral y reduce ruido operativo.",
  },
]

export const reports = [
  {
    id: "rep-001",
    title: "Executive Security Brief",
    period: "Junio 2026",
    status: "Listo",
    owner: "SOC",
  },
  {
    id: "rep-002",
    title: "PCI-DSS Control Mapping",
    period: "Q2 2026",
    status: "En revision",
    owner: "GRC",
  },
  {
    id: "rep-003",
    title: "Phishing Resilience",
    period: "Junio 2026",
    status: "Programado",
    owner: "Awareness",
  },
]
