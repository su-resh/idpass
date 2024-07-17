import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarsServiceBase } from "./base/cars.service.base";

@Injectable()
export class CarsService extends CarsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
