import { Controller, Get, UseGuards } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { RequirePermissions } from "../auth/permissions.decorator"
import { RbacGuard } from "../auth/rbac.guard"
import { TenantGuard } from "../auth/tenant.guard"
import { UsersService } from "./users.service"

@ApiTags("Users")
@Controller({ path: "users", version: "1" })
@UseGuards(TenantGuard, RbacGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @RequirePermissions("users:read")
  list() {
    return this.usersService.list()
  }
}
