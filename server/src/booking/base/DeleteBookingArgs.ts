import { ArgsType, Field } from "@nestjs/graphql";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";

@ArgsType()
class DeleteBookingArgs {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;
}

export { DeleteBookingArgs };
