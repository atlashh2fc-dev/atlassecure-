import { Module } from "@nestjs/common"
import { RbacGuard } from "./rbac.guard"
import { TenantGuard } from "./tenant.guard"

@Module({
  providers: [TenantGuard, RbacGuard],
  exports: [TenantGuard, RbacGuard],
})
export class AuthModule {}
