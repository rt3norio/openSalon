import { ArgsType, Field } from "@nestjs/graphql";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";
import { BookingUpdateInput } from "./BookingUpdateInput";

@ArgsType()
class UpdateBookingArgs {
  @Field(() => BookingWhereUniqueInput, { nullable: false })
  where!: BookingWhereUniqueInput;
  @Field(() => BookingUpdateInput, { nullable: false })
  data!: BookingUpdateInput;
}

export { UpdateBookingArgs };
