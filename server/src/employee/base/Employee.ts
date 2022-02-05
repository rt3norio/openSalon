import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { Service } from "../../service/base/Service";
@ObjectType()
class Employee {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  admin!: boolean;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Service],
  })
  @ValidateNested()
  @Type(() => Service)
  @IsOptional()
  services?: Array<Service>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Employee };
