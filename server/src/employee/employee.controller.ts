import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EmployeeService } from "./employee.service";
import { EmployeeControllerBase } from "./base/employee.controller.base";

@swagger.ApiTags("employees")
@common.Controller("employees")
export class EmployeeController extends EmployeeControllerBase {
  constructor(
    protected readonly service: EmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
