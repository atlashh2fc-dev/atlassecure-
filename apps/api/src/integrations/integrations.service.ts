import { Injectable } from "@nestjs/common"
import { ConnectorHealth, IntegrationConnector, TenantContext } from "@atlas360/shared"
import { ConnectorsService } from "../connectors/connectors.service"
import { mockIntegrations } from "../connectors/mock-security-data"

@Injectable()
export class IntegrationsService {
  constructor(private readonly connectorsService: ConnectorsService) {}

  list(_tenant: TenantContext): IntegrationConnector[] {
    return mockIntegrations
  }

  health(tenant: TenantContext): Promise<ConnectorHealth[]> {
    return this.connectorsService.health(tenant)
  }
}
