import { Booking } from "../booking/Booking";

export type Customer = {
  bookings?: Array<Booking>;
  cpf: string | null;
  createdAt: Date;
  extraInformation: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
