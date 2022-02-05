import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type BookingUpdateInput = {
  bookingTime?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
};
