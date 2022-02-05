import { PrismaService } from "nestjs-prisma";
import { Prisma, Employee, Service } from "@prisma/client";

export class EmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindManyArgs>
  ): Promise<number> {
    return this.prisma.employee.count(args);
  }

  async findMany<T extends Prisma.EmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindManyArgs>
  ): Promise<Employee[]> {
    return this.prisma.employee.findMany(args);
  }
  async findOne<T extends Prisma.EmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeFindUniqueArgs>
  ): Promise<Employee | null> {
    return this.prisma.employee.findUnique(args);
  }
  async create<T extends Prisma.EmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeCreateArgs>
  ): Promise<Employee> {
    return this.prisma.employee.create<T>(args);
  }
  async update<T extends Prisma.EmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeUpdateArgs>
  ): Promise<Employee> {
    return this.prisma.employee.update<T>(args);
  }
  async delete<T extends Prisma.EmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmployeeDeleteArgs>
  ): Promise<Employee> {
    return this.prisma.employee.delete(args);
  }

  async findServices(
    parentId: string,
    args: Prisma.ServiceFindManyArgs
  ): Promise<Service[]> {
    return this.prisma.employee
      .findUnique({
        where: { id: parentId },
      })
      .services(args);
  }
}
