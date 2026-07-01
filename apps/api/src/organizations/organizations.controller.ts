import { Controller, Get, UseGuards } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { RequirePermissions } from "../auth/permissions.decorator"
import { RbacGuard } from "../auth/rbac.guard"
import { TenantGuard } from "../auth/tenant.guard"
import { OrganizationsService } from "./organizations.service"

@ApiTags("Organizations")
@Controller({ path: "organizations", version: "1" })
@UseGuards(TenantGuard, RbacGuard)
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  @RequirePermissions("organizations:read")
  list() {
    return this.organizationsService.list()
  }
}
