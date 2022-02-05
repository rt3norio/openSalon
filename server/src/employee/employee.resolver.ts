import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmployeeResolverBase } from "./base/employee.resolver.base";
import { Employee } from "./base/Employee";
import { EmployeeService } from "./employee.service";

@graphql.Resolver(() => Employee)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeResolver extends EmployeeResolverBase {
  constructor(
    protected readonly service: EmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
