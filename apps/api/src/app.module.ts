import { Module } from "@nestjs/common"
import { AuthModule } from "./auth/auth.module"
import { AppConfigModule } from "./config/config.module"
import { ConnectorsModule } from "./connectors/connectors.module"
import { DashboardModule } from "./dashboard/dashboard.module"
import { IntegrationsModule } from "./integrations/integrations.module"
import { OrganizationsModule } from "./organizations/organizations.module"
import { PrismaModule } from "./prisma/prisma.module"
import { UsersModule } from "./users/users.module"

@Module({
  imports: [
    AppConfigModule,
    PrismaModule,
    AuthModule,
    ConnectorsModule,
    DashboardModule,
    OrganizationsModule,
    UsersModule,
    IntegrationsModule,
  ],
})
export class AppModule {}
