import { Module } from "@nestjs/common";
import { CustomersModuleBase } from "./base/customers.module.base";
import { CustomersService } from "./customers.service";
import { CustomersController } from "./customers.controller";
import { CustomersResolver } from "./customers.resolver";

@Module({
  imports: [CustomersModuleBase],
  controllers: [CustomersController],
  providers: [CustomersService, CustomersResolver],
  exports: [CustomersService],
})
export class CustomersModule {}
