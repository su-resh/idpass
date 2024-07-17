import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CarsService } from "./cars.service";
import { CarsControllerBase } from "./base/cars.controller.base";

@swagger.ApiTags("cars")
@common.Controller("cars")
export class CarsController extends CarsControllerBase {
  constructor(protected readonly service: CarsService) {
    super(service);
  }
}
