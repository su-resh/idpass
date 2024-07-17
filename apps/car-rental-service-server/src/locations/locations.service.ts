import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LocationsServiceBase } from "./base/locations.service.base";

@Injectable()
export class LocationsService extends LocationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
