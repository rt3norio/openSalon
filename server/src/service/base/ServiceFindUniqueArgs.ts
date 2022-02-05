import { ArgsType, Field } from "@nestjs/graphql";
import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";

@ArgsType()
class ServiceFindUniqueArgs {
  @Field(() => ServiceWhereUniqueInput, { nullable: false })
  where!: ServiceWhereUniqueInput;
}

export { ServiceFindUniqueArgs };
