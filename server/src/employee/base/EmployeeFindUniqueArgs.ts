import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";

@ArgsType()
class EmployeeFindUniqueArgs {
  @Field(() => EmployeeWhereUniqueInput, { nullable: false })
  where!: EmployeeWhereUniqueInput;
}

export { EmployeeFindUniqueArgs };
