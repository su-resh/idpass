import { Module } from "@nestjs/common";
import { CarsModuleBase } from "./base/cars.module.base";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { CarsResolver } from "./cars.resolver";

@Module({
  imports: [CarsModuleBase],
  controllers: [CarsController],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
