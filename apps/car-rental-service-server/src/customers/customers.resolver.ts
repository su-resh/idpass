import * as graphql from "@nestjs/graphql";
import { CustomersResolverBase } from "./base/customers.resolver.base";
import { Customers } from "./base/Customers";
import { CustomersService } from "./customers.service";

@graphql.Resolver(() => Customers)
export class CustomersResolver extends CustomersResolverBase {
  constructor(protected readonly service: CustomersService) {
    super(service);
  }
}
