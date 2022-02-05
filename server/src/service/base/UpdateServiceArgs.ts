import { ArgsType, Field } from "@nestjs/graphql";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";
import { ServiceUpdateInput } from "./ServiceUpdateInput";

@ArgsType()
class UpdateServiceArgs {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  where!: ServiceWhereUniqueInput;
  @Field(() => ServiceUpdateInput, { nullable: false })
  data!: ServiceUpdateInput;
}

export { UpdateServiceArgs };
