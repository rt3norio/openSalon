import { Service } from "../service/Service";

export type Employee = {
  admin: boolean;
  createdAt: Date;
  id: string;
  name: string | null;
  services?: Array<Service>;
  updatedAt: Date;
};
