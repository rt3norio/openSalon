import { Booking } from "../booking/Booking";
import { Employee } from "../employee/Employee";

export type Service = {
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  durationInMinutes: number | null;
  employees?: Array<Employee>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
