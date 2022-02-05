import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateEmployeeArgs } from "./CreateEmployeeArgs";
import { UpdateEmployeeArgs } from "./UpdateEmployeeArgs";
import { DeleteEmployeeArgs } from "./DeleteEmployeeArgs";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeFindUniqueArgs } from "./EmployeeFindUniqueArgs";
import { Employee } from "./Employee";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { EmployeeService } from "../employee.service";

@graphql.Resolver(() => Employee)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmployeeResolverBase {
  constructor(
    protected readonly service: EmployeeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async _employeesMeta(
    @graphql.Args() args: EmployeeFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Employee])
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async employees(
    @graphql.Args() args: EmployeeFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Employee",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Employee, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "own",
  })
  async employee(
    @graphql.Args() args: EmployeeFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Employee",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "create",
    possession: "any",
  })
  async createEmployee(
    @graphql.Args() args: CreateEmployeeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Employee"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "update",
    possession: "any",
  })
  async updateEmployee(
    @graphql.Args() args: UpdateEmployeeArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Employee | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Employee",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Employee"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Employee)
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "delete",
    possession: "any",
  })
  async deleteEmployee(
    @graphql.Args() args: DeleteEmployeeArgs
  ): Promise<Employee | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Service])
  @nestAccessControl.UseRoles({
    resource: "Employee",
    action: "read",
    possession: "any",
  })
  async services(
    @graphql.Parent() parent: Employee,
    @graphql.Args() args: ServiceFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Service[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Service",
    });
    const results = await this.service.findServices(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
