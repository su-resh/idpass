import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomersService } from "./customers.service";
import { CustomersControllerBase } from "./base/customers.controller.base";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomersController extends CustomersControllerBase {
  constructor(protected readonly service: CustomersService) {
    super(service);
  }
}
