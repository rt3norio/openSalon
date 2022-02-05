import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { BookingService } from "../booking.service";
import { BookingCreateInput } from "./BookingCreateInput";
import { BookingWhereInput } from "./BookingWhereInput";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingUpdateInput } from "./BookingUpdateInput";
import { Booking } from "./Booking";
@swagger.ApiBearerAuth()
export class BookingControllerBase {
  constructor(
    protected readonly service: BookingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Booking })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: BookingCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Booking> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Booking",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Booking"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        service: data.service
          ? {
              connect: data.service,
            }
          : undefined,
      },
      select: {
        bookingTime: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Booking] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => BookingFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Booking[]> {
    const args = plainToClass(BookingFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Booking",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        bookingTime: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: BookingWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Booking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Booking",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        bookingTime: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        service: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body()
    data: BookingUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Booking | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Booking",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Booking"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          service: data.service
            ? {
                connect: data.service,
              }
            : undefined,
        },
        select: {
          bookingTime: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Booking",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          bookingTime: true,
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          service: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
