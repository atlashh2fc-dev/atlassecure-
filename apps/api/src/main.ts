import { ValidationPipe, VersioningType } from "@nestjs/common"
import helmet from "@fastify/helmet"
import { NestFactory } from "@nestjs/core"
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { AllExceptionsFilter } from "./common/filters/all-exceptions.filter"
import { LoggingInterceptor } from "./common/interceptors/logging.interceptor"
import { AppConfigService } from "./config/config.service"

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    bufferLogs: true,
  })
  const config = app.get(AppConfigService)

  await app.register(helmet)
  app.enableCors({
    origin: config.corsOrigin,
    credentials: true,
  })
  app.setGlobalPrefix("api")
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: "1" })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  )
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new LoggingInterceptor())

  const documentConfig = new DocumentBuilder()
    .setTitle("Atlas360 Secure API")
    .setDescription("Managed cybersecurity SaaS API")
    .setVersion("0.1.0")
    .addBearerAuth()
    .build()
  SwaggerModule.setup("docs", app, SwaggerModule.createDocument(app, documentConfig))

  await app.listen(config.port)
}

void bootstrap()
