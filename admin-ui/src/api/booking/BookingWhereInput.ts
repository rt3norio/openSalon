import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type BookingWhereInput = {
  bookingTime?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
};
