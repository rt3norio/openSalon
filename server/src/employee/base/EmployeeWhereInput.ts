import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BooleanFilter } from "../../util/BooleanFilter";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
@InputType()
class EmployeeWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanFilter,
  })
  @Type(() => BooleanFilter)
  @IsOptional()
  @Field(() => BooleanFilter, {
    nullable: true,
  })
  admin?: BooleanFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;
}
export { EmployeeWhereInput };
