import { Booking } from "../booking/Booking";
import { Employee } from "../employee/Employee";
import { User } from "../user/User";

export type Service = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  durationInMinutes: number | null;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
