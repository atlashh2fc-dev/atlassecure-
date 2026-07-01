import { Controller, Get, UseGuards } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import type { TenantContext } from "@atlas360/shared"
import { CurrentTenant } from "../auth/current-tenant.decorator"
import { RequirePermissions } from "../auth/permissions.decorator"
import { RbacGuard } from "../auth/rbac.guard"
import { TenantGuard } from "../auth/tenant.guard"
import { IntegrationsService } from "./integrations.service"

@ApiTags("Integrations")
@Controller({ path: "integrations", version: "1" })
@UseGuards(TenantGuard, RbacGuard)
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Get()
  @RequirePermissions("integrations:read")
  list(@CurrentTenant() tenant: TenantContext) {
    return this.integrationsService.list(tenant)
  }

  @Get("health")
  @RequirePermissions("integrations:read")
  health(@CurrentTenant() tenant: TenantContext) {
    return this.integrationsService.health(tenant)
  }
}
