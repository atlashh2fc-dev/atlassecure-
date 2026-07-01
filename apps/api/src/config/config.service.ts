import { Injectable } from "@nestjs/common"

@Injectable()
export class AppConfigService {
  get nodeEnv(): string {
    return process.env.NODE_ENV ?? "development"
  }

  get port(): number {
    return Number(process.env.API_PORT ?? 4000)
  }

  get corsOrigin(): string {
    return process.env.CORS_ORIGIN ?? "http://localhost:3000"
  }

  get databaseUrl(): string | undefined {
    return process.env.DATABASE_URL
  }

  get logLevel(): string {
    return process.env.LOG_LEVEL ?? "info"
  }
}
