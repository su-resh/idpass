import * as graphql from "@nestjs/graphql";
import { CarsResolverBase } from "./base/cars.resolver.base";
import { Cars } from "./base/Cars";
import { CarsService } from "./cars.service";

@graphql.Resolver(() => Cars)
export class CarsResolver extends CarsResolverBase {
  constructor(protected readonly service: CarsService) {
    super(service);
  }
}
