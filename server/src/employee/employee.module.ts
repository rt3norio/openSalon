import { Module } from "@nestjs/common";
import { EmployeeModuleBase } from "./base/employee.module.base";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";
import { EmployeeResolver } from "./employee.resolver";

@Module({
  imports: [EmployeeModuleBase],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeResolver],
  exports: [EmployeeService],
})
export class EmployeeModule {}
