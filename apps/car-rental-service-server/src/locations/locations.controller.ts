import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationsService } from "./locations.service";
import { LocationsControllerBase } from "./base/locations.controller.base";

@swagger.ApiTags("locations")
@common.Controller("locations")
export class LocationsController extends LocationsControllerBase {
  constructor(protected readonly service: LocationsService) {
    super(service);
  }
}
