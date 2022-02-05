import { ArgsType, Field } from "@nestjs/graphql";
import { BookingCreateInput } from "./BookingCreateInput";

@ArgsType()
class CreateBookingArgs {
  @Field(() => BookingCreateInput, { nullable: false })
  data!: BookingCreateInput;
}

export { CreateBookingArgs };
