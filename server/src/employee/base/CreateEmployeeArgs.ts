import { ArgsType, Field } from "@nestjs/graphql";
import { EmployeeCreateInput } from "./EmployeeCreateInput";

@ArgsType()
class CreateEmployeeArgs {
  @Field(() => EmployeeCreateInput, { nullable: false })
  data!: EmployeeCreateInput;
}

export { CreateEmployeeArgs };
