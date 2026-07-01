import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common"

type HttpReply = {
  status: (code: number) => {
    send: (body: unknown) => void
  }
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name)

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<HttpReply>()
    const request = ctx.getRequest<{
      url: string
      method: string
      headers: Record<string, string>
    }>()
    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR
    const message = exception instanceof Error ? exception.message : "Unexpected error"

    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url} failed`,
        exception instanceof Error ? exception.stack : undefined,
      )
    }

    response.status(status).send({
      statusCode: status,
      message,
      path: request.url,
      requestId: request.headers["x-request-id"] ?? null,
      timestamp: new Date().toISOString(),
    })
  }
}
