import { Module } from "@nestjs/common";
import { LocationsModuleBase } from "./base/locations.module.base";
import { LocationsService } from "./locations.service";
import { LocationsController } from "./locations.controller";
import { LocationsResolver } from "./locations.resolver";

@Module({
  imports: [LocationsModuleBase],
  controllers: [LocationsController],
  providers: [LocationsService, LocationsResolver],
  exports: [LocationsService],
})
export class LocationsModule {}
