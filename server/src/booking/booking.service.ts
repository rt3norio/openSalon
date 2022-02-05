import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { BookingServiceBase } from "./base/booking.service.base";

@Injectable()
export class BookingService extends BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
