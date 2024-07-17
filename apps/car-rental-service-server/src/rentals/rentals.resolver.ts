import * as graphql from "@nestjs/graphql";
import { RentalsResolverBase } from "./base/rentals.resolver.base";
import { Rentals } from "./base/Rentals";
import { RentalsService } from "./rentals.service";

@graphql.Resolver(() => Rentals)
export class RentalsResolver extends RentalsResolverBase {
  constructor(protected readonly service: RentalsService) {
    super(service);
  }
}
