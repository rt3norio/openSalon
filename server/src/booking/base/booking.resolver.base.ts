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
import { CreateBookingArgs } from "./CreateBookingArgs";
import { UpdateBookingArgs } from "./UpdateBookingArgs";
import { DeleteBookingArgs } from "./DeleteBookingArgs";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingFindUniqueArgs } from "./BookingFindUniqueArgs";
import { Booking } from "./Booking";
import { Customer } from "../../customer/base/Customer";
import { Service } from "../../service/base/Service";
import { BookingService } from "../booking.service";

@graphql.Resolver(() => Booking)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BookingResolverBase {
  constructor(
    protected readonly service: BookingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async _bookingsMeta(
    @graphql.Args() args: BookingFindManyArgs
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

  @graphql.Query(() => [Booking])
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async bookings(
    @graphql.Args() args: BookingFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Booking[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Booking",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Booking, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "own",
  })
  async booking(
    @graphql.Args() args: BookingFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Booking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Booking",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "create",
    possession: "any",
  })
  async createBooking(
    @graphql.Args() args: CreateBookingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Booking> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Booking",
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
        `providing the properties: ${properties} on ${"Booking"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        service: args.data.service
          ? {
              connect: args.data.service,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "update",
    possession: "any",
  })
  async updateBooking(
    @graphql.Args() args: UpdateBookingArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Booking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Booking",
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
        `providing the properties: ${properties} on ${"Booking"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          service: args.data.service
            ? {
                connect: args.data.service,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Booking)
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "delete",
    possession: "any",
  })
  async deleteBooking(
    @graphql.Args() args: DeleteBookingArgs
  ): Promise<Booking | null> {
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

  @graphql.ResolveField(() => Customer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async customer(
    @graphql.Parent() parent: Booking,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Customer | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Customer",
    });
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Service, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  async service(
    @graphql.Parent() parent: Booking,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Service | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Service",
    });
    const result = await this.service.getService(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
