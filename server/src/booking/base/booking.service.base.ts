import { PrismaService } from "nestjs-prisma";
import { Prisma, Booking, Customer, Service } from "@prisma/client";

export class BookingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BookingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>
  ): Promise<number> {
    return this.prisma.booking.count(args);
  }

  async findMany<T extends Prisma.BookingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindManyArgs>
  ): Promise<Booking[]> {
    return this.prisma.booking.findMany(args);
  }
  async findOne<T extends Prisma.BookingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingFindUniqueArgs>
  ): Promise<Booking | null> {
    return this.prisma.booking.findUnique(args);
  }
  async create<T extends Prisma.BookingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingCreateArgs>
  ): Promise<Booking> {
    return this.prisma.booking.create<T>(args);
  }
  async update<T extends Prisma.BookingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingUpdateArgs>
  ): Promise<Booking> {
    return this.prisma.booking.update<T>(args);
  }
  async delete<T extends Prisma.BookingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BookingDeleteArgs>
  ): Promise<Booking> {
    return this.prisma.booking.delete(args);
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getService(parentId: string): Promise<Service | null> {
    return this.prisma.booking
      .findUnique({
        where: { id: parentId },
      })
      .service();
  }
}
