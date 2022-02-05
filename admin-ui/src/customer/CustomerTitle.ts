import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "name";

export const CustomerTitle = (record: TCustomer): string => {
  return record.name || record.id;
};
