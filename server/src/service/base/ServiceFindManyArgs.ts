import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceWhereInput } from "./ServiceWhereInput";
import { Type } from "class-transformer";
import { ServiceOrderByInput } from "./ServiceOrderByInput";

@ArgsType()
class ServiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServiceWhereInput,
  })
  @Field(() => ServiceWhereInput, { nullable: true })
  @Type(() => ServiceWhereInput)
  where?: ServiceWhereInput;

  @ApiProperty({
    required: false,
    type: ServiceOrderByInput,
  })
  @Field(() => ServiceOrderByInput, { nullable: true })
  @Type(() => ServiceOrderByInput)
  orderBy?: ServiceOrderByInput;

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

export { ServiceFindManyArgs };
