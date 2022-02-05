import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";

@ArgsType()
class UpdateEmployeeArgs {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;
  @Field(() => EmployeeUpdateInput, { nullable: false })
  data!: EmployeeUpdateInput;
}

export { UpdateEmployeeArgs };
