import { ArgsType, Field } from "@nestjs/graphql";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";

@ArgsType()
class BookingFindUniqueArgs {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;
}

export { BookingFindUniqueArgs };
