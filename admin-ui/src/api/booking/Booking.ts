import { Customer } from "../customer/Customer";
import { Service } from "../service/Service";

export type Booking = {
  bookingTime: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  service?: Service | null;
  updatedAt: Date;
};
