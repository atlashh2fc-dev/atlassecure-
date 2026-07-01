import { Injectable } from "@nestjs/common"
import {
  ConnectorHealth,
  ConnectorType,
  SecurityDataConnector,
  TenantContext,
} from "@atlas360/shared"
import { MockSecurityDataConnector } from "./security-data.connector"

@Injectable()
export class ConnectorsService {
  private readonly connectors = new Map<ConnectorType, SecurityDataConnector>([
    ["wazuh", new MockSecurityDataConnector("wazuh", "Wazuh")],
    ["opensearch", new MockSecurityDataConnector("opensearch", "OpenSearch")],
    ["openvas", new MockSecurityDataConnector("openvas", "OpenVAS / Greenbone")],
    ["gophish", new MockSecurityDataConnector("gophish", "GoPhish")],
    ["n8n", new MockSecurityDataConnector("n8n", "n8n")],
  ])

  list(): SecurityDataConnector[] {
    return Array.from(this.connectors.values())
  }

  async health(tenant: TenantContext): Promise<ConnectorHealth[]> {
    return Promise.all(this.list().map((connector) => connector.getHealth(tenant)))
  }
}
