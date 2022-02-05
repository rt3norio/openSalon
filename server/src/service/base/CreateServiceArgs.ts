import { ArgsType, Field } from "@nestjs/graphql";
import { ServiceCreateInput } from "./ServiceCreateInput";

@ArgsType()
class CreateServiceArgs {
  @Field(() => ServiceCreateInput, { nullable: false })
  data!: ServiceCreateInput;
}

export { CreateServiceArgs };
