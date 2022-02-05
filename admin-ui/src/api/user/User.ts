import { Service } from "../service/Service";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  services?: Array<Service>;
  updatedAt: Date;
  username: string;
};
