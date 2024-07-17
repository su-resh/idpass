import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomersServiceBase } from "./base/customers.service.base";

@Injectable()
export class CustomersService extends CustomersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
