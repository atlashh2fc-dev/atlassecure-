import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import type { Role, TenantContext } from "@atlas360/shared"

const demoRoles = new Set<Role>(["SUPER_ADMIN", "CLIENT_ADMIN", "ANALYST", "READ_ONLY"])

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<{ headers: Record<string, string>; tenant?: TenantContext }>()
    const organizationId = request.headers["x-organization-id"] ?? "org-atlas-demo"
    const roleHeader = request.headers["x-user-role"] ?? "CLIENT_ADMIN"

    if (!demoRoles.has(roleHeader as Role)) {
      throw new UnauthorizedException("Invalid role context")
    }

    request.tenant = {
      organizationId,
      organizationSlug: request.headers["x-organization-slug"] ?? "atlas-demo",
      userId: request.headers["x-user-id"] ?? "user-demo-admin",
      role: roleHeader as Role,
    }
    return true
  }
}
