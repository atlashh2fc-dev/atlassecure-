import {
  ConnectorHealth,
  ConnectorType,
  ProtectedAsset,
  SecurityAlert,
  SecurityDataConnector,
  TenantContext,
  Vulnerability,
} from "@atlas360/shared"
import { mockAlerts, mockAssets, mockVulnerabilities } from "./mock-security-data"

export class MockSecurityDataConnector implements SecurityDataConnector {
  constructor(
    readonly id: ConnectorType,
    readonly name: string,
  ) {}

  async getHealth(_tenant: TenantContext): Promise<ConnectorHealth> {
    return {
      connectorId: this.id,
      status: "mock",
      latencyMs: 32,
      message: `${this.name} mock adapter ready`,
      checkedAt: new Date().toISOString(),
    }
  }

  async getAlerts(tenant: TenantContext): Promise<SecurityAlert[]> {
    return mockAlerts.filter((alert) => alert.organizationId === tenant.organizationId)
  }

  async getAssets(tenant: TenantContext): Promise<ProtectedAsset[]> {
    return mockAssets.filter((asset) => asset.organizationId === tenant.organizationId)
  }

  async getVulnerabilities(tenant: TenantContext): Promise<Vulnerability[]> {
    return mockVulnerabilities.filter(
      (vulnerability) => vulnerability.organizationId === tenant.organizationId,
    )
  }
}
