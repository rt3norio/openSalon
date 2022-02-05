import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmployeeServiceBase } from "./base/employee.service.base";

@Injectable()
export class EmployeeService extends EmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
