import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common"

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name)

  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest<{ method: string; url: string }>()
    this.logger.log(`${request.method} ${request.url}`)
    return next.handle()
  }
}
