import * as graphql from "@nestjs/graphql";
import { LocationsResolverBase } from "./base/locations.resolver.base";
import { Locations } from "./base/Locations";
import { LocationsService } from "./locations.service";

@graphql.Resolver(() => Locations)
export class LocationsResolver extends LocationsResolverBase {
  constructor(protected readonly service: LocationsService) {
    super(service);
  }
}
