import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";

export type EmployeeWhereInput = {
  admin?: BooleanFilter;
  id?: StringFilter;
};
