import { Module } from "@nestjs/common";
import { RentalsModuleBase } from "./base/rentals.module.base";
import { RentalsService } from "./rentals.service";
import { RentalsController } from "./rentals.controller";
import { RentalsResolver } from "./rentals.resolver";

@Module({
  imports: [RentalsModuleBase],
  controllers: [RentalsController],
  providers: [RentalsService, RentalsResolver],
  exports: [RentalsService],
})
export class RentalsModule {}
