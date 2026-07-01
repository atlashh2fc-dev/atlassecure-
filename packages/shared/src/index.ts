export const ROLES = ["SUPER_ADMIN", "CLIENT_ADMIN", "ANALYST", "READ_ONLY"] as const

export type Role = (typeof ROLES)[number]

export type Permission =
  | "organizations:read"
  | "organizations:write"
  | "users:read"
  | "users:write"
  | "security:read"
  | "security:write"
  | "reports:read"
  | "reports:write"
  | "integrations:read"
  | "integrations:write"

export const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  SUPER_ADMIN: [
    "organizations:read",
    "organizations:write",
    "users:read",
    "users:write",
    "security:read",
    "security:write",
    "reports:read",
    "reports:write",
    "integrations:read",
    "integrations:write",
  ],
  CLIENT_ADMIN: [
    "organizations:read",
    "users:read",
    "users:write",
    "security:read",
    "security:write",
    "reports:read",
    "reports:write",
    "integrations:read",
    "integrations:write",
  ],
  ANALYST: [
    "organizations:read",
    "users:read",
    "security:read",
    "security:write",
    "reports:read",
    "integrations:read",
  ],
  READ_ONLY: [
    "organizations:read",
    "users:read",
    "security:read",
    "reports:read",
    "integrations:read",
  ],
}

export function roleHasPermission(role: Role, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission)
}

export type TenantContext = {
  organizationId: string
  organizationSlug: string
  userId: string
  role: Role
}

export type SecuritySeverity = "critical" | "high" | "medium" | "low" | "informational"

export type ConnectorType = "wazuh" | "opensearch" | "gophish" | "n8n" | "openvas" | "custom"

export type ConnectorStatus = "connected" | "degraded" | "disconnected" | "mock"

export type IntegrationConnector = {
  id: ConnectorType
  name: string
  status: ConnectorStatus
  lastSyncAt: string
  capabilities: ConnectorCapability[]
}

export type ConnectorCapability =
  | "alerts"
  | "assets"
  | "vulnerabilities"
  | "incidents"
  | "phishing"
  | "workflows"
  | "search"
  | "backups"

export type ConnectorHealth = {
  connectorId: ConnectorType
  status: ConnectorStatus
  latencyMs: number
  message: string
  checkedAt: string
}

export interface SecurityDataConnector {
  readonly id: ConnectorType
  readonly name: string
  getHealth(tenant: TenantContext): Promise<ConnectorHealth>
  getAlerts(tenant: TenantContext): Promise<SecurityAlert[]>
  getAssets(tenant: TenantContext): Promise<ProtectedAsset[]>
  getVulnerabilities(tenant: TenantContext): Promise<Vulnerability[]>
}

export type DashboardSummary = {
  securityScore: number
  protectedAssets: number
  criticalAlerts: number
  openVulnerabilities: number
  phishingCampaigns: number
  recentIncidents: number
  riskyUsers: number
  mfaCompliance: number
  backupHealth: number
  generatedAt: string
}

export type SecurityAlert = {
  id: string
  organizationId: string
  title: string
  severity: SecuritySeverity
  source: ConnectorType
  status: "open" | "investigating" | "contained" | "resolved"
  assetName: string
  detectedAt: string
}

export type ProtectedAsset = {
  id: string
  organizationId: string
  hostname: string
  owner: string
  os: string
  exposure: "internet" | "internal" | "restricted"
  agentStatus: "healthy" | "warning" | "offline"
  lastSeenAt: string
}

export type Vulnerability = {
  id: string
  organizationId: string
  cve: string
  title: string
  severity: SecuritySeverity
  cvss: number
  affectedAssets: number
  status: "open" | "accepted" | "remediating" | "closed"
  discoveredAt: string
}

export type Incident = {
  id: string
  organizationId: string
  title: string
  severity: SecuritySeverity
  assignee: string
  status: "new" | "triage" | "contained" | "postmortem" | "closed"
  updatedAt: string
}

export type AiRecommendation = {
  id: string
  title: string
  priority: "urgent" | "high" | "normal"
  rationale: string
  estimatedImpact: string
}
