import { Service } from "../service/Service";

export type Employee = {
  admin: boolean;
  createdAt: Date;
  id: string;
  services?: Array<Service>;
  updatedAt: Date;
};
