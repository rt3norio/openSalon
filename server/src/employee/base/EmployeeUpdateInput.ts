import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";
@InputType()
class EmployeeUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  admin?: boolean;
}
export { EmployeeUpdateInput };
