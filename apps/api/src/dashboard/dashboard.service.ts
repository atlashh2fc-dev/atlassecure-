import { Injectable } from "@nestjs/common"
import {
  AiRecommendation,
  DashboardSummary,
  Incident,
  SecurityAlert,
  TenantContext,
  Vulnerability,
} from "@atlas360/shared"
import {
  mockAlerts,
  mockIncidents,
  mockRecommendations,
  mockVulnerabilities,
} from "../connectors/mock-security-data"

@Injectable()
export class DashboardService {
  getSummary(_tenant: TenantContext): DashboardSummary {
    return {
      securityScore: 82,
      protectedAssets: 486,
      criticalAlerts: 4,
      openVulnerabilities: 37,
      phishingCampaigns: 3,
      recentIncidents: 7,
      riskyUsers: 12,
      mfaCompliance: 94,
      backupHealth: 91,
      generatedAt: new Date().toISOString(),
    }
  }

  getAlerts(tenant: TenantContext): SecurityAlert[] {
    return mockAlerts.filter((alert) => alert.organizationId === tenant.organizationId)
  }

  getVulnerabilities(tenant: TenantContext): Vulnerability[] {
    return mockVulnerabilities.filter(
      (vulnerability) => vulnerability.organizationId === tenant.organizationId,
    )
  }

  getIncidents(tenant: TenantContext): Incident[] {
    return mockIncidents.filter((incident) => incident.organizationId === tenant.organizationId)
  }

  getRecommendations(): AiRecommendation[] {
    return mockRecommendations
  }
}
