import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  admin?: BooleanFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
