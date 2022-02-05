import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingWhereInput } from "./BookingWhereInput";
import { Type } from "class-transformer";
import { BookingOrderByInput } from "./BookingOrderByInput";

@ArgsType()
class BookingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookingWhereInput,
  })
  @Field(() => BookingWhereInput, { nullable: true })
  @Type(() => BookingWhereInput)
  where?: BookingWhereInput;

  @ApiProperty({
    required: false,
    type: BookingOrderByInput,
  })
  @Field(() => BookingOrderByInput, { nullable: true })
  @Type(() => BookingOrderByInput)
  orderBy?: BookingOrderByInput;

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

export { BookingFindManyArgs };
