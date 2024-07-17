import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RentalsService } from "./rentals.service";
import { RentalsControllerBase } from "./base/rentals.controller.base";

@swagger.ApiTags("rentals")
@common.Controller("rentals")
export class RentalsController extends RentalsControllerBase {
  constructor(protected readonly service: RentalsService) {
    super(service);
  }
}
