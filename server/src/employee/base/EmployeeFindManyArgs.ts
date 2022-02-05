import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmployeeWhereInput } from "./EmployeeWhereInput";
import { Type } from "class-transformer";
import { EmployeeOrderByInput } from "./EmployeeOrderByInput";

@ArgsType()
class EmployeeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmployeeWhereInput,
  })
  @Field(() => EmployeeWhereInput, { nullable: true })
  @Type(() => EmployeeWhereInput)
  where?: EmployeeWhereInput;

  @ApiProperty({
    required: false,
    type: EmployeeOrderByInput,
  })
  @Field(() => EmployeeOrderByInput, { nullable: true })
  @Type(() => EmployeeOrderByInput)
  orderBy?: EmployeeOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EmployeeFindManyArgs };
