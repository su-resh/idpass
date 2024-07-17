import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RentalsServiceBase } from "./base/rentals.service.base";

@Injectable()
export class RentalsService extends RentalsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
