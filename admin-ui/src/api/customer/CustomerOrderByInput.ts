import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  cpf?: SortOrder;
  createdAt?: SortOrder;
  extraInformation?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
