import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

@ArgsType()
class DeleteEmployeeArgs {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;
}

export { DeleteEmployeeArgs };
