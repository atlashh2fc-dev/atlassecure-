import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import type { TenantContext } from "@atlas360/shared"

export const CurrentTenant = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): TenantContext => {
    const request = ctx.switchToHttp().getRequest<{ tenant: TenantContext }>()
    return request.tenant
  },
)
