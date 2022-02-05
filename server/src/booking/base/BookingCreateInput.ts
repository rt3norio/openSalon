import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  bookingTime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceWhereUniqueInput, {
    nullable: true,
  })
  service?: ServiceWhereUniqueInput | null;
}
export { BookingCreateInput };
