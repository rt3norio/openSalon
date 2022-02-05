import { ArgsType, Field } from "@nestjs/graphql";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";

@ArgsType()
class DeleteServiceArgs {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  where!: ServiceWhereUniqueInput;
}

export { DeleteServiceArgs };
