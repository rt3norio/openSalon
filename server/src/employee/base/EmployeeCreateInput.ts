import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean } from "class-validator";
@InputType()
class EmployeeCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  admin!: boolean;
}
export { EmployeeCreateInput };
