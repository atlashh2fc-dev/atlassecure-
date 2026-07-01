import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common"
import { Reflector } from "@nestjs/core"
import { Permission, roleHasPermission, TenantContext } from "@atlas360/shared"
import { PERMISSIONS_KEY } from "./permissions.decorator"

@Injectable()
export class RbacGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.getAllAndOverride<Permission[]>(PERMISSIONS_KEY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (!permissions?.length) {
      return true
    }

    const request = context.switchToHttp().getRequest<{ tenant?: TenantContext }>()
    const tenant = request.tenant

    if (!tenant || permissions.some((permission) => !roleHasPermission(tenant.role, permission))) {
      throw new ForbiddenException("Insufficient role permissions")
    }

    return true
  }
}
