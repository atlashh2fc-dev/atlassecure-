import { Controller, Get, UseGuards } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import type { TenantContext } from "@atlas360/shared"
import { CurrentTenant } from "../auth/current-tenant.decorator"
import { RequirePermissions } from "../auth/permissions.decorator"
import { RbacGuard } from "../auth/rbac.guard"
import { TenantGuard } from "../auth/tenant.guard"
import { DashboardService } from "./dashboard.service"

@ApiTags("Dashboard")
@Controller({ path: "dashboard", version: "1" })
@UseGuards(TenantGuard, RbacGuard)
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get("summary")
  @RequirePermissions("security:read")
  getSummary(@CurrentTenant() tenant: TenantContext) {
    return this.dashboardService.getSummary(tenant)
  }

  @Get("alerts")
  @RequirePermissions("security:read")
  getAlerts(@CurrentTenant() tenant: TenantContext) {
    return this.dashboardService.getAlerts(tenant)
  }

  @Get("vulnerabilities")
  @RequirePermissions("security:read")
  getVulnerabilities(@CurrentTenant() tenant: TenantContext) {
    return this.dashboardService.getVulnerabilities(tenant)
  }

  @Get("incidents")
  @RequirePermissions("security:read")
  getIncidents(@CurrentTenant() tenant: TenantContext) {
    return this.dashboardService.getIncidents(tenant)
  }

  @Get("recommendations")
  @RequirePermissions("security:read")
  getRecommendations() {
    return this.dashboardService.getRecommendations()
  }
}
