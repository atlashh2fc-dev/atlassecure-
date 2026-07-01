import { Module } from "@nestjs/common"
import { ConnectorsModule } from "../connectors/connectors.module"
import { IntegrationsController } from "./integrations.controller"
import { IntegrationsService } from "./integrations.service"

@Module({
  imports: [ConnectorsModule],
  controllers: [IntegrationsController],
  providers: [IntegrationsService],
})
export class IntegrationsModule {}
